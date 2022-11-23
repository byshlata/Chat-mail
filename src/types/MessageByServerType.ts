import { MessageServer } from 'enums';

export type MessageByServerType = {
  typeMessage: MessageServer.Success | MessageServer.Error | undefined;
  textMessage: string;
};
