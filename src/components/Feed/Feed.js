import { Box } from "@mui/system";
import Post from "../../pages/Post/Post";
import Primary from "../../pages/Primary/Primary";
import Export from "../../pages/Export/Export";
import Location from "../../pages/Location/Location";
import Description from "../../pages/Description/Description";
import Workers from "../../pages/Workers/Workers";
import News from "../../pages/News/News";
import Comment from "../../pages/Comment/Comment";
import Instagram from "../../pages/Instagram/Instagram";
import About from "../../pages/About/About";

const Feed = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Primary />
      <Post />
      <Export />
      {/* <Location />
      <Description />
      <Workers />
      <News />
      <Comment />
      <Instagram />
      <About /> */}
    </Box>
  );
};

export default Feed;
