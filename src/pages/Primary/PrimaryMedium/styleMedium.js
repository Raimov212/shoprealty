import styled from "@emotion/styled";
import {
  Box,
  Container,
  Input,
  ListItemButton,
  ListItemText,
  MenuItem,
} from "@mui/material";

export const ContainerMedium = styled(Container)({
  width: "100%",
  height: "200px",
  backgroundColor: "#213342",
  borderRadius: "10px",
});

export const UlText = styled("div")({
  width: "50%",
  display: "flex",
  marginBottom: "14px",
  ul: {
    marginTop: "14px",
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
    gap: "40px ",
  },
  li: {
    color: "#fff",
  },
});

export const List = styled("div")({
  display: "flex",
  ul: {
    display: "flex",
    fontSize: "10px",
    width: "700px",
  },
  width: "100%",
  margin: "20px 0 ",
});

export const ListText = styled(ListItemText)({
  fontSize: "16px",
  fontWeight: "100",
  color: "#1D242A",
});

export const ButtonCategory = styled(ListItemButton)({
  background: "#fff",
});

export const SearchInput = styled(Input)({
  background: "#fff",
  //   color: "#7798B5",
  width: "400px",
  listStyleType: "none",
});

export const Bottom = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const BottomLeft = styled("div")({
  width: "250px",
  height: "40px",
  border: "1px solid #7798B5",
  borderRadius: "10px",
  marginLeft: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  gap: "10px",
});

export const BottomRight = styled("div")({
  display: "flex",
  gap: "20px",
});

export const GoogleMap = styled("div")({
  width: "145px",
  height: "40px",
  // border: "1px solid #7798B5",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  gap: "10px",
});

export const MenuItemContent = styled(MenuItem)({
  height: "189px",
  width: "321px",
  background: "#fff",
  "&:hover": {
    background: "#fff",
  },
});

export const PriceBox = styled("Box")({
  width: "321px",
  // height: "189px",
  // "&:hover": {
  // },
  background: "#FFFFFF",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  // paddingTop: "20px",
  paddingLeft: "20px",
});

export const PriceBoxTop = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const PriceBoxBottom = styled(Box)({});

export const Price = styled("div")({
  width: "281px",
  height: "43px",
  display: "flex",
});

export const PriceLeft = styled("div")({
  width: "140px",
  height: "43px",
  border: "1px solid #D9E4ED",
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});
export const PriceRight = styled("div")({
  width: "140px",
  height: "43px",
  border: "1px solid #D9E4ED",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});
