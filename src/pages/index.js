import Link from "next/dist/client/link"



export default function Home() {

    return (
        <>
            <div className="video-bg">
                <video className="video-home" width={"100%"} height={"60%"}
                    loop autoPlay muted playsinline src="assets/videos/video-unopack.mp4" type="video.mp4">
                </video>
                <h2 className="title-banner">Soluciones inteligentes en alquiler y ventas <br></br>de maquinas sopladoras</h2>

            </div>

            <div className="content-circlescards">

                <div className="content-card">
                    <div className="circle-card">
                        <img src="assets/images/icon-alquiler.svg" />
                        <h3>ALQUILER</h3>
                        <p>Una solucion para producir<br></br> envases de todo tipo</p>
                        <div className="masInfo">Mas informacion</div>

                    </div>
                    <div className="circle-card">
                        <img src="assets/images/icon-sopladoras.svg" />
                        <h3>SOPLADORAS</h3>
                        <p>PET y PE, exclusivamente<br></br> desarrolladas para cada cliente </p>
                        <div className="masInfo">Mas informacion</div>
                    </div>
                    <div className="circle-card">
                        <img src="assets/images/icon-matriceria.svg" />
                        <h3>MATRICERIA</h3>
                        <p>La mas alta calidad para la<br></br> fabricacion de moldes a medida</p>
                        <div className="masInfo">Mas informacion</div>

                    </div>

                </div>




            </div> 

            <div className="title">
                <h2>Ultimas tecnologias y permanente <br></br>compriso con el desarrollo.</h2>
                <p>Todos nuestros modelos son desarrollados por la maxima experiencia de Unopack.</p>
            </div> 

           <div className="cont-videos-cards">
                <div className="card-video">
                    <img src="assets/images/video-1.jpg" />
                    <img className="icon-play" src="https://ucontinental.edu.pe/impactopositivo/wp-content/uploads/2018/02/video-play-icon.png" />


                </div>
                <div className="card-video">
                    <img src="assets/images/video-1.jpg" />
                    <img className="icon-play" src="https://ucontinental.edu.pe/impactopositivo/wp-content/uploads/2018/02/video-play-icon.png" />

                </div>
                <div className="card-video">
                    <img src="assets/images/video-1.jpg" />
                    <img className="icon-play" src="https://ucontinental.edu.pe/impactopositivo/wp-content/uploads/2018/02/video-play-icon.png" />

                </div>

            </div> 

          <div className="button-play">
                <button>
                    <p> VER MAS </p>
                    <img className="" src="https://ucontinental.edu.pe/impactopositivo/wp-content/uploads/2018/02/video-play-icon.png" />

                </button>
            </div> 

          <div className="contact-us">
                <h2>Pongase en contacto</h2>

                <p>Alvear 3070 | B1752APD | Lomas del Mirador, Buenos aires, Argentina.</p>
                <p>Tel.: 4441-7800 / 7676 / 4477 - Fax: 441-3699</p>
                <p>Email: unopack@unopack.com.ar</p>

                <div className="social-media">
                    <span>Seguinos en</span>
                    <img src="assets/images/youtube.png" />
                    <img src="assets/images/instagram.png" />
                </div>

            </div>

             <div className="footer-home">

                <div className="cards-machine-footer">

                    <div className="machine-card">
                        <img src="assets/images/unk-footer.png" />
                        <div className="text-card-machine">
                            <p> Familia PET</p>
                            <h2> UNK</h2>
                        </div>
                    </div>
                    <div className="machine-card middle">
                        <img src="assets/images/uk-footer.png" />
                        <div className="text-card-machine">
                            <p> Familia PET</p>
                            <h2> UK</h2>
                        </div>
                    </div>
                    <div className="machine-card">
                        <img src="assets/images/ukp-footer.png" />
                        <div className="text-card-machine">
                            <p> Familia PE</p>
                            <h2> UKP</h2>
                        </div>
                    </div>

                


                </div>


            </div>  



        </>
    )
}