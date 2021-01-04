import page from '../page'
export default [
  {
    path: '/configurar',
    name: 'configurar',
    component: page('configurar/index'),
    children: [
      { path: 'examen-costo-local', name: 'costo.examen.local', component: page('configurar/examenCostoLocal') },
      { path: 'examen-costo-externo', name: 'costo.examen.externo', component: page('configurar/examenCostoExterno') },
      { path: 'menu', name: 'menu.listar', component: page('configurar/menuListar') }
    ]
  },
]
