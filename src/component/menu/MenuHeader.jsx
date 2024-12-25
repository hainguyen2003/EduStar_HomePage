"use client";
import { AppContext } from "../AppContext/AppContext";
import React, { useState, useContext, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";

import RegisterAccountModal from "../modal/RegisterAccountModal";
import Cookies from "js-cookie";
import Link from "next/link";

const MenuHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [jwt, setJwt] = useState(null);
  const [id, setId] = useState(null);

  const { data, dispatch } = useContext(AppContext);

  const showModalRegisterAcc = () => {
    dispatch({ type: "modalRegisterAccOpen" });
  };

  const checkPathname = () => {
    if (pathname.includes("/")) {
      return "1";
    }
    if (pathname.includes("/admission")) {
      return "3";
    }
    if (pathname.includes("/vstep")) {
      return "4";
    }
    if (pathname.includes("/vstep/luyen-thi-b1")) {
      return "5";
    }
    if (pathname.includes("/vstep/luyen-thi-b2")) {
      return "6";
    }
    if (pathname.includes("/toeic")) {
      return "7";
    }
    if (pathname.includes("/ielts")) {
      return "8";
    }
    if (pathname.includes("/aptis")) {
      return "9";
    }
    if (pathname.includes("/aptis/luyen-thi-b1")) {
      return "10";
    }
    if (pathname.includes("/aptis/luyen-thi-b2")) {
      return "11";
    }
    if (pathname.includes("/englishacademic")) {
      return "12";
    }
    if (pathname.includes("/test-schedule")) {
      return "13";
    }
    if (pathname.includes("/study-schedule")) {
      return "14";
    }
    if (pathname.includes("/new")) {
      return "15";
    }
  };

  const items = [
    {
      label: "TRANG CHỦ",
      key: "1",
      onClick: () => {
        router.push("/");
      },
    },
    {
      label: (
        <Link href={`http://localhost:8080/mocktest/exam/?jwt=${jwt}&id=${id}`}>
          THI THỬ
        </Link>
      ),
      key: "2",
    },
    {
      label: "TUYỂN SINH",
      key: "3",
      onClick: () => {
        router.push("/admission");
      },
    },
    {
      label: "ĐÀO TẠO ANH NGỮ",
      children: [
        {
          label: <Link href="/vstep">Luyện thi VSTEP</Link>,
          key: "4",
          children: [
            {
              label: "Luyện thi VSTEP B1",
              key: "5",
              onClick: () => {
                router.push("/vstep/luyen-thi-b1");
              },
            },
            {
              label: "Luyện thi VSTEP B2",
              key: "6",
              onClick: () => {
                router.push("/vstep/luyen-thi-b2");
              },
            },
          ],
        },
        {
          label: "Luyện thi TOEIC",
          key: "7",
          onClick: () => {
            router.push("/toeic");
          },
        },
        {
          label: "Luyện thi IELTS",
          key: "8",
          onClick: () => {
            router.push("/ielts");
          },
        },
        {
          label: <Link href="/aptis">Luyện thi APTIS</Link>,
          key: "9",
          children: [
            {
              label: "Luyện thi APTIS B1",
              key: "10",
              onClick: () => {
                router.push("/aptis/luyen-thi-b1");
              },
            },
            {
              label: "Luyện thi APTIS B2",
              key: "11",
              onClick: () => {
                router.push("/aptis/luyen-thi-b2");
              },
            },
          ],
        },
        {
          label: "Anh Ngữ Học Thuật",
          key: "12",
          onClick: () => {
            router.push("/englishacademic");
          },
        },
      ],
    },
    {
      label: "ĐÀO TẠO TIN HỌC",
      children: [
        {
          label: (
            <Link href="/oit0">CHỨNG CHỈ ỨNG DỤNG CNTT CƠ BẢN VÀ NÂNG CAO</Link>
          ),
          key: "16",
          onClick: () => {
            router.push("/oit0/luyen-thi-i1");
          },
        },
        {
          label: <Link href="/oit1">CHỨNG CHỈ TIN HỌC QUỐC TẾ ICDL</Link>,
          key: "17",
          children: [
            {
              label: "CHỨNG CHỈ TIN HỌC QUỐC TẾ",
              key: "18",
              onClick: () => {
                router.push("/oit1/icdl");
              },
            },
            {
              label: "CHỨNG CHỈ TIN HỌC QTMOS",
              key: "19",
              onClick: () => {
                router.push("/oit1/icdl11");
              },
            },
          ],
        },
        {
          label: <Link href="/itce">Chứng chỉ Tin học</Link>,
          key: "20",
          children: [
            {
              label: "Chứng chỉ MOS ",
              key: "21",
              onClick: () => {
                router.push("/itce/mos");
              },
            },
            {
              label: "Chứng chỉ IC3",
              key: "22",
              onClick: () => {
                router.push("/itce/ic3");
              },
            },
          ],
        },
      ],
    },
    {
      label: "LỊCH THI VSTEP",
      key: "13",
      onClick: () => {
        router.push("/test-schedule");
      },
    },
    {
      label: "LỊCH ÔN TẬP",
      key: "14",
      onClick: () => {
        router.push("/study-schedule");
      },
    },
    {
      label: "TIN TỨC",
      key: "15",
      onClick: () => {
        router.push("/new");
      },
    },
    {
      label: "ĐĂNG KÝ TƯ VẤN",
      key: "sub6",
    },
  ];

  useEffect(() => {
    setJwt(Cookies.get("jwt"));
    setId(Cookies.get("id"));
    console.log(jwt, id);
  }, []);

  return (
    <>
      <Menu
        onClick={(e) => {
          if (e.key === "sub6") {
            showModalRegisterAcc();
          }
        }}
        className="font-[500] items-center w-[70vw] phone:hidden tablet:hidden desktop:flex laptop:hidden"
        mode="horizontal"
        items={items}
        defaultSelectedKeys={checkPathname()}
      />
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        className="block phone:block tablet:block phone:absolute phone:left-[20px] phone:bottom-[13px] desktop:hidden"
      >
        <MenuOutlined className="" onClick={(e) => e.preventDefault()} />
      </Dropdown>
      <RegisterAccountModal />
    </>
  );
};

export default MenuHeader;
