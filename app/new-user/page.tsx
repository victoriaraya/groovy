import prisma from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        username: user.username,
      },
    });
  }

  redirect("/profile");
};

const NewUser = async () => {
  await createNewUser();
  return (
    <div className="bg-zinc-700 flex justify-center items-center text-4xl animate-spin h-full w-full mr-3">
      🎧
    </div>
  );
};

export default NewUser;
