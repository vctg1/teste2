import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {TextField, MenuItem} from '@mui/material'
import InputMask from 'react-input-mask'
import { useState } from 'react'
import PopupSuccess from '../Components/PopupSuccess'
import axios from 'axios'
import UfsList from './UfsList'

export default function RegisterUser() {
    const api = process.env.REACT_APP_API_KEY
    const [nameUser, setNameUser] = useState('')
    const [cpfUser, setCpfUser] = useState('')
    const [loginUser, setLoginUser] = useState('')
    const [emailUser, setEmailUser] = useState('')
    const [passwordUser, setPassword] = useState('')
    const [confirmPasswordUser, setConfirmPasswordUser] = useState('')
    const [phoneUser, setPhoneUser] = useState('')    
    const [ufUser, setUfUser] = useState('')
    const [activeUser, setActiveUser] = useState(1)
    const [groupPermission, setGroupPermission] = useState('')
    const [completeRequirements, setCompleteRequirements] = useState(false)
    let isDesktop = useMediaQuery('(min-width:800px)')
    
    const saveUser = ()=>{
      let cpfUserFormated = cpfUser.replaceAll('.', '').replaceAll('-', '')
      if(nameUser !== '' && cpfUserFormated.length === 11 && loginUser !== '' && emailUser.includes('@') && emailUser.includes('.')){
        if(passwordUser !== '' && confirmPasswordUser === passwordUser && phoneUser.length === 14 && ufUser !== '' && groupPermission !== ''){
          setCompleteRequirements(true)
          {/*
              axios.post(`${api}/usuarios`, {
                nome: nameUser,
                login: loginUser,
                senha: passwordUser,
                confirmarSenha: confirmPasswordUser,
                telefone: phoneUser,
                email: emailUser,
                uf: ufUser,
                idGrupoDePermissao: groupPermission,
                ativo: activeUser,
                cpfUsuario: cpfUser
              }).then(response=>{
                console.log(response)
              })
          */}
        }
      }else{
        setCompleteRequirements(false)
      }
    }
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
        <Grid marginLeft={`${isDesktop ? '10%' : '0'}`} container spacing={2}>
            <Grid className='flex items-center' item xs={20} md={10}>
                <FaUserAlt size={30}/>
                <h1 className='text-xl font-bold'>Novo Usuário</h1>
            </Grid>
            <Grid item xs={20} md={7}>
                <TextField className='w-full' value={nameUser} onChange={(e)=> setNameUser(e.target.value)} type="text" label="Nome"/>
            </Grid>

            <Grid item xs={10} md={1.5}>
                <InputMask value={cpfUser} onChange={(e)=> setCpfUser(e.target.value)} mask="999.999.999-99" maskChar={''}>
                    {()=> <TextField className='w-full' label='CPF'/>}
                </InputMask>
            </Grid>


            <Grid item xs={10} md={5.5}>
                <TextField className='w-full' value={loginUser} onChange={(e)=> setLoginUser(e.target.value)} label='Login'/>
            </Grid>

            <Grid item xs={10} md={5.5}>
                <TextField className='w-full' type={'email'} value={emailUser} onChange={(e)=> setEmailUser(e.target.value)} label='E-mail'/>
            </Grid>
            <Grid item xs={10} md={5.5}>
                <TextField className='w-full' type={'password'} value={passwordUser} onChange={(e)=> setPassword(e.target.value)} label='Senha'/>
            </Grid>

            <Grid item xs={10} md={5.5}>
                <TextField className='w-full' type={'password'} value={confirmPasswordUser} onChange={(e)=> setConfirmPasswordUser(e.target.value)} label='Confirmar Senha'/>
            </Grid>

            <Grid item xs={10} md={1.5}>
                <InputMask mask="(99)99999-9999" value={phoneUser} onChange={(e)=> setPhoneUser(e.target.value)}  maskChar={''}>
                    {()=> <TextField className='w-full' label='Telefone'/>}
                </InputMask>
            </Grid>

            <Grid item xs={8} md={2}>
                <TextField value={ufUser} onChange={(e)=> setUfUser(e.target.value)} className='w-11/12 bg-white border-none outline-none rounded-xl' select label='UF'>
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
              <TextField value={activeUser} onChange={(e)=> setActiveUser(e.target.value)} className='w-full' select label='Ativo'>
                <MenuItem value={0}>
                  Sim
                </MenuItem>

                <MenuItem value={1}>
                  Não
                </MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={8} md={2.5}>
              <TextField value={groupPermission} onChange={(e)=> setGroupPermission(e.target.value)}  className='w-full' select label='Grupo de Permissões'>
                <MenuItem value={1}>
                  Administrador
                </MenuItem>

                <MenuItem value={2}>
                  Comum
                </MenuItem>

                <MenuItem value={3}>
                  Consulta
                </MenuItem>

                <MenuItem value={4}>
                  Funcionário - Gestor DF
                </MenuItem>

                <MenuItem value={5}>
                  Funcionário - Gestor BR
                </MenuItem>

                <MenuItem value={6}>
                  Ex-funcionário(a)
                </MenuItem>

                <MenuItem value={7}>
                  Gestor de Atualizações SI
                </MenuItem>

                <MenuItem value={8}>
                  Gestor - Palmas - TO
                </MenuItem>

                <MenuItem value={9}>
                  Desenvolvedor
                </MenuItem>

                <MenuItem value={11}>
                  Agente Penitenciário
                </MenuItem>

              </TextField>
            </Grid>

            <Grid item xs={20} md={10}>
              <div className='w-full flex'>
                <button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
                <PopupSuccess title={completeRequirements ? 'Novo Usuário Adicionado com Sucesso!' : <span className='text-red-600'>Verifique se você preencheu os campos corretamente.</span>}>
                  <button onClick={()=> saveUser()} className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
                </PopupSuccess>
              </div>
            </Grid>
        </Grid>
    </div>
    )
}
