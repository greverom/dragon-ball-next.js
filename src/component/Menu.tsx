import Link from "next/link"

export const Menu = () => {
    return (
        <menu className="w-48 mx-auto text-center pt-10">
           <ul>
                <li>
                    <Link href="/dragonball" className="mb-3 block w-full bg-slate-200 text-black py-2 rounded-3xl hover:bg-slate-400 ">
                        Dragon-Ball Personajes
                    </Link>
                </li>
                <li>
                    <Link href="/generator" className="mb-3 block w-full bg-slate-200 text-black py-2 rounded-3xl hover:bg-slate-400 ">
                        Generador de Password
                    </Link>
                </li>
            </ul>
        </menu>
    )
}

