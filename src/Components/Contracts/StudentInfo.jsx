import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

export default function StudentInfo(params){
    return(
        <Box style={{backgroundColor:params.bgColor}} className='p-2 rounded-md'>
          <Typography color={params.titleColor} fontSize={14} >
            {params.title}
          </Typography>
          <Typography color={params.infoColor} fontSize={14} >
            {params.info}
          </Typography>
        </Box>
    )
}