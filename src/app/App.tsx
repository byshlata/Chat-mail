import { ReactElement } from 'react';

import mainStyle from '../styles/container.module.sass';

import style from './App.module.sass';

import { Footer, Header } from 'components';
import { Routers } from 'page';

export const App = (): ReactElement => (
  <div className={style.appWrapper}>
    <Header />
    <div className={mainStyle.mainContainer}>
      <div className={mainStyle.container}>
        <Routers />
      </div>
    </div>
    <Footer />
  </div>
);
