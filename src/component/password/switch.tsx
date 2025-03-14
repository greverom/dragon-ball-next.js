interface IPropsSwitchInput {
    title: string;
    checked: boolean;  
    onChange: () => void; 
}

export const SwitchInput = ({ title, checked, onChange }: IPropsSwitchInput) => {
    return (
        <div className="flex items-center space-x-2 transition">
            <label htmlFor={title} className="text-[rgb(var(--text-color))] font-medium">
                {title}
            </label>

            <input 
                className="ml-2 cursor-pointer w-5 h-5 bg-gray-300 dark:bg-gray-600 border border-[rgb(var(--border-color))] rounded-lg"
                type="checkbox" 
                name={title} 
                id={title} 
                checked={checked}  
                onChange={onChange} 
            />
        </div>
    );
};