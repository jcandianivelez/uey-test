import {useEffect, useState, useRef} from "react"


import { CategoriesList } from "../components/category/CategoriesList"
import { ListWrapper } from "../components/share/ListWrapper";
import { Box, Typography } from "@mui/material";
import { FavoritesList } from "../components/product/FavoritesList";
import { GetAllCategoriesQuery } from "../graphql/queries";

export const HomePage = () => {
  const [data, setData] = useState();
  const refListCategories = useRef();
  const refListFavorites = useRef();  

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
            query: GetAllCategoriesQuery,
            variables: {
              first: 100,
            }
          })
        }
      );

      const result = await response.json();

      setData(result.data.categoryCollection.edges.map(
        ({node}) => ({ ...node })
      ));
    }

    fetchData();
  }, []);

  

  return (
    <Box>
      <Box mb={3}>
        <Typography variant="h5" component="h3" sx={{ mb: 0, textAlign: 'center' }}>
          Categorias
        </Typography>

        <ListWrapper refList>
          <CategoriesList categories={data} refList={refListCategories} />
        </ListWrapper>
      </Box>

      <Box mb={3}>
        <Typography variant="h5" component="h3" sx={{ mb: 0, textAlign: 'center' }}>
          Favoritos
        </Typography>

        <ListWrapper refList>
          <FavoritesList categories={data} refList={refListFavorites} />
        </ListWrapper>
      </Box>

    </Box>
  )
}
