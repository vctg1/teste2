import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import {IoDocumentTextSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { Collapse } from '@mui/material';
import { useState } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout';
import {FaClipboardList} from 'react-icons/fa'
import icon from '../images/favicon.ico'

const categories = [
  {
    id: 'HOME',
    icon: <HomeIcon/>,
    children: [
      {active: false, id: 'Alerta do dia', route:'/'},
      {active: false, id: 'Alunos e cursos', route:'/alunos-e-cursos'}
    ],
  },
  {
    id: 'ROTINAS AUTOMÁTICAS',
    icon: <CalendarMonthIcon/>,
    children: [
      {active: false, id: 'Ativar Cursos', route: '/'},
      {active: false, id: 'Etiquetas dos Cursos', route: '/'},
      {active: false, id: 'Protocolo dos Cursos', route: '/'},
      {active: false, id: 'Imprimir Certificados', route: '/'},
      {active: false, id: 'Etiquetas dos Certificados', route: '/'},
      {active: false, id: 'Protocolo dos Certificados', route: '/'},
      {active: false, id: 'Resultado de Provas', route: '/'},
      {active: false, id: 'Serviços Adicionais', route: '/'},
      {active: false, id: 'Código de Rastreio', route: '/'},
      {active: false, id: 'Etiquetas Individuais', route: '/'}
    ],
  },
  {
    id: 'DOCUMENTOS',
    icon: <IoDocumentTextSharp/>,
    children: [
      {active: false, id: 'Ofício DF', route: '/'},
      {active: false, id: 'Ofício UFs', route: '/'},
      {active: false, id: 'Atas de Provas', route: '/'},
      {active: false, id: 'Ficha de Matrícula', route: '/'},
      {active: false, id: 'Declaração', route: '/'},
      {active: false, id: 'Emitir Certificado', route: '/'},
      {active: false, id: 'Livro de Certificados', route: '/'},
      {active: false, id: 'Autorizações de Estudo', route: '/'}
    ],
  },
  {
    id: 'RELATÓRIOS',
    icon: <SummarizeIcon/>,
    children: [
      {active: false, id: 'Relatório 1', route:'/'},
      {active: false, id: 'Relatório 2', route:'/'},
      {active: false, id: 'Relatório 3', route:'/'}
    ],
  },
  {
    id: 'MENSAGENS',
    icon: <MessageIcon/>,
    children: [
      {active: false, id: 'Mensagem 1', route:'/'},
      {active: false, id: 'Mensagem 2', route:'/'},
      {active: false, id: 'Mensagem 3', route:'/'}
    ],
  },
  {
    id: 'CONFIGURAÇÕES',
    icon: <SettingsIcon/>,
    children: [
      {active: false, id: 'Regras Gerais', route:'/'},
      {active: false, id: 'Regras Específicas', route:'regras-especificas'},
      {active: false, id: 'Token de Liberação', route:'/'},
      {active: false, id: 'Autorizar Cursos por UF', route: '/'},
      {active: false, id: 'Permissões de Usuário', route:'grupo-de-permissoes'},
      {active: false, id: 'Permissão 1', route:'/'},
      {active: false, id: 'Permissão 2', route:'/'},
    ],
  },
  {
    id: 'CADASTROS',
    icon: <SwitchAccountIcon/>,
    children: [
      {active: false, id: 'Cad. Alunos e Cursos', route:'adicionar-aluno'},
      {active: false, id: 'Cad. CH Diária LEP', route:'carga-diaria'},
      {active: false, id: 'Cad. Cursos', route:'cursos-cened'},
      {active: false, id: 'Cad. Fiscais de Sala', route:'fiscais-de-sala'},
      {active: false, id: 'Cad. Penitenciárias', route:'penitenciarias'},
      {active: false, id: 'Cad. Representantes', route:'representantes'},
      {active: false, id: 'Cad. Taxa Frete', route:'taxa-de-entrega'},
      {active: false, id: 'Cad. Usuários do Sistema', route:'usuarios-do-sistema'},
      {active: false, id: 'Cad. Grupos de Prova', route:'grupos-de-provas'},
      {active: false, id: 'Cad. Agentes Penitenciários', route:'/'},
      {active: false, id: 'Cad. Etiquetas', route:'etiquetas-de-material'},
      {active: false, id: 'Cad. Cursos Autorizados UF', route:'cursos-autorizados-uf'},
    ],
  },
  {
    id: 'NOTAS FISCAIS',
    icon: <ReceiptIcon/>,
    children: [
      {active: false, id: 'Imprimir NFe', route:'/'},
    ],
  },
  {
    id: 'AUDITORIA',
    icon: <FaClipboardList/>,
    children: [
      {active: false, id:'Token', route: '/'},
      {active: false, id: 'Desempenho', route: '/'}
    ]
  },
  {
    id: 'SAIR',
    icon: <LogoutIcon/>,
    children: [
    ],
  },
];

const item = {
  color: '',
  borderRadius:'10px',
  '&:hover, &:focus': {
    bgcolor: '#f3f4f6',
  },
  marginY: '2px',
  transitionProperty: 'all',
  transitionDuration: '150ms'
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  px: 3,
};

export default function Navigator(props) {
  let [openId, setOpenId] = useState('');
  let [open, setOpen] = useState(false);
  const { ...other } = props;

  return (
    <Drawer className='text-black' variant="permanent" {...other}>
      <List disablePadding>
        <Box display={'flex'} alignItems='center' className='border-b border-gray-400'>
          
        <img src={icon} style={{height:'5vh', margin:'20px'}} alt='' />
        <h2 className='text-center text-xl font-bold'>
          CENED
        </h2>
        </Box>
        {categories.map(({ id, children, icon }) => (
          <Box key={id}>
            <ListItem className='rounded-lg transition hover:bg-[#f3f4f6] cursor-pointer' 
            onClick={()=>{openId===id? setOpen(!open) : setOpen(true) ;setOpenId(id)}} sx={{ my:0.2, px: 3 }}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText>{id}</ListItemText>
            </ListItem>
            <Collapse in={openId===id ? open : false}>
            {children.map(({ id: childId, icon, active, route }) => (
              <Link key={childId} to={`${id==='HOME' ? '/' : id.toLowerCase().replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, "")}/${route}`}>
                <ListItem onClick={()=> active = true} disablePadding>
                  <ListItemButton style={{padding: '5px', margin:0}} selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
            </Collapse>
          </Box>
        ))}
      </List>
    </Drawer>
  );
}