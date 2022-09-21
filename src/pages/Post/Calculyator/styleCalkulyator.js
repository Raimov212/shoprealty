import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

export const ContainerCalkulyator = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "80px",
});

export const StyleCalkulyatorText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "80px 0 ",
});

export const StyleCalkulyator = styled(Box)({
  width: "920px",
  height: "240px",
  display: "flex",
  background: "#213342",
  borderRadius: "10px",
  position: "relative",
  img: {
    color: "red",
    position: "absolute",
  },
  ".InputText": {
    width: "450px",
    height: "40px",
    background: "#fff",
    borderRadius: "10px",
    paddingLeft: "20px",
  },
  label: {
    color: "#fff",
    marginLeft: "10px",
  },
  ".InputRadio": {
    color: "red",
    textDecoration: "none",
    fontSize: "30px",
  },
});

export const ContainerLeft = styled(Container)({
  display: "flex",
  flexDirection: "column",
  paddingTop: "40px",
  marginLeft: "20px",
  gap: "20px",
});

export const ContainerRight = styled(Container)({
  display: "flex",
  flexDirection: "column",
  paddingTop: "40px",
  marginLeft: "20px",
  gap: "20px",
  ".BoxContainer": {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  ".Box1": {
    width: "90px",
    height: "40px",
    background: "#fff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "200",
  },
  ".Box2": {
    width: "150px",
    height: "40px",
    background: "#fff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "200",
  },
});
