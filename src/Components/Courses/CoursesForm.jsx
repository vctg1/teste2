import { Table, Grid,  TextField, Typography, TableRow } from "@mui/material";
import React from "react";
import axios from "axios";
import { ptBR } from 'date-fns/locale';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function CoursesForm(params){
    return(
        <Table> 
            <TableRow>
                <Typography color={'black'} fontWeight='bold' padding={'2%'} paddingBottom='0' >
                    {params.title}
                </Typography>
            </TableRow>
            <Grid display={'grid'} gridTemplateColumns='1fr 1fr 1fr 1fr 1fr' padding={'2%'} >
            {Object.keys(params.data).slice(params.start,params.finish).map((item)=> {
                if(params.data[item] instanceof Date){
                    return(
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR} >
                        <DesktopDatePicker
                        label={item}
                        inputFormat="dd/MM/yyyy"
                        value={params.data[item]}
                        onChange={(e)=>params.setData((data)=>({...data, item: e}))}
                        renderInput={(params) => <TextField {...params} 
                        InputLabelProps={{
                            style: { fontWeight: 'bold'},
                        }} 
                        style={{margin:'2%'}} size='small' />}
                        />
                        </LocalizationProvider>
                    )
                }
                else{
                    return(
                    <TextField
                    InputLabelProps={{
                        style: { fontWeight: 'bold'},
                    }}
                    style={{margin:'2%'}}
                    size='small'
                    value={params.data[item]}
                    label={item}
                    onChange={(e)=>params.setData((data)=>({...data, [item]: e.target.value}))} 
                    />
                    )
                }                    
            })}
            </Grid>
        </Table>
    )
}