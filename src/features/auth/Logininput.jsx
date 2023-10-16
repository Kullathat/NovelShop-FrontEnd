export default function LoginInput ({type = 'text',placeholder,value,onChange}) {
    return (
        <input
        type={type}
        placeholder={placeholder}
        className= {'block w-full  rounded-md -none px-3 py-1.5 text-sm'}
        value={value}
        onChange={onChange} />
        ) }