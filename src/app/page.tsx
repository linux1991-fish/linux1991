'use client'
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full w-full ">
      <main className="flex h-full w-full  flex-col  p-5 md:p-20 pb-10">
        <div className="w-full mb-20">
            
        <div className=" flex items-end justify-center w-full h-80 " 

        >
          <div className={` w-50 h-50   rounded-lg relative transition-all duration-300     
              dark:shadow-[-10px_10px_15px_2px_#ADE7F075]
            shadow-[-10px_10px_15px_2px_#000]`}

          >

      <Image
            src="/logo.png" // Ruta de tu imagen
        alt="Hamburguesa móvil"
        fill
        className="rounded-lg "
        style={{ objectFit: "cover"   }}
      />
          </div>
        </div>
        </div>

        <div className="w-full flex flex-col items-center gap-6 sm:items-start text-left pb-10">
          <h1 className="w-full text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          {}¡Bienvenido a la Central de Conocimiento de Linux-1991!
          </h1>
          <p className="w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">

            <span
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
            ¡Hola a todos!
            </span>{" "}
    <br/>
Soy el creador detrás del canal de YouTube {" "}

            <a
              href="https://www.youtube.com/@Linux-1991"
              className="font-medium text-zinc-950 dark:text-[#fa0] underline "
            >
                Linux-1991
            </a>{" "}
            , y esta es la base de datos oficial de todo lo que compartimos.
    <br/>
    <br/>
Si has disfrutado de nuestros tutoriales en video sobre comandos de terminal o configuración de terminales, este sitio web está diseñado para ti. Es donde transformamos los conceptos visuales en referencias escritas permanentes.{" "}
        <br/>
        <br/>

          </p>
            <span
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
            ¿Qué encontrarás aquí?
            </span>{" "}
        <br/>
            <ul className="list-disc pl-6 text-[#fa0]">
                <li className="">
                    <span className="font-medium text-zinc-950 dark:text-zinc-50" >
                       Documentación Completa:<p className="text-lg leading-8 font-normal text-zinc-600 dark:text-zinc-400">Scripts, comandos, y snippets de código listos para copiar y usar.</p>
                    </span>{" "}
                </li>
                <li className="">
                    <span className="font-medium text-zinc-950 dark:text-zinc-50" >
                       Explicaciones Profundas:<p className="text-lg leading-8 font-normal text-zinc-600 dark:text-zinc-400">Artículos detallados que complementan cada video.</p>
                    </span>{" "}
                </li>
                <li className="">
                    <span className="font-medium text-zinc-950 dark:text-zinc-50" >
                       Recursos Extra:<p className="text-lg leading-8 font-normal text-zinc-600 dark:text-zinc-400">Enlaces útiles y archivos de proyecto.</p>
                    </span>{" "}
                </li>

            </ul>
        </div>
      </main>
    </div>
  );
}
