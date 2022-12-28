import Image from "next/image";
import Link from "next/link";
import pic1 from '../public/images/trousse-de-premiers-secours.png'
import pic2 from '../public/images/ventilation.png'
import pic3 from '../public/images/appel-durgence.png'

import Button from '@mui/material/Button'

export default function Services() {
    return (
        <section>
            <div className="container">
                <h1>Découvrir le rendez-vous en ligne</h1>
                
                <div className="card-wrapper">
                    <div className="card">
                        <Image src={pic1} height={100} alt="picture about doctor" />
                        <h2>Trouver un medécin</h2>
                        <p>Faites une recherche des medécin que vous cherchez</p>
                    </div>
                    <div className="card">
                        <Image src={pic2} height={100} alt="picture about doctor" />
                        <h2>Connaitre les medécin</h2>
                        <p>Regardez les profiles des medécin pour en savoir plus sur eux</p>
                    </div>
                    <div className="card">
                        <Image src={pic3} height={100} alt="picture about doctor" />
                        <h2>Rendez vous Téléphonique</h2>
                        <p>+224 680 000 000</p>
                    </div>
                </div>
                
                <div className="wrapper">
                <Link href='/search'legacyBehavior>
                    <a className="btn"> Trouver un medécin</a>
                </Link>
    
                <p className="phone">+224 680 000 000</p>
                <p>Appelez nous pour prendre un rende vous chez votre medécin</p>
                </div>
            </div>
        </section>
    )
}