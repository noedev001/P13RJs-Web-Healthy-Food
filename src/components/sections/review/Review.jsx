import React from "react";
import { Box, BoxContainer, Info, SectionReview, User } from "./review.styled";
import img1 from "../../../assets/images/pic1.png";
import img2 from "../../../assets/images/pic2.png";
import img3 from "../../../assets/images/pic3.png";
import img4 from "../../../assets/images/pic4.png";

const Review = () => {
  return (
    <SectionReview id="review">
      <h1>people's review</h1>

      <BoxContainer>
        <Box>
          <Info>
            <img src={img1} alt="pic1" />
            <User>
              <h3>john deo</h3>
              <span>web designer</span>
            </User>
          </Info>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, itaque labore nesciunt, minima molestias soluta odit
            sint quis quos accusamus nobis deserunt quo nemo maiores ducimus
            laborum harum voluptatem similique.
          </p>
        </Box>

        <Box>
          <Info>
            <img src={img2} alt="pic1" />
            <User>
              <h3>john deo</h3>
              <span>web designer</span>
            </User>
          </Info>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, itaque labore nesciunt, minima molestias soluta odit
            sint quis quos accusamus nobis deserunt quo nemo maiores ducimus
            laborum harum voluptatem similique.
          </p>
        </Box>

        <Box>
          <Info>
            <img src={img3} alt="pic1" />
            <User>
              <h3>john deo</h3>
              <span>web designer</span>
            </User>
          </Info>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, itaque labore nesciunt, minima molestias soluta odit
            sint quis quos accusamus nobis deserunt quo nemo maiores ducimus
            laborum harum voluptatem similique.
          </p>
        </Box>

        <Box>
          <Info>
            <img src={img4} alt="pic1" />
            <User>
              <h3>john deo</h3>
              <span>web designer</span>
            </User>
          </Info>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, itaque labore nesciunt, minima molestias soluta odit
            sint quis quos accusamus nobis deserunt quo nemo maiores ducimus
            laborum harum voluptatem similique.
          </p>
        </Box>
      </BoxContainer>
    </SectionReview>
  );
};

export default Review;
