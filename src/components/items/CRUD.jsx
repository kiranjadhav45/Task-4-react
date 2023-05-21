import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  FormControl,
  Button,
  Form,
  Col,
  FloatingLabel,
  Row,
  Table,
} from "react-bootstrap";
import { BsPrinterFill } from "react-icons/bs";
import { HiPencilAlt } from "react-icons/hi";
import { MdClear } from "react-icons/md";

const CRUD = () => {
  const [expDate, setExpDate] = useState(new Date());
  const [post, setPost] = useState("");
  const [updateCount, setUpdateCount] = useState(1);
  const [productData, setProductData] = useState([
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1000,
      id: 1,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1001,
      id: 2,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1002,
      id: 3,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1003,
      id: 4,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1004,
      id: 5,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1005,
      id: 6,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1006,
      id: 7,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1007,
      id: 8,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1008,
      id: 9,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1009,
      id: 10,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1010,
      id: 11,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1011,
      id: 12,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1012,
      id: 13,
    },
    {
      name: "Mark",
      quantity: "55",
      company: "cipla",
      MRP: "499",
      basePrice: "300",
      wholesale: "375",
      retail: "450",
      action: "null",
      expireDate: "",
      barcode: 1013,
      id: 14,
    },
  ]);

  const [productList, setProductList] = useState({
    name: "",
    quantity: "",
    company: "",
    MRP: "",
    id: "",
  });

  const handleOnEdit = (item) => {
    setProductList(item);
    console.log(item, "item");
  };

  // onchange

  const handleOnChange = (e) => {
    const updatedData = [...productData];
    const index = updatedData.findIndex(
      (product) => product.id === productList.id
    );
    if (index < 0) {
      const p = { ...productList };
      p[e.target.name] = e.target.value;
      let idd = Math.floor(Math.random() * 100000);
      p.id = idd;
      setProductList(p);
    } else {
      const p = { ...productList };
      p[e.target.name] = e.target.value;
      setProductList(p);
    }
  };

  // update and adding new product to the list
  const handleOnUpdate = async () => {
    try {
      const updatedData = [...productData];
      const index = updatedData.findIndex(
        (product) => product.id === productList.id
      );
      console.log(productList.id, "iddd");
      console.log("index", index);
      if (index !== -1) {
        updatedData[index] = { ...productList };
      } else {
        let ind = productData.length;
        updatedData[ind] = { ...productList };
      }
      setProductData(updatedData);
      setProductList({
        name: "",
        quantity: "",
        company: "",
        MRP: "",
        action: "",
        id: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  // delele item from the list
  const handleOnDelete = (item) => {
    let updated = productData.filter((product) => product.id !== item.id);
    setProductData(updated);
  };
  return (
    <Container fluid>
      <Row>
        <Col className="col-lg-5 col-md-24">
          <Row className="mt-4">
            <Col className="col-lg-15">
              <FloatingLabel
                as={Col}
                controlId="floatingInput"
                label="Product Name"
                className="mb-1"
              >
                <FormControl
                  type="text"
                  size="sm"
                  value={productList.name}
                  onChange={handleOnChange}
                  name="name"
                  //   placeholder={errors.company ? "Required Field" : "Company Name"}
                  //   className={errors.company ? "border-orange" : "border-1"}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="col-lg-9">
              <FloatingLabel
                as={Col}
                controlId="floatingInput"
                label="Company Name"
                className="mb-1"
              >
                <FormControl
                  type="text"
                  size="sm"
                  value={productList.company}
                  onChange={handleOnChange}
                  name="company"
                  //   placeholder={errors.company ? "Required Field" : "Company Name"}
                  //   className={errors.company ? "border-orange" : "border-1"}
                />
              </FloatingLabel>
            </Col>
            <Col className="col-lg-15">
              <FloatingLabel
                as={Col}
                controlId="floatingInput"
                label="Quantity "
                className="mb-1"
              >
                <FormControl
                  type="text"
                  size="sm"
                  value={productList.quantity}
                  onChange={handleOnChange}
                  name="quantity"
                  //   placeholder={errors.company ? "Required Field" : "Company Name"}
                  //   className={errors.company ? "border-orange" : "border-1"}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <FloatingLabel
                as={Col}
                controlId="floatingInput"
                label="MRP"
                className="mb-1"
              >
                <FormControl
                  type="text"
                  size="sm"
                  value={productList.MRP}
                  onChange={handleOnChange}
                  name="MRP"
                  //   placeholder={errors.company ? "Required Field" : "Company Name"}
                  //   className={errors.company ? "border-orange" : "border-1"}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="d-grid gap-2">
              {productList && productList.name.length !== 0 ? (
                <Button size="lg" onClick={handleOnUpdate}>
                  Update Item
                </Button>
              ) : (
                <Button
                  size="lg"
                  // onClick={handleOnSubmit}
                >
                  Add Item
                </Button>
              )}
            </Col>
          </Row>
        </Col>
        <Col className="col-lg-19 mt-4 col-md-24">
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>id</th>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>MRP</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {productData &&
                  productData.map((item, index) => {
                    return (
                      <tr key={index + item.id}>
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.MRP}</td>

                        <td className="d-flex justify-content-evenly">
                          <span className="menuIcon">
                            {" "}
                            <BsPrinterFill size={20} />
                          </span>
                          <span className="icon-hover-edit">
                            <HiPencilAlt
                              color="aquamarine"
                              size={20}
                              onClick={() => handleOnEdit(item)}
                            />
                          </span>
                          <span className="icon-hover">
                            {" "}
                            <MdClear
                              color="orange"
                              size={22}
                              onClick={() => handleOnDelete(item)}
                            />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CRUD;
