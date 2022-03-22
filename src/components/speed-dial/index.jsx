// import * as React from 'react';
// import './style.css';
// import {useState} from 'react';
// import Box from '@mui/material/Box';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { purple } from '@mui/material/colors';

// const actions = [
//   { icon: <EditIcon />, name: 'Editar' },
//   { icon: <DeleteIcon />, name: 'Borrar' },

// ];

// export default function BasicSpeedDial() {
//     const [open, setOpen] = useState(false)
//   return (
//     <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1}}>
//       <SpeedDial
        
//         ariaLabel="SpeedDial basic"
//         sx={{ position: 'absolute', bottom: 16, right: 60 ,}}
//         icon={<SpeedDialIcon
//          ></SpeedDialIcon>}
        
//         onClose={() => {
//             setOpen(false);
//           }}
//           onOpen={() => {
//             setOpen(true);
//           }}
//           open={open}
//       >
//         {actions.map((action) => (
//           <SpeedDialAction
//             key={action.name}
//             icon={action.icon}
//             tooltipTitle={action.name}
          
//           />
//         ))}
//       </SpeedDial>
//     </Box>
//   );
// }