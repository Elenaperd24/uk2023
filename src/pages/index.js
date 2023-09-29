import Link from "next/dist/client/link"



export default function Home() {

    return (
        <>
       
                <video className="video-home" width={"100%"} height={"60%"}
                    loop autoPlay muted src="assets/videos/video-unopack.mp4" type="video.mp4">
                </video>
                
                <div className="content-circlescards">

                    <div className="content-card">
                        <div className="circle-card">
                            <img src="assets/images/icon-alquiler.svg"/>
                            <h2>ALQUILER</h2>
                            <p>una solucion para producir envases de todo tipo</p>
                            <div className="masInfo">Mas informacion</div>

                        </div>
                        <div className="circle-card">
                        <img src="assets/images/icon-sopladoras.svg"/>

                        <div className="circle-card">
                            <img src="assets/images/icon-alquiler.svg"/>
                            <h2>ALQUILER</h2>
                            <p>una solucion para producir envases de todo tipo</p>
                            <div className="masInfo">Mas informacion</div>

                        </div>

                        </div>
                        <div className="circle-card">
                        <img src="assets/images/icon-matriceria.svg"/>

                        </div>

                    </div>




                </div>


     

        </>
    )
}