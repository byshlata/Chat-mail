import React, { ReactElement } from 'react';

import { Avatar, Badge, Button, Typography } from 'antd';

import style from './AvatarUser.module.sass';

import { useAppDispatch } from 'hooks';
import { clear, logout } from 'store';

const { Title } = Typography;

type AvatarType = {
  icon: string;
  unreadMessages: number;
  name: string;
};

export const AvatarUser = ({ unreadMessages, icon, name }: AvatarType): ReactElement => {
  const dispatch = useAppDispatch();

  const onLogOut = (): void => {
    dispatch(logout());
    dispatch(clear());
  };

  return (
    <div className={style.wrapper}>
      <Title style={{ margin: 0 }} level={5}>
        {name}
      </Title>
      <Badge count={unreadMessages}>
        <Avatar size="small" src={`data:image/jpeg;base64,${icon}`} shape="square" />
      </Badge>
      <Button type="primary" onClick={onLogOut}>
        logout
      </Button>
    </div>
  );
};
