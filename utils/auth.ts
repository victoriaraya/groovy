import { auth } from "@clerk/nextjs";
import prisma from "./db";

export const getUserByClerkID = async () => {
  const { userId } = await auth();

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  });

  return user;
};

export const getUserArtists = async () => {
  const { userId } = await auth();

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    include: {
      artists: true,
    },
  });

  return user.artists;

  // check if an artist belongs to a user
  //then use thits function to render and dif button in artist...
  //...page that says see my artists insted of add to my artists
};

export const getUserShows = async () => {
  const { userId } = await auth();

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  return user?.shows;
};
