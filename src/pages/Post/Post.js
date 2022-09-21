import React from "react";
import Calkulyator from "./Calculyator/Calkulyator";
import Card from "./Card/Card";
import Vektor from "../../assets/Vector.png";
import { Container } from "@mui/system";

const Post = () => {
  return (
    <div style={{ background: "#F9F9FA" }}>
      <Card />
      <Container>
        <img src={Vektor} style={{ width: "1150px" }} alt="vektor" />
      </Container>
      <Calkulyator />
    </div>
  );
};

export default Post;
