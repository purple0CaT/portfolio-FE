import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
//
function APortfolioCard({ item }: any) {
  return (
    <li className="aPortfolioCard">
      <div className="d-flex justify-content-around w-100">
        <IconButton color="info">
          <AutoFixHighIcon />
        </IconButton>
        <IconButton color="error">
          <HighlightOffIcon />
        </IconButton>
      </div>
      <hr className="w-100 my-1" />
      <h4>{item.title}</h4>
      <img src={item.image} alt={item.title} style={{ width: "15rem" }} />
      <p>{item.description}</p>
      <a href={item.url} target="_blank">
        <small>{item.url}</small>
      </a>
    </li>
  );
}

export default APortfolioCard;
