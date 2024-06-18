import { ITarefa } from "../../types";
import Item from "./Item/item";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista( { tarefas, selecionaTarefa } : Props) {
    return (
        <aside className="w-[90%] h-[85vh] bg-[#222222] shadow-custom3 bg-opacity-90 rounded-[10px] flex flex-col items-center gap-4">
            <h2 className="text-[25px] text-white mt-4">
                Tarefas do dia
            </h2>
            
            <ul className="w-[80%] flex flex-col justify-center items-center gap-4">
                {tarefas.map((item) => (
                    <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;