import React from 'react'
import {Grid, TextField, MenuItem, useMediaQuery} from '@mui/material'
import {BiCheckbox, BiCheckboxChecked} from 'react-icons/bi'
import InputMask from 'react-input-mask'
import { useState } from 'react'
import PopupSuccess from '../Components/PopupSuccess'
import axios from 'axios'
import UfsList from './UfsList'

export default function RegisterPeni() {
    const api = process.env.REACT_APP_API_KEY
    const dateObject = new Date()
    const [namePeni, setNamePeni] = useState('')
    const [addresPeni, setAddresPeni] = useState('')
    const [cityPeni, setCityPeni] = useState('')
    const [cepPeni, setCepPeni] = useState('')
    const [ufPeni, setUfPeni] = useState('')
    const [checked, setChecked] = useState(false)
    const [nameDepart, setNameDepart] = useState('')
    const [nameRespon, setNameRespon] = useState('')
    const [titleOffice, setTitleOffice] = useState('')
    const [emailContact, setEmailContact] = useState('')
    const [activePeni, setActivePeni] = useState(0)
    const [datePartnership, setDatePartnership] = useState('')
    const [completeRequirements, setCompleteRequirements] = useState(false)
    let isDesktop = useMediaQuery('(min-width:800px)')
    const savePeni = ()=>{
        if(namePeni !== '' && addresPeni !== '' && cityPeni !== ''){
            if(cepPeni.length === 9 && ufPeni !== '' && nameDepart !== '' && nameRespon !== '' && titleOffice !== '' && emailContact.includes('@')){
                console.log(`Nome: ${namePeni}, Endereço: ${addresPeni}, Cidade: ${cityPeni}, CEP: ${cepPeni}, UF: ${ufPeni}, Nome Departamento: ${nameDepart}, Nome Responsável: ${nameRespon}, Titulo: ${titleOffice}, E-mail: ${emailContact}, Parceria: ${checked}, Ativo: ${activePeni} `)
                setCompleteRequirements(true)
                {/* 
                    axios.post(`${api}/penitenciarias`, {
                    nome: namePeni,
                    endereco: addresPeni,
                    cidade: cityPeni,
                    uf:  ufPeni,
                    cep: cepPeni,
                    nomeDepartamentoEnsino: nameDepart,
                    responsavelDepartamentoEnsino: nameRespon,
                    tituloCargoDepartamentoEnsino: titleOffice,
                    emailContatoDepartamentoEnsino: emailContact,
                    ativo:  activePeni,
                    possuiBolsaParceria: checked,
                    dataInicioBolsaParceria: datePartnership,
                    }).then(response=>{
                        console.log(response)
                    }).catch(response=>{
                        console.log(response)
                    })
                */}
            }   
            }
            else{
                setCompleteRequirements(false)
            }
        }
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
        <Grid marginLeft={`${isDesktop ? '10%' : '0'}`} container spacing={2}>
            <Grid className='flex items-center' item xs={20} md={10}>
                {/*<FaBuilding size={30}/>*/}
                <h1 className='text-xl font-bold'>Dados da Penitenciária</h1>
            </Grid>
            <Grid item xs={20} md={10}>
                <TextField className='w-full' value={namePeni} onChange={(e)=> setNamePeni(e.target.value)} label='Nome da Penitenciária'/>
            </Grid>

            <Grid item xs={20} md={10}>
                <TextField className='w-full' value={addresPeni} onChange={(e)=> setAddresPeni(e.target.value)} label='Endereço'/>
            </Grid>

            <Grid item xs={20} md={3}>
                   <TextField className='w-full' value={cityPeni} onChange={(e)=> setCityPeni(e.target.value)} label='Cidade'/>
            </Grid>

            <Grid item xs={6} md={1.5}>
                    <InputMask value={cepPeni} onChange={(e)=> setCepPeni(e.target.value)} mask="99999-999" maskChar={''}>
                        {()=> <TextField className='w-full' label='CEP'/>}
                    </InputMask>
            </Grid>

            <Grid item xs={10} md={2}>
                <TextField value={ufPeni} onChange={(e)=> setUfPeni(e.target.value)} className='w-full' select label='UF'>
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
                <TextField value={activePeni} onChange={(e)=> setActivePeni(e.target.value)} className='bg-white w-full border-none outline-none rounded-xl' label={'Ativo'} select>
                <MenuItem value={0}>
                    Sim
                </MenuItem>
                <MenuItem value={1}>
                    Não
                </MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={10} md={12}>
                <h2 className='text-base lg:text-xl font-bold'>Dados do Núcleo de Ensino</h2>
            </Grid>

            <Grid item xs={20} md={5}>
                <TextField className='w-full' value={nameDepart} onChange={(e)=> setNameDepart(e.target.value)} label='Nome do Departamento de Ensino'/>
            </Grid>

            <Grid item xs={20} md={5}>
                <TextField className='w-full' value={nameRespon} onChange={(e)=> setNameRespon(e.target.value)} label='Responsável pelo Departamento de Ensino'/>
            </Grid>

            <Grid item xs={20} md={5}>
                <TextField className='w-full' value={titleOffice} onChange={(e)=> setTitleOffice(e.target.value)} label='Título do Cargo do Departamento de Ensino'/>
            </Grid>

            <Grid item xs={20} md={5}>
                <TextField className='w-full' type={'email'} value={emailContact} onChange={(e)=> setEmailContact(e.target.value)} label='E-mail de Contato'/>
            </Grid>

            <Grid item xs={20} md={10}>
                <div className='bg-gray-400 rounded-xl text-xs md:text-lg flex items-center p-2 text-white'>
                    {checked ? <BiCheckboxChecked onClick={()=> {setChecked(!checked); setDatePartnership('')}} className='cursor-pointer' size={40}/>
                    : 
                    <BiCheckbox className='cursor-pointer' onClick={()=> {setChecked(!checked); setDatePartnership(`${dateObject.getDate()}/${dateObject.getMonth() < 10 ? `0${dateObject.getMonth()}` : dateObject.getMonth()}/${dateObject.getFullYear()}`)}} size={40}/>}
                    <p className='mr-3'>Ativar Bolsa Parceria Integral</p>

                    |

                    <p className='ml-3'>Data de Início Parceria {datePartnership}</p>
                </div>
            </Grid>

            <Grid item xs={20} md={10}>
                <div className='w-full flex'>
					<button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
					<PopupSuccess title={completeRequirements ? 'Nova Penitenciária Adicionada com Sucesso!' : <span className='text-red-600'>Verifique se você preencheu os campos corretamente.</span>}>
						<button onClick={()=> savePeni()} className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
					</PopupSuccess>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
