"use client"

import { SliderPassword } from "@/component/password/slider";
import { SwitchInput } from "@/component/password/switch";
import { usePassword } from "@/hooks/password/password";
import { useSwitch } from "@/hooks/password/useSwitch";
import React, { useEffect, useState } from "react";

const GeneratorPassword = () => {
  const { password, generatePassword, setPassword } = usePassword();
  const [passwordLength, setPasswordLength] = useState(6);
  const { settings, toggleSetting } = useSwitch();

      useEffect(() => {
        generatePassword(passwordLength, settings);
    }, [settings, passwordLength, generatePassword]); 

    const copyToClipboard = () => {
        if (password) {
            navigator.clipboard.writeText(password);
            alert("¡Contraseña copiada!");
        }
    };

    return (
      <div className="bg-[rgb(var(--background))] text-[rgb(var(--text-color))] w-full h-screen flex justify-center items-center transition">
        <div className="border border-[rgb(var(--border-color))] p-5 rounded-lg shadow-lg bg-[rgb(var(--background))] text-[rgb(var(--text-color))] transition">
          <h2 className="text-2xl font-bold text-center transition">
            Password Generate
          </h2>
          <hr className="border-[rgb(var(--border-color))] my-3" />
    
          <div className="flex items-center space-x-2 transition">
            <input
              type="text"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-[rgb(var(--text-color))] bg-transparent rounded-lg p-2 my-2 border border-[rgb(var(--border-color))] w-full"
              readOnly
            />
            <button
              onClick={copyToClipboard}
              className="p-2 h-full w-auto bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 flex-shrink-0 transition"
            >
              Copiar
            </button>
          </div>
    
          <SliderPassword value={passwordLength} onChange={setPasswordLength} />
    
          <div className="flex justify-between py-2">
            <SwitchInput
              title="Mayúscula"
              checked={settings.uppercase}
              onChange={() => toggleSetting("uppercase")}
            />
            <SwitchInput
              title="Minúscula"
              checked={settings.lowercase}
              onChange={() => toggleSetting("lowercase")}
            />
          </div>
    
          <div className="flex justify-between pb-5">
            <SwitchInput
              title="Signos"
              checked={settings.symbols}
              onChange={() => toggleSetting("symbols")}
            />
            <SwitchInput
              title="Números"
              checked={settings.numbers}
              onChange={() => toggleSetting("numbers")}
            />
          </div>
    
          <button
            onClick={() => generatePassword(passwordLength, settings)}
            className="w-full border rounded-lg p-2 bg-blue-600 dark:bg-blue-500 text-white cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-400"
          >
            Generar
          </button>
        </div>
      </div>
    );
  };
  

export default GeneratorPassword;