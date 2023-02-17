import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navigator from './Navigator';
import {Routes, Route} from 'react-router-dom'
import StudentsContent from '../Pages/StudentsContent';
import Register from '../Pages/Register';
import RegisterCourse from '../Pages/RegisterCourse';
import RegisterTax from '../Pages/RegisterTax';
import RegisterPeni from '../Pages/RegisterPeni';
import RegisterRepre from '../Pages/RegisterRepre';
import DeliveryFee from '../Pages/DeliveryFee';
import RegisterUser from '../Pages/RegisterUser';
import FlexRowAlign from './flexbox/FlexRowAlign';
import NewWorkLoad from '../Pages/NewWorkLoad'
import GenerateHangTags from '../Pages/GenerateHangTags';
import TestGroups from '../Pages/TestGroups'
import AuthorizedCourses from '../Pages/AuthorizedCourses';
import RegSelector from '../Pages/RegSelector'
import PermissionGroup from '../Pages/PermissionGroup';
import Contracts from '../Pages/Contracts';
import Course from '../Pages/Course'
import SpecificRules from '../Pages/SpecificRules';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

let theme = createTheme({
 
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'white',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,255,255,0.15)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: 'black',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          marginRight: theme.spacing(2),
          '& svg': {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
};

const drawerWidth = 256;

export default function Paperbase() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}

          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <FlexRowAlign className='bg-blue-500 text-white font-bold' fontSize='30px' height='5vh' >GESTOR ESCOLAR - CURSOS PPL</FlexRowAlign>
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Routes>
              <Route path='/' element={<h2 className='text-3xl m-auto font-semibold'>Início</h2>}/>
              <Route path='/alunos-e-cursos' element={<StudentsContent/>}/>
              <Route path='/contratos' element={<Contracts/>}/>
              <Route path='/contratos/editar' element={<RegSelector/>}/>
              <Route path='/contratos/editar/curso' element={<Course/>}/>
              <Route path='/cadastros/matriculas' element={<h2 className='text-3xl m-auto font-semibold'>Matriculas</h2>}/>
              <Route path='/cadastros/penitenciarias' element={<RegisterPeni/>}/>
              <Route path='/cadastros/representantes' element={<RegisterRepre/>}/>
              <Route path='/cadastros/fiscais-de-Sala' element={<RegisterTax/>}/>
              <Route path='/cadastros/cursos-cened' element={<RegisterCourse/>}/>
              <Route path='/cadastros/taxa-de-entrega' element={<DeliveryFee/>}/>
              <Route path='/cadastros/usuarios-do-sistema' element={<RegisterUser/>}/>
              <Route path='/cadastros/adicionar-aluno' element={<Register/>}/>
              <Route path='/cadastros/carga-diaria' element={<NewWorkLoad/>}/>
              <Route path='/cadastros/etiquetas-de-material' element={<GenerateHangTags/>}/>
              <Route path='/cadastros/grupos-de-provas' element={<TestGroups/>}/>
              <Route path='/cadastros/cursos-autorizados-uf' element={<AuthorizedCourses/>}/>
              {/*Telas da Área de Configurações */}
              <Route path='/configuracoes/regras-especificas' element={<SpecificRules/>}/>
              <Route path='/configuracoes/grupo-de-permissoes' element={<PermissionGroup/>} />
            </Routes> 
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}