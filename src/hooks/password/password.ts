import { useCallback, useState } from "react";

interface PasswordSettings {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
}

export const usePassword = () => {
    const [password, setPassword] = useState("");

    const generatePassword = useCallback((length: number = 6, settings: PasswordSettings) => {
        let charPool = "";
        if (settings.uppercase) charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (settings.lowercase) charPool += "abcdefghijklmnopqrstuvwxyz";
        if (settings.numbers) charPool += "0123456789";
        if (settings.symbols) charPool += "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

        if (!charPool) {
            alert("Selecciona al menos una opción para generar la contraseña.");
            return;
        }

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            newPassword += charPool.charAt(Math.floor(Math.random() * charPool.length));
        }

        setPassword(newPassword);
    }, []);

    return {
        password,
        setPassword,
        generatePassword
    };
};