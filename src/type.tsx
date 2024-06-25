type PersonalInfo = {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateCreated: string;
  status: string;
  maritalStatus: string;
  gender: string;
  bvn?: string;
  children?: string;
  rfq_code?: string;
  accountNumber?: string;
  amount?: number;
  bank?: string;
  rating?: number;
};

type SocialMedia = {
  twitter_username: string;
  facebook_username: string;
  instagram_username: string;
};

type Guarantor = {
  full_name: string;
  email: string;
  phoneNumber: string;
  relationships: string;
};

type Education = {
  level: string;
  employment_status: string;
  sector: string;
  duration: string;
  official_email: string;
  income: string;
  loan_repayment: number;
};

type User = {
  id: number;
  personal_info: PersonalInfo;
  socialMedial: SocialMedia;
  gurrantor: Guarantor;
  educations: Education;
};

export type { PersonalInfo, SocialMedia, Guarantor, Education, User };

export type UserData = {
  id: number;
  personal_info: {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateCreated: string;
    status: string;
    maritalStatus: string;
    gender: string;
    bvn?: string;
    children?: string;
    rfq_code?: string;
    accountNumber?: string;
    amount?: number;
    bank?: string;
    rating?: number;
  };
  socialMedial: {
    twitter_username: string;
    facebook_username: string;
    instagram_username: string;
  };
  gurrantor: {
    full_name: string;
    email: string;
    phoneNumber: string;
    relationships: string;
  };
  educations: {
    level: string;
    employment_status: string;
    sector: string;
    duration: string;
    official_email: string;
    income: string;
    loan_repayment: number;
  };
};

export type ActiveProps = {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateCreated: string;
  status: string;
  maritalStatus: string;
  gender: string;
  bvn?: string;
  children?: string;
  rfq_code?: string;
  accountNumber?: string;
  amount?: number;
  bank?: string;
  rating?: number;
};
