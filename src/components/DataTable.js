import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { getTodayDate, compareRecordDate } from '../utils/utils';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 300,
        maxWidth: 700,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const DataTable = ({ record, staff_list }) => {
    const classes = useStyles();
    const [reportDate, setReportDate] = useState(getTodayDate());

    const onJobReportDateChanged = (event) => {
        setReportDate(event.target.value);
    };

    const renderStaffResponseList = () => {
        const jobReport = record.slice(1, record.length);
        const dailyJobReport = jobReport.filter((record) =>
            compareRecordDate(record[1], reportDate)
        );
        const dailyStaffResponseList = staff_list.map((staff) => ({
            name: staff,
            response: 0,
        }));
        dailyJobReport.forEach((record) => {
            dailyStaffResponseList.forEach((staff) => {
                if (staff.name === record[2]) {
                    staff.response++;
                }
            });
        });
        dailyStaffResponseList.sort(
            (staff, comparedStaff) => comparedStaff.response - staff.response
        );
        const responseRate = (
            (dailyStaffResponseList.filter((staff) => staff.response > 0)
                .length *
                100) /
            dailyStaffResponseList.length
        ).toFixed(2);
        dailyStaffResponseList.unshift({
            name: 'Response Rate',
            response: `${responseRate}%`,
        });
        return dailyStaffResponseList.map((staff) => (
            <TableRow key={staff.name}>
                <TableCell>{staff.name}</TableCell>
                <TableCell>{staff.response}</TableCell>
            </TableRow>
        ));
    };

    return (
        <div>
            <Box display='flex' justifyContent='center'>
                <form className={classes.container} noValidate>
                    <TextField
                        id='date'
                        label='ORDER DATE'
                        type='date'
                        value={reportDate}
                        className={classes.textField}
                        onChange={(event) => onJobReportDateChanged(event)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <h4>{}</h4>
            </Box>

            <TableContainer component={Paper}>
                <Box display='flex' justifyContent='center'>
                    <Table className={classes.table} size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Staff Name</TableCell>
                                <TableCell>No of Response</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{renderStaffResponseList()}</TableBody>
                    </Table>
                </Box>
            </TableContainer>
        </div>
    );
};

export default DataTable;
