import { API_CONFIG } from 'api/index';
import { PathAPI } from 'enums';
import { MessageSendType, MessageType, ReadMessageType, UserResponseType } from 'types';

export const API = {
  checkMessage: async (name: string) => {
    const res = await API_CONFIG.post<UserResponseType>(`${PathAPI.Check}`, { name });
    return res.data;
  },

  login: async (name: string) => {
    const res = await API_CONFIG.post<UserResponseType>(`${PathAPI.Login}`, { name });
    return res.data;
  },

  sendMessage: async (payload: MessageSendType) => {
    const res = await API_CONFIG.post<any>(`${PathAPI.GetMessage}`, {
      ...payload,
    });
    return res.data;
  },

  readMessage: async (payload: ReadMessageType) => {
    const res = await API_CONFIG.post<MessageType>(`${PathAPI.ReadMessage}`, {
      ...payload,
    });
    return res.data;
  },
};
