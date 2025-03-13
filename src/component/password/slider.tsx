import React, { useEffect, useState } from "react";

interface SliderProps {
    value: number;
    onChange: (newValue: number) => void;
}

export const SliderPassword: React.FC<SliderProps> = ({ value, onChange })=> {
    const [length, setLength] = useState(value); 
    useEffect(() => {
        setLength(value); 
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        setLength(newValue);
    
        onChange(newValue); 
    };

    return (
        <div className="flex flex-col">

            <span className="text-gray-700">Longitud: {length}</span>

            <input 
                className="w-full cursor-pointer"
                type="range"
                min="6" 
                max="16" 
                step="1" 
                value={length}
                onChange={handleChange}
            />
        </div>
    );
};