import React, { useState } from "react";
import Button from "../Button";
import { ITarefa } from "../../types";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>,
}

function Formulario({ setTarefas } : Props) {

    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [ 
                    ...tarefasAntigas, 
                { 
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );

        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className="w-[80%] h-[50vh] bg-[#222222] bg-opacity-90 shadow-custom3 rounded-[10px] gap-4 flex flex-col items-center"
            onSubmit={adicionarTarefa}
        >
            <div className="w-[80%] mb-[5%] mt-4">
                <h1 className="text-[40px] text-white">Formulario</h1>
            </div>
            <div className="w-[80%] h-[100px] flex flex-col">
                <label htmlFor="tarefa" className="text-white text-[20px] pb-2">
                    Adicione um novo estudo
                </label>
                <input 
                    type="text"
                    name="tarefa"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required
                    className="w-[100%] h-[50px] bg-gray2 placeholder-slate-500 shadow-custom rounded-[10px] p-2" 
                />
            </div>

            <div className="w-[80%] h-[100px] flex flex-col">
                <label htmlFor="tempo" className="text-white text-[20px] pb-2">
                    Tempo
                </label>
                <input 
                    type="time"
                    step="1" 
                    name="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    className="w-[50%] h-[50px] bg-gray2 text-[20px] shadow-custom rounded-[10px] p-2" 
                />
            </div>

            <div className="w-[100%] flex flex-col justify-end items-end h-[80vh] mb-4 mr-8">
                <Button type="submit" texto="Adicionar"></Button>
            </div>

        </form>
    )
}

export default Formulario;