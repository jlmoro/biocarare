import page from '../page'
export default [
  {
    path: '/pacientes',
    name: 'pacientes.listar',
    component: page('pacientes/pacientes'),
  },
  {
    path: '/pacientes-locales',
    name: 'pacientes.locales.listar',
    component: page('pacientes/pacientesLocales'),
  },
  {
    path: '/pacientes-externos',
    name: 'pacientes.externos.listar',
    component: page('pacientes/pacientesExternos'),
  },
]
