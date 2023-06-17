
import banner from '../assets/loto.png'
import { useEffect, useState } from 'react'
import './jogosLotoFacil.css'
interface Props{
    children?:string| undefined,
   
    onClick:()=>void

}

function JogosLotoFacil({children,onClick}:Props){
    const [lista,setLista] = useState([0])
    
   
    useEffect(() => {
      
            const Numeros = Array.from({ length: 25 }, (e, i) => i + 1).sort(() => Math.random() - 0.5).filter((e, i) => i < 15);
            

            setLista(Numeros)
      
        

    },[])
     
    
   
    
 
    return(
        <div  className="container">
        <img src={banner} alt="banner" title="banner"/>

            <h1>Jogos Lotofacil </h1>
            
            <ul className="numeros">
                
                    {lista.map(i=> <li key={i}>{i.toString()}</li>) }
            </ul>
            
            
        <button 
        onClick={onClick}
        >
            {children}
        </button>
        </div>
    )
}
export default JogosLotoFacil;