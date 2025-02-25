"use client";
import React from "react";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  notification,
  Row,
} from "antd";
import {
  ArrowLeftOutlined,
  LineChartOutlined,
  LineOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { sendRequest } from "@/utils/api";
import Password from "antd/es/input/Password";
import { useRouter } from "next/navigation";

export default function Verify({ id }: any) {
  const router = useRouter();

  const onFinish = async (values: any) => {
    const { _id, code } = values;
    console.log("Check verify value:", values);
    const res = await sendRequest<IBackendRes<any>>({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/check-code`,
      body: {
        _id: _id,
        code: code,
      },
    });

    console.log(">>>>Check after verify res:", res);
    if (res?.data) {
      message.info("Kích hoạt tài khoản thành công");
      router.push(`/auth/login`);
    } else {
      notification.error({
        message: "Verify failed",
        description: res?.message,
      });
    }
  };

  return (
    <Row justify={"center"} style={{ marginTop: "30px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <legend>Kích hoạt tài khoản</legend>
          <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item label="User's id" name="_id" initialValue={id} hidden>
              <Input disabled />
            </Form.Item>
            <div>Mã kích hoạt của bạn đã được gửi về email !</div>
            <Divider></Divider>
            <Form.Item
              label="Activate Code"
              name="code"
              rules={[
                {
                  required: true,
                  message: "Please input your code!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Link href={"/"}>
            <ArrowLeftOutlined /> Quay lại trang chủ
          </Link>
          <Divider />
          <div style={{ textAlign: "center" }}>
            Đã có tài khoản? <Link href={"/auth/login"}>Đăng nhập</Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
}
