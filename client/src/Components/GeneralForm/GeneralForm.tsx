import React from 'react';
import { Button, Form } from 'antd';
import Item from './Item';
import { useCreateUserMutation, useAuthenticateMutation } from '../../services';
import { formTypes } from '../../utils/constants';
import style from './style.module.scss';

interface GeneralFormProps {
  nav: string[];
  type: string;
}

const GeneralForm: React.FC<GeneralFormProps> = ({ nav, type }) => {
  const [createUser] = useCreateUserMutation();
  const [getUser] = useAuthenticateMutation();

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      const data = type === formTypes.registration.type ? await createUser(values) : await getUser(values);
      console.info(data);
    } catch (error) {
      console.error(error);
    }
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
