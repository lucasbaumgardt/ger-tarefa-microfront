import React, { useState } from "react";
import Formulario from './components/Formulario';
import Lista from "./components/Lista";
import Cronometro from "./components/Cronometro";
import { ITarefa } from "./types";

function App() {
  const [ tarefas, setTarefas ] = useState<ITarefa[] | []>([]);
  const [ selecionado, setSelecionado ] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
      setSelecionado(tarefaSelecionada);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })))
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }));
    }
  }

  return (
    <div className="w-[100%] h-[100vh] bg-[#111111] flex flex-row justify-center items-center">
        <div className="w-[70%] flex flex-col justify-center items-center gap-12">
            <Formulario setTarefas={setTarefas}/>
            <Cronometro 
              selecionado={selecionado}
              finalizarTarefa={finalizarTarefa}
            />
        </div>  
        
        <div className="w-[70%] flex justify-start items-center"> 
            <Lista 
              tarefas={tarefas}
              selecionaTarefa={selecionaTarefa}
            />
        </div>
    </div>
  )
}

export default App
