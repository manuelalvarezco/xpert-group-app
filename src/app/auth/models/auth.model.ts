export type IUser = {
  _id: string,
  name: string,
  email: string,
  status: boolean,
  __v: number
}

export interface Auth {
  ok?: boolean;
  user: IUser,
  token: string
}
