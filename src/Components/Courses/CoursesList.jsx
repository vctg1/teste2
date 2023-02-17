import { Edit } from '@mui/icons-material';
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CousesList(params){
    let Navigate = useNavigate();
    let falseCourses = [
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
    ]
    let [cursos,setCursos] = useState(falseCourses);
    /* let API = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        axios.get(`${API}documentos/consultas/matriculas`,
        {params:{IdAluno: params.selectedStudent}})
        .then(res=>{setCursos(res.data)});
    },[]) */
    return(
        <Grid>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                        <TableCell/>
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
                            <TableCell colSpan={2}>
                                <Typography>Status</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {cursos.map(item=>
                        <TableRow>
                            <TableCell>
                                <Button onClick={()=>{sessionStorage.setItem('curso', JSON.stringify(item)); Navigate('curso')}}><Edit/></Button>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.curso.codigo}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.curso.nome}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.dataMatricula ? new Date(item.dataMatricula).toLocaleDateString('pt-BR') : 'N/D' }</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.inicioCurso ? new Date(item.inicioCurso).toLocaleDateString('pt-BR') : 'N/D' }</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.terminoCurso ? new Date(item.terminoCurso).toLocaleDateString('pt-BR') : 'N/D' }</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.dataPiso ? new Date(item.dataPiso).toLocaleDateString('pt-BR') : 'N/D' }</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.statusFinanceiroDescricao}</Typography>
                            </TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}