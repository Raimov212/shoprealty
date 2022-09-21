import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed/Feed";
import { Box, Stack } from "@mui/system";
import { ExpandMoreOutlined } from "@mui/icons-material";

const App = () => {
  const scrollWindow = () => {
    window.scroll(100,0);
  };

  return (
    <Box sx={{ maxWidth: "1920px" }}>
      <Navbar />
      <Stack direction="column">
        <button
          style={{
            position: "fixed",
            width: "50px",
            height: "50px",
            background: "none",
            border: "2px solid #E31F26",
            borderRadius: "50%",
            right: "50px",
            bottom: "30px",
            hover: {
              color: "#fff",
              background: "red",
            }, 
          }}
          onClick={scrollWindow}
        >
          <ExpandMoreOutlined style={{ color: "#E31F26", rotate: "180deg" }} />
        </button>
        <Feed />
      </Stack>
    </Box>
  );
};

export default App;
