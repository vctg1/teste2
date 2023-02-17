import { Button, MenuItem, TextField } from '@mui/material';
import InputMask from 'react-input-mask';
import React from 'react';
import { useState } from 'react';
import { Collapse } from '@material-ui/core';

export default function RegForm3({data, setData, penitenciaria, muiAlert}){
    let [open, setOpen]= useState(false);
    let uf = [{value:1,txt:'Acre'}, 
    {value:2, txt:'Alagoas'}, {value:3, txt:'Amapá'}, 
    {value:4, txt:'Amazonas'}, {value:5, txt:'Bahia'}, 
    {value:6, txt:'Ceará'}, {value:7, txt:'Distrito Federal'}, 
    {value:8, txt:'Espírito Santo'}, {value:9, txt:'Goiás'}, 
    {value:10,txt:'Maranhão'}, {value:11,txt:'Mato Grosso'}, 
    {value:12,txt:'Mato Grosso do Sul'}, {value:13,txt:'Minas Gerais'}, 
    {value:14,txt:'Minas Gerais'}, {value:15,txt:'Paraíba'}, {value:16,txt:'Paraná'}, 
    {value:17,txt:'Pernambuco'}, {value:18,txt:'Piauí'}, {value:19,txt:'Rio de Janeiro'}, 
    {value:20,txt:'Rio Grande do Norte'}, {value:21,txt:'Rio Grande do Sul'}, 
    {value:22,txt:'Rondônia'}, {value:23,txt:'Roraima'}, {value:24,txt:'Santa Catarina'}, 
    {value:25,txt:'São Paulo'}, {value:26,txt:'Sergipe'}, 
    {value:27,txt:'Tocantins'}];
    return(
        <div id='Form3'>
            <InputMask mask={'999999999999'} maskChar={''} onChange={(e) => setData((data)=>({...data,'infopen':e.target.value.toUpperCase()}))} value={data.infopen} >{()=><TextField error={muiAlert && !data.infopen} size='small' variant="outlined" style={{margin:'1%'}}  label='INFOPEN' className='inputs' id='infopen'></TextField>}</InputMask> 
            <TextField error={muiAlert && !data.penitenciaria} size='small' onChange={(e) => setData((data)=>({...data, penitenciaria:{...data.penitenciaria,'uf':e.target.value}}))} value={data.penitenciaria && data.penitenciaria.uf} select style={{margin:'1%'}} variant="outlined" label='UF' className='inputs' id='ufPris'>
            {uf.map(item=><MenuItem value={item.value}>{item.txt}</MenuItem>)}</TextField>
            <div className='penitenciaria'>
            <Collapse in={!open}>
            <TextField error={muiAlert && !data.penitenciaria} size='small' style={{width:'100%'}} select onChange={(e) => {setData((data)=>({...data, penitenciaria:{...data.penitenciaria,'idPenitenciaria':e.target.value}}))}} type='number' value={data.penitenciaria && data.penitenciaria.idPenitenciaria} variant="outlined" label='Penitenciária' id='penitenciaria'>
            {penitenciaria.length>0 ?<MenuItem value={2} onClick={()=>setOpen(true)}>Minha penitenciaria não consta na lista</MenuItem> :<MenuItem>SELECIONE A UF PRIMEIRO</MenuItem>}
            {penitenciaria.map(item=><MenuItem value={item.id}>{item.nome}</MenuItem>)}</TextField>
            </Collapse>
            <Collapse in={open}>
            <div className='w-full flex gap-5'>
            <Button onClick={()=>{setOpen(false);setData((data)=>({...data, penitenciaria:{...data.penitenciaria,'idPenitenciaria':''}}));
            setData((data)=>({...data, observacoes:null}))}} className='w-fit rounded-md text-sm'>VOLTAR</Button>
            <div className='flex w-full'>
            <TextField error={muiAlert && !data.observacoes} size='small' style={{width:'100%'}} onChange={(e) => setData((data)=>({...data,'observacoes':e.target.value.toUpperCase()}))} value={data.observacoes} variant="outlined" label='Nome e endereço da penitenciaria' /></div>
            </div>
            </Collapse>
            </div>
            <TextField error={muiAlert && !data.bloco} size='small' onChange={(e) => setData((data)=>({...data,'bloco':e.target.value.toUpperCase()}))} value={data.bloco} style={{margin:'0 1% 0 1%'}} variant="outlined" label='Bloco' className='line5' id='bloco'></TextField>  
            <TextField error={muiAlert && !data.ala} size='small' onChange={(e) => setData((data)=>({...data,'ala':e.target.value.toUpperCase()}))} value={data.ala} style={{margin:'0 1% 0 1%'}} variant="outlined" label='Ala' className='line5' id='ala'></TextField>  
            <TextField error={muiAlert && !data.cela} size='small' type='number' onChange={(e) => setData((data)=>({...data,'cela':e.target.value}))} value={data.cela} style={{margin:'0 1% 0 1%'}} variant="outlined" label='Cela' className='line5' id='cela'></TextField>  
            <TextField error={muiAlert && !data.condicaoPreso} size='small' onChange={(e) => setData((data)=>({...data,'condicaoPreso':e.target.value}))} value={data.condicaoPreso} select style={{margin:'0 1% 0 1%'}} variant="outlined" label='Condição' className='line5' id='condicao'>
            <MenuItem value={1}>Sentenciado</MenuItem><MenuItem value={2}>Aguardando Sentença</MenuItem></TextField>  
            <TextField error={muiAlert && !data.regime} size='small' onChange={(e) => setData((data)=>({...data,'regime':e.target.value}))} value={data.regime} select style={{margin:'1% 1% 0 1%'}} variant="outlined" label='Regime' className='line5' id='regime'><MenuItem value={1}>Fechado</MenuItem><MenuItem value={2}>Semiaberto</MenuItem><MenuItem value={3}>Aberto</MenuItem></TextField>  
        </div>
    )
}