import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRouterAdmin = ({ children }) => {
  const role = useSelector((state) => state.auth.user.role);
  const navigate = useNavigate();
  useEffect(() => {
    if (!role) {
      toast.error("Bạn phải đăng nhập mới vào được trang quản trị !");
      navigate("/login");
      return;
    }
    if (role != 2) {
      toast.error("Bạn không phải là quản trị viên !");
      navigate("/");
    }
  }, [navigate]);

  return role === 2 && children;
};

export default PrivateRouterAdmin;
