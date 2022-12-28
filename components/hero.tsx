import Link from "next/link";
import Button from '@mui/material/Button'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Search from "./Search";

export default function Hero() {
    return <>
        <div className="hero">
            <div className="content">
                <div className="hero-slogan">
                    <h1>Trouver un medécin</h1>
                    <a href="/find-doctors" className="btn">Un randez-vous?</a>
                </div>
            </div>
        </div>
    </>
}