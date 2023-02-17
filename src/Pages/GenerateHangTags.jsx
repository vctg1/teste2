import { Grid, TextField, MenuItem, useMediaQuery } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import {AiFillTag} from 'react-icons/ai'
import {FaMinus, FaPlus} from 'react-icons/fa'
import UfsList from './UfsList';

export default function GenerateHangTags() {
    let isDesktop = useMediaQuery('(min-width:800px)')
    const [ufTag, setUf] = useState('')
    const [typeHangtag, setTypeHangtag] = useState('')
    const [valueSearch1, setValueSearch1] = useState('')
    const [valueSearch2, setValueSearch2] = useState('')
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
        <Grid marginLeft={`${isDesktop ? '10%' : '0'}`} container spacing={2}>
            <Grid className='flex items-center' item xs={20} md={12}>
                <AiFillTag size={30}/>
                <h1 className='text-xl font-bold'>Gerar Etiquetas</h1>
            </Grid>
            <Grid item xs={10} md={2}>
                <TextField value={ufTag} onChange={(e)=> setUf(e.target.value)} className='w-full' select label='UF'>
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
                <TextField select value={typeHangtag} onChange={(e)=> setTypeHangtag(e.target.value)} className='w-full' label='Tipo de Etiqueta'>
                    <MenuItem value={1}>
                        Etiqueta Material
                    </MenuItem>

                    <MenuItem value={2}>
                        Etiqueta Prova
                    </MenuItem>

                    <MenuItem value={3}>
                        Etiqueta Correios (Destinatário)
                    </MenuItem>

                    <MenuItem value={4}>
                        Etiqueta Correios (Remetente)
                    </MenuItem>

                    <MenuItem value={5}>
                        Etiqueta Completa (DF)
                    </MenuItem>

                    <MenuItem value={6}>
                        Etiqueta Completa (Outras UFs)
                    </MenuItem>

                </TextField>
            </Grid>

            <Grid item xs={10} md={2}>
                <button className='bg-blue-400 w-full hover:bg-blue-600 transition-colors text-white p-3 text-xl font-bold rounded-xl'><SearchIcon/> Buscar</button>
            </Grid>

            <Grid container className='border-2 border-gray-300 rounded-xl p-2' spacing={2} marginLeft={'17px'} marginTop={'20px'}>
                <Grid item xs={12} md={6}>
                    <h2 className='flex text-gray-400 ml-1 items-center font-semibold'><FaMinus size={20}/>REMOVIDOS</h2>
                    <div className='mt-5 flex flex-col p-2'>
                        <p className='mb-2 ml-1'>Exibindo: 77</p>
                        <TextField value={valueSearch1} onChange={(e)=> setValueSearch1(e.target.value)} label='Pesquisar na lista abaixo...'/>
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
                        <TextField value={valueSearch2} onChange={(e)=> setValueSearch2(e.target.value)} label='Pesquisar na lista abaixo...'/>
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
                <button className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Gerar Etiquetas</button>
            </Grid>
        </Grid>
    </div>
  )
}