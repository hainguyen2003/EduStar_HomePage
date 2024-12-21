/* eslint-disable @next/next/no-img-element */
"use client";
import { getUserProfile } from "@/api/user";
import { PageContainer } from "@ant-design/pro-components";
import { Table } from "antd";
import React, { useEffect, useState } from "react";

function TableCourse(props) {
  const [userService, setUserService] = useState([]);

  const handleGetInforUser = () => {
    getUserProfile().then((res) => {
      setUserService(res?.data?.data?.services);
    });
  };
  useEffect(() => {
    handleGetInforUser();
  }, []);
  const columns = [
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (imageURL) => (
        <img
          src={imageURL}
          alt={imageURL}
          style={{ width: "150px", height: "150px" }}
        />
      ),
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "name",
    },
    {
      title: "Hình thức học",
      dataIndex: "learnOnlineOrOffline",
    },
    {
      title: "Số buổi học",
      dataIndex: "numberTeachingSessions",
    },
    {
      title: "Chi phí",
      dataIndex: "price",
    },
  ];
  return (
    <>
      <PageContainer>
        <Table columns={columns} dataSource={userService} />
      </PageContainer>
    </>
  );
}

export default TableCourse;
