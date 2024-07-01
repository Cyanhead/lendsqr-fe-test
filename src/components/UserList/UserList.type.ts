// export type UserListPropsType = {};

export type UserType = {
  id: string;
  status: string;
  socials: {
    facebook: string;
    twitter: string;
    workMail: string;
    instagram: string;
  };
  personal: {
    bvn: string;
    name: string;
    email: string;
    phone: string;
    gender: string;
    children: string;
    maritalStatus: string;
    residenceType: string;
  };
  guarantor: {
    name: string;
    email: string;
    phone: string;
    relationship: string;
  };
  employment: {
    sector: string;
    organization: string;
    status: string;
    duration: string;
    loanAmount: number;
    monthlyIncome: number;
    educationLevel: string;
  };
  dateJoined: string;
};
