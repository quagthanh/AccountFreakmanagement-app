"use client";
import { Layout } from "antd";
export default function AdminContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { Content } = Layout;

  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "#ccc",
          borderRadius: "5px",
        }}
      >
        {children}
      </div>
    </Content>
  );
}
