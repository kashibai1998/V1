import React from 'react';
import './TableChart.scss'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, wavelength, ec2instance) {
    return { name, wavelength, ec2instance };
  }
  const rows = [
    createData('Size of File', 0, 1, 1.5),
    createData('Upload Time', 0, 5),
    createData('Processing Time', 0, 5),
    createData('Download Time', 0, 5),
    createData('Round Trip time with Processing', 0, 4),
    createData('Round Trip time without Processing', 0, 0, 4),
    createData('Speed', 0, 5),
    // createData('Efficiency', 0, 5),
  ];

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);





const useStyles = makeStyles({
    // table: {
    //     minWidth: 600,
    // },
});

export default function TableChart(props) {
    const classes = useStyles();
   // console.log(rows[0]);
    // rows[0].wavelength=props.fileSize+' kb';
    // rows[1].wavelength=props.roundTripTime+' sec.';
    // rows[2].wavelength=props.speed+' kb/sec.'
    return (
        <TableContainer component={Paper}style={{width:775,height:300}}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align='center' >Parameter</StyledTableCell>
                        <StyledTableCell align='center'>Wavelength Server</StyledTableCell>
                        <StyledTableCell align='center' >EC2 Regional Server</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align='center' component="th" scope="row">{row.name}</StyledTableCell>
                            <StyledTableCell  align='center'>{row.wavelength}</StyledTableCell>
                            <StyledTableCell  align='center'>{row.ec2instance}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
