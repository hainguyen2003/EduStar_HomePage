"use client";

import {
  Modal,
  Form,
  Button,
  Input,
  Row,
  Col,
  notification,
  message,
} from "antd";
import { AppContext } from "../AppContext/AppContext";
import React, { useContext } from "react";
import Image from "next/image";
import balo from "public/zyro-image.svg";
import { useForm } from "antd/lib/form/Form";
import { createCourseRegister } from "../../api/apiCourseRegister";

const RegisterCourse = () => {
  const { data, dispatch } = useContext(AppContext);
  const [form] = useForm();
  const { modalRegisterAccOpen } = data;
  const onFinish = async (values) => {
    createCourseRegister(values).then((res) => {
      if (res?.data?.success) {
        message.success("Đăng ký khóa học thành công!");
        form.resetFields();
      } else if (res?.data?.error?.statusCode === 2) {
        {
          res?.data?.error?.errorDetailList.map((e) =>
            message.error(e.message)
          );
        }
      }
    });
    dispatch({ type: "modalRegisterAccClose" });
    //đặt thông báo gửi thông tin thành công
  };
  const handleCancel = () => {
    dispatch({ type: "modalRegisterAccClose" });
  };
  return (
    <>
      <Modal
        open={modalRegisterAccOpen}
        onCancel={handleCancel}
        className="max-h-[208px] tablet:w-[508px] phone:w-[340px] rounded-[38px] "
        footer={[]}
      >
        <Row className="bg-[#FB9400] rounded-[27px] my-20 overflow-hidden">
          <Col span={9} className="object-cover transform-scale-x-[-1] ">
            <Image src={balo} alt="icon" height={140} width={157} />
          </Col>
          <Col span={15} className="text-white text-left my-[10px]">
            <h2 className="font-black text-[32px] leading-snug">
              Đăng ký khóa học 
            </h2>
            <p className="font-normal text-[19.4px]">
               Trung tâm EduStar sẽ liên hệ với bạn sớm nhất có thể !
            </p>
          </Col>
        </Row>
        <Form
          className="login-form"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[
              { required: true, message: "Vui lòng nhập họ và tên!" },
              { type: "text", message: "Vui lòng nhập họ và tên!" },
            ]}
          >
            <Input className="h-52" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              {
                pattern: /^[0-9]{10,}$/,
                message: "Số điện thoại không hợp lệ!",
              },
            ]}
          >
            <Input className="h-52" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[
              { required: true, message: "Vui lòng nhập địa chỉ!" },
              { type: "text", message: "không hợp lệ!" },
            ]}
          ></Form.Item>
            <Input className="h-52" />
          </Form.Item>
          <Form.Item
            label="Khóa học đăng kí"
            name="information"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên hoặc mã khóa học !",
              },
            ]}
          >
            <Input.TextArea rows={5} />
          </Form.Item>

          <Form.Item className="flex justify-end ">
            <Button
              type="primary"
              htmlType="submit"
              className="rounded-[50px] bg-[#FB9400]"
            >
              Gửi thông tin
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default RegisterCourse;
