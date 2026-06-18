import github_logo from './assets/github.svg'


interface Tecnologia{
    nombreTecnologia: string,
    logoTecnologia: string
}

interface props{
    logo: string, 
    nombre:string, 
    link_poyecto:string, 
    img_estado:string,
    estado: string,
    link_github: string,
    descripcion: string,
    Tecnologiasusadas: Tecnologia[]
}
 
export default function CardProyecto({logo, nombre, link_poyecto, img_estado, estado, link_github, descripcion, Tecnologiasusadas}: props){
    const repo = link_github.slice(19)
    return(
        <>
        {
            console.log(logo, nombre, link_poyecto, img_estado, estado, link_github, descripcion, Tecnologiasusadas)
        }
            <div className="card">
                <div className="header_card">
                    <div className="logo">
                        <img src={logo}/>
                        <div className="des_proyecto">
                            <p className="titulo_proyecto">{nombre}</p>
                            <a target="_blank" href={link_poyecto}>{link_poyecto}</a>
                        </div>
                    </div>
                    <div className="estado">
                        <p>{estado}</p>
                        <div>
                            <img src={img_estado}/>
                        </div>
                    </div>
                </div>
                <div className="link_repo">
                    <a target="_blank" href={link_github}>
                        <button><img src={github_logo}/>{repo}</button>
                    </a>
                </div>
                <div className='footer_card'>
                    <div className='descripcion'>
                        <p>{descripcion}</p>
                    </div>
                    <div className='Tecnologias'>
                        {Tecnologiasusadas.map((item)=>{
                            return <img src={item.logoTecnologia} alt={item.nombreTecnologia}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}