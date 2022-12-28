import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import Header from '../components/header'
import data from '../data.json'
import Image from 'next/image';
import Footer from '../components/footer';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  


export default function DoctorProfile({doctor}){
    const rows = [
        createData('Lundi', '00:00', '00.00'),
        createData('Mardi', '12:00', '18:00'),
        createData('Mercredi', '00:00', '00:00' ),
        createData('Jeudi', '00:00', '00:00' ),
        createData('Vendredi', '12:00', '18:00'),
        createData('Samedi', '00:00', '00:00' ),
        createData('Dimanche', '00:00', '00:00'),
      ];
    return(
        <>
        <Header />
        <div className="container">
        <div className="profile-wrapper">
            <div className="profile">
                <div className="profile-img" style={{backgroundImage: `url(${doctor.image})`, height: '300px'}}></div>
                <div className="profile-name">
                    <p>{doctor.specialite}</p>
                    <h3>Dr. {doctor.firstName} {doctor.lastName}</h3>
                </div>
                <div className="profile-info">
                    <p>Clinique</p>
                    <p className='profile-info-data'>{doctor.clinique}</p>
                    <p>Addresse</p>
                    <p className='profile-info-data'>{doctor.quartier}</p>
                </div>
                <div className="profile-btn">
                    <span>
                    <Link href="/rendezvous">un rendez-vous ?</Link>
                    </span>
                </div>
            </div>
            <div className="desc">
                <div className="desc-card">
                    <h2>Disponibilités</h2>
                    <p>Les horaires de disponibilités du medécin</p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right">Debut</TableCell>
                                <TableCell align="right">Fin</TableCell>
                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="desc-card">
                    <h2>Parcours académique</h2>
                    <p>les parcours académique du medécin</p>
                    <p>parcours du medécin</p>
                </div> 
                <div className="desc-card">
                    <h2>Expérience en clinique</h2>
                    <p>quelque expérience du medécin dans différents cliniques</p>
                    <p>Les expériences du médecin</p>
                </div>
                <div className="desc-card">
                    <h2>Tarification</h2>
                    <p>Les tarifs pratiques par le medécin</p>
                    <p>{doctor.tarif} FG</p>
                </div>
                <div className="desc-card">
                    <h2>assurrences et tiers payant</h2>
                    <p>Les assurrences auquelles le medécin est affilié</p>
                </div>
                <div className="desc-card desc-card-btn">
                    <span>
                        <Link href="/rendezvous">Prendre rendez-vous ?</Link>
                    </span>
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
}

export async function getServerSideProps(context){
    const {params} = context;
    const {slug} = params

    const doctor = data.doctors.find((value) => {
        return value.slug === slug
    })
    return{
        props: {
            doctor: doctor
        }
    }
}