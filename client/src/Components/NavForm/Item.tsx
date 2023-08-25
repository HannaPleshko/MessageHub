import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';

interface ItemProps {
  elems: string[];
}

const Item: React.FC<ItemProps> = ({ elems }) => {
  return elems.map((el, index) => (
    <Form.Item
      key={index}
      name={el}
      rules={[
        {
          required: true,
          message: `Please input your ${el}!`,
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={el} />
    </Form.Item>
  ));
};

export default Item;
