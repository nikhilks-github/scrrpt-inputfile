import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Autocomplete from '@material-ui/lab/Autocomplete';

const columns = [
  { id: 'name', label: 'NAME', width: 50  },
  { id: 'code', label: 'STATUS', width: 50 },
//   {
//     id: 'population',
//     label: 'Status',
//     width: 100,
//     format: (value) => value.toLocaleString('en-US'),
//   },

];



const rows = [ {name: 'Scenario1.zip' , code: 'Success' , population: 'hsfhjskn'},
{name: 'Scenario2.zip' , code: 'Failure' , population: 'hsfhjskn'},
{name: 'Scenario3.zip' , code: 'Failure' , population: 'hsfhjskn'},
{name: 'Scenario4.zip' , code: 'Success' , population: 'hsfhjskn'},
{name: 'Scenario5.zip' , code: 'Success' , population: 'hsfhjskn'},
{name: 'Scenario6.zip' , code: 'Success' , population: 'hsfhjskn'},
{name: 'Scenario7.zip' , code: 'Success' , population: 'hsfhjskn'}]
; 


const useStyles = makeStyles({
  root: {
    width: '70%',
    
    margin: 'auto',
    borderRadius: 10
  },
  container: {
    maxHeight: 280,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
