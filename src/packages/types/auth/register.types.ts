export interface IUserRegister {
  email: string;
  password: string;
  username: string;

  profile_picture?: File | null | undefined;
}
