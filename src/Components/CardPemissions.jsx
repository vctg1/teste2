import { Grid } from '@mui/material'
import React from 'react'

import { BiCheckbox, BiCheckSquare} from 'react-icons/bi'

export default function CardPemissions({permission}) {
  return (
    <Grid item xs={12} className='p-2' marginLeft={'15px'} marginTop={'15px'} borderRadius={'12px'} md={5.5} bgcolor={'#ffff'}>
        <h2 className='text-center font-bold text-2xl'>{permission.title}</h2>
        <div className='flex flex-col'>
            {permission.lines.map((line, key)=>{
                return(
                    <div key={key} className='border-2 border-black flex mt-2 justify-between p-2 rounded-xl'>
                        <h3 className='font-semibold text-xl'>{line.title}</h3>
                        <div className='flex items-center'>
                            <span className='flex items-center mr-4 text-lg cursor-pointer'>
                                {line.consult ? <BiCheckSquare size={25}/> : <BiCheckbox size={25}/>}Consultar</span>
                            <span className='flex items-center mr-4 text-lg cursor-pointer'>
                                {line.edit ? <BiCheckSquare size={25}/> : <BiCheckbox size={25}/>}Editar</span>
                            <span className='flex items-center mr-4 text-lg cursor-pointer'>
                                {line.del ? <BiCheckSquare size={25}/> : <BiCheckbox size={25}/>}Excluir</span>
                            <span className='flex items-center mr-4 text-lg cursor-pointer'><BiCheckbox size={25}/>Todos</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </Grid>
  )
}
