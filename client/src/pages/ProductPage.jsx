import { useParams } from "react-router-dom";
// import { ProductDetail } from "../components/product/ProductDetail"
import { useEffect, useState } from "react";
import { ProductDetail } from "../components/product/ProductDetail";
import { Box } from "@mui/material";
import CustomBreadcrumbs from "../components/share/CustomBreadcrumbs";
import { GetProductQuery } from "../graphql/queries";

export const ProductPage = () => {
  const {productId} = useParams();
  const [data, setData] = useState();
  const [totalItems, setTotalItems] = useState(0);

  const updateTotalItems = (action) => {
    setTotalItems((prevState) => {
        if (prevState === 0 && action === "remove") {
            return prevState;
        }

        if (action === "add") {
            return prevState + 1;
        } else if (action === "remove") {
            return prevState - 1;
        }
    });
  }

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
                      query: GetProductQuery(productId),
                      variables: {
                          first: 100,
                      }
                  })
              }
          );
          
          const result = await response.json();

          setData({
              ...result.data?.item,
              orders: result.data?.item?.orders.edges.map(
                  ({node}) => ({ ...node })
              )
          });
      }

      fetchData();
  }, []);

  return (
    <Box sx={{
        padding: '1rem'
    }}>
        <CustomBreadcrumbs name={data?.name} />
        <ProductDetail {...data} totalItems={totalItems} updateTotalItems={updateTotalItems} />
    </Box>
  )
}
