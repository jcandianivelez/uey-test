import { Grid } from "@mui/material"
import { FavoriteProductCard } from "./FavoriteProductCard"

export const FavoritesList = ({
    categories = [],
    refList
}) => {
    const products = categories.reduce(
        (acc, category) => {
            return [
                ...acc,
                ...category.items.edges.filter(
                    ({node}, index) => index < 2 && node
                ).map(
                    ({node}) => ({ ...node, category: { ...category } })
                )
            ]
        }, []
    );

    console.log(products);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'nowrap',
                overflowX: 'scroll',
                padding: '1rem',
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                scrollBehavior: 'smooth'

            }}
            ref={refList}
        >
        {
            products?.map(
                product => (
                    <FavoriteProductCard key={product.id} {...product} />
                )
            )
        }
        </Grid>
    )
}