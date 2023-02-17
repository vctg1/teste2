import { KeyboardReturn } from "@mui/icons-material";
import { Button, Grid, TableContainer, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CoursesForm from "../Components/Courses/CoursesForm";

export default function Course(){
    let [matricula, setMatricula] = useState(JSON.parse(sessionStorage.getItem('curso')))
    let startData = {
        'Nº Matrícula': matricula.numeroMatricula,
        'Curso': matricula.curso.codigo,
        'C.H': matricula.curso.cargaHoraria,
        'Valor': matricula.curso.valor,
        'Representante' : matricula.representante,
        'Início curso' : new Date(matricula.inicioCurso),
        'Término' : new Date(matricula.terminoCurso),
        'Período' : matricula.periodo,
        'Data autorizada': new Date(matricula.dataPiso),
        'Data prescrição': new Date(matricula.dataPrescricao),
        'Usuário' : 'Juarez',
        'Data matrícula' : new Date(matricula.dataMatricula),
        'Status financeiro': matricula.statusFinanceiroDescricao,
        'Forma de pagamento': matricula.formaPagamentoDescricao,
        'Boleto': matricula.boleto,
        'Valor total': matricula.valorTotal,
        'Data pagamento' : new Date(matricula.dataPagamento),
        'Solicitação cancelamento': matricula.solicitacaoCancelamentoDescricao,
        'Enviar Material': matricula.envioMaterialDescricao,
        'Material didático':matricula.materialDidaticoDescricao,
        'Data postagem': new Date(matricula.dataPostagem),
        'Enviado para': matricula.materialEnviadoParaDescricao,
        'Status curso': matricula.statusCursoDescricao,
        'Data status': new Date(matricula.dataStatusCurso),
        'Certificado expedido': new Date(matricula.certificadoExpedido),
        'Data envio': new Date(matricula.certificadoEnviado),
        'Registro': matricula.registro,
        'Código de rastreio do material':'',
        'Código de rastreio do certificado':'',
        'Código de rastreio da prova':'',
        'Observações':matricula.observacoes
    }
    let [data, setData] = useState(startData)
    return(
        <Grid>
            <Button onClick={()=>{sessionStorage.setItem('button', 2);window.history.back()}}>VOLTAR<KeyboardReturn/></Button>
            <Grid style={{backgroundColor:'white', borderRadius:'10px'}}>
            <TableContainer>
                <CoursesForm data={data} setData={setData} title={'DADOS DO CURSO'} start={0} finish={11} />
                <CoursesForm data={data} setData={setData} title={'PROCEDIMENTOS GERAIS'} start={17} finish={30} />
                <Grid padding={'2%'} width='100%'>
                <TextField
                InputLabelProps={{
                    style: { fontWeight: 'bold'},
                }}
                fullWidth
                size='small'
                multiline
                rows={4}
                value={data.Observações}
                label={'Observações'}
                onChange={(e)=>setData((data)=>({...data, 'Observações': e.target.value}))} 
                />
                </Grid>
            </TableContainer>
            </Grid>
        </Grid>
    )
}