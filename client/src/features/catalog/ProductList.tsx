import { Box } from "@mui/material";
import { Product } from "../../app/models/products";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {products.map((products) => (
        <ProductCard key={products.id} product={products} />
      ))}
    </Box>
  );
}
