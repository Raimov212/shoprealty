import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { CardBox, CardContainer, CardItem, Description } from "./styleVideo";
import YouTube from "react-youtube";

const Video = () => {
  const opts = {
    height: "300",
    width: "360",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <CardContainer>
      <Typography
        variant="h5"
        sx={{ padding: "80px 0 0 0", color: "#213342", fontWeight: "400" }}
      >
        Отзывы
      </Typography>
      <CardBox>
        {/* 1 Item*/}
        <CardItem>
          <YouTube videoId="ZSQSrmJNnr0" opts={opts} />
        </CardItem>
        {/* 2 Item*/}
        <CardItem>
          <YouTube videoId="9-PVUVRvr24" opts={opts} />
        </CardItem>
        {/* 3 Item*/}
        <CardItem>
          <YouTube videoId="_6GltWJSi-M" opts={opts} />
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
          margin: "40px 0",
        }}
        variant="contained"
      >
        Все отзывы
      </Button>
    </CardContainer>
  );
};

export default Video;
