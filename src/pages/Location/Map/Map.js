import { Box, Typography } from "@mui/material";
import { MapDescription } from "./styleMap";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius : "10px"
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  return (
    <Box
      sx={{ display: "flex", margin: "40px 0", justifyContent: "space-around" }}
    >
      <Box
        sx={{
          width: "740px",
          height: "400px",
          background: "lightblue",
          borderRadius: "10px",
        }}
      >
        <LoadScript>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          ></GoogleMap>
        </LoadScript>
      </Box>
      <MapDescription>
        <Box className="Apartments">
          <Typography className="Title">Квартиры</Typography>
          <Box className="Apartment">
            <Box className="ApartmentChild">
              <Typography className="Text">1-комнатные</Typography>
              <Typography className="Number">42</Typography>
            </Box>
          </Box>
          <Box className="Apartment">
            <Box className="ApartmentChild">
              <Typography className="Text">2-комнатные</Typography>
              <Typography className="Number">38</Typography>
            </Box>
          </Box>
          <Box className="Apartment">
            <Box className="ApartmentChild">
              <Typography className="Text">3-комнатные</Typography>
              <Typography className="Number">56</Typography>
            </Box>
          </Box>
          <Box className="Apartment">
            <Box className="ApartmentChild">
              <Typography className="Text">4-комнатные</Typography>
              <Typography className="Number">24</Typography>
            </Box>
          </Box>
          <Box className="Apartment">
            <Box className="ApartmentChild">
              <Typography className="Text">5-комнатные</Typography>
              <Typography className="Number">22</Typography>
            </Box>
          </Box>
          <Box className="Apartment">
            <Box className="ApartmentChild">
              <Typography className="Text">6-комнатные</Typography>
              <Typography className="Number">16</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="Homes">
          <Typography className="Title">Дома и участки</Typography>
          <Box className="Home">
            <Box className="ApartmentChild">
              <Typography className="Text">Дома</Typography>
              <Typography className="Number">26</Typography>
            </Box>
          </Box>
          <Box className="Plots">
            <Box className="ApartmentChild">
              <Typography className="Text">Участки</Typography>
              <Typography className="Number">24</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="Property">
          <Typography className="Title">Коммерческая недвижимость</Typography>
          <Box className="Home">
            <Box className="ApartmentChild">
              <Typography className="Text">Продажа</Typography>
              <Typography className="Number">38</Typography>
            </Box>
          </Box>
          <Box className="Plots">
            <Box className="ApartmentChild">
              <Typography className="Text">Аренда</Typography>
              <Typography className="Number">43</Typography>
            </Box>
          </Box>
        </Box>
      </MapDescription>
    </Box>
  );
};

export default Map;
