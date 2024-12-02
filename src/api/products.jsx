import { useQuery } from "react-query";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Errror fetching products");
  }
  return res.json();
};

export const useProducts = () => {
  return useQuery("products", fetchProducts);
};
