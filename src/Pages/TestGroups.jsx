import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import {IoDocumentTextSharp} from 'react-icons/io5'
import {TextField, MenuItem} from '@mui/material'
import { useState } from 'react'

export default function TestGroups() {
    let isDesktop = useMediaQuery('(min-width:800px)')
    const [name, setName] = useState('')
    const [active, setActive] = useState(false)
    const [test1, setTest1] = useState('')
    const [test2, setTest2] = useState('')
    const [test3, setTest3] = useState('')
    const [test4, setTest4] = useState('')
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
            <Grid container marginLeft={`${isDesktop ? '10%' : '0'}`} spacing={2}>
                <Grid className='flex items-center' item xs={20} md={10}>
                    <IoDocumentTextSharp size={30}/>
                    <h1 className='text-xl font-bold'>Novo Grupo de Prova</h1>
                </Grid>
                
                <Grid item xs={8} md={7}>
                    <TextField className='w-full' value={name} onChange={(e)=> setName(e.target.value)} label='Nome'/>
                </Grid>

                <Grid item xs={8} md={2}>
                    <TextField value={active} onChange={(e)=> setActive(e.target.value)} select className='w-full' label='Ativo'>
                        <MenuItem value={true}>
                            Sim
                        </MenuItem>

                        <MenuItem value={false}>
                            Não
                        </MenuItem>
                    </TextField>
                </Grid>

                <Grid item xs={10} md={12}>
                    <h2 className='text-base lg:text-xl font-bold'>Tipos de Prova: </h2>
                </Grid>

                <Grid item xs={10} md={4.5}>
                    <TextField className='w-full' value={test1} onChange={(e)=> setTest1(e.target.value)} label='Prova 1'/>
                </Grid>

                <Grid item xs={10} md={4.5}>
                    <TextField className='w-full' value={test2} onChange={(e)=> setTest2(e.target.value)} label='Prova 2'/>
                </Grid>
                <Grid item xs={10} md={4.5}>
                    <TextField className='w-full' value={test3} onChange={(e)=> setTest3(e.target.value)} label='Prova 3'/>
                </Grid>

                <Grid item xs={10} md={4.5}>
                    <TextField className='w-full' value={test4} onChange={(e)=> setTest4(e.target.value)} label='Prova 4'/>
                </Grid>

                <Grid item xs={20} md={10}>
                    <button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
                    <button className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
                </Grid>
            </Grid>
    </div>
  )
}
