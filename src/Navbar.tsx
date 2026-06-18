import { useState, type ReactNode } from "react"

interface Items{
    id: number,
    label: string,
    componente: ReactNode
}

interface propsNavegacion {
    Contenido: Items[]
}

export default function Navegacion({Contenido}: propsNavegacion){
   
    const [focus, setFocus] = useState(0)

    return(
        <div className="contenido">
            <div className="Navbar">
                <ul>
                    {Contenido.map((item)=>(
                    <button className='nav' onClick={()=>{
                        setFocus(item.id)
                    }}>{item.label}</button>
                ))}
                </ul>
                
            </div> 

            <div className="componente">  
                {Contenido.find(index => index.id === focus)?.componente}
            </div>         
        </div>
    )
}