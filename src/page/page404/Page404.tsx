import React, { ReactElement } from 'react';

import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import style from './Page404.module.sass';

import { Path } from 'enums';

const TEXT = "Oops. The page you're looking for doesn't exist.";

export const Page404 = (): ReactElement => {
  const navigate = useNavigate();

  const onRoot = (): void => {
    navigate(`${Path.Root}`);
  };

  return (
    <div className={style.center}>
      <div className={style.error}>
        <div className={style.number}>4</div>
        <div className={style.illustration}>
          <div className={style.circle} />
          <div className={style.clip}>
            <div className={style.paper}>
              <div className={style.face}>
                <div className={style.eyes}>
                  <div className={`${style.eye} ${style.eyeLeft}`} />
                  <div className={`${style.eye} ${style.eyeRight}`} />
                </div>
                <div className={`${style.rosyCheeks} ${style.rosyCheeksLeft}`} />
                <div className={`${style.rosyCheeks} ${style.rosyCheeksRight}`} />
                <div className={style.mouth} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.number}>4</div>
      </div>
      <div className={style.text}>{TEXT}</div>
      <div className={style.buttonWrapper}>
        <Button type="primary" onClick={onRoot}>
          Go to back
        </Button>
      </div>
    </div>
  );
};
