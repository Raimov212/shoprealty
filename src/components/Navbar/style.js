import styled from "@emotion/styled";
import { ListItemText, Toolbar } from "@mui/material";
import { Box } from "@mui/system";

export const ImageLogo = styled("div")({
  width: "176px",
  height: "50px",
  paddingLeft: "40px",
});

export const Icons = styled(Box)({
  color: "#E31F26",
  gap: "10px",
});

export const List = styled("div")({
  ul: {
    display: "flex",
    fontSize: "10px",
  },
  width: "600px",
});

export const Phone = styled("div")({
  display: "flex",
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
});

export const ListText = styled(ListItemText)({
  fontSize: "16px",
  fontWeight: "100",
});


