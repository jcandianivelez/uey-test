import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabProduct } from "./TabProduct"

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-TabProduct-${index}`,
  };
}

export default function TabsProduct() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="product tabs">
          <Tab label="Descripción" {...a11yProps(0)} />
          <Tab label="Especificaciones" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabProduct value={value} index={0}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis, animi quod architecto odio assumenda dolores impedit neque. Temporibus eos consequuntur aut quisquam architecto corrupti odit deleniti exercitationem asperiores quidem.
      </TabProduct>

      <TabProduct value={value} index={1}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iure veniam qui possimus soluta optio laboriosam doloremque ipsa obcaecati, enim officiis beatae consequatur? Ducimus magnam est eligendi expedita, corrupti sint?
      </TabProduct>
    </Box>
  );
}