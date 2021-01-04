<template>
  <section class="pacientes-listar">
    <h4 class="mt-5 text-center mb-4">pagina de pacientes</h4>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h4 class="border" @click.prevent="pagina_examen_local">examen local</h4>
        </div>
        <div class="col-6">
          <h4 class="border" @click.prevent="pagina_examen_externo">examen externo</h4>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "",
  data(){
    return{

    }
  },
  methods: {
    pagina_examen_local() {
      this.$router.push({
        name:'pacientes.locales.listar'
      })
    },
    pagina_examen_externo() {
      this.$router.push({
        name:'pacientes.externos.listar'
      })
    },
  }
}
</script>
<style lang="scss" scoped>
</style>
