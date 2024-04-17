import { getUserByClerkID } from "@/utils/auth";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (request) => {
  const { event } = await request.json();
  const user = await getUserByClerkID();
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      shows: { push: event.name + "~" + event.artistId + "~" + event.url },
    },
  });

  return NextResponse.json({ data: updatedUser });
};

export const DELETE = async (request) => {
  const { event } = await request.json();
  const user = await getUserByClerkID();

  const { shows } = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      shows: true,
    },
  });

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      shows: {
        set: shows.filter((item) => item !== event),
      },
    },
  });

  return NextResponse.json({ data: updatedUser });
};

export const PUT = async (request) => {
  const { userId } = await request.json();
  const user = await getUserByClerkID(userId);

  const { shows } = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      shows: true,
    },
  });

  return NextResponse.json({ data: shows });
};
