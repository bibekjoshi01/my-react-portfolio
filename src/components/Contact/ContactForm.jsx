import React from "react";
import styles from "./Contact.module.scss";

function ContactForm() {
  return (
    <form>
      <div className={styles.formGroup}>
        <div className={styles.formControl}>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" />
        </div>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.formControl}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
        </div>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.formControl}>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" />
        </div>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.formControl}>
          <label htmlFor="message">Message</label>
          <input type="textarea" id="message" />
        </div>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.formControl}>
          <button className={styles.submit} type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
