import { Button, Container, Typography } from "@mui/material";
import { BoxText, Text } from "./primaryStyle";
import "./style.css";
import PrimaryMedium from "./PrimaryMedium/PrimaryMedium";
import PRimaryBottom from "./PrimaryBottom/PrimaryBottom";

const Primary = () => {
  return (
    <div>
      <div className="Container1">
        <Container maxWidth="lg" sx={{ paddingTop: "120px" }}>
          <Text>
            <Typography variant="h2" sx={{ fontWeight: "400" }}>
              Поможем купить <b4 />
              Вашу недвижимость
            </Typography>
            <Typography variant="h4"> быстро, выгодно, безопасно</Typography>
          </Text>
          <BoxText>
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#E31F26",
                fontWeight: "100",
                fontSize: "12px",
                "&:hover": {
                  backgroundColor: "#C84432",
                },
                marginRight: "20px",
              }}
              variant="contained"
            >
              Консультация
            </Button>
            <Typography
              component="p"
              sx={{ marginRight: "20px", fontWeight: "100" }}
            >
              или
            </Typography>
            <Typography component="h6" sx={{ borderBottom: "1px solid #fff",}}>
              Бесплатная оценка
            </Typography>
          </BoxText>
          <PrimaryMedium />
          <PRimaryBottom />
        </Container>
      </div>
      <div className="Container2"></div>
    </div>
  );
};

export default Primary;
