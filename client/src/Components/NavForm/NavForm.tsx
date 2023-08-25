import React from 'react';
import { Button, Form } from 'antd';
import Item from './Item';

interface NavFormProps {
  nav: string[];
}

const NavForm: React.FC<NavFormProps> = ({ nav }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <Form form={form} name="horizontal_login" onFinish={onFinish}>
      <Item elems={nav} />

      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={!form.isFieldsTouched(true) || !!form.getFieldsError().filter(({ errors }) => errors.length).length}
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default NavForm;
