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
