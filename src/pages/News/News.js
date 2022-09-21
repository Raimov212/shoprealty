import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { CardBox, CardContainer, CardItem, Description } from "./styleNews";
import { CropSquare, MonetizationOn } from "@mui/icons-material";
import New1 from "../../assets/news/new1.png";
import New2 from "../../assets/news/new2.png";
import New3 from "../../assets/news/new3.png";

const News = () => {
  return (
    <CardContainer>
      <Typography
        variant="h5"
        sx={{ padding: "80px 0 0 0", color: "#213342", fontWeight: "400" }}
      >
        Последние новости
      </Typography>
      <CardBox>
        {/* 1 Item*/}
        <CardItem>
          <img src={New1} alt="img" />
          <Description>
            <Typography
              sx={{ fontWeight: "500", color: "#213342", width: "280px" }}
            >
              Что происходило на рынке квартир Гродно в октябре
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Typography
                sx={{
                  fontWeight: "200",
                  color: "#7798B5",
                }}
              >
                19 ноя 2021
              </Typography>
            </Box>
          </Description>
        </CardItem>
        {/* 2 Item*/}
        <CardItem>
          <img src={New2} alt="img" />
          <Description>
            <Typography
              sx={{ fontWeight: "500", color: "#213342", width: "280px" }}
            >
              Рекорды и итоги октября на рынке квартир
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Typography
                sx={{
                  fontWeight: "200",
                  color: "#7798B5",
                }}
              >
                16 ноя 2021
              </Typography>
            </Box>
          </Description>
        </CardItem>
        {/* 3 Item*/}
        <CardItem>
          <img src={New3} alt="img" />
          <Description>
            <Typography
              sx={{ fontWeight: "500", color: "#213342", width: "280px" }}
            >
              Обзор рынка квартир в Гродно за Сентябрь 2021 года
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Typography
                sx={{
                  fontWeight: "200",
                  color: "#7798B5",
                }}
              >
                19 ноя 2021
              </Typography>
            </Box>
          </Description>
        </CardItem>
      </CardBox>
      <Button
        sx={{
          color: "#fff",
          backgroundColor: "#E31F26",
          fontWeight: "100",
          fontSize: "12px",
          width: "150px",
          "&:hover": {
            backgroundColor: "#C84432",
          },
          marginBottom : "40px "
        }}
        variant="contained"
      >
        Все новости
      </Button>
    </CardContainer>
  );
};

export default News;
