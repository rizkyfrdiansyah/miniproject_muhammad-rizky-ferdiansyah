import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, ListCategories, Menus } from "../components";
// import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert";
import client from "../components/apollo-client";
import { Category } from "../apis/Queries";
import { useQuery } from "@apollo/client";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       menus: [],
//       categoriYangDipilih: "Makanan",
//       keranjangs: [],
//     };
//   }

//   // componentDidMount() {
//   //   axios
//   //     .get(client + "products?category.nama=" + this.state.categoriYangDipilih)
//   //     .then((res) => {
//   //       const menus = res.data;
//   //       this.setState({ menus });
//   //     })
//   //     .catch((error) => {
//   //       console.log("Error yaa ", error);
//   //     });

//   //   this.getListKeranjang();
//   // }

//   // getListKeranjang = () => {
//   //   axios
//   //     .get(client + "keranjangs")
//   //     .then((res) => {
//   //       const keranjangs = res.data;
//   //       this.setState({ keranjangs });
//   //     })
//   //     .catch((error) => {
//   //       console.log("Error yaa ", error);
//   //     });
//   // };

//   // changeCategory = (value) => {
//   //   this.setState({
//   //     categoriYangDipilih: value,
//   //     menus: [],
//   //   });

//   //   axios
//   //     .get(client + "products?category.nama=" + value)
//   //     .then((res) => {
//   //       const menus = res.data;
//   //       this.setState({ menus });
//   //     })
//   //     .catch((error) => {
//   //       console.log("Error yaa ", error);
//   //     });
//   // };

//   // masukKeranjang = (value) => {
//   //   axios
//   //     .get(client + "keranjangs?product.id=" + value.id)
//   //     .then((res) => {
//   //       if (res.data.length === 0) {
//   //         const keranjang = {
//   //           jumlah: 1,
//   //           total_harga: value.harga,
//   //           product: value,
//   //         };

//   //         axios
//   //           .post(client + "keranjangs", keranjang)
//   //           .then((res) => {
//   //             this.getListKeranjang();
//   //             swal({
//   //               title: "Sukses Masuk Keranjang",
//   //               text: "Sukses Masuk Keranjang " + keranjang.product.nama,
//   //               icon: "success",
//   //               button: false,
//   //               timer: 1500,
//   //             });
//   //           })
//   //           .catch((error) => {
//   //             console.log("Error yaa ", error);
//   //           });
//   //       } else {
//   //         const keranjang = {
//   //           jumlah: res.data[0].jumlah + 1,
//   //           total_harga: res.data[0].total_harga + value.harga,
//   //           product: value,
//   //         };

//   //         axios
//   //           .put(client + "keranjangs/" + res.data[0].id, keranjang)
//   //           .then((res) => {
//   //             swal({
//   //               title: "Sukses Masuk Keranjang",
//   //               text: "Sukses Masuk Keranjang " + keranjang.product.nama,
//   //               icon: "success",
//   //               button: false,
//   //               timer: 1500,
//   //             });
//   //           })
//   //           .catch((error) => {
//   //             console.log("Error yaa ", error);
//   //           });
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.log("Error yaa ", error);
//   //     });
//   // };

//   render() {
//     const { data, loading, error } = useQuery(Category);
//     console.log(data);
//     const { menus, categoriYangDipilih, keranjangs } = this.state;
//     return (
//       <div className="mt-3">
//         <Container fluid>
//           <Row>
//             <ListCategories changeCategory={this.changeCategory} categoriYangDipilih={categoriYangDipilih} />
//             <Col className="mt-3">
//               <h4>
//                 <strong>Daftar Produk</strong>
//               </h4>
//               <hr />
//               <Row className="overflow-auto menu">{menus && menus.map((menu) => <Menus key={menu.id} menu={menu} />)}</Row>
//             </Col>
//             {/* <Hasil keranjangs={keranjangs} {...this.props} getListKeranjang={this.getListKeranjang} /> */}
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

const Home = () => {
  const { data, loading, error } = useQuery(Category);
  console.log(data);
  return <div></div>;
};

export default Home;
