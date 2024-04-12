"use client";
import { SignOutButton } from "@clerk/nextjs";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();

  return (
    <div>
      <SignOutButton>
        <button
          className="rounded-sm mx-2 text-black bg-gray-300 hover:bg-gray-400 active:bg-gray-500 border-solid border-slate-800 border-2 p-1.5 my-3"
          onClick={() => {
            router.push("/");
          }}
        >
          Sign out
        </button>
      </SignOutButton>
    </div>
  );
};

export default SignOut;
