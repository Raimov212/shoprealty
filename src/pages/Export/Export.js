import { Description, ExportContainer } from "./styleExport";
import ExportImg from "../../assets/export.png";
import { Button, Typography } from "@mui/material";

const Export = () => {
  return (
    <ExportContainer>
      <img src={ExportImg} alt="export" />
      <Description>
        <Typography variant="h4" className="Title">
          Задайте вопрос эксперту или получите бесплатную консультацию
        </Typography>
        <Typography component="p" className="Text">
          Нужен совет эксперта? Не удалось найти интересующую информацию на
          сайте или остались вопросы? Задайте их профессионалу. Свяжитесь с нами
          по указанным ниже телефонам или заполните форму обратной связи
        </Typography>
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#E31F26",
            fontWeight: "100",
            fontSize: "12px",
            width: "280px",
            height: "40px",
            "&:hover": {
              backgroundColor: "#C84432",
            },
          }}
          variant="contained"
        >
          Задать вопрос эксперту
        </Button>
      </Description>
    </ExportContainer>
  );
};

export default Export;
