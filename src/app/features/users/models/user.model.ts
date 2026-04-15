export interface UserModel {
  id: number;
  name: string;
  email: string;
}

export interface AddUserDto {
  name: string;
  email: string;
}