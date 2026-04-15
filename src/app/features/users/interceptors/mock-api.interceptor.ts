import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { delay, of, throwError } from 'rxjs';

interface LoginRequest {
  email?: string;
  password?: string;
}

export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {
  const { url, method, body, params, headers } = req;


  const jsonResponse = (data: any, status = 200) => 
    of(new HttpResponse({ status, body: data })).pipe(delay(300));

  const errorResponse = (message: string, status = 401) => 
    throwError(() => ({ status, error: { message } }));


  const getUsers = () => JSON.parse(localStorage.getItem('users') || '[]');
  const saveUsers = (users: any[]) => localStorage.setItem('users', JSON.stringify(users));


  if (!localStorage.getItem('users')) {
    saveUsers([
      { id: 1, name: 'John Doe', email: 'john@test.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@test.com' }
    ]);
  }


  if (url.endsWith('/api/auth/login') && method === 'POST') {
    const loginBody = body as LoginRequest;
    if (loginBody.email === 'admin@test.com' && loginBody.password === '1234') {
      return jsonResponse({ access_token: 'mock-token' });
    }
    return errorResponse('Invalid credentials');
  }


  if (!url.includes('/api/auth')) {
    const authHeader = headers.get('Authorization');
    if (authHeader !== 'Bearer mock-token') {
      return errorResponse('Unauthorized');
    }
  }


  if (url.includes('/api/users') && method === 'GET') {
    const q = params.get('q')?.toLowerCase();
    const users = getUsers();
    const filtered = q 
      ? users.filter((u: any) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
      : users;
    return jsonResponse(filtered);
  }


  if (url.endsWith('/api/users') && method === 'POST') {
    const users = getUsers();
    const newUser = { id: Date.now(), ...body as any };
    saveUsers([...users, newUser]);
    return jsonResponse(newUser, 201);
  }


  if (url.match(/\/api\/users\/\d+$/)) {
    const id = Number(url.split('/').pop());
    let users = getUsers();

    if (method === 'PUT') {
      users = users.map((u: any) => u.id === id ? { ...u, ...body as any} : u);
      saveUsers(users);
      return jsonResponse({ success: true });
    }

    if (method === 'DELETE') {
      users = users.filter((u: any) => u.id !== id);
      saveUsers(users);
      return jsonResponse(null, 200);
    }
  }


  return next(req);
};