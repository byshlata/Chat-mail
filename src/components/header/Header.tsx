import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import mainStyle from '../../styles/container.module.sass';

import style from './Header.module.sass';

import { AvatarUser, Logo } from 'components';
import { selectorAvtar, selectorCountUnreadMessage, selectorUserName } from 'store';

export const Header = (): ReactElement => {
  const unreadMessage = useSelector(selectorCountUnreadMessage);
  const userName = useSelector(selectorUserName);
  const avatar = useSelector(selectorAvtar);

  return (
    <div className={style.header}>
      <div className={mainStyle.container}>
        <div className={style.container}>
          <Logo width={50} />
          {userName ? (
            <AvatarUser
              icon={avatar}
              unreadMessages={unreadMessage}
              name={userName || ''}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};
