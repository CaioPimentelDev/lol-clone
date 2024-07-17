import { db } from "@/libs/db";
import { NextResponse } from "next/server";
import * as bcrypt from "bcrypt"

export async function POST(request: Request) {
  try {

    const {login, password, email} = await request.json();

    const hashPassword = await bcrypt.hash(password, 10)


    const register = await db.user.create({
      data: {
          email,
          login,
          password: hashPassword
      }
  })

    return NextResponse.json(register);

  } catch (error) {
    console.log("erro:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
