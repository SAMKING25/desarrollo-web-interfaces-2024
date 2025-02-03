import Image from "next/image";
import Link from "next/link";
import milesImagen from "../../public/Miles-Morales-meme.jpg";

const Nosotros = () => {
	return (
		<div>
			<h1>Sobre Nosotros</h1>
			<br />
			<Image
				src={milesImagen}
				width={250}
				height={250}
				alt="Imagen de Miles Morales"
			/>
			<img
				src="/Miles-Morales-meme.jpg"
				width={250}
				height={250}
				alt="Imagen de Miles Morales"
			/>
			<br />
			<br />
			<Link href="/">Ir a Inicio</Link>
		</div>
	);
}

export default Nosotros;
