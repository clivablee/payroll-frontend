const TextField = ({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    suffixIcon,
    onClick,
}) => {
    return(
        <div className="mb-4">
            {label && <label className="block text-gray-700 font-bold mb-2">{label}</label>}
            
            <div className="flex">
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full border-2 border-gray-300 p-2 rounded-2xl mr-2"
                />
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