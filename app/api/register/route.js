import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse("Missing Info", { status: 400 });
    }

    //HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 12);

    //STORE KE MONGODB LEWAT PRISMA
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse("INTERNAL ERROR", { status: 500 });
  }
}
