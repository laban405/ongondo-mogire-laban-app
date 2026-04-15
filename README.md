# Ongondo Mogire Laban

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## How to run app

### Please not that you should have latesd angular cli installed on your machine

Install packages first by: 

```bash
npm i
```

To start a local development server, run:

```bash
ng serve or npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. 



## Building

To build the project run:

```bash
ng build or npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.


### Secure storage of access token cannot be achieved on frontend, for demonstration purposes I stored it in localStorage. The recommended way to store access token is by use of Backend for frontend to authorize backend services then return session id to frontend as a http only cookie

