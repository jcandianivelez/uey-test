import { Grid } from "@mui/material"
import { CategoryCard } from "./CategoryCard"

export const CategoriesList = ({
    categories = [],
    refList
}) => {

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
            categories?.map(
                category => (
                    <CategoryCard key={category.id} {...category} />
                )
            )
        }
        </Grid>
    )
}