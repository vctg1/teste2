import { Button, CircularProgress, Grid, TableContainer, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import StudentInfo from '../Contracts/StudentInfo';
import FlexAround from '../flexbox/FlexAround';
import { ptBR } from 'date-fns/locale';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function AditionalExpensesForm(params){
    let API = process.env.REACT_APP_API_KEY;
    let [cursos, setCursos] = useState([]);
    let [data, setData] = useState({});
    let [fieldsList, setFieldsList] = useState([])
    let [initialData, setInitialData] = useState({
        dtPagamento: new Date('0000,01,01')
    });
    useEffect(()=>{
        axios.get(`${API}documentos/consultas/matriculas`,
        {params:{IdAluno: params.selectedStudent}})
        .then(res=>{setCursos(res.data)});
        setData(initialData)
    },[])
    useEffect(()=>{
        cursos.forEach(item=>{
            if(new Date(item.dataPagamento).getTime() > data.dtPagamento.getTime()){
                setData((data)=>({...data, dtPagamento: new Date(item.dataPagamento)}))
            }
        })
        setFieldsList([{
            mask: '',
            label:'Status',
            value:''
            },
            {
            mask: '',
            label:'Tipo',
            value:''
            },
            {
            mask: '',
            label:'Boleto',
            value:''
            },
            {
            mask: '',
            label:'Forma pagamento',
            value:''
            }])
    },[cursos])
    return(
        <Grid>
            <TableContainer>
                {fieldsList ? 
                <Grid display='grid' alignItems='center' gridTemplateColumns='1fr 1fr 1fr 1fr 1fr' marginY={1} gap={2} >
                {fieldsList.map((item, key)=>
                <InputMask mask={item.mask}  value={item.value} >{()=>
                <TextField label={item.label} size='small' />}
                </InputMask>
                )}
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR} >
                <DesktopDatePicker
                label="Data pagamento"
                inputFormat="dd/MM/yyyy"
                onChange={(e)=>setData((data)=>({...data, dtPagamento:e}))}
                value={data.dtPagamento}
                renderInput={(params) => <TextField {...params} size='small' />}
                />
                </LocalizationProvider>
                </Grid>
                :<FlexAround>
                    <CircularProgress/>
                </FlexAround> 
                }
                <Button variant="contained" color="warning">SALVAR</Button>
            </TableContainer>
        </Grid>
    )
}