import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getPortfolio } from "../../../../firebase/FbHooks";
import APortfolioCard from "./APortfolioCard";
import APortfolioForm from "./APortfolioForm";

function AdmPortfolio() {
  const [PortfolioData, setPortfolioData] = useState<any | null>(null);
  //
  async function loadAboutData() {
    const fetchedData = await getPortfolio();
    setPortfolioData(fetchedData);
    console.log(fetchedData);
  }
  //
  useEffect(() => {
    loadAboutData();
  }, []);
  return (
    <Grid container className="h-100">
      <Grid item xs={12} md={8}>
        <section className="d-flex align-items-center h-100 p-2">
          <ul className="adminPortfolio">
            {PortfolioData &&
              PortfolioData.map((item: any) => (
                <APortfolioCard
                  key={item.id + "admin"}
                  item={item}
                  reFetch={loadAboutData}
                />
              ))}
          </ul>
        </section>
      </Grid>
      <Grid item xs={12} md={4}>
        <section className="d-flex align-items-center h-100">
          <APortfolioForm reFetch={loadAboutData} />
        </section>
      </Grid>
    </Grid>
  );
}

export default AdmPortfolio;
