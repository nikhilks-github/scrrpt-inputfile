import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from './Textbox'; 
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color: 'black',
    fontWeight: 500,
    width: '32%',
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
    <Paper className={classes.root} variant="outlined">
        <div style = {{marginTop: 30 , marginRight: 10 }}> 
        <Details heading = 'Program: ' name = 'program' freesolo = {false} onChange= {props.onChange} options = {Program}/> 
         <Details heading = 'Report Type: ' name = 'reportType' freesolo = {false} onChange= {props.onChange}   options = {ReportType} /> 
         <Details heading = 'Format: ' name = 'format' freesolo = {false} onChange= {props.onChange} options = {Format}/> 
         <Details heading = 'Path: ' name = 'path' freesolo = {false} onChange= {props.onChange}  /> 
         <FileImport heading = 'File: ' name = 'file' onChange= {props.onFileUpload}  />
         
         </div>
      <CardActions style ={{marginTop: 25}}>
        <Button size="small" style ={{ color: 'white' , display: 'flex', float: 'right' , backgroundColor: 'blue'}}
         onClick = {props.onSubmit}>SUBMIT</Button>
      </CardActions>
    </Paper>
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