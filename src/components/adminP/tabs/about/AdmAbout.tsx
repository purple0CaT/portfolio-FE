import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
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
  return (
    <Grid container className="h-100">
      <Grid item xs={12} md={6} className="adminAboutSection__info">
        <AAboutInfo AboutData={AboutData} />
      </Grid>
      <Grid item xs={12} md={6} className="adminAboutSection__form">
        <AAboutForm AboutData={AboutData} />
      </Grid>
    </Grid>
  );
}

export default AdmAbout;
