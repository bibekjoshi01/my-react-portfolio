import React from "react";
import styles from "./Contact.module.scss";
import Header from "../Header";
import ContactForm from "./ContactForm";
import ProfilePic from "../../assets/coding4.png";
import { MdFacebook, MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";

function index(props) {
  const { handlePage } = props;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* header start */}
        <Header handlePage={handlePage} />
        {/* header end */}

        {/* content start */}
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.colTwo}>
              <a
                href="https://www.facebook.com/bibekjoshi.001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/bibek-joshi-69458b231/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://twitter.com/bibekjoshi34"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://stackoverflow.com/users/19317825/bibek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsStackOverflow />
              </a>
              <a
                href="https://github.com/bibekjoshi01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href="mailto:bibekjoshi34@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </div>
            <div className={styles.contactContainer}>
              <img src={ProfilePic} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.colOne}>
              <div className={styles.heading}>Get In Touch</div>
              <ContactForm />
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </div>
  );
}

export default index;
