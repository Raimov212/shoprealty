import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { Box } from "@mui/system";

export const ContainerBox = styled(Box)({
  display: "flex",
  gap: "20px",
  marginTop: "50px",
});

export const CardContainer = styled(Card)({
  width: "305px",
  height: "174px",
  background: "#F9F9FA",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
});

export const ContainerItem = styled("div")({
  marginLeft: "30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  width: "220px",
  height: "174px"
});

export const Buy = styled(Box)({
  display: "flex",
  justifyContent : "space-between",
  alignItems: "center",
});
