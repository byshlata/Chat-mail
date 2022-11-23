import React, { ReactElement, useEffect, useState } from 'react';

import { Button, Collapse, Empty, message, Modal, Spin } from 'antd';
import { useSelector } from 'react-redux';

import { MessageInformation, SendMessage } from 'components';
import { useAppDispatch, useRequest } from 'hooks';
import {
  checkMessage,
  readMessage,
  selectorErrorMessage,
  selectorIsAppStart,
  selectorMessages,
  selectorUserName,
  selectorUsers,
  sendMessage,
  setMessage,
} from 'store';
import { FormValueType } from 'types';
import { isUnreadMessage } from 'utils';

const { Panel } = Collapse;

type keysType = string | string[];

export const Mail = (): ReactElement => {
  const dispatch = useAppDispatch();
  const messages = useSelector(selectorMessages);
  const userName = useSelector(selectorUserName);
  const isAppStart = useSelector(selectorIsAppStart);
  const users = useSelector(selectorUsers);
  const messageBase = useSelector(selectorErrorMessage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (messageBase.textMessage) {
      messageApi.open({
        type: messageBase.typeMessage,
        content: messageBase.textMessage,
      });
    }
  }, [messageBase]);

  const onRequest = (): void => {
    if (userName) {
      dispatch(checkMessage(userName || ''));
    }
  };

  useRequest(onRequest);

  const onChange = (key: keysType): void => {
    const idMessage = key[key.length - 1];
    if (isUnreadMessage(messages, idMessage)) {
      dispatch(readMessage({ id: idMessage, name: userName || '' }));
    }
  };

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  const onSendMessage = (payload: FormValueType): void => {
    dispatch(
      sendMessage({
        to: payload.nameUser,
        text: payload.message,
        subject: payload.subject,
        from: userName || '',
      }),
    );
    dispatch(setMessage());
    setIsModalOpen(false);
  };

  const mail = (
    <Collapse onChange={onChange}>
      {messages.map(({ _id, createdAt, status, subject, text, from, avatar }) => {
        const user = (
          <MessageInformation
            avatar={avatar}
            name={from}
            data={createdAt}
            subject={subject}
            status={status}
          />
        );
        return (
          <Panel header={user} key={_id}>
            <p>{text}</p>
          </Panel>
        );
      })}
    </Collapse>
  );

  return (
    <>
      {contextHolder}
      <div style={{ margin: '1.5rem 0' }}>
        <Button onClick={showModal}>Send message </Button>
      </div>

      {isAppStart ? (
        <div style={{ width: '100%', margin: '0 auto' }}>
          {messages.length ? mail : <Empty />}
        </div>
      ) : (
        <Spin />
      )}

      <Modal onCancel={handleCancel} open={isModalOpen} footer={[]}>
        <SendMessage users={users} sendDataForm={onSendMessage} onCancel={handleCancel} />
      </Modal>
    </>
  );
};
