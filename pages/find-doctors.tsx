import Head from 'next/head'
import React from 'react'
import CardDoctor from '../components/cardDoctor'
import Header from '../components/header'
import Search from '../components/Search'
import db from '../data.json'

export default function FindDoctors() {
    let [searchTerm, setSearchTerm ]= React.useState('')

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
    const searchedDoctors = db.doctors.filter(doctor =>  doctor.specialite.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || doctor.clinique.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    
    return(
        <>
        <Head>
            <title>MEDGN</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <div className='search-wrapper'>
            <div className="container-flex">
                <p>Resultat trouvé: {searchedDoctors.length}</p>
                <Search onChange={handleChange}/>
            </div>
        </div>
        <div className="container">
        <div className="catalog-wrapper">
           {searchedDoctors.map((item)=> <CardDoctor key={item.id} doctor={item} />)}
        </div>

        </div>
        </>
    )
}