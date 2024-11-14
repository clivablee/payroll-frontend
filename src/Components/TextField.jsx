const TextField = ({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    suffixIcon,
    onClick,
    enabled = true,
    multiLine = false,
}) => {
    return(
        <div className="mb-4">
            {label && <label className="block text-gray-700 font-bold mb-2">{label}</label>}
            
            <div className="flex">
                {multiLine ?  
                    <textarea
                        disabled={!enabled}
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="w-full border-2 border-gray-300 p-2 rounded-lg mr-2 resize-none"
                        rows={5}
                    /> :
                    <input
                        disabled={!enabled}
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="w-full border-2 border-gray-300 p-2 rounded-lg mr-2"
                    />
                }
                {suffixIcon && (
                    <span onClick={onClick} 
                        className={`inset-y-0 right-0 flex items-center pr-3 
                            ${onClick ? 'cursor-pointer' : ''}
                        `}>
                        {suffixIcon}
                    </span>
                )}
            </div>
          
        </div>
        
    );
}

export default TextField;