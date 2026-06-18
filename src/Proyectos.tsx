import CardProyecto from "./cardproyecto.tsx";
import './proyecto.css'
import Deploylogo from './assets/Activo.png'
import react from './assets/react.svg'
import java from './assets/java.svg'
import mysql from './assets/mysql.svg'
import pending from './assets/pendiente.png'
import logo_inventario from './assets/inventario_logo.png'
import drive from './assets/dirve.png'
import php from './assets/php.svg'
import aws from './assets/aws.svg'
import typescrpit from './assets/typescript.svg' 
import email_js from './assets/email_js.png'
import eccomerce from './assets/eccomerce.png'
import backend from './assets/backend.svg'


export default function Proyectos (){
    return (
        <>
        <div className="content_proyectos">
            <CardProyecto 
                logo="https://ddbcol.com.co/wp-content/themes/ddb/img/logo.svg"
                nombre = "landing page"
                link_poyecto = "https://ddbcol.vercel.app/"
                img_estado = {Deploylogo}
                estado = "deploy"
                link_github="https://github.com/Juan-FlorezDm/paginafinal"
                descripcion= "Esta es una pagina clon desarrolloda para una actividad de seguridad de la informacion donde se guardan los datos registrados y envio automatico de correos."
                Tecnologiasusadas={[ 
                            { nombreTecnologia: "typescript", logoTecnologia: typescrpit },
                            { nombreTecnologia: "react", logoTecnologia: react },
                            { nombreTecnologia: "email_js", logoTecnologia: email_js },
                            { nombreTecnologia: "mysql", logoTecnologia: mysql }
                        ]}
            />
            <CardProyecto 
                logo={logo_inventario}
                nombre = "Inventario"
                link_poyecto = ""
                img_estado = {pending}
                estado = "privado"
                link_github="https://github.com/Juan-FlorezDm/Invetario"
                descripcion= "Pagina web para el manejo de inventario a una pequeña empresa, creacion de actas de asignacion y retiro con guardado automatico en drive y envio automatico al usuario final."
                Tecnologiasusadas={[ 
                            { nombreTecnologia: "php", logoTecnologia: php },
                            { nombreTecnologia: "drive", logoTecnologia: drive },
                            {nombreTecnologia: "aws", logoTecnologia: aws}
                        ]}
            />
            <CardProyecto 
                logo={eccomerce}
                nombre = "E-commerce"
                link_poyecto = "https://proyecto-final-u-1.onrender.com/"
                img_estado = {Deploylogo}
                estado = "deploy"
                link_github="https://github.com/Juan-FlorezDm/proyecto_final_u"
                descripcion= "Pagina web con diferentes vistas de adminin y cliente, sistema de autenticacion, creacion y envio de facturas automaticas, con pasarela de pagos con tajertas debito y credito."
                Tecnologiasusadas={[ 
                            { nombreTecnologia: "mysql", logoTecnologia: mysql },
                            { nombreTecnologia: "java", logoTecnologia: java },
                            { nombreTecnologia: "email_js", logoTecnologia: email_js }
                        ]}
            />
            <CardProyecto 
                logo={backend}
                nombre = "Backend de un banco"
                link_poyecto = ""
                img_estado = {pending}
                estado = "pending"
                link_github="https://github.com/Juan-FlorezDm/BackendBanco"
                descripcion= "Sistema backend de un banco con funcionalidades de transacciones, prestamos (...), desarrollado enteramente en java."
                Tecnologiasusadas={[ 
                            { nombreTecnologia: "java", logoTecnologia: java }
                        ]}
            />
        </div>
        </>
    )
}