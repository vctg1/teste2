import { Box, Button, CircularProgress, Grid, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import StudentInfo from '../Contracts/StudentInfo';
import InputMask from 'react-input-mask';
import FlexAround 
from '../flexbox/FlexAround'


export default function FinancialForm(params){
    let API = process.env.REACT_APP_API_KEY;
    let [cursos, setCursos] = useState([]);
    let valorLiquido = 0, valorBruto = 0;
    let [fieldsList, setFieldsList] = useState([])
    let [dataPagamento, setDataPagamento] = useState(new Date('0000,01,01'));
    useEffect(()=>{
        axios.get(`${API}documentos/consultas/matriculas`,
        {params:{IdAluno: params.selectedStudent}})
        .then(res=>{setCursos(res.data)});
    },[])
    cursos.forEach(item=>{
        valorLiquido+=item.curso.valor;
        valorBruto+=item.curso.valorTotal;
        if(new Date(item.dataPagamento).getTime() > dataPagamento.getTime()){
        setDataPagamento(new Date(item.dataPagamento))
    }
    })
    useEffect(()=>{
        setFieldsList([{
            mask: '',
            label:'Desconto',
            value:''
            },
            {
            mask: '',
            label:'Convênio',
            value:''
            },
            {
            mask: '',
            label:'Frete',
            value:''
            },
            {
            mask: '',
            label:'Estorno',
            value:''
            },
            {
            mask: 'R$ 999,00',
            label:'Total bruto',
            value:valorBruto
        }])
    },[valorBruto])
    return(
        <Grid>
            <TableContainer>
                <Grid display='grid' alignItems='center' gridTemplateColumns='1fr 1fr 1fr 1fr 2fr 2fr 2fr' gap={2} >
                {fieldsList ? fieldsList.map((item, key)=>
                <InputMask mask={item.mask}  value={item.value} >{()=>
                <TextField label={item.label} size='small' />}
                </InputMask>
                )
                :<FlexAround>
                    <CircularProgress/>
                </FlexAround> 
                }
                <StudentInfo bgColor={'rgb(80,80,80)'} titleColor={'lightgray'} infoColor={'white'} title={'TOTAL LÍQUIDO - PAGO:'} info={`R$ ${valorLiquido},00`} />
                <StudentInfo bgColor={'rgb(80,80,80)'} titleColor={'lightgray'} infoColor={'white'} title={'LIQUIDADO EM:'} info={dataPagamento.toLocaleDateString('pt-BR')} />
                </Grid>
                <Button variant="contained" color="warning">SALVAR</Button>
            </TableContainer>
        </Grid>
    )
}