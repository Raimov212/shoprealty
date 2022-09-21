import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export const CardContainer = styled(Container)({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const CardBox = styled(Box)({
  width: "1280px",
  height: "1000px",
});

export const CardItem = styled(Card)({
  margin: "40px 0 0 40px ",
  width: "360px",
  boxSizing: "border-box",
  background: "none",
  display: "inline-block",
  height: "450px",
  flexDirection: "column",
  gap: "20px",
  paddingLeft: "20px",
  img: {
    width: "320px",
    objectFit: "cover",
    borderRadius: "10px",
    marginTop: "20px",
  },
  "&:hover": {
    background: "#F9F9FA",
    boxShadow: "0px 10px 50px rgba(119, 152, 181, 0.4)",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
});

export const Description = styled(Typography)({
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
});

