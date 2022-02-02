import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
//
function getIcon(iconSize: any) {
  return L.icon({
    iconUrl:
      "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize,
    iconAnchor: [15, 30],
  });
}

//
function CInfo({ data }: any) {
  //
  return (
    <main className="h-100 py-4 d-flex flex-column justify-content-around align-items-center">
      <section
        style={{
          width: "80%",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={[data.coord._lat, data.coord._long]}
          zoom={8}
          scrollWheelZoom={false}
          style={{
            minWidth: "20vh",
            minHeight: "30vh",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          <Marker
            position={[data.coord._lat, data.coord._long]}
            icon={getIcon(30)}
          />
        </MapContainer>
      </section>
      <section className="d-flex align-items-center py-2 justify-content-around">
        <a href={data.github} target="_blank">
          <IconButton style={{ color: "white" }} size="large" color="info">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </a>
        <a href={data.linkedin} target="_blank">
          <IconButton style={{ color: "white" }} size="large" color="info">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </a>
        <a href={data.instagram} target="_blank">
          <IconButton style={{ color: "white" }} size="large" color="info">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </a>
        <a href={data.youtube} target="_blank">
          <IconButton style={{ color: "white" }} size="large" color="info">
            <YouTubeIcon fontSize="large" />
          </IconButton>
        </a>
      </section>
    </main>
  );
}

export default CInfo;
