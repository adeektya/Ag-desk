import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from "@/components/Dashboard/Dashboard";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { SignIn } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();
  if (userId) {
    redirect("/Dashboard");
  } else {
    redirect("sign-in");
  
  }
}
