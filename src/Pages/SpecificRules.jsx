import { Grid, TextField, MenuItem, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { ptBR } from 'date-fns/locale';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function SpecificRules() {
    let isDesktop = useMediaQuery('(min-width:800px)')
    const [uf, setUf] = useState('Acre')
    const [peni, setPeni] = useState('Penitenciária Aruana 1')
    const [dateInit, setDateInit] = useState('')
    const [periodCourse, setPeriodCourse] = useState('')
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
        <Grid marginLeft={`${isDesktop ? '10%' : '0'}`} container spacing={2}>
            <Grid className='flex items-center' item xs={20} md={12}>
                <h1 className='text-xl font-bold'>Regras Específicas por Penitenciária</h1>
            </Grid>
            <Grid item xs={10} md={2}>
                <TextField value={uf} onChange={(e)=> setUf(e.target.value)} className='w-full' select label='UF'>
                        <MenuItem value="Acre">Acre</MenuItem>
                        <MenuItem value="Alagoas">Alagoas</MenuItem>
                        <MenuItem value="Amapá">Amapá</MenuItem>
                        <MenuItem value="Amazonas">Amazonas</MenuItem>
                        <MenuItem value="Bahia">Bahia</MenuItem>
                        <MenuItem value="Ceará">Ceará</MenuItem>
                        <MenuItem value="Distrito Federal">Distrito Federal</MenuItem>
                        <MenuItem value="Espírito Santo">Espírito Santo</MenuItem>
                        <MenuItem value="Goiás">Goiás</MenuItem>
                        <MenuItem value="Maranhão">Maranhão</MenuItem>
                        <MenuItem value="Mato Grosso">Mato Grosso</MenuItem>
                        <MenuItem value="Mato Grosso do Sul">Mato Grosso do Sul</MenuItem>
                        <MenuItem value="Minas Gerais">Minas Gerais</MenuItem>
                        <MenuItem value="Pará">Pará</MenuItem>
                        <MenuItem value="Paraíba">Paraíba</MenuItem>
                        <MenuItem value="Paraná">Paraná</MenuItem>
                        <MenuItem value="Pernambuco">Pernambuco</MenuItem>
                        <MenuItem value="Piauí">Piauí</MenuItem>
                        <MenuItem value="Rio de Janeiro">Rio de Janeiro</MenuItem>
                        <MenuItem value="Rio Grande do Norte">Rio Grande do Norte</MenuItem>
                        <MenuItem value="Rio Grande do Sul">Rio Grande do Sul</MenuItem>
                        <MenuItem value="Rondônia">Rondônia</MenuItem>
                        <MenuItem value="Roraima">Roraima</MenuItem>
                        <MenuItem value="Santa Catarina">Santa Catarina</MenuItem>
                        <MenuItem value="São Paulo">São Paulo</MenuItem>
                        <MenuItem value="Sergipe">Sergipe</MenuItem>
                        <MenuItem value="Tocantins">Tocantins</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={10} md={8.8}>
                <TextField value={peni} onChange={(e)=> setPeni(e.target.value)} className='w-full' select label='Penitenciária'>
                        <MenuItem value="PDF 1 - Penitenciária do Distrito Federal I">PDF 1 - Penitenciária do Distrito Federal I</MenuItem>
                        <MenuItem value="PENITENCIARIA DESEMBARGADOR SILVIO PORTO">PENITENCIARIA DESEMBARGADOR SILVIO PORTO</MenuItem>
                        <MenuItem value="Penitenciária Aruana 1">Penitenciária Aruana 1</MenuItem>
                        <MenuItem value="Penitenciária Aruana 2">Penitenciária Aruana 2</MenuItem>
                        <MenuItem value="Penitenciária Aruana 3">Penitenciária Aruana 3</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <h2 className='text-xl font-bold'>{uf} - {peni}</h2>
            </Grid>
            <Grid item xs={10} md={4}>
                <TextField className='w-full' select label='Vincular Representante'>
                        <MenuItem value="1">AAAAAAAAAAAAAAAAAAAAAAAA</MenuItem>
                        <MenuItem value="2">AAAAAAAAAAAAAAAAAAAAAAAA</MenuItem>
                        <MenuItem value="3">AAAAAAAAAAAAAAAAAAAAAAAA</MenuItem>
                        <MenuItem value="4">AAAAAAAAAAAAAAAAAAAAAAAA</MenuItem>
                        <MenuItem value="5">AAAAAAAAAAAAAAAAAAAAAAAAA</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={10} md={2.4}>
                <TextField className='w-full' select label='Local de Envio de Apostila'>
                        <MenuItem value="1">Penitenciária</MenuItem>
                        <MenuItem value="2">Residência</MenuItem>
                        <MenuItem value="3">Representante</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={10} md={2}>
                <TextField className='w-full' select label='Local de Envio de Prova'>
                        <MenuItem value="1">Penitenciária</MenuItem>
                        <MenuItem value="2">Residência</MenuItem>
                        <MenuItem value="3">Representante</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={10} md={2.4}>
                <TextField className='w-full' select label='Local de Envio de Certificado'>
                        <MenuItem value="1">Penitenciária</MenuItem>
                        <MenuItem value="2">Residência</MenuItem>
                        <MenuItem value="3">Representante</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={10} md={1.5}>
                <TextField className='w-full' type={'number'} label='Início do Curso'/>
            </Grid>

            <Grid item xs={10} md={1.5}>
                <TextField className='w-full' type={'number'} label='Período do Curso'/> 
            </Grid>
        </Grid>
    </div>
  )
}