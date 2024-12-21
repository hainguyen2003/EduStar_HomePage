"use client";
import React, { useContext } from "react";
import { Button } from "antd";
import RegisterCourse from "../modal/RegisterCourse";
import { AppContext } from "../AppContext/AppContext";

function ButtonInformation(props) {
  const { data, dispatch } = useContext(AppContext);
  const showModalCourse = () => {
    dispatch({ type: "modalRegisterAccOpen" });
  };
  return (
    <div>
      <Button
        className="custom-btn bg-[#fb9400] text-white  "
        onClick={() => {
          showModalCourse();
        }}
      >
        ĐĂNG KÝ KHÓA HỌC
      </Button>
      <RegisterCourse />
    </div>
  );
}

export default ButtonInformation;
