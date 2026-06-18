import perfil from './assets/personal.jpeg'
import Github from './assets/github.png'
import Linkedin from './assets/linkedin.png'
import Whatsapp from './assets/whatsapp.png'
import Aws from './assets/aws.svg'

import './inicio.css'

export default function Inicio (){
    return (
        <>
            <div className='content_inicio'>
                
                <div className="content_descripcion">
                    <p>
                        <div className='nombre'>     
                            <h1>Hola, soy Juan Diego</h1>
                        </div>
                        <div className='descripcion'>
                            Tecnologo en desarrollo de software, conocimineto de Frontend en 
                            React, TypeScript, Node Backend en express, SpringBoot, Java, 
                            me interesa mucho aprender sobre 
                            <img className='lgo' src={Aws} alt="Aws" />
                        </div> 
                    </p>
                    <div className="content_redes">
                        <div className='btn_redes'>
                            <a href="https://github.com/Juan-FlorezDm">
                                <button><img className='logos' src={Github} alt="" />GitHub</button>
                            </a>
                        </div>
                        <div className='btn_redes'>
                            <a href="https://www.linkedin.com/in/juan-diego-florez-mendez-632522234/">
                                <button><img className='logos' src={Linkedin} alt="" />Linkedin</button>
                            </a>
                        </div>
                        <div className='btn_redes'>
                            <a href="https://wa.me/573222434519">
                                <button ><img className='logos' src={Whatsapp} alt="" />Whatsapp</button>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="content_image">
                    <img src={perfil} alt="foto perfil" />
                </div>
                
            </div>
        </>
    )
}