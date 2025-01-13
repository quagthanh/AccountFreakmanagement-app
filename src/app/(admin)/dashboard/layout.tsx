import { Layout } from "antd";
import AdminFooter from "@/components/admin/layout/admin.footer";
import AdminSidebar from "@/components/admin/layout/admin.sidebar";
import AdminHeader from "@/components/admin/layout/admin.header";
import AdminContent from "@/components/admin/layout/admin.content";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <AdminSidebar />
      <Layout>
        <AdminHeader />
        <AdminContent>{children}</AdminContent>
        <AdminFooter />
      </Layout>
    </Layout>
  );
}
