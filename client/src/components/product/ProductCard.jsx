import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

export const ProductCard = ({
    id,
    name,
    image,
    price
}) => {
    const { pathname } = useLocation();

    return (
    <Grid item xs={12} sm={6} md={3} key={id}>
        <Card raised>
            <Link underline="none" color="text.primary" href={`${pathname}/${id}`}>
                <CardActionArea>
                    <CardMedia
                    component='img'
                    height='260'
                    image={image}
                    alt={id}
                    />

                    <CardContent>
                        <Typography variant='body1' fontWeight="bold">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>

            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="contained" href={`${pathname}/${id}`} size="small">
                    Ver más
                </Button>

                <Typography variant='body2' color='text.secondary' align='right'>
                {`$${price}`}
                </Typography>
            </CardActions>
        </Card>
    </Grid>
    )
}
