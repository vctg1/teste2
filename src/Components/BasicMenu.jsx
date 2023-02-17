import * as React from 'react';
import { useNavigate } from 'react-router';
import {Grid, IconButton} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const Navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.children}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=> {
          sessionStorage.setItem('button', 1);
          sessionStorage.setItem('student', JSON.stringify(props.id));
          Navigate('/contratos')}}
          >Cadastro</MenuItem>
        <MenuItem onClick={()=> {
          sessionStorage.setItem('button', 2);
          sessionStorage.setItem('student', JSON.stringify(props.id));
          Navigate('/contratos')}}
          >Cursos</MenuItem>
      </Menu>
    </Grid>
  );
}
