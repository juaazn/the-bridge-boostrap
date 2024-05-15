const form = document.querySelector('#form_user')

const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const email = document.querySelector('#email')
const contraseña = document.querySelector('#contraseña')
const repetirContraseña = document.querySelector('#repetir_contraseña')

function dateForm () {
  const formulario = {
    name: nombre.value,
    lastName: apellido.value,
    mail: email.value,
    password: contraseña.value,
    repeatpassword: repetirContraseña.value
  }

  const dateJson = JSON.stringify(formulario)

  return window.localStorage.setItem(formulario.name, dateJson)
}

const establecerError = (elementos, mensaje) => {
  const controlInput = elementos.parentElement
  const error = controlInput.querySelector('.validacion_mensaje')

  error.innerText = mensaje
  controlInput.classList.add('.validacion_mensaje')
  controlInput.classList.remove('.exito')
}

const establecerExito = elementos => {
  const controlInput = elementos.parentElement
  const error = controlInput.querySelector('.validacion_mensaje')

  error.innerText = ''
  error.classList.replace('validacion_mensaje', 'exito')
}

function validarInputs () {
  const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

  if (nombre.value.length === 0) {
    establecerError(nombre, 'Nombre requerido requerido')
  } else {
    establecerExito(nombre)
  }
  if (apellido.value.length === 0) {
    establecerError(apellido, 'Apellido requerido requerido')
  } else {
    establecerExito(apellido)
  }
  if (regexEmail.test(email.value) !== true) {
    console.log(email.value)
    establecerError(email, 'Ingrese un correo valido requerido')
  } else {
    console.log(email.value)
    establecerExito(email)
  }
  if (contraseña.value.length === 0) {
    establecerError(contraseña, 'Contraseña requerido')
  } else {
    establecerExito(contraseña)
  }
  if (repetirContraseña.value.length === 0) {
    establecerError(repetirContraseña, 'Contraseña requerido')
  } else {
    establecerExito(repetirContraseña)
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  validarInputs()

  dateForm()
})
