import './Experiencia.css'
import Contedor_experiencia from './Contenedor_experiencia'


export default function Experiencia (){
    return (
        <>
            <div className="content_experiencia">
                <div className='barra_line'></div>
                <div className='content_contenedores_exp'>
                    <Contedor_experiencia 
                        cargo='Ingeniero de soporte'
                        empresa='DDB'
                        fecha='2024'
                        descripcion='Soporte en sitio y remoto de equipos y aplicaciones de diseño, mantenimientos preventivos, manejo de inventario GLPI serviceNow.'
                    /> 
                    <Contedor_experiencia 
                        cargo='Creacion de Herramienta'
                        empresa='Conexion Bogota'
                        fecha='2025'
                        descripcion='Creacion de herramienta para manejo de inventarios con creacion de actas de entrega y de retiro de equipos.'
                    />
                    <Contedor_experiencia 
                        cargo='Soporte'
                        empresa='HAS ltda'
                        fecha='2026'
                        descripcion='Mateniminetos preventivos, instalacion de equipos, instalacion y configuracion de impresoras, soporte en campo de equipos e impresoras.'
                    />
                    <Contedor_experiencia 
                        cargo=''
                        empresa=''
                        fecha=''
                        descripcion=''
                    />
                </div>
            </div>
        </>
    )
}