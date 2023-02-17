import { Grid, TextField, MenuItem, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import {BsGearFill} from 'react-icons/bs'
import {FaMinus, FaPlus} from 'react-icons/fa'
import UfsList from './UfsList'

export default function AuthorizedCourses() {
    let isDesktop = useMediaQuery('(min-width:800px)')
    const [ufAutorized, setUfAutorized] = useState('')
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
        <Grid marginLeft={`${isDesktop ? '10%' : '0'}`} container spacing={2}>
            <Grid className='flex items-center' item xs={20} md={12}>
                <BsGearFill size={30}/>
                <h1 className='text-xl font-bold'>Autorizar Cursos por UF</h1>
            </Grid>
            <Grid item xs={10} md={2}>
                <TextField value={ufAutorized} onChange={(e)=> setUfAutorized(e.target.value)} className='w-full' select label='UF'>
                    {UfsList.map((uf, key)=>{
                      return(
                        <MenuItem key={key} value={uf.value}>
                          {uf.name}
                        </MenuItem>
                      )
                    })}
                </TextField>
            </Grid>

            <Grid container className='border-2 border-gray-300 rounded-xl p-2' spacing={2} marginLeft={'17px'} marginTop={'20px'} xs={20} md={12}>
                <Grid item xs={12} md={6}>
                    <h2 className='flex text-gray-400 ml-1 items-center font-semibold'><FaMinus size={20}/>REMOVIDOS</h2>
                    <div className='mt-5 flex flex-col p-2'>
                        <p className='mb-2 ml-1'>Exibindo: 77</p>
                        <TextField label='Pesquisar na lista abaixo...'/>
                        <div className='w-full overflow-y-scroll h-80 border-2 border-gray-300 rounded-l-xl mt-5 p-2'>
                            <ul>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                            </ul>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <h2 className='flex text-gray-400 ml-1 items-center font-semibold'><FaPlus size={20}/>ADICIONADOS</h2>
                    <div className='mt-5 flex flex-col p-2'>
                        <p className='mb-2 ml-1'>Lista Vazia</p>
                        <TextField label='Pesquisar na lista abaixo...'/>
                        <div className='w-full overflow-y-scroll h-80 border-2 border-gray-300 rounded-l-xl mt-5 p-2'>
                            <ul>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                                <li>309 - test test est - 0695468464</li>
                            </ul>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid item xs={20} md={10}>
                <button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
                <button className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
            </Grid>
        </Grid>
    </div>
  )
}