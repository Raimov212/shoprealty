import { DescriptionContainer, DescriptionBox } from "./styleDescription";
import Bag from "../../assets/bag.png";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Description = () => {
  return (
    <DescriptionContainer>
      <DescriptionBox>
        <Box className="Content">
          <Typography variant="h4" className="Title">
            О компании
          </Typography>
          <Typography component="p" className="Text">
            «Магазин недвижимости» – риэлтерское агентство в Гродно, Гродненском
            районе и Волковыске. Мы сопровождаем клиента от мысли о
            купле-продаже недвижимости до юридически грамотной и успешной
            сделки. Специализируемся на продаже, покупкеи обмене квартир, домов
            и коммерческой недвижимости, осуществляем юридическое сопровождение
            сделок, помогаем с оценкой и аналитикой, выгодным инвестированием,
            переводом квартир в нежилой фонд и другими услугами
          </Typography>
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#E31F26",
              fontWeight: "100",
              fontSize: "12px",
              width: "150px",
              height: "40px",
              "&:hover": {
                backgroundColor: "#C84432",
              },
              marginTop: "100px",
            }}
            variant="contained"
          >
            Подробнее
          </Button>
        </Box>
      </DescriptionBox>
      <img src={Bag} alt="export" />
    </DescriptionContainer>
  );
};

export default Description;
