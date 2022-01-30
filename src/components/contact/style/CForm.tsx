import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

//
function CForm() {
  const [formInput, setformInput] = useState({
    email: "",
    name: "",
    message: "",
  });
  //
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`${formInput.email} ${formInput.name} ${formInput.message}`);
  };
  return (
    <section className="h-100 d-flex justify-content-center h-100">
      <form className="contactForm" onSubmit={sendEmail}>
        <h5 className="font-weight-bold">Reach me</h5>
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
        <Button
          type="submit"
          variant="outlined"
          sx={{ color: "white", borderColor: "white" }}
        >
          Send
        </Button>
      </form>
    </section>
  );
}

export default CForm;
