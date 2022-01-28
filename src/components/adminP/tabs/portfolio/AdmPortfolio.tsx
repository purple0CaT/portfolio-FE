import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getPortfolio } from "../../../../firebase/FbHooks";
import APortfolioCard from "./APortfolioCard";

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
    // <section className="h-100 w-100">
      <Grid container>
        <Grid item xs={12} md={8}>
          <ul className="adminPortfolio">
            {PortfolioData &&
              PortfolioData.map((item: any) => (
                <APortfolioCard key={item.id} item={item} />
              ))}
          </ul>
        </Grid>
        <Grid item xs={12} md={4}>
          FORM ADD
        </Grid>
      </Grid>
    // </section>
  );
}

export default AdmPortfolio;
