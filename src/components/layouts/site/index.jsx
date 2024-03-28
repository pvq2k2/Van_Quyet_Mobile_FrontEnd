import { Outlet } from "react-router-dom";
import SiteHeader from "./header";
import SiteFooter from "./footer";

const SiteLayout = () => {
  return (
    <div className="bg-[rgb(244,244,244)] dark:bg-black">
      <SiteHeader />
      <main className="mx-auto max-w-screen-xl px-4 pt-20 md:px-5 md:pt-0 xl:px-0">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
