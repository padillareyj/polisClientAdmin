import React from "react";
import PropTypes from "prop-types";
import { SocialIcon } from "tachyons-react-social-icons";

import Logo from "../../Core/Logo/Logo";
import ListItem from "../../Core/List/ListItem";

const Footer = ({ social, content, data }) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  
  return (
    <footer
    role="contentinfo"
    className="bg-blue white"
    >
   
    </footer>
  );
};

Footer.propTypes = {
  social: PropTypes.array.isRequired,
  content: PropTypes.array.isRequired
}

export default Footer;
