import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom'; // Import Link if using React Router

export default function CustomBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Contact Us"
          icon={<PhoneInTalkIcon />}
          component={Link} // Replace with 'a' if not using React Router
          to="https://api.whatsapp.com/send?phone=972525664414" // Replace with 'href' if not using React Router
          target="_blank"
        />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
