import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ExportContainer = styled(Box)({
  width: "100%",
  height: "500px",
  display: "flex",
  background: "#fff",
  padding: "90px 0 0 0px",
  img: {
    width: "500px",
    height: "400px",
    borderRadius: "10px",
    marginRight: "60px",
    marginLeft: "auto",
  },
  ".Title": {
    width: "450px",
    height: "120px",
    fontWeight: "300",
    color: "#213342",
  },
  ".Text": {
    width: "580px",
    height: "100px",
    fontWeight: "200",
    fontSize: "14px",
  },
});

export const Description = styled(Box)({
  width: "700px",
  height: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  background: "#F9F9FA",
  borderRadius: "30px 0px 0px 30px",
  padding: "50px 0 0 30px",
});
