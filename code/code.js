/* Loader */
/* 
let loading = document.getElementById("preloader");

window.onload = () => {
	setTimeout(function(){
		loading.style.display = "none";
	}, 1000)
} */

/* Cambia de color un link al ser presionado */

const links = document.querySelectorAll('.active');

links.forEach(link => {
	link.addEventListener('click', () => {
		link.style.color = '##6dd5ed'; // Cambiar el color del link al ser presionado
	});
});


let ultimolinkPresionado = null;

links.forEach(link => {
	link.addEventListener('click', () => {
		if (ultimolinkPresionado) {
			ultimolinkPresionado.style.color = ''; // Restablecer el color del último link presionado
		}
		link.style.color = '##6dd5ed'; // Cambiar el color del link actual al ser presionado
		ultimolinkPresionado = link; // Almacenar una referencia al link actual como el último link presionado
	});
});

/* Cambiar de color un link al hacer Scroll */


window.addEventListener("scroll", function () {
	let navLinks = document.querySelectorAll("nav a");
	let sections = document.querySelectorAll("section");

	for (let i = 0; i < sections.length; i++) {
		let section = sections[i];
		let sectionTop = section.offsetTop;
		let sectionBottom = sectionTop + section.offsetHeight;

		if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
			let currentSection = section.getAttribute("id");
			for (let j = 0; j < navLinks.length; j++) {
				let navLink = navLinks[j];
				let href = navLink.getAttribute("href").substring(1);
				if (currentSection === href) {
					navLink.classList.add("active__scroll");
				} else {
					navLink.classList.remove("active__scroll");
				}
			}
		}
	}
});


/* Button  Download CV */
function descargarPDF() {
	// Ruta del archivo PDF en la carpeta del proyecto
	var rutaPDF = "/assets/cv/cv_jlmunozfdev.pdf";

	// Crear un enlace de descarga
	var enlaceDescarga = document.createElement("a");

	// Asignar el archivo PDF que se descargará
	enlaceDescarga.href = rutaPDF;
	enlaceDescarga.download = "mi_cv.pdf";

	// Simular un clic en el enlace de descarga
	enlaceDescarga.click();
}

// Asignar la función de descarga al botón
document.getElementById("descargar").addEventListener("click", descargarPDF);



/* Enviar Email */

const form = document.getElementById('form');


async function handleSendEmail(event) {
	event.preventDefault()

	const fd = new FormData(this)

	const response = await fetch('https://formspree.io/f/xyyajaey', {
		method: 'POST',
		body: fd,
		headers: {
			Accept: 'application/json'
		}
	})

	if (response.ok) {
		this.reset()
		alert('Mensaje Enviado')
	} else
		alert('Error al enviar el mensaje')
}

form.addEventListener('submit', handleSendEmail)

