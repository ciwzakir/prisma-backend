import { IUserInfo } from "../../interface";
import bcrypt from "bcrypt";
import config from "../../../config";
import { Secret } from "jsonwebtoken";
import { jwthelpers } from "../../utils/jwthelpers";

export const authMutation = {
  registerUsers: async (parent: any, args: any, { prisma }: any) => {
    // console.log(args);
    const isUserExit = await prisma.user.findFirst({
      where: {
        email: args.email,
      },
    });
    if (isUserExit) {
      return {
        userErrorMessage: "User already Exit. Please create new user",
        token: null,
      };
    } else {
      const hashedPassword = await bcrypt.hash(args.password, 10);

      const createUser = await prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          userRole: args.userRole,
          password: hashedPassword,
        },
      });

      if (args.biodata) {
        await prisma.profile.create({
          data: {
            userId: createUser.id,
            biodata: {
              create: {
                userName: { create: args.biodata.userName },
                userAddress: { create: args.biodata.userAddress },
                educationQualifications: {
                  create: args.biodata.educationQualifications,
                },
                personalInformation: {
                  create: args.biodata.personalInformation,
                },
              },
            },
          },
        });
      }

      const token = await jwthelpers.generateToken(
        {
          userId: createUser.id,
          userRole: createUser.userRole,
        },
        config.jwts.secret as Secret
      );

      return {
        userErrorMessage: "Successfully created a new user",
        token,
      };
    }
  },

  login: async (parent: any, args: any, { prisma }: any) => {
    const isExitUser = await prisma.user.findFirst({
      where: {
        email: args.email,
      },
    });
    if (!isExitUser) {
      return {
        userErrorMessage: "User does not exit",
        token: null,
      };
    }
    const isPasswordTrue = await bcrypt.compare(
      args.password,
      isExitUser.password
    );
    // console.log(args.password, isExitUser.password);

    if (!isPasswordTrue) {
      return {
        userErrorMessage: "Password is not valid",
        token: null,
      };
    }
    const token = await jwthelpers.generateToken(
      { userId: isExitUser.id, userRole: isExitUser.userRole },
      config.jwts.secret as string
    );
    // const token = await jwthelpers.generateToken(
    //   { userId: isExitUser.id },
    //   config.jwts.secret as string
    // );

    return {
      userErrorMessage: "Logged in Successfully",
      token,
    };
  },
};
