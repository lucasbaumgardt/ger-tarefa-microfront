import React from "react";

interface Props {
    texto?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Button({ texto, onClick, type = "button" } : Props) {
    return (
        <button 
            type={type} 
            className="w-[150px] h-[50px] bg-green-900 shadow-custom2 rounded-[8px] text-white text-[20px]"
            onClick={onClick}
        >    
            {texto}
        </button>
    )
}


// class Button extends React.Component <{ texto: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }> {
//     render() {
//         const { type = "button", onClick } = this.props;
//         return (
//             <button 
//                 type={type} 
//                 className="w-[150px] h-[50px] bg-indigo-900 shadow-custom2 rounded-[8px] text-white text-[20px]"
//                 onClick={onClick}
//             >    
//                 {this.props.texto}
//             </button>
//         )
//     }
// }

export default Button;