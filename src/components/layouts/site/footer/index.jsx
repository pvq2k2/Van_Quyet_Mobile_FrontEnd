import React from "react";
import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="mx-auto max-w-screen-xl px-4 pb-24 md:px-0 md:pb-3">
      <div className="wapper rounded-xl bg-main-dark p-5 text-white md:mx-5 xl:mx-0">
        <div className="col-content flex flex-wrap gap-10 text-left xl:justify-center xl:gap-20">
          <div className="link-content">
            <h4 className="py-[10px] text-[15px] font-bold">
              Hỗ Trợ - Dịch Vụ
            </h4>
            <ul>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Mua hàng trả góp
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Hướng dẫn đặt hàng và thanh toán
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Tra cứu đơn hàng
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Chính sách hủy giao dịch, đổi trả
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Chính sách giải quyết khiếu nại
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Điều khoản mua bán hàng hóa
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Phạm vi, điều khoản gói bảo hành mở rộng
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-content">
            <h4 className="py-[10px] text-[15px] font-bold">
              Thông Tin Liên Hệ
            </h4>
            <ul>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Bán hàng Online
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Chăm sóc Khách Hàng
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Hỗ Trợ Kỹ thuật
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Hỗ trợ Bảo hành &amp; Sửa chữa
                </Link>
              </li>
              <li>
                <Link
                  className="text-[13px] text-[#ddd] duration-300 ease-in-out hover:text-white"
                  to="#"
                >
                  Liên hệ khối văn phòng
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-content">
            <h4 className="py-[10px] text-[15px] font-bold">Tổng đài</h4>
            <span className="inline-block rounded bg-white px-2 py-1 text-center text-[18px] font-bold text-[#0f4670] duration-300 ease-in-out hover:bg-[#0f4670] hover:text-white">
              1900.0000
            </span>
          </div>
          <div className="lg:ml-[-10px]">
            <h4 className="py-[10px] text-[15px] font-bold">
              Thanh toán miễn phí
            </h4>
            <ul>
              <li className="flex gap-1 pb-1">
                <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-visa_o2d0lv.png" />
                <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-master_roande.png" />
              </li>
              <li className="flex gap-1 pb-1">
                <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-jcb_i0jky6.png" />
                <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-samsungpay_nf2vjv.png" />
              </li>
              <li className="flex gap-1 pb-1">
                <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-atm_fjrs4t.png" />
                <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248851/img/logo-vnpay_w7b9ie.png" />
              </li>
            </ul>
          </div>
          <div className="link-content">
            <h4 className="py-[10px] text-[15px] font-bold">
              Hình thức vận chuyển
            </h4>
            <ul>
              <li className="flex gap-1 pb-1">
                <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248851/img/nhattin_myipbf.jpg" />
                <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248851/img/vnpost_ajg6tx.jpg" />
              </li>
            </ul>
            <div className="logo-bct pt-5">
              <img src="https://res.cloudinary.com/assignmentjs/image/upload/v1644248850/img/logo-bct_c4urdp.png" />
            </div>
          </div>
        </div>
        <div className="info pt-3 text-center">
          <p>Copyright by VANQUYETMOBIE. All rights reserved ©.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
