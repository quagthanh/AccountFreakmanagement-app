"use client";

import { IProps, IUserTable } from "@/types/backend";
import { Button, Table, TableProps } from "antd";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
const UserTable = (props: IProps) => {
  const { users, meta } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const current = meta?.current;
  const pageSize = meta?.pageSize;
  const pages = meta?.pages;
  const total = meta?.total;
  const { replace } = useRouter();

  const onChange = (pagination: any, sorter: any, filter: any, extra: any) => {
    if (pagination && pagination.current) {
      const params = new URLSearchParams(searchParams);
      params.set("current", pagination.current);
      replace(`${pathname}?${params.toString()}`);
    }
  };
  const dataSource = users?.map((user: IUserTable) => ({
    _id: user._id,
    name: user.name,
    email: user.email,
  }));

  const columns: TableProps<IUserTable>["columns"] = [
    { title: "Id", dataIndex: "_id", key: "_id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <span>Manager Users</span>
        <Button>Create User</Button>
      </div>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        rowKey="_id"
        onChange={onChange}
        pagination={{
          current: current,
          total: total,
          pageSize: pageSize,
          showTotal: (total: number, range: [number, number]) => {
            return (
              <div>
                {range[0]}-{range[1]} of {total} users
              </div>
            );
          },
        }}
      />
    </>
  );
};

export default UserTable;
