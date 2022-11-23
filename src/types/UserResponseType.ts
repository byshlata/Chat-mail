import { MessageType } from 'types';

export type UserResponseType = {
  users: string[];
  avatar: string;
  messages: MessageType[];
  counterNewMessage: number;
};
