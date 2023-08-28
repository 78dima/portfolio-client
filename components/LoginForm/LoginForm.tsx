'use client';

import React, { FC, useEffect, useState } from 'react';

import { AUTH_MODULE_NAME } from '@/modules/auth';
import { authLogin, checkAuth } from '@/modules/auth/action';
import { useAppDispatch, useAppSelector } from '@/store/hooks/redux';

import styles from './LoginForm.module.scss';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const { user, isAuth } = useAppSelector((state) => state[AUTH_MODULE_NAME]);

  const onSubmit = () => {
    dispatch(authLogin({ email, password }));
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  if (isAuth) {
    return <h1>You are login {user}</h1>;
  }

  return (
    <div className={styles.authorizationContainer}>
      <div className={styles.authorizationCard}>
        <h2>Authorization</h2>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit" onClick={onSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
