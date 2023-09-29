import Image from "next/image";
import Link from "next/link"
import Router, { useRouter } from "next/router";

const Header = () => {
    const router = useRouter()

    return (
        <>
         
                <nav className="container-navbar">
                    <img className="logo-white" src="assets/images/logo-white.svg" alt="Unopack - Ingenieria en Plasticos" />
                    <div>
                        <a href="#" className="nav-enlace">Alquiler</a>
                        <a href="#" className="nav-enlace">Sopladoras</a>
                        <a href="#" className="nav-enlace">Matriceria</a>
                        <a href="#" className="nav-enlace">Asesoramiento</a>
                        <a href="#" className="nav-enlace">Empresa</a>
                        <a href="#" className="nav-enlace">Contactos</a>
                        
                    </div>
                </nav>




        </>
    )
}


export default Header