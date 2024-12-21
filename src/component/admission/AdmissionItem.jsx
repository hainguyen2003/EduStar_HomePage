"use client";
import React, { useEffect, useState } from "react";
import { getAdmissionsById } from "@/api/apiAdmission";

function AdmissionItem({ params }) {
  // console.log("params", params);
  const [admissionItem, setAdmissionsItem] = useState();
  useEffect(() => {
    getAdmissionsById(params.id).then((res) => {
      const data = res?.data;
      setAdmissionsItem(res?.data);
    });
  }, [params.id]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: admissionItem?.title }}></div>
    </div>
  );
}

export default AdmissionItem;
