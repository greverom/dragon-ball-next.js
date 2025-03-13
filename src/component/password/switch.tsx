interface IPropsSwitchInput {
    title: string;
    checked: boolean;  
    onChange: () => void; 
}

export const SwitchInput = ({ title, checked, onChange }: IPropsSwitchInput) => {
    return (
        <div className="text-black flex items-center">
            <label htmlFor={title}>{title}</label>
            <input 
                className="ml-2 cursor-pointer" 
                type="checkbox" 
                name={title} 
                id={title} 
                checked={checked}  
                onChange={onChange} 
            />
        </div>
    );
};