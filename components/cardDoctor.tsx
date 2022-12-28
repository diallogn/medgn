import Image from "next/image"
import Link from "next/link"

export default function CardDoctor({doctor}){
    return (
        <>
        <div className="card-doctor">
            <div className="card-detail">
            <div className="card-doctor-img">
                <Link href={doctor.slug} >
                    <Image alt="profile of doctor" src={doctor.image}  width={80} height={80} />
                </Link>
            </div>
            <div className="card-doctor-desc">
            <p className="specialite">{doctor.specialite}</p>
            <h3>Dr. {doctor.firstName} {doctor.lastName}</h3> 
            <p className="quartier">{doctor.quartier}</p>  
            </div>
            </div>
            <div className="detail-info">
                <a href={doctor.slug} className=" btn-rounded">Voir les details</a>
            </div>
        </div>
        </>
    )

}