import React, { useState } from 'react';
import { MailResponse } from '@/pages/api/mail';
import styles from './contact-form.module.scss';

export const ContactForm = () => {
  const [formMessage, setFormMessage] = React.useState('');
  const [sending, setSending] = useState<boolean>(false);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormMessage('');
    setSending(true);
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const name = target.name.value;
    const email = target.email.value;
    const message = target.message.value;

    const payload = {
      name,
      email,
      message
    };

    var data = new FormData();
    data.append('query', JSON.stringify(payload));

    fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((res) => {
        return res.json();
      })
      .then((data: MailResponse) => {
        setSending(false);
        if (data.code === 500) {
          setFormMessage('Error :( Please contact me through LinkedIn');
        } else {
          setFormMessage("Thanks I'll be in touch.");
        }
      });
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.input}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="your name here" required />
      </div>
      <div className={styles.input}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="some@email.biz" required />
      </div>
      <div className={styles.input}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="something something something"
          rows={4}
          cols={50}
          required
        />
      </div>
      <div className={styles.action}>
        <button className="btn btn-danger" type="submit">
          Send
        </button>
        {sending && <p className="blink">Sending...</p>}
        {formMessage && <p>{formMessage}</p>}
      </div>
    </form>
  );
};
