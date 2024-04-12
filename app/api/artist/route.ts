import { getUserByClerkID } from "@/utils/auth";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (request) => {
  const { artist } = await request.json();
  const user = await getUserByClerkID();
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      artists: {
        connect: {
          id: artist.id,
        },
      },
    },
    include: {
      artists: true,
    },
  });

  return NextResponse.json({ data: updatedUser });
};

export const DELETE = async (request) => {
  const { artist } = await request.json();
  const user = await getUserByClerkID();
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      artists: {
        disconnect: {
          id: artist.id,
        },
      },
    },
    include: {
      artists: true,
    },
  });

  return NextResponse.json({ data: updatedUser });
};
