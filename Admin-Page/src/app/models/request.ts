import {User} from './user';

export class Request {
  id: number;
  user: User;
  requestHeader: string;
  requestBody: string;
}
