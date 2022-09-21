import { Button, Typography } from "@mui/material";
import React from "react";
import { CardBox, CardContainer, CardItem } from "./styleCertificate";
import Certificate1 from "../../../assets/certificate/certificate1.png";
import Certificate2 from "../../../assets/certificate/certificate2.png";
import Certificate3 from "../../../assets/certificate/certificate3.png";
import Certificate4 from "../../../assets/certificate/certificate4.png";

const Certificate = () => {
  return (
    <CardContainer>
      <Typography
        variant="h5"
        sx={{ padding: "80px 0 60px 0", color: "#213342", fontWeight: "400" }}
      >
        Сертификаты
      </Typography>
      <CardBox>
        {/* 1 Item*/}
        <CardItem>
          <img src={Certificate1} alt="img" />
        </CardItem>
        {/* 2 Item*/}
        <CardItem>
          <img src={Certificate2} alt="img" />
        </CardItem>
        {/* 3 Item*/}
        <CardItem>
          <img src={Certificate3} alt="img" />
        </CardItem>
        {/* 4 Item */}
        <CardItem>
          <img src={Certificate4} alt="img" />
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
        Все сертификаты
      </Button>
    </CardContainer>
  );
};

export default Certificate;
