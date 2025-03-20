import Verify from "@/components/auth/verify";

export default async function verifyPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <Verify id={id} />;
}
