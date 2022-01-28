import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
//
interface AboutType {
  AboutData: {
    image: string;
    extraDes: string;
    id: string;
    description: string;
  } | null;
}
//
function AAboutForm({ AboutData }: AboutType) {
  const [AboutForm, setAboutForm] = useState({
    description: "",
    extraDes: "",
  });
  //
  const submitUpdates = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submited!");
  };
  //
  useEffect(() => {
    AboutData && setAboutForm(AboutData);
  }, []);
  return (
    <Form onSubmit={submitUpdates}>
      {AboutForm && (
        <>
          <Form.Group id="aboutUpdateDesc">
            <Form.Label className="font-weight-bold">Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={5}
              value={AboutForm.description}
              onChange={(e) =>
                setAboutForm({ ...AboutForm, description: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group id="aboutUpdateExtraDes">
            <Form.Label className="font-weight-bold">Extra Info</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={AboutForm.extraDes}
              onChange={(e) =>
                setAboutForm({ ...AboutForm, extraDes: e.target.value })
              }
            />
          </Form.Group>
          <hr />
          <Button type="submit" variant="success" size="sm">
            Submit
          </Button>
        </>
      )}
    </Form>
  );
}

export default AAboutForm;
