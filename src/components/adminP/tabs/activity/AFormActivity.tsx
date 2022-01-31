import { Firestore, serverTimestamp, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addNewActivity } from "../../../../firebase/FbHooks";

//
function AFormActivity({ reFetch }: any) {
  const [NewActivity, setNewActivity] = useState<any>({
    text: "",
    link: "",
  });
  //
  const handleNewItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTime = Timestamp.now();
    const created: any = await addNewActivity({
      ...NewActivity,
      createdAt: currentTime,
    });
    if (created) {
      setNewActivity({
        text: "",
        link: "",
      });
      reFetch();
    }
  };
  //
  return (
    <section className="w-100 h-100 d-flex align-items-center justify-content-center p-3">
      <form className="activityForm" onSubmit={handleNewItem}>
        <Form.Group id="aboutUpdateDesc" className="mb-2">
          <Form.Label className="font-weight-bold">Text Activity</Form.Label>
          <Form.Control
            required
            type="text"
            as="textarea"
            rows={5}
            value={NewActivity.text}
            onChange={(e) =>
              setNewActivity({ ...NewActivity, text: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group id="aboutUpdateExtraDes" className="mb-2">
          <Form.Label className="font-weight-bold">Link</Form.Label>
          <Form.Control
            type="text"
            value={NewActivity.link}
            onChange={(e) =>
              setNewActivity({ ...NewActivity, link: e.target.value })
            }
          />
        </Form.Group>
        <hr />
        <Button type="submit" variant="success" size="sm">
          Submit
        </Button>
      </form>
    </section>
  );
}

export default AFormActivity;
