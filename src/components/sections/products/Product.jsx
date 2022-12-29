import React from "react";
import {
  Box,
  BoxContainer,
  Icons,
  Link,
  Price,
  SectionProduct,
  Start,
} from "./produt.stylled";
import {
  FaStar,
  FaShoppingCart,
  FaEye,
  FaHeart,
  FaShareAlt,
  FaStarHalf,
} from "react-icons/fa";

import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
import img4 from "../../../assets/images/img4.jpg";
import img5 from "../../../assets/images/img5.jpg";
import img6 from "../../../assets/images/img6.jpg";

const Product = () => {
  return (
    <SectionProduct id="product">
      <h1>feacture product</h1>

      <BoxContainer>
        <Box>
          <img src={img1} alt="img1" />
          <h3>organic tomato</h3>

          <Start>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </Start>

          <Price>
            <span>$15.10</span> $12.30
          </Price>
          <Icons>
            <Link href="#">
              <FaShoppingCart />
            </Link>
            <Link href="#">
              <FaEye />
            </Link>
            <Link href="#">
              <FaHeart />
            </Link>
            <Link href="#">
              <FaShareAlt />
            </Link>
          </Icons>
        </Box>

        <Box>
          <img src={img2} alt="img2" />
          <h3>organic banana</h3>

          <Start>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </Start>

          <Price>
            <span>$15.10</span> $12.30
          </Price>
          <Icons>
            <Link href="#">
              <FaShoppingCart />
            </Link>
            <Link href="#">
              <FaEye />
            </Link>
            <Link href="#">
              <FaHeart />
            </Link>
            <Link href="#">
              <FaShareAlt />
            </Link>
          </Icons>
        </Box>

        <Box>
          <img src={img3} alt="img3" />
          <h3>organic grapes</h3>

          <Start>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </Start>

          <Price>
            <span>$15.10</span> $12.30
          </Price>
          <Icons>
            <Link href="#">
              <FaShoppingCart />
            </Link>
            <Link href="#">
              <FaEye />
            </Link>
            <Link href="#">
              <FaHeart />
            </Link>
            <Link href="#">
              <FaShareAlt />
            </Link>
          </Icons>
        </Box>

        <Box>
          <img src={img4} alt="img4" />
          <h3>organic lemon</h3>

          <Start>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </Start>

          <Price>
            <span>$15.10</span> $12.30
          </Price>
          <Icons>
            <Link href="#">
              <FaShoppingCart />
            </Link>
            <Link href="#">
              <FaEye />
            </Link>
            <Link href="#">
              <FaHeart />
            </Link>
            <Link href="#">
              <FaShareAlt />
            </Link>
          </Icons>
        </Box>

        <Box>
          <img src={img5} alt="img5" />
          <h3>organic broccoli</h3>

          <Start>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </Start>

          <Price>
            <span>$15.10</span> $12.30
          </Price>
          <Icons>
            <Link href="#">
              <FaShoppingCart />
            </Link>
            <Link href="#">
              <FaEye />
            </Link>
            <Link href="#">
              <FaHeart />
            </Link>
            <Link href="#">
              <FaShareAlt />
            </Link>
          </Icons>
        </Box>

        <Box>
          <img src={img6} alt="img6" />
          <h3>organic potato</h3>

          <Start>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </Start>

          <Price>
            <span>$15.10</span> $12.30
          </Price>
          <Icons>
            <Link href="#">
              <FaShoppingCart />
            </Link>
            <Link href="#">
              <FaEye />
            </Link>
            <Link href="#">
              <FaHeart />
            </Link>
            <Link href="#">
              <FaShareAlt />
            </Link>
          </Icons>
        </Box>
      </BoxContainer>
    </SectionProduct>
  );
};

export default Product;
