import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  CardContainer,
  CardItem,
  WorkersContainer,
  Wrapper,
} from "./styleInstagram";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./data";
import Slider from "react-slick";

const Instagram = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <WorkersContainer>
        <Typography variant="h5" className="Text">
          Наш инстаграм
        </Typography>
      </WorkersContainer>
      <CardContainer>
        <Slider {...settings}>
          {data &&
            data.map((item) => {
              return (
                <CardItem>
                  <img src={item.img} alt="img" />
                </CardItem>
              );
            })}
        </Slider>
      </CardContainer>
      <Button
        sx={{
          color: "#fff",
          backgroundColor: "#E31F26",
          fontWeight: "100",
          fontSize: "12px",
          width: "170px",
          "&:hover": {
            backgroundColor: "#C84432",
          },
          margin: "50px 0 90px 0",
        }}
        variant="contained"
      >
        Подписаться
      </Button>
    </Wrapper>
  );
};

export default Instagram;
