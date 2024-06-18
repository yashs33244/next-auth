import { Appbar } from "@/components/Appbar";

import { getServerSession } from "next-auth"
import { signIn } from "next-auth/react";


export default async function Home() {
  

  return (
    <div>
      <Appbar />
    </div>
  );
}