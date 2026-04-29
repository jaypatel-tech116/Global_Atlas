import { Outlet } from "react-router-dom";
import { Footers } from "../UI/Footers";
import { Headers } from "../UI/Headers";
import { ScrollToTop } from "../UI/ScrollToTop";

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <ScrollToTop/>
      <Outlet />
      <Footers />
    </>
  );
};