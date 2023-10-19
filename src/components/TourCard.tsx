import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 
import { Typography,Box } from '@mui/material';
import { AccessTime} from '@mui/icons-material';
import Rating from '@mui/material/Rating';
export const TourCard = () => {
  return (
         <Grid xs={3}>
         <Paper elevation={20}  >
            <img className='img' src="https://picsum.photos/200/300 " alt="NO PIC" />
       <Box paddingX={1}>
       <Typography variant="subtitle2" component="h2" >
              Jesus is Lord
          </Typography>
          <Box 
       sx={{
        display: 'flex',
        alignItems: 'center',
        
       }}>
          <AccessTime sx={{width:12.5}}></AccessTime>
         <Typography variant="body2" component="p" marginLeft={0.5}>
                 5hours
             </Typography>
       </Box>
       <Box 
       sx={{
        display: 'flex',
        alignItems: 'center',
        
       }}>
          <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
        </Box>
       </Box>

         </Paper >
         </Grid>
  )
}
