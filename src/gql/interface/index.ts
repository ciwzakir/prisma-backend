import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export interface IUserInfo {
  name: string;
  email: string;
  biodata?: UserBioData;
  password: string;
}

export interface UserBioData {
  userName: UserFullName;
  userAddress: UserAddress;
  educationQualification: UserEducation;
  personalInformation: UserPersonalInfo;
}

export interface UserFullName {
  firstName: String;
  middleName: String;
  lastName: String;
}
export interface UserAddress {
  street: String;
  city: String;
  zipCode: String;
}
export interface UserEducation {
  qualification: String;
  fieldOfStudy: String;
  instituteName: String;
  graduationYear: Number;
  obtainGrade: String;
}
export interface UserPersonalInfo {
  age: String;
  gender: String;
  maritalStatus: String;
  nationality: String;
  phoneNumber: String;
  bloodGroup: String;
}

export interface IContext {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
  userInfo: number | null;
}
