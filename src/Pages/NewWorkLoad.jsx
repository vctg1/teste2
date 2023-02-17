import { Grid, TextField, MenuItem, useMediaQuery } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {IoMdClock} from 'react-icons/io'
import PopupSuccess from '../Components/PopupSuccess'
import UfsList from './UfsList'

export default function NewWorkLoad() {
    let isDesktop = useMediaQuery('(min-width:800px)')
    const api = process.env.REACT_APP_API_KEY
    const [completeRequirements, setCompleteRequirements] = useState(false)
    const [uf, setUf] = useState('')
    const [workLoad, setWorkLoad] = useState('')
    const saveWorkLoad = ()=>{
        if(uf !== '' && workLoad !== ''){
            setCompleteRequirements(true)
            {/* 
            axios.post(`${api}/cargas-horarias-diarias`, {
                cargaHoraria: workLoad,
                uf: uf
            }).then(response=>{
                console.log(response.data.data)
            })
        */}
        }else{
            setCompleteRequirements(false)
        }
    }
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
        <Grid marginLeft={`${isDesktop ? '30%' : '0'}`}  container spacing={2}>
            <Grid className='flex items-center' item xs={20} md={12}>
                <IoMdClock size={40}/>
                <h1 className='text-xl font-bold'>Nova Carga Horária Diária Padrão</h1>
            </Grid>
            <Grid item xs={10} md={2.5}>
                <TextField value={uf} onChange={(e)=> setUf(e.target.value)} className='w-full' select label='UF'>
                    {UfsList.map((uf, key)=>{
                      return(
                        <MenuItem key={key} value={uf.value}>
                          {uf.name}
                        </MenuItem>
                      )
                    })}
                </TextField>
            </Grid>

            <Grid item xs={10} md={3}>
                <TextField type={'number'} onInput = {(e) =>{e.target.value = Math.max(0, (e.target.value ? parseInt(e.target.value) : false)).toString().slice(0,3)}} value={workLoad} onChange={(e)=> setWorkLoad(e.target.value)} className='w-full' label='Carga Horária'/>
            </Grid>

            <Grid item xs={20} md={10}>
                <div className='w-full flex'>
                    <button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
                    <PopupSuccess title={completeRequirements ? 'Nova Carga Horária Diária Adicionada com Sucesso!' : <span className='text-red-600'>Verifique se você preencheu os campos corretamente.</span>}>
                        <button onClick={()=> saveWorkLoad()} className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
                    </PopupSuccess>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
