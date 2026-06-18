import './contenedor_experiencia.css'


interface propsExperiencia{
    cargo: string,
    empresa: string,
    fecha: string,
    descripcion: string
}

export default function Contedor_experiencia({cargo, empresa, fecha, descripcion}: propsExperiencia){
    return(
        <>
            <div className="exp">
                <div className='bola'></div>
                <div className="cont_exp">
                    <div className='empresa_fecha'>
                        <div className='Cargo_empresa'>
                            <p className='cargo'>{cargo}</p>
                            <p className='empresa'>{empresa}</p>
                        </div>
                        <div className='fecha'>
                            {fecha}
                        </div>
                    </div>
                    
                    <div className='descripcion_trabajo '>
                        {descripcion}
                    </div>
                </div>
            </div>
        </>
    )
}