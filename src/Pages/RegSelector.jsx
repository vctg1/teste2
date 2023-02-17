import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import RegisterForm from "../Components/RegForms/RegisterForm";
import FlexBox from '../Components/flexbox/FlexBox'
import CoursesList from "../Components/Courses/CoursesList";
import { KeyboardReturn } from "@mui/icons-material";
import axios from "axios";
import StudentInfo from "../Components/Contracts/StudentInfo";
import FinancialForm from "../Components/Financial/FinancialForm";
import AditionalExpensesForm from "../Components/Aditional-expenses/AditionalExpensesForm";
import Attachments from "../Components/Attachments/Attachments";

export default function RegSelector() {
  let [studentData, setStudentData] = useState({});
  let [contractData, setContractData] = useState(JSON.parse(sessionStorage.getItem('matricula')));
  let [selectedStudent, setSelectedStudent] = useState(null|sessionStorage.getItem('student'));
  let [selectedButton, setSelectedButton] = useState(null|sessionStorage.getItem('button'))
  let API = process.env.REACT_APP_API_KEY;
  let [forms, setForms] = useState([{}]);
  let [openedForm, setOpenedForm] = useState({});
  useEffect(() => {
    setForms([
      {
        id: 1,
        name: "CADASTRO",
        child: <RegisterForm selectedStudent={selectedStudent} setSelected={setSelectedButton} />,
      },
      {
        id: 2,
        name: "CURSOS",
        child: <CoursesList selectedStudent={selectedStudent} />,
      },
      {
        id: 3,
        name: "FINANCEIRO",
        child: <FinancialForm selectedStudent={selectedStudent} />,
      },
      {
        id: 4,
        name: "DESPESAS ADICIONAIS",
        child: <AditionalExpensesForm selectedStudent={selectedStudent} />
      },
      {
        id: 5,
        name: "ANEXOS",
        child: <Attachments selectedStudent={selectedStudent} />
      },
    ]);
  }, []);
  useEffect(()=>{
    forms.map((item)=>{
      if(selectedButton === item.id){
        setOpenedForm(item);
      }
    })
    axios.get(`${API}/alunos/${selectedStudent}`).then(res=> setStudentData(res.data));
  },[selectedButton, forms])
  return (
    <Grid className="bg-white rounded-md p-2 ">
      <Typography marginY={2} fontWeight={'bold'} color={'rgb(100,100,100)'} >Dados gerais do contrato</Typography>
      <FlexBox style={{marginBottom:'1em', gap:'10px', display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr' }}>
        <StudentInfo bgColor={'rgb(80,80,80)'} titleColor={'lightgray'} infoColor={'white'} title={'ALUNO / CPF:'} info={`${contractData.aluno.nome} / ${contractData.aluno.cpf}`} />
        <StudentInfo bgColor={'rgb(80,80,80)'} titleColor={'lightgray'} infoColor={'white'} title={'CONTRATO:'} info={contractData.numeroMatricula ? contractData.numeroMatricula :'N/D'} />
        <StudentInfo bgColor={contractData.dataPrescricao ? 'red' : 'slategray'} titleColor={'lightgray'} infoColor={'white'} title={'SITUAÇÃO CONTRATO:'} info={contractData.dataPrescricao ? 'PRESCRITO' : 'VIGENTE'} />
        <StudentInfo bgColor={'slategray'} titleColor={'lightgray'} infoColor={'white'} title={'FINANCEIRO:'} info={contractData.statusFinanceiroDescricao} />
        <Button color='inherit' variant='contained' onClick={()=>{window.history.back()}}>VOLTAR<KeyboardReturn/></Button>
      </FlexBox>
      <FlexBox marginBottom='1vh' gap='1vw' >
        {forms.map((item) => {
          return <Button variant={selectedButton !== item.id ? 'outlined' : 'contained'} onClick={()=>setSelectedButton(item.id)}><b>{item.name}</b></Button>
        })}
      </FlexBox>
      <Grid>
        {openedForm.child}
      </Grid>
    </Grid>
  );
}
