import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1>Pagina principal</h1>
        <br/>
        <Link href="/about">Ir a Nosotros</Link>
        <br />
        <a href="/about">Ir a Nosotros Lento</a>
    </div>
  );
}
