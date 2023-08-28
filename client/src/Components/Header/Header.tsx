import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { Button } from 'antd';

const Header: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Link to="/">
          <h1>MessageHub.</h1>
        </Link>

        <div className={style.btns}>
          <Link to="/">
            <Button type="text">Login →</Button>
          </Link>

          <Link to="/reg">
            <Button type="default">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
