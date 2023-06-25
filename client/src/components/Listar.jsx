import React from 'react'
import estante from './estante.jpeg';
import { NavLink } from 'react-router-dom';
import Bote_Basura from'./Bote_Basura.png';
import avion from './avion.png';
import {Menu} from './Menu';
import { Link, animateScroll as scroll } from "react-scroll";
import 'typeface-quicksand';
import gif1 from './gif1.gif';
import gif2 from './gif2.gif';
import cuaderno from './cuaderno.png';
import {motion} from 'framer-motion';


//npm install scroll/ y también /npm install react-scroll/ también /mdb-react-ui-kit/  también /npm install mdbreact/
//npm install mdbreact-datatable/es necesario ojo.
//npm install typeface-quicksand//
//npm install framer-motion//


export const Listar = () => {
    return(
      <div className="EL TODO cuidado" style={{ 
        background: `url(${estante})`,
        justifyContent: 'space-between',
        width: '100%',
        height: '100vh',
        }}>

      <div className="h3" style={{
        fontSize: 49,
        textAlign: "center",
        fontFamily:'Quicksand',
        fontWeight: 'bold',
        //WebkitTextStroke: '0.6px black',
        textStroke: 'px white',
        color: "white",
         
      }}>
        
         Listado de libros
      
      </div>
      <div style={{ marginBottom: '50px' }}></div>
      <div className="tabla de los  cuadrados, es decir, tus libros y los libros de en general" style={{
        background: "linear-gradient(to bottom, rgba(155, 156, 117, 0.89), rgba(213, 214, 182, 0.84))",
        display: "flex",
        borderRadius: 15, 
        //justifyContent: "center", // Centrar horizontalmente
        //alignItems: "center", // Centrar verticalmente
        height: "70vh" ,
        boxShadow: "0 0 50px rgba(0, 0, 0, 0.9)"
    }}>
        
          <table className="table table-bordered table-hover" style={{marginTop:22 }}>
              <thead className="el texto de los libros y el de los demás" style={{
                display: "flex"
                }}>
                  <tr> 
                      <th style={{ 
                         color: 'white',
                         fontSize: 30,
                         transform: 'translateX(450px)',
                         fontFamily:'Quicksand',
                         }}>
                        Tus libros
                          
                          
                          
                          </th>
                  </tr>
                  
                  <tr>
                  <th style={{ 
                         color: 'white',
                         fontSize: 30,
                         transform: 'translateX(1250px)',
                         fontFamily:'Quicksand',
                         }}>Libros</th>
                  </tr>
              </thead>

              <tbody className="tablas_de_los_libros" 
              style={{
                  display:"flex"
              }}
              >      
              <div //Aquí se está creando la tabla, ojito de aquí te puedes guiar
                style={{
                   alignItems: 'center',
                   justifyContent: 'space-between',
                   textAlign: "center",
                   background: `linear-gradient(rgba(255, 255, 255, 0.83), rgba(255, 255, 255, 1.9)), url(${gif1})`,
                   backgroundSize: '150% 150%',
                   backgroundRepeat: 'no-repeat',
                   backgroundPosition: 'center',
                   borderRadius: 15,
                   maxWidth: 800,
                   width: '2990px',
                   backgroundSize: 'contain',
                   height: '483px',
                   boxSizing: 'border-box',
                   marginLeft: '100px',
                   border: `1px solid`,
                   boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.9)"
                }}
            > 
    <div style={{ 
      height: '480px', 
      overflowY: 'scroll',
      transform: 'translateX(1px)',
      //transform: 'translateY(-75px)',
      width: '100%' }}>
      <table style={{ width: '100%' , transform:'translateX(0px)'}}>
        <thead >
          <tr>
            <th > ID</th>
            <th style={{  width: '60%'}}>Nombre </th>
            <th style={{  width: '190%'}}>Autor</th>
            <th> Borrar </th>
          </tr>
        </thead>
        <tbody>
          {/* Filas de la tabla */}
          <tr>
            <td>1</td>
            <td>Los Miserables</td>
            <td>Victor Hugo</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>La Odisea</td>
            <td>Homero</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>La divina Comedia</td>
            <td>Dante Alighieri</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Don Quijote de la Mancha</td>
            <td>Miguel Cervantes Saavedra</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>El viejo y el mar</td>
            <td>Ernest Hemingway</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Hamlet</td>
            <td>Shakespeare</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Viaje al centro de la tierra</td>
            <td>Julio Verme</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Cien años de soledad</td>
            <td>Gabriel García</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Cien años de soledad</td>
            <td>Gabriel García</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Cien años de soledad</td>
            <td>Gabriel García</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Cien años de soledad</td>
            <td>Gabriel García</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Cien años de soledad</td>
            <td>Gabriel García</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Cien años de soledad</td>
            <td>Gabriel García</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Cien años de soledad</td>
            <td>Gabriel García</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Cien años de soledad</td>
            <td>Gabriel García</td>
            <td><button> <img src={Bote_Basura} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          {/* Agrega más filas según sea necesario */}
            </tbody>
          </table>
             </div>
              </div> 
             
              <div //Aquí se está creando la segunda tabla, ojito de aquí te puedes guiar
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                   textAlign: "center",
                   background: `linear-gradient(rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.9)), url(${gif2})`,
                   backgroundSize: '150% 150%',
                   backgroundRepeat: 'no-repeat',
                   backgroundPosition: 'center', 
                   backgroundSize: 'cover',
                    borderRadius: 15,
                    maxWidth: 800,
                    width: '2990px',
                    height: '483px',
                    boxSizing: 'border-box',
                    marginLeft: '100px',
                    border: `1px solid`,
                    boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.9)"
                }}
            >
              <div style={{ 
      height: '480px', 
      overflowY: 'scroll',
      transform: 'translateX(1px)',
      //transform: 'translateY(-75px)',
      width: '100%' }}>
      <table style={{ width: '100%' , transform:'translateX(0px)'}}>
        <thead >
          <tr>
            <th > ID</th>
            <th style={{  width: '60%'}}>Nombre </th>
            <th style={{  width: '190%'}}>Autor</th>
            <th> Solicitar </th>
          </tr>
        </thead>
        <tbody>
          {/* Filas de la tabla */}
          <tr>
            <td>1</td>
            <td>Los Miserables</td>
            <td>Victor Hugo</td>
            <td><button> <img src={avion} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>La Odisea</td>
            <td>Homero</td>
            <td><button> <img src={avion} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>La divina Comedia</td>
            <td>Dante Alighieri</td>
            <td><button> <img src={avion} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Don Quijote de la Mancha</td>
            <td>Miguel Cervantes Saavedra</td>
            <td><button> <img src={avion} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>El viejo y el mar</td>
            <td>Ernest Hemingway</td>
            <td><button> <img src={avion} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Hamlet</td>
            <td>Shakespeare</td>
            <td><button> <img src={avion} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Viaje al centro de la tierra</td>
            <td>Julio Verme</td>
            <td><button> <img src={avion} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Cien años de soledad</td>
            <td>Gabriel García</td>
            <td><button> <img src={avion} style={{width: '17px', height: 'auto' }}/>   </button></td>
          </tr>
          {/* Agrega más filas según sea necesario */}
            </tbody>
          </table>
             </div>
             
              </div>
              </tbody>
              
          </table>
          <NavLink to="/menu" style={{ alignSelf: 'flex-end' }}>
          <img src={cuaderno} style={{           
                marginTop: 45,
                width: '100%',
                padding: 1,
                border: 'none',
                fontSize: 16,
                borderRadius: '30px',
                transition: 'all 0.5s',
                cursor: 'pointer',
                outline: 'none',
            }}
            onMouseOver={e => {
                e.currentTarget.style.boxShadow = '0px 15px 20px rgba(0, 0, 0, 0.4)';
            }}
            onMouseOut={e => {
                e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.1)';
            }} />
        </NavLink>
      </div>
      
        
    </div>

)
}