import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton } from "@mui/material";
import dateFormat from "dateformat";
import { useState } from "react";
import ADeleteModal from "./ADeleteModal";
import AEditActivity from "./AEditActivity";

//
function ASingleActivity({ item, reFetch }: any) {
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
    <li className="adminActivityItem">
      <div className="d-flex justify-content-around w-100">
        <IconButton color="info" onClick={handleEditModal}>
          <AutoFixHighIcon />
        </IconButton>
        {VisibleEditModal && (
          <AEditActivity
            reFetch={reFetch}
            handleModal={handleEditModal}
            item={item}
          />
        )}
        <IconButton color="error" onClick={handleDeleteModal}>
          <HighlightOffIcon />
        </IconButton>
        {VisibleDeleteModal && (
          <ADeleteModal
            handleModal={handleDeleteModal}
            id={item.id}
            reFetch={reFetch}
          />
        )}
      </div>
      <hr className="w-100 my-1" />
      <small className="font-weight-bold text-right">
        {dateFormat(new Date(item.createdAt.seconds * 1000), "mmm d, yyyy")}
      </small>
      <p>{item.text}</p>
      {item.link && (
        <a href={item.link} target="_blank" className="text-center">
          <small className="font-weight-bold"> Click Here</small>
        </a>
      )}
    </li>
  );
}

export default ASingleActivity;
