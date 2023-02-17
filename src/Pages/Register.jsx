import React from 'react'
import { Grid } from '@mui/material'
import RegisterForm from '../Components/RegForms/RegisterForm';


export default function Register() {
  return (
    <Grid className='bg-white p-2 rounded-md'>
      <RegisterForm/>
    </Grid>
  )
}
