"use client";
import { getAllDocument } from "@/api/apiDocument";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Image, List, Skeleton } from "antd";
import React, { useEffect, useState } from "react";

function MyDocs(props) {
  const [listDocs, setListDocs] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const toggleExpand = (itemID) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemID]: !prev[itemID],
    }));
  };

  useEffect(() => {
    getAllDocument()
      .then((data) => {
        setListDocs(data?.data?.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // console.log("listDocs", listDocs);

  return (
    <div>
      {/* <Skeleton> */}
      <List>
        {listDocs.map((item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={
                <Image src={item.image} alt="pic" height={50} width={50} />
              }
              title={<h2>{item.name}</h2>}
              description={
                expandedItems[item.id]
                  ? item.content
                  : item.content.slice(0, 40) + "..."
              }
            />

            {item.content.length > 40 && (
              <Button onClick={() => toggleExpand(item.id)}>
                {expandedItems[item.id] ? "Rút gọn" : "Xem thêm"}
              </Button>
            )}
            <Button
              href={item.file}
              className="custom-btn ml-[5%] flex items-center"
            >
              <DownloadOutlined />
              Download
            </Button>
          </List.Item>
        ))}
      </List>
      {/* </Skeleton> */}
    </div>
  );
}

export default MyDocs;
