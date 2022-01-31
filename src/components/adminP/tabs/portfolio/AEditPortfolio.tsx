import { Modal } from "@mui/material";
import { title } from "process";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { updatePortfolioItem } from "../../../../firebase/FbHooks";

//
function AEditPortfolio({ item, reFetch, handleModal }: any) {
  const [EditForm, setEditForm] = useState({
    title: item.title,
    image: item.image,
    description: item.description,
    url: item.url,
  });
  //
  const editItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const match = await updatePortfolioItem(EditForm, item.id);
    if (match) {
      reFetch();
      handleModal();
    }
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
          borderRadius: "10px",
        }}
      >
        <form className="text-center" onSubmit={editItem}>
          <Form.Group id="itemTitle" className="mb-2">
            <Form.Label>
              <h5 className="m-0">Title</h5>
            </Form.Label>
            <Form.Control
              required
              value={EditForm.title}
              onChange={(e) =>
                setEditForm({ ...EditForm, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group id="itemImage" className="mb-2">
            <Form.Label>
              <h5 className="m-0">Image</h5>
            </Form.Label>
            <Form.Control
              required
              value={EditForm.image}
              onChange={(e) =>
                setEditForm({ ...EditForm, image: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group id="itemDescription" className="mb-2">
            <Form.Label>
              <h5 className="m-0">Description</h5>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              value={EditForm.description}
              onChange={(e) =>
                setEditForm({ ...EditForm, description: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group id="itemUrl" className="mb-2">
            <Form.Label>
              <h5 className="m-0">Url</h5>
            </Form.Label>
            <Form.Control
              required
              value={EditForm.url}
              onChange={(e) =>
                setEditForm({ ...EditForm, url: e.target.value })
              }
            />
          </Form.Group>
          <hr />
          <div className="d-flex justify-content-around">
            <Button variant="outline-danger" onClick={handleModal}>
              Cancel
            </Button>
            <Button type="submit" variant="outline-info" size="sm">
              Edit
            </Button>
          </div>
        </form>
      </section>
    </Modal>
  );
}

export default AEditPortfolio;
