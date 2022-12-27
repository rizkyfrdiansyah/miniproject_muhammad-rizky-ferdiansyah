import { gql, useQuery } from "@apollo/client";

export const Products = gql`
  query Products {
    Decashier_products(where: { id_category: { _eq: 1 } }) {
      category_id {
        id
        nama
      }
      id
      kode
      nama
      harga
      is_ready
      gambar
    }
  }
`;

export const Product = gql`
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
    }
  }
`;
