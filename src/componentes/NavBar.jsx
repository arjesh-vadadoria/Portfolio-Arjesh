import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center justify-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <h1 className="mx-2 w-10 font-semibold text-4xl">AV</h1>
      </div>
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
    </nav>
  );
};

export default NavBar;
