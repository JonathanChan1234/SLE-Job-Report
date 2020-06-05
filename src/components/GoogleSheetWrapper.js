import React, { useState } from 'react';
import { GoogleSheet } from '@lourd/react-google-sheet';
import { LinearProgress, Button } from '@material-ui/core';
import DataTable from './DataTable';

const GoogleSheetWrapper = ({ id, report_range, staff_list_range }) => {
    const [reset, forceReset] = useState(false);

    return (
        <div>
            <Button onClick={() => forceReset(!reset)}>Reload Data</Button>
            <GoogleSheet range={staff_list_range} id={id}>
                {({
                    loading: staff_list_loading,
                    error: staff_list_error,
                    data: staff_list_data,
                }) =>
                    staff_list_loading ? (
                        <div>
                            <LinearProgress />
                            <h5>Getting Staff List from Google Sheet</h5>
                        </div>
                    ) : staff_list_error ? (
                        JSON.stringify(staff_list_error, null, 2)
                    ) : staff_list_data ? (
                        <GoogleSheet id={id} range={report_range}>
                            {({
                                loading: report_list_loading,
                                error: report_list_error,
                                data: report_list_data,
                            }) =>
                                report_list_loading ? (
                                    <div>
                                        <LinearProgress />
                                        <h5>
                                            Getting Job Report from Google Sheet
                                        </h5>
                                    </div>
                                ) : report_list_error ? (
                                    JSON.stringify(report_list_error, null, 2)
                                ) : report_list_data ? (
                                    <DataTable
                                        record={report_list_data}
                                        staff_list={staff_list_data.map(
                                            (staff) => staff[0]
                                        )}
                                    />
                                ) : null
                            }
                        </GoogleSheet>
                    ) : null
                }
            </GoogleSheet>
        </div>
    );
};

export default GoogleSheetWrapper;
