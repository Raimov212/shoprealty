import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { Container } from "@mui/system";

export const WorkersContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  ".Text": {
    color: "#fff",
    fontWeight: "400",
    marginTop: "100px",
  },
});

export const CardContainer = styled(Container)({
  width: "100%",
});

export const CardItem = styled(Card)({
  margin: "40px 0 0 40px ",
  width: "270px",
  maxWidth: "250px",
  height: "330px",
  boxSizing: "border-box",
  overflow: "hidden",
  gap: "20px",
  paddingLeft: "20px",
  background: "#F9F9FA",
  boxShadow: "0px 10px 50px rgba(119, 152, 181, 0.4)",
  borderRadius: "10px",
  img: {
    width: "210px",
    hegiht: "200px",
    borderRadius: "10px",
    marginTop: "20px",
  },
});
