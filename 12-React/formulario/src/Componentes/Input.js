function Input({text, type, min, value, onChange}){
    return(
        <div>
            <label>{text}</label>
            <input 
            type={type} 
            placeholder={text} 
            min={min}
            value={value}
            onChange={onChange}
            />
        </div>
    );
};
export default Input;