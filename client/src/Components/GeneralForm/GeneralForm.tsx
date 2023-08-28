import React from 'react';
import { Button, Form } from 'antd';
import Item from './Item';
import style from './style.module.css';

interface GeneralFormProps {
  nav: string[];
}

const GeneralForm: React.FC<GeneralFormProps> = ({ nav }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <Form form={form} name="horizontal_login" onFinish={onFinish} className={style.wrapper}>
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

export default GeneralForm;
