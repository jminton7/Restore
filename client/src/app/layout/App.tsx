import { useEffect, useState } from "react";
import { Product } from "../models/products";
import Catalog from "../../features/catalog/Catalog";
import { Box, Button, Container, Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addProducts = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: "Product " + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        quantityInStock: 100,
        description: "Test",
        pictureUrl: "https://picsum.photos/200",
        type: "Test",
        brand: "Test",
      },
    ]);
  };

  return (
    <Container maxWidth="xl">
      <Box display="flex" justifyContent="center" gap={3} my={3}>
        <Typography variant="h4">Re-Store</Typography>
        <Button variant="contained" onClick={addProducts}>
          Add Product
        </Button>
      </Box>

      <Catalog products={products} />
    </Container>
  );
}

export default App;
