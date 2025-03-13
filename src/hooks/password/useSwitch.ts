import { useState } from "react";

export const useSwitch = () => {
    const [settings, setSettings] = useState({
        uppercase: true,  
        lowercase: true,  
        numbers: true,    
        symbols: true    
    });

    const toggleSetting = (key: keyof typeof settings) => {
        setSettings((prev) => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return { settings, toggleSetting };
};