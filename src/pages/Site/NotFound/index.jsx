import { Link } from "react-router-dom";
import NotFound from "../../../components/common/NotFound";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen dark:bg-black">
      <div className="mx-auto  max-w-screen-xl px-5 xl:px-0">
        <div className="flex items-center justify-between pt-2">
          <div className="logo w-52 lg:w-56 xl:w-64">
            <Link to="/">
              <img
                src="../../../src/assets/images/logo_horizontal.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <NotFound />
      </div>
    </div>
  );
};

export default NotFoundPage;
