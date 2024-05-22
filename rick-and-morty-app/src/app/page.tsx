import { redirect } from "next/navigation";

export default function Home() {
  redirect("./episode/?page=1");
}
