/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getAdmissionsById, getAllAdmissions } from "@/api/apiAdmission";
import Link from "next/link";
import AdmissionItem from "../../../../component/admission/AdmissionItem";

async function PageDetailAdmissions({ params }) {
  const { id } = params;
  let itemAdmission = null;
  const resDetailAdmission = await getAdmissionsById(params.id);
  itemAdmission = resDetailAdmission?.data;

  const listAdmission = await getAllAdmissions();
  let admissions = null;
  let sortedAdmissions = [];
  let latestAdmissions = [];
  if (listAdmission) {
   admissions = listAdmission?.data?.items;
    sortedAdmissions = admissions.sort((a, b) => b.id - a.id);
    latestAdmissions = sortedAdmissions.slice(0, 6);
  }

  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="grid laptop:grid-cols-3  gap-[2rem] my-[6%]">
        <div className="laptop:col-span-2  m-[5rem]">
          {/* <div dangerouslySetInnerHTML={{ __html: itemNew?.content }}></div> */}
          <AdmissionItem params={params} />
        </div>
        <div className="col-span-1">
          {latestAdmissions.map((item, index) => (
            <div key={index} className="flex">
              <div className="mb-[30px] phone:ml-[10px] ">
                <Link
                  key={item.id}
                  href={`/admission/${item.id}`}
                  className="flex"
                >
                  <img
                    src={item?.image}
                    alt=""
                    width={190}
                    className=" phone:w-[160px] laptop:w-[170px] laptop:h-[160px] laptop:bg-cover  "
                  />
                  <div>
                    <h3 className=" ml-[15px] text-[15px] ">{item?.title} </h3>
                    <br />
                    <h4 className=" ml-[15px] text-[15px] ">{item?.program} </h4>
                    <p
                      // dangerouslySetInnerHTML={{ __html: item.content }}
                      className="text-[#333]  line-clamp-1 mb-[3rem] ml-[15px] "
                    >
                      <span>{item?.admissionForm}</span>
                      <br />
                      {item?.description}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageDetailAdmissions;
