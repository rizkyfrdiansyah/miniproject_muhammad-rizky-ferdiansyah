import { gql, useQuery } from "@apollo/client";

export const Products = gql`
  query MyQuery {
    Decashier_products {
      gambar
      harga
      id
      id_category
      is_ready
      kode
      nama
    }
  }
`;

export const Category = gql`
query MyQuery {
    Decashier_categories {
      id
      nama
`;
