import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";

const aboutCollection = collection(db, "about");
const portfolioCollection = collection(db, "portfolio");
const activityCollection = collection(db, "activities");
const contactCollection = collection(db, "contact");

//  About Datas
export const getAbout = async () => {
  const data = await getDocs(aboutCollection);
  const aboutData = data.docs.map((doc: any) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return aboutData;
};
export const updateAbout = async (id: any, data: any) => {
  const userDoc = doc(db, "about", id);
  await updateDoc(userDoc, data);
  return true;
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
export const deletePortfolioItem = async (id: string) => {
  const userDoc = doc(db, "portfolio", id);
  await deleteDoc(userDoc);
  return true;
};
export const addNewPortfolioItem = async (data: any) => {
  await addDoc(portfolioCollection, data);
  return true;
};
export const updatePortfolioItem = async (data: any, id: string) => {
  const userDoc = doc(db, "portfolio", id);
  await updateDoc(userDoc, data);
  return true;
};
// Activity
export const getActivity = async () => {
  const q = query(activityCollection, orderBy("createdAt", "desc"));
  const data = await getDocs(q);
  const activData = data.docs.map((doc: any) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return activData;
};
export const addNewActivity = async (data: any) => {
  await addDoc(activityCollection, data);
  return true;
};
export const updateActivityItem = async (data: any, id: string) => {
  const userDoc = doc(db, "activities", id);
  await updateDoc(userDoc, data);
  return true;
};
export const deleteActivityItem = async (id: string) => {
  const userDoc = doc(db, "activities", id);
  await deleteDoc(userDoc);
  return true;
};
// Contact
export const getContact = async () => {
  const data = await getDocs(contactCollection);
  const portData = data.docs.map((doc: any) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return portData;
};
export const updateContact = async (data: any, id: string) => {
  const userDoc = doc(db, "contact", id);
  await updateDoc(userDoc, data);
  return true;
};
