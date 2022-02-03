import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { updateContact } from "../../../../firebase/FbHooks";

//
function ARightCont({ data, reFetch }: any) {
  const [ContactForm, setContactForm]: any = useState(data);
  //
  const updateContactInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const check = await updateContact(ContactForm, data.id);
    if (check) {
      reFetch();
    }
  };
  useEffect(() => {
    setContactForm(data);
  }, []);
  return (
    <section className="d-flex justify-content-center">
      {ContactForm && (
        <form className="adminAboutForm" onSubmit={updateContactInfo}>
          <Form.Group className="w-100">
            <Form.Label>Coordinates</Form.Label>
            <Form.Control
              value={ContactForm.coord._lat}
              onChange={(e) =>
                setContactForm({
                  ...ContactForm,
                  coord: { ...ContactForm.coord, _lat: e.target.value },
                })
              }
            />
            <Form.Control
              value={ContactForm.coord._long}
              onChange={(e) =>
                setContactForm({
                  ...ContactForm,
                  coord: { ...ContactForm.coord, _long: e.target.value },
                })
              }
            />
          </Form.Group>
          <Form.Group className="w-100">
            <Form.Label>Github</Form.Label>
            <Form.Control
              value={ContactForm.github}
              onChange={(e) =>
                setContactForm({ ...ContactForm, github: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="w-100">
            <Form.Label>LinkedIn</Form.Label>
            <Form.Control
              value={ContactForm.linkedin}
              onChange={(e) =>
                setContactForm({ ...ContactForm, linkedin: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="w-100">
            <Form.Label>Instagram</Form.Label>
            <Form.Control
              value={ContactForm.linkedin}
              onChange={(e) =>
                setContactForm({ ...ContactForm, instagram: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="w-100">
            <Form.Label>YouTube</Form.Label>
            <Form.Control
              value={ContactForm.linkedin}
              onChange={(e) =>
                setContactForm({ ...ContactForm, youtube: e.target.value })
              }
            />
          </Form.Group>
          <hr />
          <Button type="submit" variant="outline-success">
            Update
          </Button>
        </form>
      )}
    </section>
  );
}

export default ARightCont;
