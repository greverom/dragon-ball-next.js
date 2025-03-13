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
      <div className='bg-slate-200 w-full h-screen flex justify-center items-center'>
          <div className="border border-gray-500 p-5 rounded">

            <h2 className='text-2xl font-bold text-black text-center'
              >Password Generate
            </h2>

            <hr/>

            <div className="flex">
              <input 
                type="text" 
                placeholder="New Password" 
                value={password}  
                onChange={(e) => setPassword(e.target.value)} 
                className="text-gray-700 rounded p-2 my-2" 
                readOnly/>
                
              <button 
                onClick={copyToClipboard} 
                className="w-20 text-gray-600 cursor-pointer"
              > Copiar
              </button>
            </div>

            <SliderPassword value={passwordLength} onChange={setPasswordLength} />

            <div className="flex justify-between py-2">
              <SwitchInput title="Mayúscula" checked={settings.uppercase} onChange={() => toggleSetting("uppercase")} />
              <SwitchInput title="Minúscula" checked={settings.lowercase} onChange={() => toggleSetting("lowercase")} />
            </div>
            <div className="flex justify-between pb-5">
              <SwitchInput title="Signos" checked={settings.symbols} onChange={() => toggleSetting("symbols")} />
              <SwitchInput title="Números" checked={settings.numbers} onChange={() => toggleSetting("numbers")} />
            </div>

            <button  
              onClick={() => generatePassword(passwordLength, settings)}  
              className="w-full border rounded p-2 bg-blue-500 text-white cursor-pointer"
            > Generar
            </button>
          </div>
      </div>
    )
}

export default GeneratorPassword;