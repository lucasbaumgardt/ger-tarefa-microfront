interface Props {
    tempo: number | undefined;
}


export default function Relogio( { tempo = 0 } : Props) {

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    const [minutoDezena, minutoUnidade] = Array(String(minutos).padStart(2, '0'));
    const [segundoDezena, segundoUnidade] = Array(String(segundos).padStart(2, '0'));

    return (
        <div className="w-[100%] flex justify-center items-center gap-6">  
            {/* ou React.Fragment */}
            <div className="w-[80px] bg-[#333333] flex justify-center items-center rounded-[10px]">
                <span className="text-white text-[50px]">{minutoDezena}</span>
                <span className="text-white text-[50px]">{minutoUnidade}</span>
            </div>
            
            <span className="text-white text-[50px]">:</span>

            <div className="w-[80px] bg-[#333333] flex justify-center items-center rounded-[10px]">
                <span className="text-white text-[50px]">{segundoDezena}</span>    
                <span className="text-white text-[50px]">{segundoUnidade}</span>
            </div>
        </div>
    )
}