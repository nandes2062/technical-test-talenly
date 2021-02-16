import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { required, email, min, alpha_dash as alphaDash, numeric } from 'vee-validate/dist/rules'

const components = { ValidationObserver, ValidationProvider }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})

extend('required', {
  ...required,
  message: 'El campo es requerido'
})
extend('email', {
  ...email,
  message: 'Debe ingresar su correo electronico'
})
extend('min', {
  ...min,
  message: 'La longitud mínima es de {length} caracteres.'
})
extend('alpha_dash', {
  ...alphaDash,
  message: 'El campo solo puede contener letras, numeros, guiones y guiones bajos.'
})
extend('numeric', {
  ...numeric,
  message: 'El campo solo puede contener numeros'
})
