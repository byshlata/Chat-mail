import React, { ReactElement } from 'react';

import { Button, Form, Input } from 'antd';
import { useSelector } from 'react-redux';

import style from './Login.module.sass';

import { useAppDispatch } from 'hooks';
import { loginUser, selectorIsProgress } from 'store';

export const Login = (): ReactElement => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectorIsProgress);

  const onFinish = (values: any): void => {
    dispatch(loginUser(values.userName));
  };

  return (
    <div className={style.container}>
      <Form
        layout="inline"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Login in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
