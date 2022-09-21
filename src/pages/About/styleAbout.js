import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

export const Wrapper = styled(Box)({
  width: "100%",
  height: "480px",
  background: "#213342",
});

export const ContainerAbout = styled(Container)({
  display: "flex",
  flexDirection: "column",
  gap: "70px",
  img: {
    color: "#fff",
  },
  ".ItemBottom": {
    display: "flex",
    justifyContent: "space-between",
  },
});

export const ItemAbout = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "100px",
  ".Icon": {
    color: "#213342",
  },
  ".IconWrapper": {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "10px",
  },
  ".IconItem": {
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
  },
});

export const Text = styled(Typography)({
  color: "#fff",
  fontWeight: "200",
});

export const ItemWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  paddingTop: "10px",
  gap: "5px",
  ".IconCall": {
    color: "#fff",
  },
});
