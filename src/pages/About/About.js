import { Box } from "@mui/system";
import React from "react";
import {
  ContainerAbout,
  ItemAbout,
  ItemWrapper,
  Text,
  Wrapper,
} from "./styleAbout";
import logo from "../../assets/logo.png";
import { Typography } from "@mui/material";
import {
  EmailOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  RoomOutlined,
  ScheduleOutlined,
  YouTube,
} from "@mui/icons-material";
import Vector from "../../assets/Vector.png";

const About = () => {
  return (
    <Wrapper>
      <ContainerAbout>
        <ItemAbout>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <img  src={logo} alt="logo" />
            <Box>
              <Text>ООО «Магазин недвижимости»</Text>
              <Text>УНП 124764878</Text>
            </Box>
            <Box className="IconWrapper">
              <Box className="IconItem">
                <LinkedIn className="Icon" />
              </Box>
              <Box className="IconItem">
                <Instagram className="Icon" />
              </Box>
              <Box className="IconItem">
                <YouTube className="Icon" />
              </Box>
              <Box className="IconItem">
                <Facebook className="Icon" />
              </Box>
            </Box>
            <Text sx={{ borderBottom: "1px solid #FFFFFF", width: "82px" }}>
              Реквизиты
            </Text>
          </Box>
          <Box>
            <Text style={{ fontWeight: "400" }}>г. Гродно</Text>
            <ItemWrapper>
              <Phone className="IconCall" />
              <Text>+375 (152) 68-76-76</Text>
            </ItemWrapper>
            <ItemWrapper>
              <Phone className="IconCall" />
              <Text>+375 (44) 596-76-76</Text>
            </ItemWrapper>
            <ItemWrapper>
              <Phone className="IconCall" />
              <Text>+375 (29) 596-76-76</Text>
            </ItemWrapper>
            <ItemWrapper>
              <RoomOutlined className="IconCall" />
              <Text sx={{ width: "250px" }}>
                230023, г. Гродно, Беларусь, ул. Тимирязева, д. 10/1, офис 4 (БЦ
                "Августовский")
              </Text>
            </ItemWrapper>
          </Box>
          <Box>
            <Text style={{ fontWeight: "400" }}>г. Волковыск</Text>
            <ItemWrapper>
              <Phone className="IconCall" />
              <Text>+375 (1512) 25-45-4</Text>
            </ItemWrapper>
            <ItemWrapper>
              <Phone className="IconCall" />
              <Text>+375 (33) 903-45-49</Text>
            </ItemWrapper>
            <ItemWrapper>
              <Phone className="IconCall" />
              <Text>+375 (29) 623-74-16</Text>
            </ItemWrapper>
          </Box>
          <Box>
            <Text style={{ fontWeight: "400" }}>Время работы:</Text>
            <ItemWrapper>
              <ScheduleOutlined className="IconCall" />
              <Text>Пн – Пт: 09:00 – 19:00</Text>
            </ItemWrapper>
            <ItemWrapper>
              <ScheduleOutlined className="IconCall" />
              <Text>Сб: 09:00 – 15:00</Text>
            </ItemWrapper>
            <ItemWrapper sx={{ marginTop: "15px" }}>
              <EmailOutlined className="IconCall" />
              <Text>info@shoprealty.by</Text>
            </ItemWrapper>
          </Box>
        </ItemAbout>
        <Box>
          <img style={{ width: "1150px" }} src={Vector} alt="img" />
          <Box className="ItemBottom">
            <Text>
              ООО «Магазин недвижимости» - продажа недвижимости 2021 ©
            </Text>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Text>Редизайн сайта</Text>
              <Text style={{fontWeight : "bold"}}>Grondi</Text>
            </Box>
          </Box>
        </Box>
      </ContainerAbout>
    </Wrapper>
  );
};

export default About;
