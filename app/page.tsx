import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/og.png";
import { DownArrow, RightArrow } from "./icons";
import "./home.css";

export default function Home() {
  return (
    <main className="">
      <article className="grid lg:grid-cols-2">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient">
            TIENDA DE LUBRICANTES
          </h1>
          <p className="mt-2 text-lg">
          Confía en nosotros para mantener tu motor funcionando sin problemas: Lubricantes de calidad y cambios de aceite expertos en un solo lugar
          </p>
          <div className="flex gap-2 mt-8">
            <Link
              href="/dashboard"
              className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              Iniciar Sesión
              <div className="m-auto">
                <RightArrow />
              </div>
            </Link>
            
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={componentsImg} alt="Clerk embeddable components" />
        </div>
      </article>
      
    </main>
  );
}
