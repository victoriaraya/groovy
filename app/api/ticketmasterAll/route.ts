import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const attractionId = searchParams.get("attractionId");
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.TICKETMASTER_API}&attractionId=${attractionId}&locale=*`
  );
  const data = await res.json();

  return NextResponse.json({ data });
};
