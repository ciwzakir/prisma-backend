import { User } from "@prisma/client";
import { prisma } from "..";
import DataLoader from "dataloader";

const batchUsers = async (allids: number[]): Promise<User[]> => {
  // console.log(allids);
  const users = await prisma.user.findMany({
    where: {
      id: {
        in: allids,
      },
    },
  });
  const userData: { [key: string]: User } = {};

  users.forEach((user) => {
    userData[user.id] = user;
  });
  return allids.map((id) => userData[id]);
};

//@ts-ignore
export const userLoader = new DataLoader<number, User>(batchUsers);
