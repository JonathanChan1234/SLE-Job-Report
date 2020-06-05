import React, { useState } from 'react';
import { GoogleSheet } from '@lourd/react-google-sheet';
import { LinearProgress, Button } from '@material-ui/core';
import DataTable from './DataTable';
import { mergeData } from '../data/mergeData';

const GoogleSheetWrapper = ({
    old_sheet_id,
    new_sheet_id,
    report_range,
    staff_list_range,
}) => {
    const [reset, forceReset] = useState(false);

    return (
        <div>
            <Button onClick={() => forceReset(!reset)}>Reload Data</Button>

            <GoogleSheet range={staff_list_range} id={old_sheet_id}>
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
                        <p>{JSON.stringify(staff_list_error, null, 2)}</p>
                    ) : staff_list_data ? (
                        <GoogleSheet id={old_sheet_id} range={report_range}>
                            {({
                                loading: report_list_old_loading,
                                error: report_list_old_error,
                                data: report_list_old_data,
                            }) =>
                                report_list_old_loading ? (
                                    <div>
                                        <LinearProgress />
                                        <h5>
                                            Getting Job Report from Google Sheet
                                        </h5>
                                    </div>
                                ) : report_list_old_error ? (
                                    <p>
                                        {JSON.stringify(
                                            report_list_old_error,
                                            null,
                                            2
                                        )}
                                    </p>
                                ) : report_list_old_data ? (
                                    <GoogleSheet
                                        id={new_sheet_id}
                                        range={report_range}>
                                        {({
                                            loading: report_list_new_loading,
                                            error: report_list_new_error,
                                            data: report_list_new_data,
                                        }) =>
                                            report_list_new_loading ? (
                                                <div>
                                                    <LinearProgress />
                                                    <h5>
                                                        Getting New Job Report
                                                        from Google Sheet
                                                    </h5>
                                                </div>
                                            ) : report_list_new_error ? (
                                                <p>
                                                    {JSON.stringify(
                                                        report_list_new_error,
                                                        null,
                                                        2
                                                    )}
                                                </p>
                                            ) : report_list_new_data ? (
                                                <DataTable
                                                    record={mergeData(
                                                        report_list_old_data,
                                                        report_list_new_data
                                                    )}
                                                    staff_list={staff_list_data.map(
                                                        (staff) => staff[0]
                                                    )}
                                                />
                                            ) : (
                                                <p>No Job Report Data</p>
                                            )
                                        }
                                    </GoogleSheet>
                                ) : (
                                    <p>No Job Report Data</p>
                                )
                            }
                        </GoogleSheet>
                    ) : (
                        <p>No Staff List Data</p>
                    )
                }
            </GoogleSheet>
        </div>
    );
};

export default GoogleSheetWrapper;
