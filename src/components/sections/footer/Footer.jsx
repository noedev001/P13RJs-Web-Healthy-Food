import React from "react";
import {
  Box,
  BoxContainer,
  Credit,
  Icon,
  Link,
  SectionFooter,
} from "./footer.styled";
import img1 from "../../../assets/images/logo.png";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <SectionFooter>
      <BoxContainer>
        <Box>
          <img src={img1} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            exercitationem reiciendis aliquid vero dicta commodi, odit
            reprehenderit debitis fugit natus fugiat ipsa delectus labore quia
            eos. Tempore officiis similique ullam?
          </p>
        </Box>

        <Box>
          <h3>contact details</h3>
          <Icon>
            <FaPhone /> +123-456-7890.
          </Icon>
          <Icon>
            <FaEnvelope /> example@gmial.com
          </Icon>
          <Icon>
            <FaMapMarkerAlt /> bolivia, la paz - 400104
          </Icon>
        </Box>

        <Box>
          <h3>follow us</h3>
          <Link href="#">
            <FaYoutube />
          </Link>
          <Link href="#">
            <FaFacebook />
          </Link>
          <Link href="#">
            <FaTwitter />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
        </Box>
      </BoxContainer>

      <Credit>
        created by <span>noe dev</span> | all rights reserved!
      </Credit>
    </SectionFooter>
  );
};

export default Footer;
