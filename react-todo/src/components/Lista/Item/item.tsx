import { ITarefa } from "../../../types";
import { BiCheck } from "react-icons/bi";

interface Props extends ITarefa {
    
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Item = ({ 
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa 
    }: Props) => {
    
    return (
        <li className={`
            ${"w-[100%] h-[80px] bg-[#333333] shadow-custom2 rounded-[5px] p-2"} 
            ${selecionado ? "border-[1px] border-indigo-950 shadow-custom3" : ""}
            ${completado ? "w-[100%] h-[80px] bg-green-700 bg-opacity-50 bg-no-repeat rounded-[5px] cursor-auto block p-2" : ""}
        `}
            onClick={() => !completado && selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}
        >
            <div>
                <div className="w-full flex flex-row justify-between items-center">
                    <h3 className="text-white text-[25px]">{tarefa}</h3>
                    <span className="text-white text-[20px]">{tempo}</span>
                </div>
                <div className="flex justify-end items-end">
                    {completado &&  <BiCheck className="text-green-500 text-[30px]" aria-label="tarefa concluída"/> }
                </div>    
            </div>
        </li>
    )
}

export default Item;