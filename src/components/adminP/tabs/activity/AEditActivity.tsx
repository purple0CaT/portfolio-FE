import { Modal } from "@mui/material";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { updateActivityItem } from "../../../../firebase/FbHooks";

//
function AEditActivity({ reFetch, handleModal, item }: any) {
  const [EditActivity, setEditActivity]: any = useState({
    text: item.text,
    link: item.link,
  });
  //
  const handleEditActivity = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const match = await updateActivityItem(EditActivity, item.id);
    if (match) {
      reFetch();
      handleModal();
    }
  };
  //
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
        <form className="text-center" onSubmit={handleEditActivity}>
          <Form.Group id="aboutUpdateDesc" className="mb-2">
            <Form.Label className="font-weight-bold">Text Activity</Form.Label>
            <Form.Control
              required
              type="text"
              as="textarea"
              rows={5}
              value={EditActivity.text}
              onChange={(e) =>
                setEditActivity({ ...EditActivity, text: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group id="aboutUpdateExtraDes" className="mb-2">
            <Form.Label className="font-weight-bold">Link</Form.Label>
            <Form.Control
              type="text"
              value={EditActivity.link}
              onChange={(e) =>
                setEditActivity({ ...EditActivity, link: e.target.value })
              }
            />
          </Form.Group>
          <hr />
          <div className="d-flex justify-content-around w-100">
            <Button variant="outline-primary" onClick={handleModal}>
              Cancel
            </Button>
            <Button type="submit" variant="success" size="sm">
              Submit
            </Button>
          </div>
        </form>
      </section>
    </Modal>
  );
}

export default AEditActivity;
