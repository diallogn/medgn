import React from 'react'

export default function Search(props){
    
    return(
        <div>
            <input className="input" type="text" placeholder="medécin, spécialité, clinique" onChange={props.onChange} />
        </div>
    )
}