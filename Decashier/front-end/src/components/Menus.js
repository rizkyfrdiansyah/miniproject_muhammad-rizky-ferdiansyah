import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { useQuery } from "@apollo/client";
import { Products } from "../apis/Queries";

const Menus = ({ menu, masukKeranjang }) => {
  const { data, loading, error } = useQuery(Products);
  return (
    <div>
      {data.Decashier_products.map((post) => (
        <Col md={4} xs={6} className="mb-4">
          <Card className="shadow" onClick={() => masukKeranjang(menu)}>
            <Card.Img variant="top" src={"assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} />
            <Card.Body>
              <Card.Title>
                {menu.nama} <strong>({menu.kode})</strong>
              </Card.Title>
              <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
};
export default Menus;
