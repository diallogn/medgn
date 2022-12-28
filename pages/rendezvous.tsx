import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Header from '../components/header'

export default function RendezVous(){
    const [value, setValue] = React.useState(dayjs('2022-12-28T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    
    return(
        <>
            <Header />
            <div className='search-wrapper'>
                <div className="container-flex">
                    <p>Choisir la date et l'heure du rendez-vous</p>
                </div>
            </div>
            <div className="container">
                <div className='date-picker'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        label="Choisir une date"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="Choisir une heure"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                </div>
                <a href="/rendezvous-confirm" className='btn'>Reserver la place</a>
            </div>
        </>
    )
}