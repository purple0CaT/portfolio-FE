import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Grid, IconButton } from "@mui/material";
import { height } from "@mui/system";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { getContact } from "../../firebase/FbHooks";
import CForm from "./CForm";
import CInfo from "./CInfo";
import "./style/Resum.scss";

function Contact() {
  const [ContactData, setContactData]: null | any = useState(null);
  //
  const fetchContactData = async () => {
    const contData = await getContact();
    setContactData(contData[0]);
  };
  useEffect(() => {
    fetchContactData();
  }, []);
  return (
    <main
      className="resumWrapper sectionWrapper"
      style={{ minHeight: "calc(100vh - 3rem)", height: "unset" }}
    >
      <section className="d-flex justify-content-center p-3">
        <h1 className="text-center position-relative m-0">
          Contact
          <div className="nextSectionTab">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-48}
              duration={400}
            >
              <IconButton size="small">
                <ArrowUpwardIcon />
              </IconButton>
            </Link>
          </div>
        </h1>
      </section>
      <section className="h-100  my-auto">
        <Grid container className="h-100">
          <Grid item xs={12} md={7}>
            <CForm />
          </Grid>
          <Grid item xs={12} md={5}>
            {ContactData && <CInfo data={ContactData} />}
          </Grid>
        </Grid>
      </section>
    </main>
  );
}

export default Contact;
