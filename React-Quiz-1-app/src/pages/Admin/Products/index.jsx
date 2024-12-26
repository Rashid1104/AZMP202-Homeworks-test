import { Col, Row, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import controller from "../../../services";
import { endpoints } from "../../../services/constants";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Photo",
    dataIndex: "image",
    render: (text, record) => {
      return <img src={text} alt={record.title} width={100} />;
    },
  },
  {
    title: "Title",
    dataIndex: "title",
    showSorterTooltip: {
      target: "full-header",
    },
    sorter: (a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
  },
  {
    title: "Description",
    dataIndex: "description",
    render: (text, record) => (
      <Tooltip title={text} color={"black"} key={"black"}>
        {text.slice(0, 50)}...
      </Tooltip>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Rate",
    dataIndex: "rating",
    render: (rating) => rating.rate,
  },
  {
    title: "Count",
    dataIndex: "rating",
    render: (rating) => rating.count,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    controller.getAllData(endpoints.products).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div id="admin-products">
      <div className="container">
        <div className="admin-products">
          <Table
            columns={columns}
            dataSource={products}
            onChange={onChange}
            showSorterTooltip={{
              target: "sorter-icon",
            }}
            rowKey={"id"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
