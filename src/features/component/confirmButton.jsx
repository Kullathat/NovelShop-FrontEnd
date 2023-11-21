export default function ConfirmButton({text,onClick,className}) {
    
    return(
        <div>
            <button 
            onClick={onClick}
            className={className}
            >{text}</button>
        </div>
    )
}