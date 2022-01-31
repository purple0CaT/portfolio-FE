import { Modal } from "@mui/material";
import { Button } from "react-bootstrap";
import { deletePortfolioItem } from "../../../../firebase/FbHooks";

//
function ADeletePortf({ handleModal, reFetch, id }: any) {
  //
  const handleDeleteActivity = async () => {
    const confirm = await deletePortfolioItem(id);
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
        <h3 className="font-weight-bold">Delete portfolio item?</h3>
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

export default ADeletePortf;
