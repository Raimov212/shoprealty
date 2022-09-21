import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const DescriptionContainer = styled(Box)({
  width: "100%",
  height: "500px",
  display: "flex",
  background: "#fff",
  padding: "90px 0 0 0px",
  img: {
    width: "400px",
    height: "400px",
    borderRadius: "10px",
    marginLeft: "150px",
  },
  ".Content": {
    marginLeft: "auto",
  },
  ".Title": {
    width: "450px",
    height: "120px",
    fontWeight: "400",
    color: "#213342",
    display: "flex",
    alignItems: "center",
  },
  ".Text": {
    width: "580px",
    height: "100px",
    fontWeight: "300",
    fontSize: "16px",
  },
});

export const DescriptionBox = styled(Box)({
  width: "700px",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  background: "#F9F9FA",
  borderRadius: "0 30px 30px 0px",
  padding: "0 0 0 50px",
});
