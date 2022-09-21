import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";
import { Container } from "@mui/system";

export const Wrapper = styled(Box)({
  background: "rgba(1, 31, 94, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const WorkersContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  ".Text": {
    fontWeight: "400",
    marginTop: "80px",
    color: "#213342",
  },
});

export const CardContainer = styled(Container)({
  width: "100%",
});

export const CardItem = styled(Card)({
  margin: "40px 0 0 40px ",
  width: "250px",
  maxWidth: "250px",
  height: "250px",
  boxSizing: "border-box",
  gap: "20px",
  background: "#F9F9FA",
  borderRadius: "10px",
  img: {
    width: "100%",
    hegiht: "100%",
    borderRadius: "10px",
  },
});

export const Description = styled(Typography)({
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
});
