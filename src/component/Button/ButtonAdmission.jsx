import { Button } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ButtonAdmissions(props) {
  const [admissionsList, setAdmissionList] = useState([]);
  useEffect(() => {
    getAllAdmissions()
      .then((data) => {
        setAdmissionList(data?.data?.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <Link key={item.id} href={`admission/${item.id}`}>
        <Button
          className="block ml-auto bg-[#FB9400] hover:bg-[#ffc00d] !important"
          type="primary"
        >
          {" "}
          Xem thêm
        </Button>
      </Link>
    </div>
  );
}

export default ButtonAdmissions;
