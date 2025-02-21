import { auth } from "@/auth";
import HomePage from "@/components/layout/homepage";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <div>{JSON.stringify(session)}</div>
      <HomePage />
    </div>
  );
}
