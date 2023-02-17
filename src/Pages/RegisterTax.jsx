import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import {FaUserTie} from 'react-icons/fa'
import {TextField, MenuItem} from '@mui/material'
import InputMask from 'react-input-mask'
import { useState } from 'react'
import PopupSuccess from '../Components/PopupSuccess'
import axios from 'axios'
import UfsList from './UfsList'

export default function RegisterTax() {
	const api = process.env.REACT_APP_API_KEY
    const [nameTax, setNameTax] = useState('')
    const [cpfTax, setCpfTax] = useState('')
    const [rgTax, setRgTax] = useState('')    
    const [ufTax, setUfTax] = useState('')
	const [completeRequirements, setCompleteRequirements] = useState(false)
    const [ufTaxWork, setUfTaxWork] = useState('')
    let isDesktop = useMediaQuery('(min-width:800px)')
	const saveTax = ()=>{
		let cpfTaxFormated = cpfTax.replaceAll('.', '').replaceAll('-', '')
		if(nameTax !== '' && cpfTaxFormated.length === 11 && rgTax !== '' && ufTax !== '' && ufTaxWork !== ''){
			{/*
				axios.post(`${api}/fiscais-salas`, {
					nome: nameTax,
					cpf: cpfTaxFormated,
					rg: rgTax,
					uf: ufTax
				}).then(response=>{
					console.log(response)
				}).catch(response=>{
					console.log(response)
				})	
			*/}
			setCompleteRequirements(true)
		}else{
			setCompleteRequirements(false)
		}
	}
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
            <Grid marginLeft={`${isDesktop ? '10%' : '0'}`} container spacing={2}>
                <Grid className='flex items-center' item xs={20} md={10}>
                    <FaUserTie size={30}/>
                    <h1 className='text-xl font-bold'>Novo Fiscal De Sala</h1>
                </Grid>
                <Grid item xs={20} md={7}>
                    <TextField className='w-full' value={nameTax} onChange={(e)=> setNameTax(e.target.value)} type="text" label="Nome"/>
                </Grid>

                <Grid item xs={0} md={5}>

                </Grid>

                <Grid item xs={8} md={2}>
                    <TextField value={ufTaxWork} onChange={(e)=> setUfTaxWork(e.target.value)} className='w-11/12 bg-white border-none outline-none rounded-xl' select label='UF / Trabalho'>
                        {UfsList.map((uf, key)=>{
                         return(
                            <MenuItem key={key} value={uf.value}>
                                {uf.name}
                            </MenuItem>
                        )
                    })}
                    </TextField>
                </Grid>

                <Grid item xs={10} md={1.5}>
                    <InputMask className='w-full' value={cpfTax} onChange={(e)=> setCpfTax(e.target.value)} mask="999.999.999-99" maskChar={''}>
                        {()=> <TextField className='w-full' label='CPF'/>}
                    </InputMask>
                </Grid>

                <Grid item xs={10} md={1.6}>
                    <InputMask className='w-full' mask="9999999999" value={rgTax} onChange={(e)=> setRgTax(e.target.value)}  maskChar={''}>
                        {()=> <TextField className='w-full' label='RG'/>}
                    </InputMask>
                </Grid>

                <Grid item xs={8} md={2}>
                    <TextField value={ufTax} onChange={(e)=> setUfTax(e.target.value)} className='w-11/12 bg-white border-none outline-none rounded-xl' select label='UF'>
                        {UfsList.map((uf, key)=>{
                        return(
                            <MenuItem key={key} value={uf.value}>
                            {uf.name}
                            </MenuItem>
                        )
                        })}
                    </TextField>
                </Grid>

                <Grid item xs={20} md={10}>
					<div className='w-full flex'>
						<button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
						<PopupSuccess title={completeRequirements ? 'Novo Fiscal de Sala Adicionado com Sucesso!' : <span className='text-red-600'>Verifique se você preencheu os campos corretamente.</span>}>
							<button onClick={()=> saveTax()} className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
						</PopupSuccess>
                	</div>
                </Grid>
            </Grid>
    </div>
  )
}
