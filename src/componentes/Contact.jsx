import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="text-center tracking-tighter"
      >
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <motion.a
            whileHover={{ y: -10 }}
            initial={{ y: 0 }}
            href={CONTACT.linkedIn}
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ y: -10 }}
            initial={{ y: 0 }}
            href={CONTACT.github}
            target="_blank"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ y: -10 }}
            initial={{ y: 0 }}
            href={CONTACT.x}
            target="_blank"
          >
            <FaSquareTwitter />
          </motion.a>
          <motion.a
            whileHover={{ y: -10 }}
            initial={{ y: 0 }}
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
            target="_blank"
          >
            <SiGmail />
          </motion.a>
        </div>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
          className="border-b"
        >
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
