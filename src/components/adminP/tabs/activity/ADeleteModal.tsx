import { Modal } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { deleteActivityItem } from "../../../../firebase/FbHooks";

function ADeleteModal({ handleModal, id, reFetch }: any) {
  //
  const handleDeleteActivity = async () => {
    const confirm = await deleteActivityItem(id);
    confirm && reFetch();
  };
  return (
    <Modal
      open={true}
      onClose={handleModal}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <section
        className="p-3 d-flex align-items-center flex-column justify-content-around"
        style={{
          backgroundColor: "white",
        }}
      >
        <h3 className="font-weight-bold">Delete activity?</h3>
        <hr className="w-100" />
        <div className="d-flex justify-content-around w-100">
          <Button variant="outline-primary" onClick={handleModal}>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={handleDeleteActivity}>
            Delete
          </Button>
        </div>
      </section>
    </Modal>
  );
}

export default ADeleteModal;
