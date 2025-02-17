"use server";
import { signIn } from "@/auth";
import { errorMonitor } from "events";
import { InvalidEmailPasswordError } from "./error";

export async function authenticate(email: string, password: string) {
  try {
    const r = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    console.log("Check r", r);
    return r;
  } catch (error) {
    if ((error as any).name === "InvalidEmailPasswordError") {
      return {
        error: (error as any).type,
        code: 1,
      };
    } else if ((error as any).name === "InactiveAccountError") {
      return {
        error: (error as any).type,
        code: 2,
      };
    } else {
      return { error: "Internal server error", code: 0 };
    }

    // if (error.cause.err instanceof InvalidLoginError) {
    //     return {"error": "Incorrect username or password"}
    // } else {
    //     throw new Error("Failed to authenticate")
    // }
  }
}
