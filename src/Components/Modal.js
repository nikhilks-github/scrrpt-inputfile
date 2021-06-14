import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from './Textbox'; 
import ResultTable from './ResultTable';
import Loader from "./Loader"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color: 'black',
    fontWeight: 500,
    width: '60%',
    height: '80%', 
    marginLeft: 20,
    borderRadius: 30 ,
    backgroundColor: 'whitesmoke'  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
       <div style = {{textAlign: "center" , marginTop: 10,fontWeight: 700, fontSize: 18, color: 'blue'}}> RESULTS </div> 
       { props.modal && <div style = {{marginTop: 30 , marginRight: 10 }}> 
        {props.isLoaded  ? <ResultTable /> :  <Loader /> }
       
        </div> } 
        { props.isLoaded  && <div style ={{display: 'flex', float: 'right' , marginTop: 10,marginRight: 100}}> 
        <button onClick = {props.clear}> Clear</button></div> }
     
    </Card>
  );
}


function Details(props)
{
    return (
        
        <div style = {{display: 'flex', justifyContent: 'space-between', marginBottom: 10 , paddingBottom: 10} }> 
        <div style = {{marginTop: 10 ,  padding: 2, fontWeight: 700}} > {props.heading} </div> 
       <TextField freesolo = {props.freesolo} options = {props.options} name =  {props.name} onChange = {props.onChange} />  
       </div> 
    )
}
 
function FileImport(props)
{
    return (
        
        <div style = {{display: 'flex', justifyContent: 'space-between'} }> 
        <div style = {{marginTop: 10 ,  padding: 5, fontWeight: 700}} > {props.heading} </div> 
        <input  style ={{marginLeft: 65, marginTop: 20}} type="file" name="file" onChange={props.onChange} /> 
       </div> 
    )
} 

const Program = ['TOEFL', 'GRE', 'APMOD', 'APCR', 'CAASP', 'PRAXIS']; 
const ReportType = ['Candidate', 'DI', 'NEEA']; 
const Format = ['JSON', 'txt', 'XML'];