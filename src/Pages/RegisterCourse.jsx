import { Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {AiFillBook} from 'react-icons/ai'
import Editor from '../Components/Editor'
import useMediaQuery from '@mui/material/useMediaQuery';
import PopupSuccess from '../Components/PopupSuccess'
import axios from 'axios'

export default function RegisterCourse() {
    const api = process.env.REACT_APP_API_KEY
    const [codeCourse, setCodeCourse] = useState('')
    const [nameCourse, setNameCourse] = useState('')
    const [workloadCourse, setWorkloadCourse] = useState('')
    const [valueCourse, setValueCourse] = useState('')
    const [rateCourse, setRateCourse] = useState('')
    const [valueTotalCourse, setValueTotalCourse] = useState('0')
    const [activeCourse, setActiveCourse] = useState(1)
    const [contentCourse, setContentCourse] = useState('')
    const [completeRequirements, setCompleteRequirements] = useState(false)
    let isDesktop = useMediaQuery('(min-width:800px)')
    useEffect(()=>{
        setValueTotalCourse(parseInt(valueCourse ? valueCourse : 0) + parseInt(rateCourse ? rateCourse : 0))
    }, [valueCourse, rateCourse])
    const saveCourse = ()=>{
        if(codeCourse !== '' && nameCourse !== '' && workloadCourse > 0 && valueCourse > 0 && rateCourse > 0 && contentCourse !== ''){
            setCompleteRequirements(true)
            {/*
                axios.post(`${api}/cursos`, {
                codigo: codeCourse,
                nome: nameCourse,
                valor: valueCourse,
                cargaHoraria: workloadCourse,
                taxa: rateCourse,
                valorTotal: valueTotalCourse,
                conteudo: contentCourse,
                ativo: activeCourse
                 }).then(response=>{
                console.log(response)
                })
            */}
            
        }else{
            setCompleteRequirements(false)
        }
    }
    return (
        <div className='flex justify-center bg-white p-4 rounded-xl'>
            <Grid marginLeft={`${isDesktop ? '10%' : '0'}`} container spacing={2}>
                <Grid className='flex items-center' item xs={20} md={12}>
                    <AiFillBook size={30}/>
                    <h1 className='text-xl font-bold'>Novo Curso CENED</h1>
                </Grid>
                <Grid item xs={10} md={1.5}>
                    <TextField onChange={(e)=> setCodeCourse(e.target.value)} value={codeCourse} type="number" label="Código"/>
                </Grid>

                <Grid item xs={10} md={7}>
                    <TextField className='w-full' onChange={(e)=> setNameCourse(e.target.value)} value={nameCourse} type="text" label="Nome do Curso"/>
                </Grid>
                <Grid item xs={10} md={3}>

                </Grid>
                <Grid item xs={10} md={1.5}>
                    <TextField  onInput = {(e) =>{e.target.value = Math.max(0, (e.target.value ? parseInt(e.target.value) : false)).toString().slice(0,4)}} onChange={(e)=> setWorkloadCourse(e.target.value)}  value={workloadCourse} type="number" label="Carga Horária"/>
                </Grid>

                <Grid item xs={6} md={1.5}>
                    <TextField onInput = {(e) =>{e.target.value = Math.max(0, (e.target.value ? parseInt(e.target.value) : false)).toString().slice(0,4)}} onChange={(e)=> setValueCourse(e.target.value)}  value={valueCourse} type="number" label="Valor"/>
                </Grid>

                <Grid item xs={6} md={1.5}>
                    <TextField onChange={(e)=> setRateCourse(e.target.value)}  value={rateCourse} type="number" label="Taxa"/>
                </Grid>

                <Grid item xs={6} md={1.5}>
                    <TextField value={valueTotalCourse} disabled type="number" label="Valor Total"/>
                </Grid>

                <Grid item xs={8} md={1.5}>
                    <TextField onChange={(e)=> setActiveCourse(e.target.value)} value={activeCourse} className='w-1/2 bg-white border-none outline-none rounded-xl' select label='Ativo'>
                        <MenuItem value={0}>
                            Sim
                        </MenuItem>

                        <MenuItem value={1}>
                            Não
                        </MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={20} md={10}>
                    <Editor setContentCourse={setContentCourse} />
                </Grid>
                <Grid item xs={20} md={10}>
                <div className='w-full flex'>
                    <button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
                    <PopupSuccess title={completeRequirements ? 'Novo Curso Adicionado com Sucesso!' : <span className='text-red-600'>Verifique se você preencheu os campos corretamente.</span>}>
                        <button onClick={()=> saveCourse()} className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
                    </PopupSuccess>
                </div>
            </Grid>
            </Grid>
        </div>
    )
}
