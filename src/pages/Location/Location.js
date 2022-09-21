import { Container } from "@mui/material";
import Map from "./Map/Map";
import { LocationContainer } from "./styleLocation";
import Vektor from "../../assets/Vector.png";
import PostLast from "./PostLast/PostLast";

const Location = () => {
  return (
    <LocationContainer>
      <Container>
        <Map />
        <img src={Vektor} style={{ width: "1150px" }} alt="vektor" />
        <PostLast />
      </Container>
    </LocationContainer>
  );
};

export default Location;
