import Swal from "sweetalert2";

export const sweetConfirm = (id, fnCallRemove) => {
  const buttonStyles =
    "m-2 rounded-md border-0 px-5 py-3 text-base font-medium shadow-md transition-shadow duration-100";
  Swal.fire({
    title: "Bạn có chắc chắn muốn xóa không?",
    text: "Không thể hoàn tác sau khi xóa",
    icon: "warning",
    buttonsStyling: false,
    showCancelButton: true,
    confirmButtonText: "Có",
    cancelButtonText: "Không",
    customClass: {
      popup: "dark:bg-gray-800 dark:text-gray-300",
      title: "dark:text-white",
      confirmButton: `${buttonStyles} bg-red-500 hover:bg-red-700 text-white`,
      cancelButton: `${buttonStyles} bg-blue-500 hover:bg-blue-700 text-white`,
    },
  }).then(async (result) => {
    if (result.isConfirmed) {
      await fnCallRemove(id);
    }
  });
};

export const sweetModal = (title, text, icon) => {
  const buttonStyles =
    "m-2 rounded-md border-0 px-5 py-3 text-base font-medium shadow-md transition-shadow duration-100";
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    buttonsStyling: false,
    customClass: {
      popup: "dark:bg-gray-800 dark:text-gray-300",
      title: "dark:text-white",
      confirmButton: `${buttonStyles} bg-blue-500 hover:bg-blue-700 text-white`,
    },
  });
};
