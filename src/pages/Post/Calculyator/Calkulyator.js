import {
  Button,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React from "react";
import {
  ContainerCalkulyator,
  ContainerLeft,
  ContainerRight,
  StyleCalkulyator,
  StyleCalkulyatorText,
} from "./styleCalkulyator";
import Dom from "../../../assets/dom.png";
import { Box } from "@mui/system";

const Calkulyator = () => {
  return (
    <ContainerCalkulyator>
      <StyleCalkulyatorText>
        <Typography variant="h5" sx={{ color: "#213342" }}>
          Калькулятор тарифов и услуг
        </Typography>
        <Typography
          component="p"
          sx={{ color: "#212121", fontSize: "14px", fontWeight: "400" }}
        >
          рассчитайте стоимость наших услуг
        </Typography>
      </StyleCalkulyatorText>
      <StyleCalkulyator>
        <img src={Dom} alt="dom" />
        <ContainerLeft>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              color: "#fff",
              zIndex: "1",
            }}
          >
            Введите стоимость квартиры
          </Typography>
          <Input className="InputText" type="text" placeholder="25 000 " />
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Input
                className="InputRadio"
                id="USD"
                value="radio1"
                name="radiName1"
                type="radio"
              />
              <InputLabel id="USD" className="label">
                USD
              </InputLabel>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Input
                className="InputRadio"
                id="BYR"
                value="radio2"
                name="radiName2"
                type="radio"
              />
              <InputLabel for="radio2" id="BYR" className="label">
                BYR
              </InputLabel>
            </Box>
          </Box>
        </ContainerLeft>
        <ContainerRight>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              color: "#fff",
              zIndex: "1",
            }}
          >
            Стоимость услуг
          </Typography>
          <Box className="BoxContainer">
            <Box className="Box1">3 % </Box>
            <Typography
              sx={{ color: "#fff", fontWeight: "200", fontSize: "14px" }}
            >
              или
            </Typography>
            <Box className="Box2">750 руб</Box>
          </Box>
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#E31F26",
              fontWeight: "100",
              fontSize: "12px",
              width: "110px",
              "&:hover": {
                backgroundColor: "#C84432",
              },
              margin: "20px 0 0 190px",
            }}
            variant="contained"
          >
            Cвязаться
          </Button>
        </ContainerRight>
      </StyleCalkulyator>
    </ContainerCalkulyator>
  );
};

export default Calkulyator;
