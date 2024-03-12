import { userCheckForProfile } from "../../utils/useracessprofile";

export const addBioFeatureMutation = {
  addBioFeature: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("From Mutation file", parent, args, userInfo);

    if (!userInfo) {
      return {
        message: "Unauthorized",
        bioInfo: null,
      };
    }

    const error = await userCheckForProfile(prisma, args.profileId, userInfo);
    if (error) {
      return error;
    }
    const findBiofeature = await prisma.biofeature.findUnique({
      where: {
        bioId: Number(args.profileId),
      },
    });

    if (findBiofeature) {
      return {
        message: "Already exits",
        bioInfo: null,
      };
    }

    if (!findBiofeature && !args.bioData) {
      const newBiofeaturew = await prisma.biofeature.create({
        data: {
          bioId: Number(args.profileId),
        },
      });
      return {
        message: "Your  feature Created without ...",
        bioInfo: newBiofeaturew,
      };
    }
    if (!findBiofeature && args.bioData) {
      const newBiofeature = await prisma.biofeature.create({
        data: {
          userName: { create: args.bioData.userName },
          userAddress: { create: args.bioData.userAddress },
          educationQualifications: {
            create: args.bioData.educationQualifications,
          },
          personalInformation: { create: args.bioData.personalInformation },
          bioId: Number(args.profileId),
        },
        include: {
          userName: true,
          userAddress: true,
          educationQualification: true,
          personalInformation: true,
        },
      });

      return {
        message: "Your  feature Created Successfully",
        bioInfo: newBiofeature,
      };
    } else {
      return {
        message: "Try Again",
        bioInfo: null,
      };
    }
  },

  addUserFullName: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    // console.log("From Mutation file", parent, args, userInfo);

    if (!userInfo) {
      return {
        message: "Unauthorized",
        nameInfo: null,
      };
    }

    const isExitUserName = await prisma.userName.findUnique({
      where: {
        nameId: Number(args.bioFeatureId),
      },
    });

    if (isExitUserName) {
      return {
        message: "Already User Name Exit",
        nameInfo: null,
      };
    }

    if (isExitUserName === undefined) {
      return {
        message: "There is no UserId Like This",
        nameInfo: null,
      };
    }

    if (!isExitUserName) {
      const newName = await prisma.userName.create({
        data: {
          firstName: args.input.firstName,
          middleName: args.input.lastName,
          lastName: args.input.middleName,
          nameId: Number(args.bioFeatureId),
        },
      });

      return {
        message: "Your feature Created Successfully",
        nameInfo: newName,
      };
    } else {
      return {
        message: "Something wrong",
        nameInfo: null,
      };
    }
  },

  addUserAddress: async (parent: any, args: any, { prisma, userInfo }: any) => {
    if (!userInfo) {
      return {
        message: "Unauthorized",
        nameInfo: null,
      };
    }

    const isExitUserAddress = await prisma.userAddress.findUnique({
      where: {
        addressId: Number(args.bioFeatureId),
      },
    });

    if (!isExitUserAddress) {
      const newaddress = await prisma.userAddress.create({
        data: {
          street: args.UserAddress.street,
          city: args.UserAddress.city,
          zipCode: args.UserAddress.zipCode,
          addressId: Number(args.bioFeatureId),
        },
      });

      return {
        message: "Your  Address Successfully",
        address: newaddress,
      };
    } else {
      return {
        message: "User Address already exists",
        address: null,
      };
    }
  },

  addPersonalInfo: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    // console.log("From Mutation file", parent, args, userInfo);

    if (!userInfo) {
      return {
        message: "Unauthorized",
        personalInfo: null,
      };
    }

    const isExitPersonalInfo = await prisma.personalInformation.findUnique({
      where: {
        personalInfoId: Number(args.bioFeatureId),
      },
    });

    if (!isExitPersonalInfo) {
      const newPersonalInfo = await prisma.personalInformation.create({
        data: {
          age: args.UserPersonalInfo.age,
          gender: args.UserPersonalInfo.gender,
          maritalStatus: args.UserPersonalInfo.maritalStatus,
          nationality: args.UserPersonalInfo.nationality,
          phoneNumber: args.UserPersonalInfo.phoneNumber,
          bloodGroup: args.UserPersonalInfo.bloodGroup,
          personalInfoId: Number(args.bioFeatureId),
        },
      });

      return {
        message: "Your  PersonalInfo Successfully",
        personalInfo: newPersonalInfo,
      };
    } else {
      return {
        message: "User PersonalInfo already exists",
        personalInfo: null,
      };
    }
  },

  addUserQualification: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    // console.log("From Mutation file", parent, args, userInfo);

    if (!userInfo) {
      return {
        message: "Unauthorized",
        qualificationInfo: null,
      };
    }

    const newQualification = await prisma.userEducationQualifications.create({
      data: {
        qualification: args.input.qualification,
        fieldOfStudy: args.input.fieldOfStudy,
        instituteName: args.input.instituteName,
        graduationYear: args.input.graduationYear,
        obtainGrade: args.input.obtainGrade,
        educationId: Number(args.bioFeatureId),
      },
    });

    return {
      message: "Your  education Qualifications Successfully",
      qualificationInfo: newQualification,
    };
  },
};
