import React from "react";
import { Box, BoxContainer, SectionService } from "./service.styled";
import {
  FaAppleAlt,
  FaAward,
  FaUndoAlt,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

const Service = () => {
  return (
    <SectionService id="service">
      <h1>our services</h1>

      <BoxContainer>
        <Box>
          <FaAppleAlt />
          <h3>organic food</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quos
            voluptas? Cum reprehenderit labore consequuntur porro perspiciatis
            vero perferendis sapiente consequatur! Assumenda quos provident
            distinctio. Deserunt neque dicta ipsum quisquam.
          </p>
        </Box>

        <Box>
          <FaAward />
          <h3>high quality</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quos
            voluptas? Cum reprehenderit labore consequuntur porro perspiciatis
            vero perferendis sapiente consequatur! Assumenda quos provident
            distinctio. Deserunt neque dicta ipsum quisquam.
          </p>
        </Box>

        <Box>
          <FaAward />
          <h3>fast delivery</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quos
            voluptas? Cum reprehenderit labore consequuntur porro perspiciatis
            vero perferendis sapiente consequatur! Assumenda quos provident
            distinctio. Deserunt neque dicta ipsum quisquam.
          </p>
        </Box>

        <Box>
          <FaUndoAlt />
          <h3>ease returns</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quos
            voluptas? Cum reprehenderit labore consequuntur porro perspiciatis
            vero perferendis sapiente consequatur! Assumenda quos provident
            distinctio. Deserunt neque dicta ipsum quisquam.
          </p>
        </Box>

        <Box>
          <FaTruck />
          <h3>free delivery</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quos
            voluptas? Cum reprehenderit labore consequuntur porro perspiciatis
            vero perferendis sapiente consequatur! Assumenda quos provident
            distinctio. Deserunt neque dicta ipsum quisquam.
          </p>
        </Box>

        <Box>
          <FaHeadset />
          <h3>24 x 7 support</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quos
            voluptas? Cum reprehenderit labore consequuntur porro perspiciatis
            vero perferendis sapiente consequatur! Assumenda quos provident
            distinctio. Deserunt neque dicta ipsum quisquam.
          </p>
        </Box>
      </BoxContainer>
    </SectionService>
  );
};

export default Service;
