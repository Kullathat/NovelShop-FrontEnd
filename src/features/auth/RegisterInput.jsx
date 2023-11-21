export default function RegisterInput ({type = 'text',placeholder,value,onChange,name}) {
    return (
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className= {'block w-full  rounded-md -none px-3 py-1.5 text-sm'
    
    }
        name={name}/>
        ) }