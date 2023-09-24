import { NextRequest, NextResponse } from "next/server";
import { getApiUserRelatedData } from "./helper";
import { User } from "@/app/types";

export type UserRequest = {
  user: User;
  token: string;
  headers: { authorization: string };
};

export type UserPostReqReturnType = ReturnType<typeof POST>;

export async function POST(request: NextRequest) {
  const data: UserRequest = await request.json();
  const hasToken = request.headers.get("authorization");

  if (!hasToken) return NextResponse.json(null, { status: 401 });
  // for later use
  //   const userUID = authenticateToken(hasToken, process.env.ACCESS_TOKEN_SECRET);
  //   if (!userUID) return NextResponse.json(null, { status: 403 });

  const ReturnedData = await getApiUserRelatedData(data)
    .then((res) => res)
    .catch((err) => {
      null;
    });
  console.log({ ReturnedData });
  if (!ReturnedData) return NextResponse.json(null, { status: 503 });

  return NextResponse.json({ status: 200, data: ReturnedData });
}
// https://script.google.com/macros/s/AKfycbw1oRlSbZFWu6VxyoHKjINhSZuhzHyHyLtoB1HqY3fbBI_3VN5lN4_1ve81MzNwl0IC/exec?user=["11/11","mosh","mail@mail"]
