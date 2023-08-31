'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Loading from '@/components/common/Loading/Loading';
import Modal from '@/components/common/Modal/Modal';
import { contactMeAPI } from '@/modules/contactMe/service';

import styles from './ContactMe.module.scss';

const ContactMe = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sendMessage, { isError, isSuccess, isLoading }] = contactMeAPI.useSendMessageMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSubmit = (data) => {
    sendMessage(data);
    setIsModalOpen(true);
    reset();
  };

  const onCloseEvent = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formRow}>
          <div className={clsx(styles.formCol, styles.formCol6)}>
            <fieldset>
              <input
                type="text"
                id="name"
                placeholder="Your name..."
                className={styles.formInput}
                required
                {...register('name', {
                  required: true,
                  validate: {
                    minLength: (v) => v.length >= 2,
                    matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v),
                  },
                })}
              />
              {errors.name?.type === 'required' && (
                <small className={styles.errorMessage} role="alert">
                  Name is required
                </small>
              )}
            </fieldset>
          </div>
          <div className={clsx(styles.formCol, styles.formCol6)}>
            <fieldset>
              <input
                type="text"
                id="email"
                placeholder="Your email..."
                className={styles.formInput}
                required
                {...register('email', {
                  required: true,
                  validate: {
                    matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
                  },
                })}
              />
              {errors.email && (
                <small className={styles.errorMessage} role="alert">
                  Email address must be a valid address
                </small>
              )}
            </fieldset>
          </div>
          <div className={styles.formCol}>
            <fieldset>
              <input
                type="text"
                id="subject"
                placeholder="Subject..."
                className={styles.formInput}
                {...register('subject')}
              />
            </fieldset>
          </div>
          <div className={styles.formCol}>
            <fieldset>
              <textarea
                rows={4}
                id="message"
                placeholder="Your message..."
                {...register('message', {
                  required: true,
                  validate: {
                    minLength: (v) => v.length >= 5,
                  },
                })}
              />
              {errors.message?.type === 'required' && (
                <small className={styles.errorMessage} role="alert">
                  Message is required and min 5 letters
                </small>
              )}
            </fieldset>
          </div>
          <div className={styles.formButtonWrapper}>
            <fieldset>
              <button type="submit" id="form-submit" className={styles.formButton}>
                Send Message
              </button>
            </fieldset>
          </div>
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={onCloseEvent} isError={isError}>
        {isSuccess && (
          <>
            <h2>Success</h2>
            <p>Your form data was submitted successfully.</p>
          </>
        )}
        {isError && (
          <>
            <h2>Error</h2>
            <p>Your form data was not submitted.</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ContactMe;
