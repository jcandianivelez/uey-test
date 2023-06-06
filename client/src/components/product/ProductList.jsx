import { Grid } from "@mui/material"
import { ProductCard } from "./ProductCard"

export const ProductList = ({
    products
}) => {
    return (
        <Grid container spacing={2}>
        {
            products?.map(
                product => (
                    <ProductCard key={product.id} {...product} />
                )
            )
        }
        </Grid>
    )
}