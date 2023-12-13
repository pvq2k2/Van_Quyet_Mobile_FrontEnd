import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRouterUser = ({ children }) => {
  const role = useSelector((state) => state.auth.user.role);
  const navigate = useNavigate();
  useEffect(() => {
    if (!role) {
      toast.error("Bạn phải đăng nhập mới vào được trang quản trị !");
      navigate("/login");
      return;
    }
  }, [navigate]);

  return (role == 1 || role == 2) && children;
};

export default PrivateRouterUser;
