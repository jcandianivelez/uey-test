import { Box, Button, Card, CardMedia, Divider, Grid, IconButton, TextField, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import moment from 'moment';

export const Details = ({
    name,
    image,
    supplier,
    price,
    description,
    stock,
    type,
    location,
    totalItems,
    orders,
    handleOpenMap,
    updateTotalItems
}) => {
    const startDates = orders?.map(({rentalStart}) => moment(rentalStart).format('YYYY-MM-DD'));
    const endDates = orders?.map(({rentalEnd}) => moment(rentalEnd).format('YYYY-MM-DD'));

    const shouldDisableDate = (date) => {
        const dateFormatted = moment(date).format('YYYY-MM-DD');

        return (
            startDates?.includes(dateFormatted) 
            || endDates?.includes(dateFormatted)
            || moment(date).isSameOrBefore(moment().format('YYYY-MM-DD'))
        );
    }

    return (
    <Grid container mt={5} spacing={3}>
            <Grid item sm={6} md={6}>
                <Card>
                <CardMedia
                    component='img'
                    image={image}
                    alt={name}
                />
                </Card>
            </Grid>
            
            <Grid item sm={6} md={6}>
                <Box mb={2}>
                    <Typography variant="h4" fontWeight="bold">
                        {name} {
                            location
                            && <IconButton color='primary' aria-label="open map location" onClick={handleOpenMap}> <LocationOnIcon /> </IconButton>
                        }
                    </Typography>

                    <Typography variant="body2" sx={{
                        color: '#9e9e9e'

                    }} >
                        Vendido por: {supplier?.name}
                    </Typography>
                </Box>

                <Divider />

                <Box my={2}>
                    <Typography variant="h5" fontWeight="bold">
                        {`$${price?.toFixed(2)}`}
                    </Typography>
                </Box>

                <Box mb={2}>
                    <Typography variant="body1" >
                        {description}
                    </Typography>
                </Box>

                {
                    stock !== null && (
                        <Box mb={2}>
                            <Typography variant="body1" >
                                {`Disponibilidad: ${stock}`}
                            </Typography>
                        </Box>
                    )
                }

                {
                    (type !== "SIMPLE") && (
                        <Box mb={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography variant="body1" >
                                        Fecha inicio:
                                    </Typography>

                                    <DatePicker
                                    slotProps={{ textField: { size: 'small' } }}
                                    shouldDisableDate={shouldDisableDate} sx={{width: '100%'}} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} container justifyItems="center">
                                    <Typography variant="body1" >
                                        Fecha final:
                                    </Typography>

                                    <DatePicker
                                    slotProps={{ textField: { size: 'small' } }}
                                    shouldDisableDate={shouldDisableDate} sx={{width: '100%'}} />
                                </Grid>
                            </Grid>
                        </Box>
                    )
                }

                <Grid container spacing={2} sx={{mt: 5}}>
                    <Grid item xs={12} sm={6} md={6}>
                        {
                            type !== "EVENT_HALL" && (
                                <>
                                    <IconButton
                                    color='primary'
                                    aria-label="remove from shopping cart"
                                    onClick={() => updateTotalItems('remove')}
                                    sx={{
                                        ml: 1
                                    }}>
                                        <RemoveIcon />
                                    </IconButton>

                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        value={totalItems}
                                        sx={{
                                            width: '50px',
                                        }}
                                    />

                                    <IconButton
                                    color='primary'
                                    aria-label="add to shopping cart"
                                    onClick={() => updateTotalItems('add')}
                                    sx={{
                                        mr: 1
                                    }}>
                                        <AddIcon />
                                    </IconButton>
                                </>
                            )
                        }
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={stock === 0}
                        >
                            Agregar al carrito
                        </Button>
                    </Grid>
                </Grid>
            </Grid> 
        </Grid>
    )
}
