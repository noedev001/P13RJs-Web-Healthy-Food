import React from "react";
import { Content, Image, Link, Row, SectionAbout } from "./about.styled";
import img from "../../../assets/images/about-img.jpg";

const About = () => {
  return (
    <SectionAbout id="about">
      <h1>about us</h1>

      <Row>
        <Image>
          <img src={img} alt="about-img" />
        </Image>

        <Content>
          <h3>why choose us?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quam
            voluptates. Amet doloremque et totam illo incidunt eligendi
            consequuntur veritatis debitis ad hic nobis ipsum, corporis earum
            deleniti eius quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quam
            voluptates
          </p>
          <Link>
            <button>lear more</button>
          </Link>
        </Content>
      </Row>
    </SectionAbout>
  );
};

export default About;
