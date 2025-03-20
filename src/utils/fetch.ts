"use server";
export interface fethDT {
  id: string;
  name: string;
  email: string;
}
export const fetchData = async (props: any): Promise<fethDT> => {
  let { url, method } = props;

  const res = await fetch(`${url}`, { method });
  const data = await res.json();
  return data;
};
