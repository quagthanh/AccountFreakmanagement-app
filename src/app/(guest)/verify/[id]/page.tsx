import Verify from "@/components/auth/verify";

export default async function verifyPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  console.log(">>>Chech id verify:", id);
  return <Verify id={id} />;
}
