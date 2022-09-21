import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";

export const CardContainer = styled(Box)({
  width: "100%",
  height: "750px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const CardBox = styled(Box)({
  width: "1280px",
  height: "100%",
});

export const CardItem = styled(Card)({
  margin: "40px 0 0 40px ",
  width: "360px",
  boxSizing: "border-box",
  background: "none",
  display: "inline-block",
  height: "400px",
  flexDirection: "column",
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
  paddingTop: "20px",
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
  gap: "20px",
});

export const CatalogButtons = styled(Box)({
  margin: "40px 0 100px 0",
});
