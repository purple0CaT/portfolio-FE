import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
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
const textStyle = {
  textOverflow: "ellipsis",
  overflow: "hidden",
  width: "20rem",
};
//
function ALeftCont({ data }: any) {
  return (
    <>
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
      <section className="py-3">
        <h4 className="font-weight-bold">Coordinates</h4>
        <h5>
          {data.coord._lat} {data.coord._long}
        </h5>
      </section>
      <hr className="w-100" />
      <ul className="d-flex flex-column align-items-center w-100 p-0">
        <h5 className="font-weight-bold">Links</h5>
        <li className="d-flex align-items-center">
          <GitHubIcon style={{ color: "white" }} fontSize="large" />
          <a
            rel="noreferrer"
            href={data.github}
            target="_blank"
            className="ml-2 text-dark"
            style={textStyle}
          >
            {data.github}
          </a>
        </li>
        <li className="d-flex align-items-center">
          <LinkedInIcon style={{ color: "white" }} fontSize="large" />
          <a
            rel="noreferrer"
            href={data.linkedin}
            target="_blank"
            className="ml-2 text-dark"
            style={textStyle}
          >
            {data.linkedin}
          </a>
        </li>
        <li className="d-flex align-items-center">
          <InstagramIcon style={{ color: "white" }} fontSize="large" />
          <a
            rel="noreferrer"
            href={data.instagram}
            target="_blank"
            className="ml-2 text-dark"
            style={textStyle}
          >
            {data.instagram}
          </a>
        </li>
        <li className="d-flex align-items-center">
          <YouTubeIcon style={{ color: "white" }} fontSize="large" />
          <a
            rel="noreferrer"
            href={data.youtube}
            target="_blank"
            className="ml-2 text-dark"
            style={textStyle}
          >
            {data.youtube}
          </a>
        </li>
      </ul>
    </>
  );
}

export default ALeftCont;
