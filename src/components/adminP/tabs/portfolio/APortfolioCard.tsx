import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ADeletePortf from "./ADeletePortf";
import { useState } from "react";
import AEditPortfolio from "./AEditPortfolio";
//
function APortfolioCard({ item, reFetch }: any) {
  const [VisibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const [VisibleEditModal, setVisibleEditModal] = useState(false);
  //
  const handleDeleteModal = () => {
    setVisibleDeleteModal(!VisibleDeleteModal);
  };
  //
  const handleEditModal = () => {
    setVisibleEditModal(!VisibleEditModal);
  };
  return (
    <li className="aPortfolioCard">
      <div className="d-flex justify-content-around w-100">
        <IconButton color="info" onClick={handleEditModal}>
          <AutoFixHighIcon />
        </IconButton>
        {VisibleEditModal && (
          <AEditPortfolio
            reFetch={reFetch}
            handleModal={handleEditModal}
            item={item}
          />
        )}
        <IconButton color="error" onClick={handleDeleteModal}>
          <HighlightOffIcon />
        </IconButton>
        {VisibleDeleteModal && (
          <ADeletePortf
            handleModal={handleDeleteModal}
            id={item.id}
            reFetch={reFetch}
          />
        )}
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
