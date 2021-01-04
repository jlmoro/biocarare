<template>
  <section class="encabezado-configurar">

    <ul class="nav justify-content-center mt-5">
      <li v-for="tab in dataTabs" :key="tab.route" class="nav-item">
        <router-link class="nav-link active" :to="{name: tab.route}">
          {{tab.title}}
        </router-link>
      </li>
    </ul>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

  </section>
</template>
<script>
export default {
  middleware: 'auth',
  name: "",
  data(){
    return{
      dataTabs:[
        {
          icon: 'user',
          title: 'Menu',
          route: 'menu.listar',
        },
        {
          icon: 'lock',
          title: 'Costo Examen Local',
          route: 'costo.examen.local'
        },
        {
          icon: 'lock',
          title: 'Costo Examen Externo',
          route: 'costo.examen.externo'
        }
      ],

    }
  },
  created() {
    this.listaEncabezado()
  },
  methods: {
    listaEncabezado() {
      let ruta = _.head(this.dataTabs)
      this.$router.push({
        name:ruta.route
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
