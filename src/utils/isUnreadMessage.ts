import { StatusMessage } from 'enums';
import { MessageType } from 'types';

export const isUnreadMessage = (messages: MessageType[], id: string): boolean =>
  messages.find(message => message._id === id)?.status === StatusMessage.Unread;
