import React from "react";
import { Btn, Content, Link, SectionHome } from "./home.styled";

const Home = () => {
  return (
    <SectionHome id="home">
      <Content>
        <h3>healthy food, healthy life.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          placeat, magnam, sequi voluptatum veniam aut quidem rem libero ab
          reiciendis vel obcaecati porro mollitia, modi harum adipisci officiis
          inventore natus.
        </p>
        <Link href="#">
          <Btn>discover more</Btn>
        </Link>
      </Content>
    </SectionHome>
  );
};

export default Home;
