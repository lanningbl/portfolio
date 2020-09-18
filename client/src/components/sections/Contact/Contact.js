import React, { useState } from 'react';
import axios from 'axios';
import { FaExclamationCircle, FaSpinner } from 'react-icons/fa';

import './Contact.scss';
import AutoResizeTextarea from 'components/AutoResizeTextarea';
import useOnScreen from 'hooks/useOnScreen';

function Contact() {
  const [setRef, visible] = useOnScreen({ rootMargin: '-150px' });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(
    'Name must be at least 2 characters!'
  );
  const [emailError, setEmailError] = useState('Email is not valid!');
  const [messageError, setMessageError] = useState(
    'Message must be at least 10 characters!'
  );
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value.trim().length < 2) {
      setNameError('Name must be at least 2 characters!');
    } else if (e.target.value.trim().length > 30) {
      setNameError('Name must be less than 30 characters!');
    } else {
      setNameError('');
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validEmailRegex.test(e.target.value)) {
      setEmailError('Email is not valid!');
    } else {
      setEmailError('');
    }
  };

  const handleChangeMessage = (e) => {
    if (e.target.value.length <= 1000) {
      setMessage(e.target.value);
    }
    if (e.target.value.trim().length < 10) {
      setMessageError('Message must be at least 10 characters!');
    } else {
      setMessageError('');
    }
  };

  const formValidated = () => {
    if (nameError === '' && emailError === '' && messageError === '') {
      return 'btn-enabled';
    } else {
      return 'btn-disabled';
    }
  };

  const resetForm = () => {
    setIsSubmitting(false);
    setName('');
    setEmail('');
    setMessage('');
    setShowErrors(false);
    setNameError('Name must be at least 2 characters!');
    setEmailError('Email is not valid!');
    setMessageError('Message must be at least 10 characters!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      isSubmitting ||
      nameError !== '' ||
      emailError !== '' ||
      messageError !== ''
    ) {
      setShowErrors(true);
      return;
    }

    setIsSubmitting(true);
    await axios.post('/api/form', { name, email, message }).then(
      setTimeout(() => {
        resetForm();
      }, 1000)
    );
  };

  return (
    <div className='contact' id='contact'>
      <div
        className={`contact__title ${
          visible ? 'fade-in-left' : 'fade-out-left'
        }`}
      >
        Let's Connect
      </div>
      <div
        className={`form ${visible ? 'fade-in-right' : 'fade-out-right'}`}
        ref={setRef}
      >
        <div className='form-control name'>
          <input
            className={`${nameError === '' && 'input-valid'}`}
            type='text'
            value={name}
            onChange={handleChangeName}
          />
          <label className={`${name !== '' && 'label-rise'}`}>NAME</label>
          <div className='validation-label'>{showErrors && nameError}</div>
        </div>
        <div className='form-control email'>
          <input
            className={`${emailError === '' && 'input-valid'}`}
            type='text'
            value={email}
            onChange={handleChangeEmail}
          />
          <label className={`${email !== '' && 'label-rise'}`}>
            YOUR EMAIL
          </label>
          <div className='validation-label'>{showErrors && emailError}</div>
        </div>
        <div className='form-control textarea'>
          <AutoResizeTextarea
            className={`${messageError === '' && 'textarea-valid'}`}
            value={message}
            onChange={handleChangeMessage}
          />
          <label className={`${message !== '' && 'label-rise'}`}>
            YOUR MESSAGE
          </label>
          <div className='validation-label'>{showErrors && messageError}</div>
          <div className='message-length'>{message.length + ' / 1000'}</div>
        </div>

        <div className='form-actions'>
          <div
            className='tooltip'
            data-tooltip={`${!showErrors ? 'Show tips!' : 'Hide tips!'}`}
          >
            <FaExclamationCircle
              className={`${showErrors ? 'errors-visible' : 'errors-hidden'}`}
              onClick={() => setShowErrors(!showErrors)}
            />
          </div>
          <div
            className={`submit-btn ${formValidated()}`}
            onClick={handleSubmit}
          >
            {isSubmitting ? <FaSpinner className='spin' /> : 'SEND MESSAGE'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
