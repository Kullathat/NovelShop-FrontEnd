export default function CreateFormInput({id,placeholder,name,onChange}) {
    return (
        <div>
            <input type="text"
                key={id}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
            />
        </div>
    )
}