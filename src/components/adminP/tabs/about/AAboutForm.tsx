import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { updateAbout } from "../../../../firebase/FbHooks";
//
interface AboutType {
  AboutData: {
    image: string;
    extraDes: string;
    id: string;
    description: string;
  } | null;
  reFetch: () => {};
}
//
function AAboutForm({ AboutData, reFetch }: AboutType) {
  const [Loading, setLoading] = useState(false);
  const [AboutForm, setAboutForm] = useState({
    description: "",
    extraDes: "",
    image: "",
  });
  //
  const submitUpdates = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const complete = await updateAbout(AboutData?.id, AboutForm);
    if (complete) reFetch();
    setLoading(false);
  };
  //
  useEffect(() => {
    AboutData && setAboutForm(AboutData);
  }, []);
  return (
    <>
      {AboutForm && (
        <Form
          className="adminFormSection"
          onSubmit={submitUpdates}
          style={{ width: "100%" }}
        >
          <>
            <Form.Group id="aboutUpdateDesc" className="mb-2">
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
            <Form.Group id="aboutUpdateExtraDes" className="mb-2">
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
            <Form.Group id="aboutUpdateExtraDes" className="mb-2">
              <Form.Label className="font-weight-bold">Extra Info</Form.Label>
              <Form.Control
                value={AboutForm.image}
                onChange={(e) =>
                  setAboutForm({ ...AboutForm, image: e.target.value })
                }
              />
            </Form.Group>
            <hr />
            <Button
              disabled={Loading}
              type="submit"
              variant="success"
              size="sm"
            >
              Submit
            </Button>
          </>
        </Form>
      )}
    </>
  );
}

export default AAboutForm;
