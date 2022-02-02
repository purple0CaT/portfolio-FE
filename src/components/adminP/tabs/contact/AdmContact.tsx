import { CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getContact } from "../../../../firebase/FbHooks";
import ALeftCont from "./ALeftCont";
//
function AdmContact() {
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
    <div className="h-100 w-100 pt-5 px-2 text-center">
      <Grid container className="h-100">
        <Grid item xs={12} md={7}>
          {ContactData ? (
            <div className="d-flex flex-column align-items-center">
              <ALeftCont data={ContactData} />
            </div>
          ) : (
            <CircularProgress />
          )}
        </Grid>
        <Grid item xs={12} md={5}></Grid>
      </Grid>
    </div>
  );
}

export default AdmContact;
