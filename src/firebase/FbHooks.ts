import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

const aboutCollection = collection(db, "about");
const portfolioCollection = collection(db, "portfolio");
//  About Datas
export const getAbout = async () => {
  const data = await getDocs(aboutCollection);
  const aboutData = data.docs.map((doc: any) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return aboutData;
};
// Portfolio data
export const getPortfolio = async () => {
  const data = await getDocs(portfolioCollection);
  const portData = data.docs.map((doc: any) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return portData;
};
