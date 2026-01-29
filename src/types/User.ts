export type UserStatus =
  | "Active"
  | "Inactive"
  | "Pending"
  | "Blacklisted";

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  profile: {
    fullName: string;
    lastName: string;
    avatar: string;
    tier: number,
    bank: string;
    accountNumber: string;
    balance: number;
  };
personalInfo: {
    bvn: string;
    maritalStatus: string;
    fullName: string;
    phone: string;
    email: string;
    gender: string;
    children: number;
    residence: string;
  };
  educationEmployment: {
    level: string;
    employmentStatus: string;
    duration: string;
    sector: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phone: string;
    email: string;
    relationship: string;
  };
  status: UserStatus;
  dateJoined: string;
}
