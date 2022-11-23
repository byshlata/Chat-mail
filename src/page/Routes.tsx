import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from 'enums';
import { Login, Page404, Mail } from 'page';
import { selectorUserName } from 'store';

export const Routers = (): ReactElement | null => {
  const isAuth = useSelector(selectorUserName);
  const LOGIN = <Navigate to={`${Path.Login}`} />;
  const MAIL = <Navigate to={`${Path.Mail}${Path.User}`} />;

  return (
    <Routes>
      <Route path={`${Path.Other}`} element={<Page404 />} />
      <Route path={`${Path.Root}`} element={isAuth ? MAIL : LOGIN} />
      <Route path={`${Path.Mail}${Path.User}`} element={isAuth ? <Mail /> : LOGIN} />
      <Route path={`${Path.Mail}${Path.Send}`} element={isAuth ? MAIL : <Login />} />
      <Route path={`${Path.Login}`} element={isAuth ? MAIL : <Login />} />
    </Routes>
  );
};
