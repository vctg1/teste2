import React, { useEffect } from "react";
import "../../styles/RegisterForm.css";
import { useState } from "react";
import { Button, FormControl, Grid } from "@mui/material";
import axios from "axios";
import RegForm1 from "./RegForm1";
import RegForm2 from "./RegForm2";
import RegForm3 from "./RegForm3";
import FlexAround from '../flexbox/FlexAround'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function RegisterForm(props) {
  let [selectedStudent, setSelectedStudent] = useState({});
  let [muiAlert, setAlert] = useState(false);
  let API = process.env.REACT_APP_API_KEY;
  let [penitenciaria, setPenitenciaria] = useState([]);
  let startData = {
        nome: "",sexo: "",cpf: "",rg: "",orgaoExpedidor: "",dataNascimento: "",
        naturalidade: "",ufNaturalidade: "",nacionalidade: "",endereco: "",
        bairro: "",cidade: "",ufResidencial: "",cep: "", email:'',
        celular: "",foneResidencial: "",foneComercial: "",emailPreso: "",
        nomePreposto: "",vinculo: "",sexoPreposto: "",cpfPreposto: "",
        rgPreposto: "",orgaoExpedidorPreposto: "",grauInstrucao: "",atuacaoHabilitacao: "",
        profissao: "",bloco: "",ala: "",cela: "",condicaoPreso: "",
        regime: "",infopen: "",mae: "",pai: "",
      penitenciaria: { idPenitenciaria: "", uf: "" }
    }
  let [data, setData] = useState(startData)
  function clear(){
    setData(startData);
  }
  useEffect(()=>{if(props.selectedStudent){axios.get(`${API}/alunos/${props.selectedStudent}`).then(res=> setSelectedStudent(res.data))}},[])
  useEffect(()=>{setData((data)=>({...data, ...selectedStudent}))},[selectedStudent])
  let keysPenitenciaria = Object.keys(data.penitenciaria ? data.penitenciaria : ''),
    keysAluno = Object.keys(data),
    valueElements = [...keysAluno,...keysPenitenciaria];
  let emptyElements = 0;
  valueElements.forEach((vl) => {
    if (data[vl] === "" || data[vl] === null && vl !== 'observacoes') {
      emptyElements++;
    }
    else if(data.penitenciaria && data.penitenciaria[vl] === ''){
      emptyElements++;
    }
  });
  let handleSubmit = e =>{
    e.preventDefault();
    if (!emptyElements > 0) {
      NotificationManager.success('Aluno cadastrado', 'SUCESSO');
      setTimeout(function(){
        props.setSelected(2)
      },800)
    }
    else {
      setAlert(true);
      NotificationManager.error('Há itens incompletos', 'ERRO');
    }
  }
  useEffect(()=>{
    axios.get(`${API}penitenciarias?Limit=400`).then(res=>{
      setPenitenciaria([]);
      let dataPenitenciaria = res.data.data;
      dataPenitenciaria.forEach((item)=>{
      if(data.penitenciaria && data.penitenciaria.uf===item.uf){
        setPenitenciaria((data)=>[...data,item])
      }
      else if(data.idPenitenciaria && data.idPenitenciaria === item.id){
        setPenitenciaria((data)=>[...data,item])
        setData((data)=>({...data, penitenciaria:{idPenitenciaria: item.id,uf: item.uf}}))
      }
    })
    })
  },[data])
  return (
    <Grid>
      <NotificationContainer/>
      <form onSubmit={handleSubmit} style={{ fontSize: "20px"}}>
        <h1 className="titles"> 1 - DADOS DO REEDUCANDO</h1>
        <RegForm1 muiAlert={muiAlert} data={data} setData={setData} />
        <h2 className="titles">
          2 - DADOS DO RESPONSÁVEL: Familiar / Visitante / Advogado
        </h2>
        <RegForm2 muiAlert={muiAlert} data={data} setData={setData} />
        <h3 className="titles">3 - DADOS PRISIONAIS</h3>
        <RegForm3 muiAlert={muiAlert} data={data} setData={setData} penitenciaria={penitenciaria} />
      <FlexAround>
        <Button
          variant="contained"
          color="error"
          className="lg:w-1/5 h-fit p-2 rounded-sm bg-red-600 text-white font-bold"
          onClick={() => clear()}
        >
          LIMPAR
        </Button>
        <Button
          variant="contained"
          color="warning"
          type="submit"
          className="lg:w-1/5 h-fit p-2 rounded-sm text-white font-bold bg-green-500"
          >
          SALVAR
        </Button>
      </FlexAround>
      </form>
    </Grid>
  );
}
