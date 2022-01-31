import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addNewPortfolioItem } from "../../../../firebase/FbHooks";

//
function APortfolioForm({ reFetch }: any) {
  const [ItemForm, setItemForm] = useState({
    title: "",
    image: "",
    description: "",
    url: "",
  });
  //
  const addNewItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const match = await addNewPortfolioItem(ItemForm);
    if (match) {
      reFetch();
    }
  };
  return (
    <form className="portfolioForm" onSubmit={addNewItem}>
      <Form.Group id="itemTitle" className="mb-2">
        <Form.Label>
          <h5 className="m-0">Title</h5>
        </Form.Label>
        <Form.Control
          required
          value={ItemForm.title}
          onChange={(e) => setItemForm({ ...ItemForm, title: e.target.value })}
        />
      </Form.Group>
      <Form.Group id="itemImage" className="mb-2">
        <Form.Label>
          <h5 className="m-0">Image</h5>
        </Form.Label>
        <Form.Control
          required
          value={ItemForm.image}
          onChange={(e) => setItemForm({ ...ItemForm, image: e.target.value })}
        />
      </Form.Group>
      <Form.Group id="itemDescription" className="mb-2">
        <Form.Label>
          <h5 className="m-0">Description</h5>
        </Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          value={ItemForm.description}
          onChange={(e) =>
            setItemForm({ ...ItemForm, description: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group id="itemUrl" className="mb-2">
        <Form.Label>
          <h5 className="m-0">Url</h5>
        </Form.Label>
        <Form.Control
          required
          value={ItemForm.url}
          onChange={(e) => setItemForm({ ...ItemForm, url: e.target.value })}
        />
      </Form.Group>
      <hr />
      <Button type="submit" variant="info" size="sm">
        Add
      </Button>
    </form>
  );
}

export default APortfolioForm;
