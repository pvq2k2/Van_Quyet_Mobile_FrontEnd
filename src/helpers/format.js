export const formatDecentralization = (decentralization) => {
  switch (decentralization) {
    case 1:
      return "User";
    case 2:
      return "Admin";
    default:
      return "Không có quyền";
  }
};

export const formatGender = (gender) => {
  switch (gender) {
    case 1:
      return "Nam";
    case 2:
      return "Nữ";
    default:
      return "Không xác định";
  }
};

export const formatStatusAccount = (status) => {
  switch (status) {
    case 1:
      return "Khóa";
    case 2:
      return "Mở";
    default:
      return "Không xác định";
  }
};
