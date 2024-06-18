import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../utils/time";
import { ITarefa } from "../../types";
import Button from "../Button";
import Relogio from "./Relogio";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro( {selecionado, finalizarTarefa} : Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));        
        }
    }, [selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return (
        <div className="w-[80%] h-[30vh] bg-[#222222] bg-opacity-90 shadow-custom3 rounded-[10px] flex flex-col justify-center items-center gap-10">

            <p className="text-white text-[25px] text-center mt-2 ml-8">Escolha um card e inicie o cronômetro.</p>     

            {/* <div className="w-[100%] flex flex-col">    
                <p className="text-white text-[30px] text-center mt-2">Tempo: {tempo}</p>
            </div> */}
            <Relogio tempo={tempo}/>

            <div className="w-[100%] flex flex-row items-center mb-4">
                {/* <p className="text-white text-[20px] text-left ml-8">Escolha um card e inicie o cronômetro.</p>      */}

                <div className="ml-auto mr-4">
                    <Button 
                        type="submit" 
                        texto="Começar"
                        onClick={() => {
                            regressiva(tempo);
                        }}
                    />
                    
                </div>
            </div>
        </div>
    )
}