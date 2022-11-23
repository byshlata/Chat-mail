import React, { ReactElement } from 'react';

import { Avatar, Typography, Image } from 'antd';

import style from 'components/messageInformation/MessageInformation.module.sass';
import { StatusMessage } from 'enums';
import { StatusMessageType } from 'types';
import { formattedDate } from 'utils';

const { Title, Text } = Typography;

type UserInformationType = {
  avatar: string;
  data: string;
  name: string;
  subject: string;
  status: StatusMessageType;
};

export const MessageInformation = ({
  avatar,
  data,
  name,
  subject,
  status,
}: UserInformationType): ReactElement => {
  const title =
    status === StatusMessage.Read ? (
      <Text>Subject: {subject}</Text>
    ) : (
      <Title style={{ margin: 0 }} level={5}>
        <b>Subject: {subject}</b>
      </Title>
    );

  const dataFormat = formattedDate(data);

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.avatarWrapper}>
          <Avatar
            size="small"
            shape="square"
            src={<Image src={`data:image/jpeg;base64,${avatar}`} style={{ width: 20 }} />}
          />
          <Text style={{ marginLeft: '5px' }}>
            <b>From:</b> {name}
          </Text>
        </div>
        {title}
        <div style={{ marginLeft: 'auto' }}>
          <Text>{dataFormat}</Text>
        </div>
      </div>
    </div>
  );
};
