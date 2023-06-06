import {  Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material"

export const FavoriteProductCard = ({
    id,
    name,
    image,
    price,
    category
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
            minWidth: '25%',
            maxWidth: '25%',
            transition: 'all 0.25s ease-in-out',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        }}
    >
        <Card
            raised
        >
            <Link underline="none" color="text.primary" href={`${category.slug}/${id}`}>
                <CardActionArea
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '200px',
                    }}
                >
                    <CardMedia
                    component='img'
                    height='150'
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

            <CardActions>
                <Typography variant='body2' color='text.secondary' align='right'>
                {`$${price}`}
                </Typography>
            </CardActions>
        </Card>
    </Grid>
    )
}
