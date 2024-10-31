"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface RedirectResponse {
  error?: string;
}

export async function redirectToDashboard(formData: FormData): Promise<RedirectResponse | void> {
  // CODE FOR TASK 2.4 -----------------------------------------

  // Retrieve the name from the form data
  const name: string = formData.get("name") as string;

  if (!name) {
    return { error: "Hey, your name is missing!" };
  }

  // Process the name
  const sanitizedName = name.trim().toLowerCase().replace(/\s+/g, "");

  // Set the cookie
  cookies().set("gr-name", sanitizedName);

  // Redirect to the dashboard
  redirect("/dashboard");

  // END OF CODE FOR TASK 2.4 ----------------------------------
}
