import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

//
function APortfolioForm() {
  const [ItemForm, setItemForm] = useState({
    title: "",
    image: "",
    description: "",
    url: "",
  });
  //
  const addNewItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("+");
  };
  return (
    <Form className="text-center py-3 px-1" onSubmit={addNewItem}>
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
          <h5 className="m-0">Image</h5>
        </Form.Label>
        <Form.Control
          required
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
    </Form>
  );
}

export default APortfolioForm;
