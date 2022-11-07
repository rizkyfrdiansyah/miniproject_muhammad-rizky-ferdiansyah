import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from "./../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      this.props.history.push("/sukses");
    });
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <>
        {/* Tampilan untuk WEB */}
        <div className="fixed-bottom d-none d-md-block">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4">
              <h4>
                <div className="float-right">
                  Total Harga : <strong className="ms-2">Rp. {numberWithCommas(totalBayar)}</strong>
                </div>
              </h4>
              <div className="d-grid gap-4">
                <Button variant="success" size="lg" className="mb-2 mt-4 me-3" onClick={() => this.submitTotalBayar(totalBayar)} as={Link} to="/">
                  <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                  <strong>BAYAR</strong>
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </div>

        {/* Tampilan untuk MOBILE */}
        <div className="d-sm-block d-md-none">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4">
              <h4>
                Total Harga : <strong className="float-end me-2">Rp. {numberWithCommas(totalBayar)}</strong>
              </h4>
              <div className="d-grid gap-4">
                <Button variant="success" size="lg" className="mb-2 mt-2 me-3" onClick={() => this.submitTotalBayar(totalBayar)} as={Link} to="/">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <strong>BAYAR</strong>
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
