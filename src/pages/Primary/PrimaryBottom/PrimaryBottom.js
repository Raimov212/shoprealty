import { ExpandMoreOutlined } from "@mui/icons-material";
import { Box,  Typography } from "@mui/material";
import {
  Buy,
  CardContainer,
  ContainerBox,
  ContainerItem,
} from "./bottomPrimaryStyle";

const PRimaryBottom = () => {
  return (
    <ContainerBox>
      <CardContainer>
        <ContainerItem maxWidth="sm">
          <Typography variant="h5" sx={{ fontWeight: "400" }}>
            <Buy>
              Купить
              <ExpandMoreOutlined />
            </Buy>
          </Typography>
          <Box>
            <Typography sx={{ fontWeight: "100" }}>
              Всего предложений
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>436</Typography>
          </Box>
        </ContainerItem>
      </CardContainer>
      <CardContainer>
        <ContainerItem maxWidth="sm">
          <Typography variant="h5" sx={{ fontWeight: "400" }}>
            <Buy>
              Купить
              <ExpandMoreOutlined />
            </Buy>
          </Typography>
          <Box>
            <Typography sx={{ fontWeight: "100" }}>
              Всего предложений
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>326</Typography>
          </Box>
        </ContainerItem>
      </CardContainer>
      <CardContainer>
        <ContainerItem maxWidth="sm">
          <Typography variant="h5" sx={{ fontWeight: "400" }}>
            <Buy>
              Продать
              <ExpandMoreOutlined />
            </Buy>
          </Typography>
          <Box>
            <Typography sx={{ fontWeight: "100" }}>
              Всего предложений
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>164</Typography>
          </Box>
        </ContainerItem>
      </CardContainer>
      <CardContainer>
        <ContainerItem maxWidth="sm">
          <Typography variant="h5" sx={{ fontWeight: "400" }}>
            <Buy>
              Новостройки со скидкой
              <ExpandMoreOutlined />
            </Buy>
          </Typography>
          <Box>
            <Typography sx={{ fontWeight: "100" }}>
              Всего предложений
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>68</Typography>
          </Box>
        </ContainerItem>
      </CardContainer>
    </ContainerBox>
  );
};

export default PRimaryBottom;
