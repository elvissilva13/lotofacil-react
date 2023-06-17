


import './App.css'
import JogoLotoFacil from './JogosLotoFacil';








function App() {
 
 

    function atualizar(){
      window.location.reload();
      
    }
  
 
  
 
return (
  <>
    <JogoLotoFacil onClick={() => atualizar()}>Gerar jogo</JogoLotoFacil>
    </>
)

}

export default App;
