import { Grid, useMediaQuery, TextField, MenuItem} from '@mui/material'
import React from 'react'
import {FaUserTie} from 'react-icons/fa'
import InputMask from 'react-input-mask'
import { useState } from 'react'
import PopupSuccess from '../Components/PopupSuccess'
import axios from 'axios'
import UfsList from './UfsList'

export default function RegisterRepre() {
    const api = process.env.REACT_APP_API_KEY
    const [nameRepre, setNameRepre] = useState('')
    const [emailRepre, setEmailRepre] = useState('')
    const [phoneRepre, setPhoneRepre] = useState('')    
    const [ufRepre, setUfRepre] = useState('')
    const [activeRepre, setActiveRepre] = useState(1)
    const [completeRequirements, setCompleteRequirements] = useState(false)
    let isDesktop = useMediaQuery('(min-width:800px)')
    const saveRepre = ()=>{
        if(nameRepre !== '' && emailRepre.includes('@') && emailRepre.includes('.') && phoneRepre.length === 14 && ufRepre !== ''){
            setCompleteRequirements(true)
            {/*
                axios.post(`${api}/representantes`, {
                    nome: nameRepre,
                    telefone: phoneRepre,
                    email: emailRepre,
                    uf: ufRepre,
                    ativo: activeRepre
                }).then(response=>[
                    console.log(response)
                ]).catch(response=>{
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
            <Grid className='flex items-center' item xs={20} md={10}>
                <FaUserTie size={30}/>
                <h1 className='text-xl font-bold'>Novo Representante</h1>
            </Grid>
            <Grid item xs={20} md={7}>
                <TextField className='w-full' value={nameRepre} onChange={(e)=> setNameRepre(e.target.value)} type="text" label="Nome"/>
            </Grid>

            <Grid item xs={0} md={3}>

            </Grid>

            <Grid item xs={10} md={5}>
                <TextField className='w-full' label='E-mail' value={emailRepre} onChange={(e)=> setEmailRepre(e.target.value)}/>
            </Grid>


            <Grid item xs={10} md={1.5}>
                <InputMask mask="(99)99999-9999" value={phoneRepre} onChange={(e)=> setPhoneRepre(e.target.value)}  maskChar={''}>
                    {()=> <TextField className='w-full' label='Telefone'/>}
                </InputMask>
            </Grid>

            <Grid item xs={8} md={2}>
                <TextField value={ufRepre} onChange={(e)=> setUfRepre(e.target.value)} className='w-11/12 bg-white border-none outline-none rounded-xl' select label='UF'>
                    {UfsList.map((uf, key)=>{
                      return(
                        <MenuItem key={key} value={uf.value}>
                          {uf.name}
                        </MenuItem>
                      )
                    })}
                </TextField>
            </Grid>

            <Grid item xs={8} md={1}>
              <TextField value={activeRepre} onChange={(e)=> setActiveRepre(e.target.value)} className='w-full' select label='Ativo'>
                <MenuItem value={0}>
                  Sim
                </MenuItem>

                <MenuItem value={1}>
                  Não
                </MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={20} md={10}>
                <div className='w-full flex'>
					<button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
					<PopupSuccess title={completeRequirements ? 'Novo Representante Adicionado com Sucesso!' : <span className='text-red-600'>Verifique se você preencheu os campos corretamente.</span>}>
						<button onClick={()=> saveRepre()} className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
					</PopupSuccess>
                </div>
            </Grid>
        </Grid>
    </div>
    )
}
