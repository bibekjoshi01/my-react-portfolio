import React from "react";
import styles from "./HomePage.module.scss";
import ProfilePic from "../../assets/myProfile.jpg";
import { MdFacebook, MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiDjango } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { SiPostgresql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { FaDocker, FaTools } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { SiCoursera } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
import Header from "../Header";

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
            <div className={styles.imageContainer}>
              <img src={ProfilePic} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.colOne}>
              <div className={styles.name}>I'm Bibek Joshi.</div>
              <div className={styles.description}>
                As a software developer with expertise in Python, Django, Linux,
                Firebase, Postgres, Docker, Git/GitHub, React, and Next.js, I am
                passionate about creating high-quality applications that deliver
                exceptional user experiences.
              </div>
            </div>
            <div className={styles.colThree}>
              <button className={styles.downloadCV}>
                <HiDownload />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
        {/* content end */}

        {/* my technologies section */}
        <div className={styles.toolsAndTechs}>
          <div className={styles.heading}>
            <FaTools />
            <span>Tools and Technologies</span>
          </div>
          {/* icons */}
          <div className={styles.icons}>
            <SiCoursera className={styles.c} />
            <FaPython className={styles.python} />
            <IoLogoJavascript className={styles.javascript} />
            <DiDjango className={styles.django} />
            <DiReact className={styles.react} />
            <SiNextdotjs className={styles.nextjs} />
            <ImHtmlFive className={styles.html} />
            <DiCss3 className={styles.css} />
            <IoLogoSass className={styles.sass} />
            <SiPostgresql className={styles.postgresql} />
            <SiPostman className={styles.postman} />
            <BsGit className={styles.git} />
            <FaDocker className={styles.docker} />
            <SiFirebase className={styles.firebase} />
            <SiNginx className={styles.nginx} />
            <FcLinux className={styles.linux} />
            <AiFillApi className={styles.api} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
