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
function CInfo() {
  const lat = 53.4084;
  const lon = -2.9916;
  //
  return (
    <main className="h-100 px-5 py-4 d-flex flex-column justify-content-around">
      <section>
        <MapContainer
          center={[lat, lon]}
          zoom={8}
          scrollWheelZoom={false}
          style={{ minWidth: "20vh", minHeight: "30vh", borderRadius: "20px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          <Marker position={[lat, lon]} icon={getIcon(30)} />
          {/* {profile && <Circle center={[lat, lon]} radius={2000} />} */}
        </MapContainer>
      </section>
      <section className="d-flex flex-column w-100">
        <div className="d-flex align-items-center">
          <h4 className="font-weight-bold m-0">Socials: </h4>
          <div className="d-flex align-items-center">
            <a href="https://github.com/purple0CaT" target="_blank">
              <IconButton style={{ color: "white" }} size="large" color="info">
                <GitHubIcon fontSize="large" />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/purplekot/" target="_blank">
              <IconButton style={{ color: "white" }} size="large" color="info">
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/_sandoraw_/" target="_blank">
              <IconButton style={{ color: "white" }} size="large" color="info">
                <InstagramIcon fontSize="large" />
              </IconButton>
            </a>
            <a
              href="https://www.youtube.com/channel/UCgSrqsVm25E7ivuRJobzm4g"
              target="_blank"
            >
              <IconButton style={{ color: "white" }} size="large" color="info">
                <YouTubeIcon fontSize="large" />
              </IconButton>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CInfo;
