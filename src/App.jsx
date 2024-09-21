// import { useState } from "react";

import { useState } from "react";
import Perfil from "./components/Perfil";
// import Formulario from './components/Formulario';
import ReposList from "./components/ReposList";

function App() {
  // const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  return(
    <>
      <div className="container pesquisa">
        {/* onBlur espera sair do campo para atualizar já o onChange fica atualizando a cada parametro adicionado  */}
        <input type="text" onBlur={e => setNomeUsuario(e.target.value)} />
        <button type="button">Buscar</button>
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle form</button> */}
    </>
  )
}

export default App
