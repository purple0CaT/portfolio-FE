import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getAbout } from "../../../../firebase/FbHooks";
import AAboutForm from "./AAboutForm";
import AAboutInfo from "./AAboutInfo";
//
interface AboutType {
  image: string;
  extraDes: string;
  id: string;
  description: string;
}
//
function AdmAbout() {
  const [AboutData, setAboutData] = useState<AboutType | null>(null);
  //
  async function loadAboutData() {
    const fetchedData = await getAbout();
    setAboutData(fetchedData[0]);
  }
  //
  useEffect(() => {
    loadAboutData();
  }, []);
  return AboutData ? (
    <Grid container className="pt-5">
      <Grid
        item
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center"
      >
        <AAboutInfo AboutData={AboutData} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center"
      >
        <AAboutForm AboutData={AboutData} reFetch={loadAboutData} />
      </Grid>
    </Grid>
  ) : (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <Spinner animation="border" variant="info" />
    </div>
  );
}

export default AdmAbout;
