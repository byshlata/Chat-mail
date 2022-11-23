import React, { ReactElement, useEffect, useState } from 'react';

import { AutoComplete, Button, Form, Input } from 'antd';

import { FormValueType, UserInBaseType } from 'types';

const { TextArea } = Input;

type SendMessageFormType = {
  users: UserInBaseType[];
  sendDataForm: (payload: FormValueType) => void;
  onCancel: () => void;
};

export const SendMessage = ({
  users,
  sendDataForm,
  onCancel,
}: SendMessageFormType): ReactElement => {
  const [nameUser, setNameUser] = useState('');
  const [disable, setDisable] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    if (users.filter(({ value }) => value === nameUser).length) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [nameUser]);

  const onFinish = (values: FormValueType): void => {
    sendDataForm(values);
    form.resetFields();
  };

  const onChangeName = (value: any): void => {
    setNameUser(value);
  };

  const onCancelSendForm = (): void => {
    onCancel();
  };

  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        name="nameUser"
        label="To"
        style={{ resize: 'none', fontWeight: 'bold', width: '100%' }}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <AutoComplete
          style={{ width: 200 }}
          options={users}
          placeholder="Choose user"
          onChange={onChangeName}
          filterOption={(inputValue, option) =>
            option!.value.indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </Form.Item>
      <Form.Item name="subject" label="Subject" style={{ fontWeight: 'bold' }}>
        <Input placeholder="input subject message" />
      </Form.Item>
      <Form.Item name="message" label="Text message" style={{ fontWeight: 'bold' }}>
        <TextArea
          style={{ height: 120, resize: 'none', width: '100%' }}
          placeholder="disable resize"
        />
      </Form.Item>
      <Form.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button onClick={onCancelSendForm}>Cansel</Button>
          <Button type="primary" htmlType="submit" disabled={disable}>
            Send
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
