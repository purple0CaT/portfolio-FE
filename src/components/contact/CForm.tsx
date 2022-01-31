import emailjs from "@emailjs/browser";
import {
  Alert,
  Button,
  Checkbox,
  CircularProgress,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

//
function CForm() {
  const [ButtonLoader, setButtonLoader] = useState(false);
  const [CheckBoxes, setCheckBoxes] = useState({ first: false, second: false });
  const [formInput, setformInput] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [AlertVisible, setAlertVisible] = useState({
    type: "success",
    visible: false,
  });
  // CHeckBox
  const handleCheckBox = (type: string) => {
    if (type === "first") {
      setCheckBoxes({ second: false, first: !CheckBoxes.first });
    } else {
      setCheckBoxes({ ...CheckBoxes, second: !CheckBoxes.second });
    }
  };
  // Email Handler
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonLoader(true);
    emailjs
      .send(
        "service_hvzoeqr",
        "template_uhrvu9k",
        formInput,
        process.env.REACT_APP_EMAIL_USERID,
      )
      .then(
        (response) => {
          setformInput({
            email: "",
            name: "",
            message: "",
          });
          setCheckBoxes({ first: false, second: false });
          setButtonLoader(false);
          setAlertVisible({ type: "success", visible: true });
          setTimeout(() => {
            setAlertVisible({ type: "", visible: false });
          }, 2000);
        },
        (err) => {
          setCheckBoxes({ first: false, second: false });
          setAlertVisible({ type: "error", visible: true });
          setTimeout(() => {
            setAlertVisible({ type: "", visible: false });
          }, 2000);
          setButtonLoader(false);
        },
      );
  };
  return (
    <section className="h-100 d-flex justify-content-center h-100">
      <form className="contactForm" onSubmit={sendEmail}>
        <h5 className="font-weight-bold">Get In Touch</h5>
        <hr className="w-100" />
        <TextField
          required
          id="contact-Name"
          label="Your Name"
          variant="standard"
          className="formInputComp"
          type="text"
          value={formInput.name}
          onChange={(e) => setformInput({ ...formInput, name: e.target.value })}
        />
        <TextField
          required
          id="contact-email"
          label="Your email"
          variant="standard"
          type="email"
          className="formInputComp"
          value={formInput.email}
          onChange={(e) =>
            setformInput({ ...formInput, email: e.target.value })
          }
        />
        <TextField
          required
          multiline
          rows={4}
          id="contact-message"
          label="Your message"
          variant="standard"
          type="text"
          className="formInputComp"
          value={formInput.message}
          onChange={(e) =>
            setformInput({ ...formInput, message: e.target.value })
          }
        />
        <section className="mb-2 d-flex justify-content-around w-100">
          <div className="d-flex align-items-center">
            <Checkbox
              color="default"
              checked={CheckBoxes.first}
              onChange={() => handleCheckBox("first")}
            />
            <p className="m-0">Not a robot?</p>
          </div>
          {CheckBoxes.first && (
            <div className="d-flex align-items-center">
              <Checkbox
                color="default"
                checked={CheckBoxes.second}
                onChange={() => handleCheckBox("second")}
              />
              <p className="m-0">Are you sure?</p>
            </div>
          )}
        </section>
        {ButtonLoader ? (
          <CircularProgress />
        ) : (
          <>
            {AlertVisible.visible ? (
              <Alert
                severity={AlertVisible.type === "success" ? "success" : "error"}
              >
                {AlertVisible.type === "success" ? "Message sent!" : "Error"}
              </Alert>
            ) : (
              <Button
                disabled={CheckBoxes.first && CheckBoxes.second ? false : true}
                type="submit"
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
              >
                Send
              </Button>
            )}
          </>
        )}
      </form>
    </section>
  );
}

export default CForm;
