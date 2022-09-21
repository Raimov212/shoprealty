import { ExpandMoreOutlined, ZoomIn, Map } from "@mui/icons-material";
import { Button, Menu, Typography } from "@mui/material";
import React from "react";
import {
  ContainerMedium,
  UlText,
  ListText,
  List,
  ButtonCategory,
  SearchInput,
  BottomLeft,
  BottomRight,
  GoogleMap,
  Bottom,
  PriceBox,
  Price,
  PriceLeft,
  PriceRight,
  PriceBoxTop,
  MenuItemContent,
} from "./styleMedium";
import { Box } from "@mui/system";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}$`;
}

const PrimaryMedim = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  //Slider range

  const [value, setValue] = React.useState([0, 945000]);

  const minDistance = 10;

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <ContainerMedium>
      <UlText>
        <ul>
          <li>Квартиры</li>
          <li>Дома и участки</li>
          <li>Коммерческая</li>
        </ul>
      </UlText>
      <hr
        style={{
          border: "0.1px solid #7798B5",
          width: "1151px",
          marginLeft: "-25px",
        }}
      />
      <List>
        <ul>
          <ButtonCategory
            onClick={handleClick}
            sx={{ display: "flex", position: "relative" }}
          >
            <ListText primary="Купить" />
            <ExpandMoreOutlined sx={{ color: "#7798B5" }} />
          </ButtonCategory>
          <ButtonCategory>
            <ListText primary="Вторичка" />
            <ExpandMoreOutlined sx={{ color: "#7798B5" }} />
          </ButtonCategory>
          <ButtonCategory>
            <ListText primary="Кол-во комнат" />
            <ExpandMoreOutlined sx={{ color: "#7798B5" }} />
          </ButtonCategory>
          <ButtonCategory onClick={handleClick}>
            <ListText primary="Цена" />
            <ExpandMoreOutlined sx={{ color: "#7798B5" }} />
          </ButtonCategory>
          <Menu
            id="lame-menu"
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorEl={anchorEl}
          >
            <MenuItemContent onClick={handleClose}>
              <PriceBox>
                <PriceBoxTop>
                  <Typography>Цена в долларах США</Typography>
                  <Price>
                    <PriceLeft>Цена от</PriceLeft>
                    <PriceRight>Цена до</PriceRight>
                  </Price>
                </PriceBoxTop>
                <Box>
                  <Box sx={{ width: 200 }}>
                    <Slider
                      getAriaLabel={() => "$"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      min={0}
                      max={94500}
                      sx={{ color: "red" }}
                    />
                  </Box>
                </Box>
              </PriceBox>
            </MenuItemContent>
          </Menu>
        </ul>
        <SearchInput placeholder="Укажите город / регион поиска" />
      </List>
      <Bottom>
        <BottomLeft>
          <ZoomIn />
          <Typography>Расширенный поиск</Typography>
        </BottomLeft>
        <BottomRight>
          <GoogleMap>
            <Map />
            <Typography>На карте</Typography>
          </GoogleMap>
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#E31F26",
              fontWeight: "100",
              fontSize: "12px",
              width: "110px",
              "&:hover": {
                backgroundColor: "#C84432",
              },
              marginRight: "20px",
            }}
            variant="contained"
          >
            Найти
          </Button>
        </BottomRight>
      </Bottom>
    </ContainerMedium>
  );
};

export default PrimaryMedim;
