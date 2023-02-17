import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Box, CircularProgress } from "@mui/material";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import FlexBox from '../flexbox/FlexBox'
import { Add, Delete, KeyboardReturn } from "@mui/icons-material";
import StudentInfo from "./StudentInfo";
import FlexAround from "../flexbox/FlexAround";



export default function ContractsList(){
    let [selectedStudent, setSelectedStudent] = useState(null|sessionStorage.getItem('student'));
    let [contractData, setContractData] = useState(JSON.parse(sessionStorage.getItem('matricula')));
    const Navigate = useNavigate();
    let [contratos, setContratos] = useState([])
    let [idMatricula, setIdMatricula] = useState();
    let [falseCourses, setFalseCourses] = useState([
        {
            curso:{
                codigo:123, 
                nome: 'Almoxarifado'
            }, 
            dataMatricula:"2018-03-05T00:00:00", 
            inicioCurso: "2018-03-13T00:00:00", 
            terminoCurso:"2018-05-14T00:00:00",
            dataPiso:"2018-04-27T00:00:00",
            statusFinanceiroDescricao:"Pago",
            statusCursoDescricao:"Aprovado"
            },
            {    
            curso:{
                codigo:312,
                nome: 'Direito Penal'
            },  
            dataMatricula:"2018-07-01T00:00:00", 
            inicioCurso: "2018-07-17T00:00:00", 
            terminoCurso:"2018-09-26T00:00:00",
            dataPiso:"2018-08-31T00:00:00",
            statusFinanceiroDescricao:"Aguardando pagamento",
            statusCursoDescricao:null
            },
    ])
    let API = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        axios.get(`${API}documentos/consultas/matriculas`,
        {params:{IdAluno: selectedStudent}})
        .then(res=>{setContratos(res.data)});
    },[selectedStudent])
    useEffect(()=>{
        if(idMatricula){
        contratos.map((item)=>{
            if(item.idMatricula === idMatricula){
            sessionStorage.setItem('matricula', JSON.stringify(item))
        }})
        Navigate('editar');
    }
    },[idMatricula])
    return(
        <Grid className="p-2 rounded-md bg-white">
            <Typography marginY={2} fontWeight={'bold'} color={'rgb(100,100,100)'} >Dados gerais do contrato</Typography>
            {contratos[0] ?
            <FlexBox style={{marginBottom:'1em', gap:'10px', display:'grid', gridTemplateColumns:'1fr 1.5fr 1fr 1fr' }}>
            <Button variant="contained" ><Add/><b>INCLUIR NOVO CONTRATO</b></Button>
            <StudentInfo bgColor={'rgb(80,80,80)'} titleColor={'lightgray'} infoColor={'white'} title={'ALUNO:'} info={contratos[0].aluno.nome} />
            <StudentInfo bgColor={'rgb(80,80,80)'} titleColor={'lightgray'} infoColor={'white'} title={'CPF:'} info={contratos[0].aluno.cpf} />
            <Button color='inherit' variant="contained" onClick={()=>{window.history.back()}}>VOLTAR<KeyboardReturn/></Button>
            </FlexBox>:<FlexAround><CircularProgress size={70}/></FlexAround>}
            {!contratos && contratos.length <1 ?
                <FlexAround><Typography fontSize={30}>NÃO HÁ CONTRATOS</Typography></FlexAround>
                :contratos.map((item)=>
                <TableContainer style={{maxHeight:'70vh'}}>
                    <FlexBox alignItems={'center'}>
                        <Box>
                        <Typography border='solid 1px' borderRadius='10px' margin='1em' padding={`.5em`} >CONTRATO: <b>{item.numeroMatricula ? item.numeroMatricula : 'N/D'}</b></Typography>
                        </Box>
                        <Box>
                        <Typography border='solid 1px' borderRadius='10px' margin='1em' padding={`.5em`} >SITUAÇÃO: <b>{item.dataPrescricao ? 'PRESCRITO': 'VIGENTE'}</b></Typography>
                        </Box>
                    <Button color="error" style={{height:'fit-content'}}><Delete/></Button>
                    <Button style={{height:'fit-content'}} onClick={()=>{setIdMatricula(item.idMatricula)}} ><EditIcon/></Button>
                    </FlexBox>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography>Código</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>Curso</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>Data matrícula</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>Início</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>Término</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>Data autorizada</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>Financeiro</Typography>
                                </TableCell>
                                <TableCell colSpan={2}>
                                    <Typography>Status</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {falseCourses.map(item=>
                            <TableRow>
                                <TableCell>
                                    <Typography>{item.curso && item.curso.codigo}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{item.curso && item.curso.nome}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{new Date(item.dataMatricula).toLocaleDateString('pt-BR')}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{item.inicioCurso ? new Date(item.inicioCurso).toLocaleDateString('pt-BR'):'N/D'}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{item.terminoCurso ? new Date(item.terminoCurso).toLocaleDateString('pt-BR'):'N/D'}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{item.dataPiso ? new Date(item.dataPiso).toLocaleDateString('pt-BR'):'N/D'}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{item.statusFinanceiroDescricao}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{item.statusCursoDescricao ? item.statusCursoDescricao : 'N/D'}</Typography>
                                </TableCell>
                            </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                        )
                }
        </Grid>
    )
}