import Header from '../components/header'
export default function RandezVousConfirm(){
    return (
        <>
            <Header />
            <div className="container">
                <div className="confirm-wrapper">
                <div className="connexion">
                    <p>Etes-vous nouveau sur medgn ? cliquer sur S'inscrire pour vous enregister ou Connectez vous</p>
                    <a href="#" className='btn btn-large'>S'inscrire</a>
                    <a href="#" className='btn btn-large'>Se connecter</a>
                </div>
                <div className="confirm">
                    <p className='btn'>Votre Rendez-vous</p>
                    <ul>
                        <li>Date: ...</li>
                        <li>Heure: ...</li>
                        <li>Medecin: ...</li>
                        <hr />
                        <li>Tarif: ...</li>
                    </ul>
                </div>
                </div>
            </div>
        </>
    )
}