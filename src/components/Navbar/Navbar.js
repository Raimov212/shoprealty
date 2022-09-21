import {
  AppBar,
  Button,
  ListItemButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Logo from "../../assets/logo.png";
import { Container } from "@mui/system";
import {
  PhoneInTalk,
  Telegram,
  LocalPhone,
  FmdGoodOutlined,
  ExpandMoreOutlined,
  Call,
} from "@mui/icons-material";
import React from "react";
import {
  ImageLogo,
  Icons,
  List,
  Phone,
  StyledToolbar,
  ListText,
} from "./style";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <StyledToolbar>
          <ImageLogo>
            <img src={Logo} alt="logo" />
          </ImageLogo>
          <List>
            <ul>
              <ListItemButton
                sx={{ display: "flex", color: "red" }}
                onClick={handleClick}
              >
                <FmdGoodOutlined />
                <ListText primary="Гродно" />
                <ExpandMoreOutlined />
              </ListItemButton>
              {open && (
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Гродно1</MenuItem>
                  <MenuItem onClick={handleClose}>Гродно2</MenuItem>
                  <MenuItem onClick={handleClose}>Гродно3</MenuItem>
                </Menu>
              )}
              <ListItemButton>
                <ListText primary="Каталог" />
                <ExpandMoreOutlined />
              </ListItemButton>
              <ListItemButton>
                <ListText primary="Услуги" />
                <ExpandMoreOutlined />
              </ListItemButton>
              <ListItemButton>
                <ListText primary="О нас" />
                <ExpandMoreOutlined />
              </ListItemButton>
              <ListItemButton>
                <ListText primary="Блог" />
                <ExpandMoreOutlined />
              </ListItemButton>
            </ul>
          </List>
          <Phone>
            <Call sx={{ color: "#E31F26" }} />
            <Typography sx={{ fontWeight: "bold" }}>
              +375 (29) 596 76 76
            </Typography>
          </Phone>
          <Icons>
            <PhoneInTalk />
            <Telegram />
            <LocalPhone />
          </Icons>
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#E31F26",
              fontWeight: "100",
              fontSize: "12px",
              "&:hover": {
                backgroundColor: "#C84432",
              },
            }}
            variant="contained"
          >
            Консультация
          </Button>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
