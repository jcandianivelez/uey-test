import { useState } from "react";
import { Box, Modal } from "@mui/material";

import LocationMap from "../share/LocationMap";
import TabsProduct from "./tabs/TabsProduct";
import { Details } from "./detail/Details";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    boxSizing: 'border-box',
  };

export const ProductDetail = ({
    name,
    image,
    price,
    type,
    description,
    stock,
    supplier,
    location,
    totalItems,
    orders,
    updateTotalItems
}) => {
    const [open, setOpen] = useState(false);

    const handleOpenMap = () => setOpen(true);
    const handleCloseMap = () => setOpen(false);


    return (
        <>
        <Details
            name={name}
            image={image}
            supplier={supplier}
            price={price}
            description={description}
            stock={stock}
            type={type}
            location={location}
            totalItems={totalItems}
            orders={orders}
            handleOpenMap={handleOpenMap}
            updateTotalItems={updateTotalItems}
        />

        <TabsProduct />


        <Modal
        open={open}
        onClose={handleCloseMap}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <LocationMap name={name} location={location} />
            </Box>
        </Modal>
    </>
    )
}