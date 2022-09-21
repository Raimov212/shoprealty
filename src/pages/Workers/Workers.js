import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./styleWorker.css";
import { CardContainer, CardItem, WorkersContainer } from "./styleWorkers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./data";
import Slider from "react-slick";

const Workers = () => {
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
    <Box className="BackgroundImg">
      <WorkersContainer>
        <Typography variant="h5" className="Text">
          Специалисты компании «Магазин недвижимости»
        </Typography>
      </WorkersContainer>
      <CardContainer>
        <Slider {...settings}>
          {data &&
            data.map((item) => {
              const { img, title, position } = item;
              return (
                <CardItem>
                  <img src={img} alt="img" />
                  <Box className="TextPosition">
                    <Typography
                      sx={{
                        fontWeight: "500",
                        color: "#213342",
                        width: "200px",
                        textAlign: "center",
                        marginTop: "5px",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        width: "200px",
                        fontWeight: "200",
                        color: "#7798B5",
                        textAlign: "center",
                      }}
                    >
                      {position}
                    </Typography>
                  </Box>
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
          width: "210px",
          "&:hover": {
            backgroundColor: "#C84432",
          },
          marginTop: "40px",
        }}
        variant="contained"
      >
        Все специалисты
      </Button>
    </Box>
  );
};

export default Workers;
