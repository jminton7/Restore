import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/products";

type Props = {
  product: Product;
};
export default function ProductCard({ product }: Props) {
  return (
    <Card
      elevation={3}
      sx={{
        width: 280,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: "240px", backgroundSize: "cover" }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle2"
          sx={{ textTransform: "uppercase" }}
        >
          <Typography variant="h6" sx={{ color: "secondary.main" }}>
            ${(product.price / 100).toFixed(2)}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button>Add to cart</Button>
        <Button>View</Button>
      </CardActions>
    </Card>
  );
}
