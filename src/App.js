import React from 'react';
import { GoogleSheetsApi } from '@lourd/react-google-sheet';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button, Box } from '@material-ui/core';
import './App.css';

import {
    CLIENT_ID,
    SHEET_ID,
    REPORT_RANGE,
    STAFF_LIST_RANGE,
} from './utils/constants';
import GoogleSheetWrapper from './components/GoogleSheetWrapper';

const SheetsDemo = ({ clientId, apiKey }) => (
    <GoogleSheetsApi clientId={clientId} apiKey={apiKey}>
        {({ authorize, loading: apiLoading, signout, signedIn, error }) => (
            <div>
                {apiLoading ? (
                    <CircularProgress />
                ) : error ? (
                    <div>{error}</div>
                ) : signedIn ? (
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={signout}>
                        Sign Out
                    </Button>
                ) : (
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={authorize}>
                        Authorize
                    </Button>
                )}
                {signedIn && (
                    <GoogleSheetWrapper
                        staff_list_range={STAFF_LIST_RANGE}
                        report_range={REPORT_RANGE}
                        id={SHEET_ID}
                    />
                )}
            </div>
        )}
    </GoogleSheetsApi>
);

function App() {
    return (
        <div className='App'>
            <Box
                display='flex'
                flexDirection='column'
                p={1}
                m={1}
                bgcolor='background.paper'>
                <h2>SLE Job Report</h2>
                <SheetsDemo clientId={CLIENT_ID} apiKey='' />
            </Box>
        </div>
    );
}

export default App;
