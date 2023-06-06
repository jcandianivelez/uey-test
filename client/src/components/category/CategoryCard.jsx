import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const CategoryCard = ({
    id,
    name,
    slug,
    image
}) => {
  return (
    <Grid
    item
    xs={12}
    sm={6}
    md={2}
    key={id}
    sx={{
        flex: '0 0 auto',
        width: 'fit-content',
        minWidth: 'fit-content',
        maxWidth: 'fit-content',
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    }}
    >
        <Link to={`/${slug}`} style={{ textDecoration: 'none' }}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%',
                    '&:hover': {
                        cursor: 'pointer',
                        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                    }
                }}
            >
                <CardMedia
                    component="img" 
                    height="100"
                    sx={{
                        objectFit: 'contain',
                        color: "#9755F2"
                    }}
                    image={image}
                    title={name}
                />

                <CardContent
                    component={Box}
                    sx={{ padding: "0 !important" }}
                >
                    <Typography variant="p" component={Box} textAlign="center" fontWeight="bold">
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    </Grid>
  )
}
