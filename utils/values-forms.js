import { nombre, apellido, email, contraseña, repetirContraseña, submit } from './dom-elements.js'

/* function dateForm() {

	const formulario = {
		name: nombre.value,
		lastName: apellido.value,
		mail: email.value,
		password: contraseña.value,
		repeatpassword: repetirContraseña.value
	}

	const propiedades = Object.values(formulario)

	propiedades.forEach((e) => {
		if (e.length === 0) {
			check.innerHTML = '<p>Error</p>'
		} else {
			console.log('✅')
		}
	})

	const dateJson = JSON.stringify(formulario)

	return window.localStorage.setItem(formulario.name, dateJson)
} */

const establecerError = (elementos, mensaje) => {
	const controlInput = elementos.parentElement
	const error = controlInput.querySelector('.validacion_mensaje')
	
	error.innerText = mensaje
	controlInput.classList.add('.validacion_mensaje')
	controlInput.classList.remove('.exito')
}

const establecerExito = elementos => {
	const controlInput = elementos.parentElement
	
	errorDePantalla.innerText = ''
	controlInput.classList.add('.exito')
	controlInput.classList.remove('.validacion_mensaje')
}

function validarInputs () {
	const datoNombre = nombre.value.trim()
	const datoApellido = apellido.value.trim()
	const datoEmail = email.value.trim()
	/* const datoContraseña = contraseña.value.trim()
	const datoRepContraseña = repetirContraseña.value.trim() */

	if (datoNombre === '') {
		establecerError(datoNombre, 'Usuario requerido')
	} else {
		establecerExito(datoNombre)
	}
	if (datoApellido === '') {
		establecerError(datoApellido, 'Usuario requerido')
	} else {
		establecerExito(datoApellido)
	}
	if (datoEmail === '') {
		establecerError(datoEmail, 'Usuario requerido')
	} else {
		establecerExito(datoEmail)
	}
	if (datoNombre === '') {
		establecerError(contraseña, 'Usuario requerido')
	} else {
		establecerExito(contraseña)
	}
}

submit.addEventListener('submit', (e) => {
	e.preventDefault()

	validarInputs()
})
