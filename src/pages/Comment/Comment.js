import { Container } from "@mui/material";
import Vektor from "../../assets/Vector.png";
import Video from "./Video/Video";
import { Wrapper } from "./styleComment";
import Certificate from './Certificate/Certificate'

const Comment = () => {
  return (
    <Wrapper>
      <Container>
        <Video />
        <img src={Vektor} style={{ width: "1150px" }} alt="vektor" />
        <Certificate />
      </Container>
    </Wrapper>
  );
};

export default Comment;
