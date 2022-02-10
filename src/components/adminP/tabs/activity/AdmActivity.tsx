import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getActivity } from "../../../../firebase/FbHooks";
import AFormActivity from "./AFormActivity";
import ASingleActivity from "./ASingleActivity";

function AdmActivity() {
  const [ActivityData, setActivityData] = useState<any>(null);
  //
  async function loadActivityData() {
    const fetchedData = await getActivity();
    setActivityData(fetchedData);
  }
  //
  useEffect(() => {
    loadActivityData();
  }, []);
  return (
    <main className="h-100 w-100 pt-3">
      <Grid container className="h-100">
        <Grid item xs={12} md={8}>
          <ul className="adminScrollList">
            {ActivityData &&
              ActivityData.map((item: any) => (
                <ASingleActivity
                  item={item}
                  key={item.id + "admin"}
                  reFetch={loadActivityData}
                />
              ))}
          </ul>
        </Grid>
        <Grid item xs={12} md={4}>
          <AFormActivity reFetch={loadActivityData} />
        </Grid>
      </Grid>
    </main>
  );
}
export default AdmActivity;
