import React from 'react'
import { Grid } from '@mui/material'
import CardPemissions from '../Components/CardPemissions';
import {AiFillLock} from 'react-icons/ai'
import { useState } from 'react';
import SearchInput from '../Components/input-fields/SearchInput';

const groups = [
    {
        title: 'Home',
        lines: [
            {
                title: 'Alertas do Dia',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Alunos e Cursos',
                consult: false,
                edit: false,
                delete: false
            }
        ]
    },
    {
        title: 'Configurações',
        lines: [
            {
                title: 'Autorizar Curso por UF',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Token de Liberação',
                consult: false,
                edit: false,
                delete: false
            },
            {
                title: 'Permisões de Usuário',
                consult: false,
                edit: false,
                delete: false
            }
        ]
    },
    
    {
        title: 'Relatórios',
        lines: [
            {
                title: 'Transações Financeiras',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Cursos Sintético',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Cursos Analítico',
                consult: false,
                edit: false,
                delete: false
            }
        ]
    },
    {
        title: 'Notas Fiscais',
        lines: [
            {
                title: 'Emitir Notas Fiscais',
                consult: false,
                edit: false,
                delete: false
            },
        ]
    },
    {
        title: 'Mensagens',
        lines: [
            {
                title: 'Enviar Mensagens',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Cursos Sintético',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Cursos Analítico',
                consult: false,
                edit: false,
                delete: false
            }
        ]
    },

    {
        title: 'Rotinas Automáticas',
        lines: [
            {
                title: 'Envio de Material UFs',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Envio de Material DF',
                consult: false,
                edit: false,
                delete: false
            },
            
            {
                title: 'Gerar Etiquetas',
                consult: false,
                edit: false,
                delete: false  
            },

            {
                title: 'Emitir Certificado',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Serviços Adicionais',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Matrículas Pendentes',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Código de Rastreio',
                consult: false,
                edit: false,
                delete: false
            }
        ]
    },

    {
        title: 'Documentos',
        lines: [
            {
                title: 'Ofício DF',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Ofício UFs',
                consult: false,
                edit: false,
                delete: false
            },
            
            {
                title: 'Gerar Etiquetas',
                consult: false,
                edit: false,
                delete: false  
            },

            {
                title: 'Atas de Provas',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Protocolo de Certificado',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Protocolo de Material',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Ficha de Matrícula',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Declaração',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Resultado de Provas',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Emitir Certificado',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Livro digital de Certifcados',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Autorizações de Estudos',
                consult: false,
                edit: false,
                delete: false
            },
        ]
    },

    {
        title: 'Cadastros',
        lines: [
            {
                title: 'Alunos e Cursos',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'CH Diária LEP',
                consult: false,
                edit: false,
                delete: false
            },
            
            {
                title: 'Cursos',
                consult: false,
                edit: false,
                delete: false  
            },

            {
                title: 'Fiscais de Sala',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Penitencíarias',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Representantes',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Taxa Entrega/Frete',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Usuários do Sistema',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Grupos de Provas',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Agentes Penitenciários',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Etiquetas de Material',
                consult: false,
                edit: false,
                delete: false
            },

            {
                title: 'Cursos autorizados UF',
                consult: false,
                edit: false,
                delete: false
            },
        ]
    },

]
export default function PermissionGroup() {
    const [searchValue, setSearchValue] = useState('')
  return (
    <div className='flex justify-center p-4'>
        <Grid container spacing={2}>
            <Grid className='flex items-center' item xs={20} md={12}>
                <AiFillLock size={30}/>
                <h1 className='text-xl font-bold'>Grupo de Permissões</h1>
            </Grid>
            <Grid item xs={12} md={8}>
                <SearchInput className='w-full' placeholder='Usuário'/>
            </Grid>
            {
                groups.map((perm, key)=>{
                    return(
                        <CardPemissions key={key} permission={perm}/>
                    )
                })
            }
        </Grid>
    </div>
  )
}
