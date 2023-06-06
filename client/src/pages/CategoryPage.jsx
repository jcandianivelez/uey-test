import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../components/product/ProductList";
import CustomBreadcrumbs from "../components/share/CustomBreadcrumbs";
import { GetAllProductsQuery } from "../graphql/queries";


export const CategoryPage = () => {
  const [data, setData] = useState();
  const [category, setCategory] = useState();

  const { categorySlug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:4000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "1234567890",
          },
          body: JSON.stringify({
            query: GetAllProductsQuery(categorySlug),
            variables: {
              first: 100,
            }
          })
        }
      );

      const result = await response.json();

      setCategory(result.data.category);

      setData(result.data.category.items.edges.map(
        ({node}) => ({ ...node })
      ));
    }

    fetchData();
  }, []);

  return (
    <div>
      <Box sx={{
        padding: '1rem'
      }}>
        <CustomBreadcrumbs />

        <Typography variant="h3" component={Box} textAlign={'center'} mb={5} >
          {category?.name}
        </Typography>

        <Grid container spacing={2}>
          <ProductList products={data} />
        </Grid>
      </Box>
    </div>
  )
}
