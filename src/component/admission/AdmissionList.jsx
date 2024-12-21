/* eslint-disable @next/next/no-img-element */
"use client";
import { getAllAdmissions } from "@/api/apiAdmission";
import { Button, Col, Image, Row, notification } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function AdmissionList(props) {
  const [admissionList, setAdmissionList] = useState([]);
  useEffect(() => {
    getAllAdmissions()
      .then((data) => {
        const dataAdmissions = data?.data?.items;
        const sortedAdmissions = dataAdmissions.sort((a, b) => b.id - a.id);
        setAdmissionList(sortedAdmissions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="tablet:grid-cols-3 grid phone:grid-cols-1 gap-24   ">
        {admissionList.map((item, ind) => (
          <div key={ind}>
            <img
              src={item.image}
              alt="this is the image "
              className=" w-full object-cover rounded-t-[3rem] h-[256px] "
            />

            <Link
              key={item.id}
              href={`admission/${item.id}`}
              className=" col-span-1  hover:cursor-pointer mt-[10%] mx-auto"
            >
              <div>
                <p className="text-[5rem] font-[600] text-[#FB9400]  my-[3%] line-clamp-2 ">
                  {item.program}
                </p>
                <p className="text-[#333]  line-clamp-1 mb-[3rem]  ">
                  {item?.description}
                </p>
              </div>

              <Button
                className="block ml-auto bg-[#FB9400] hover:bg-[#ffc00d] !important"
                type="primary"
              >
                {" "}
                Xem thêm
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdmissionList;
