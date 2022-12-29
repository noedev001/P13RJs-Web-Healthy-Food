import React from "react";
import {
  Btn,
  Formulario,
  Image,
  InputBox,
  Row,
  SectionContact,
} from "./contact.styled";
import img from "../../../assets/images/contact-img.jpg";

const Contact = () => {
  return (
    <SectionContact id="contact">
      <h1>contact us</h1>

      <Row>
        <Image>
          <img src={img} alt="img" />
        </Image>

        <Formulario action="">
          <InputBox>
            <h3>full name</h3>
            <input type="text" placeholder="enter your name" />
          </InputBox>
          <InputBox>
            <h3>email</h3>
            <input type="email" placeholder="enter your email" />
          </InputBox>
          <InputBox>
            <h3>number phone</h3>
            <input type="number" placeholder="enter your number" />
          </InputBox>

          <InputBox>
            <h3>message</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="messaga"
            ></textarea>
          </InputBox>

          <Btn type="submit" value="send"></Btn>
        </Formulario>
      </Row>
    </SectionContact>
  );
};

export default Contact;
