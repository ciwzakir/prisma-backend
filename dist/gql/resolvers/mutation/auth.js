"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMutation = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const jwthelpers_1 = require("../../utils/jwthelpers");
exports.authMutation = {
    registerUsers: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(args);
        const isUserExit = yield prisma.user.findFirst({
            where: {
                email: args.email,
            },
        });
        if (isUserExit) {
            return {
                userErrorMessage: "User already Exit. Please create new user",
                token: null,
            };
        }
        else {
            const hashedPassword = yield bcrypt_1.default.hash(args.password, 10);
            const createUser = yield prisma.user.create({
                data: {
                    name: args.name,
                    email: args.email,
                    userRole: args.userRole,
                    password: hashedPassword,
                },
            });
            if (args.biodata) {
                yield prisma.profile.create({
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
            const token = yield jwthelpers_1.jwthelpers.generateToken({
                userId: createUser.id,
                userRole: createUser.userRole,
            }, config_1.default.jwts.secret);
            return {
                userErrorMessage: "Successfully created a new user",
                token,
            };
        }
    }),
    login: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
        const isExitUser = yield prisma.user.findFirst({
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
        const isPasswordTrue = yield bcrypt_1.default.compare(args.password, isExitUser.password);
        // console.log(args.password, isExitUser.password);
        if (!isPasswordTrue) {
            return {
                userErrorMessage: "Password is not valid",
                token: null,
            };
        }
        const token = yield jwthelpers_1.jwthelpers.generateToken({ userId: isExitUser.id, userRole: isExitUser.userRole }, config_1.default.jwts.secret);
        // const token = await jwthelpers.generateToken(
        //   { userId: isExitUser.id },
        //   config.jwts.secret as string
        // );
        return {
            userErrorMessage: "Logged in Successfully",
            token,
        };
    }),
};
