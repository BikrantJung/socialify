import { IUserProfile } from "../auth/profile.types";

export interface IPost {
  id: string;
  created_at: string;
  post_title: string;
  post_images: string[] | [];
  user_id: string;
  profiles: IUserProfile;
}
