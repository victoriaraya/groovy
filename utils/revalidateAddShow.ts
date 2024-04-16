"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateShow() {
  revalidateTag("userShows");
}
