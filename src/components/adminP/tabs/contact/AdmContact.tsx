import { CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getContact } from "../../../../firebase/FbHooks";
import ALeftCont from "./ALeftCont";
import ARightCont from "./ARightCont";
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
    <div className="h-100 w-100 pt-3 px-2 text-center">
      <Grid container className="h-100">
        <Grid item xs={12} md={7} className="px-3">
          {ContactData ? (
            <div className="adminRegCard">
              <ALeftCont data={ContactData} />
            </div>
          ) : (
            <CircularProgress />
          )}
        </Grid>
        <Grid item xs={12} md={5} className="px-3">
          {ContactData ? (
            <ARightCont data={ContactData} reFetch={fetchContactData} />
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default AdmContact;
