import { Button, Typography } from "@mui/material";
import React from "react";
import {
  CardBox,
  CardContainer,
  CardItem,
  CatalogButtons,
  Description,
} from "./styleCrud";
import PostImg from "../../../assets/post.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box } from "@mui/system";
import { CropSquare, MonetizationOn, Timeline } from "@mui/icons-material";

const Card = () => {
  return (
    <CardContainer>
      <Typography
        variant="h5"
        sx={{ padding: "80px 0 60px 0", color: "#213342", fontWeight: "400" }}
      >
        Последняя добавленная недвижимость
      </Typography>
      <CardBox>
        {/* 1 Item*/}
        <CardItem>
          <img src={PostImg} alt="img" />
          <Description>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <LocationOnOutlinedIcon
                sx={{ color: "#7798B5", fontSize: "20px" }}
              />
              <Typography
                sx={{
                  fontWeight: "200",
                  color: "#7798B5",
                  borderBottom: "1px solid #7798B5",
                }}
              >
                Гродно, ул. Большая Троицкая, 16
              </Typography>
            </Box>
            <Typography
              sx={{ fontWeight: "500", color: "#213342", width: "280px" }}
            >
              Аренда торгово-офисного помещения
            </Typography>
          </Description>
          <Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <CropSquare sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>Площадь: 59,5м2</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <MonetizationOn sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>
                Стоимость: 8$ / 20.17р. за м.кв.
              </Typography>
            </Box>
          </Box>
        </CardItem>
        {/* 2 Item*/}
        <CardItem>
          <img src={PostImg} alt="img" />
          <Description>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <LocationOnOutlinedIcon
                sx={{ color: "#7798B5", fontSize: "20px" }}
              />
              <Typography
                sx={{
                  fontWeight: "200",
                  color: "#7798B5",
                  borderBottom: "1px solid #7798B5",
                }}
              >
                Гродно, ул. Большая Троицкая, 16
              </Typography>
            </Box>
            <Typography
              sx={{ fontWeight: "500", color: "#213342", width: "280px" }}
            >
              Аренда торгово-офисного помещения
            </Typography>
          </Description>
          <Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <CropSquare sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>Площадь: 59,5м2</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <MonetizationOn sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>
                Стоимость: 8$ / 20.17р. за м.кв.
              </Typography>
            </Box>
          </Box>
        </CardItem>
        {/* 3 Item*/}
        <CardItem>
          <img src={PostImg} alt="img" />
          <Description>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <LocationOnOutlinedIcon
                sx={{ color: "#7798B5", fontSize: "20px" }}
              />
              <Typography
                sx={{
                  fontWeight: "200",
                  color: "#7798B5",
                  borderBottom: "1px solid #7798B5",
                }}
              >
                Гродно, ул. Большая Троицкая, 16
              </Typography>
            </Box>
            <Typography
              sx={{ fontWeight: "500", color: "#213342", width: "280px" }}
            >
              Аренда торгово-офисного помещения
            </Typography>
          </Description>
          <Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <CropSquare sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>Площадь: 59,5м2</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <MonetizationOn sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>
                Стоимость: 8$ / 20.17р. за м.кв.
              </Typography>
            </Box>
          </Box>
        </CardItem>
        {/* 4 Item */}
        <CardItem>
          <img src={PostImg} alt="img" />
          <Description>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <LocationOnOutlinedIcon
                sx={{ color: "#7798B5", fontSize: "20px" }}
              />
              <Typography
                sx={{
                  fontWeight: "200",
                  color: "#7798B5",
                  borderBottom: "1px solid #7798B5",
                }}
              >
                Гродно, ул. Большая Троицкая, 16
              </Typography>
            </Box>
            <Typography
              sx={{ fontWeight: "500", color: "#213342", width: "280px" }}
            >
              Аренда торгово-офисного помещения
            </Typography>
          </Description>
          <Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <CropSquare sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>Площадь: 59,5м2</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <MonetizationOn sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>
                Стоимость: 8$ / 20.17р. за м.кв.
              </Typography>
            </Box>
          </Box>
        </CardItem>
        {/* 5 Item */}
        <CardItem>
          <img src={PostImg} alt="img" />
          <Description>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <LocationOnOutlinedIcon
                sx={{ color: "#7798B5", fontSize: "20px" }}
              />
              <Typography
                sx={{
                  fontWeight: "200",
                  color: "#7798B5",
                  borderBottom: "1px solid #7798B5",
                }}
              >
                Гродно, ул. Большая Троицкая, 16
              </Typography>
            </Box>
            <Typography
              sx={{ fontWeight: "500", color: "#213342", width: "280px" }}
            >
              Аренда торгово-офисного помещения
            </Typography>
          </Description>
          <Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <CropSquare sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>Площадь: 59,5м2</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <MonetizationOn sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>
                Стоимость: 8$ / 20.17р. за м.кв.
              </Typography>
            </Box>
          </Box>
        </CardItem>
        {/* 5 Item */}
        <CardItem>
          <img src={PostImg} alt="img" />
          <Description>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <LocationOnOutlinedIcon
                sx={{ color: "#7798B5", fontSize: "20px" }}
              />
              <Typography
                sx={{
                  fontWeight: "200",
                  color: "#7798B5",
                  borderBottom: "1px solid #7798B5",
                }}
              >
                Гродно, ул. Большая Троицкая, 16
              </Typography>
            </Box>
            <Typography
              sx={{ fontWeight: "500", color: "#213342", width: "280px" }}
            >
              Аренда торгово-офисного помещения
            </Typography>
          </Description>
          <Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <CropSquare sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>Площадь: 59,5м2</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <MonetizationOn sx={{ color: "#E31F26" }} />
              <Typography sx={{ color: "#212121" }}>
                Стоимость: 8$ / 20.17р. за м.кв.
              </Typography>
            </Box>
          </Box>
        </CardItem>
      </CardBox>
      <CatalogButtons>
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#E31F26",
            fontWeight: "100",
            fontSize: "12px",
            width: "300px",
            height : "40px",
            "&:hover": {
              backgroundColor: "#C84432",
            },
            marginRight: "20px",
          }}
          variant="contained"
        >
          <Typography sx={{ fontWeight: "300",fontSize : "13px" }}>
            Полный каталог недвижимости
          </Typography>
        </Button>
        <Button
          sx={{
            color: "#C84432",
            border: "1px solid #E31F26",
            backgroundColor: "#fff",
            fontWeight: "100",
            fontSize: "12px",
            width: "300px",
            "&:hover": {
              backgroundColor: "#fff",
            },
            marginRight: "20px",
          }}
          variant="contained"
        >
          <Typography sx={{ fontWeight: "300",marginRight : "10px" }}>
            Аналитика цен за 1 кв.м.
          </Typography>
          <Timeline />
        </Button>
      </CatalogButtons>
    </CardContainer>
  );
};

export default Card;
