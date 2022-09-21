import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

export const MapDescription = styled(Container)({
  width: "350px",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  background: "#fff",
  borderRadius: "10px",
  ".Apartments": {},
  ".Title": {
    fontWeight: "400",
    fontSize: "18px",
    color: "#213342",
    marginTop: "20px",
  },
  ".Apartment": {
    display: "inline-block",
    boxSizing: "border-box",
    gap: "10px",
  },
  ".ApartmentChild": {
    display: "flex",
    marginLeft: "10px",
    gap: "10px",
    paddingTop: "10px",
  },
  ".Text": {
    color: "#7798B5",
  },
  ".Number": {
    fontWeight: "bold",
  },
});
