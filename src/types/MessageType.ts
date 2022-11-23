import { MessageSendType, StatusMessageType } from 'types';

export type MessageType = MessageSendType & {
  _id: string;
  createdAt: string;
  updatedAt: string;
  status: StatusMessageType;
  avatar: string;
  isNew: boolean;
  _v?: number;
};
