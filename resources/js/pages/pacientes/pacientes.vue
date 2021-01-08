<template>
  <section class="pacientes-listar  w-75">
    <encabezado-principal titulo="pacientes" alinear="text-center"/>

      <div class="row w-100">
        <div class="col-md-6 col-sm-12 text-center cr-pointer pl-5">
          <div @click.prevent="pagina_examen_local" class="card-padre-local mt-2">
            <p class="letra-capital texto-paciente pt-4">examen local</p>
          </div>
        </div>

        <div class="col-md-6 col-sm-12 text-center cr-pointer pl-5">
          <div @click.prevent="pagina_examen_externo" class="card-padre-externo mt-2">
            <p class="letra-capital texto-paciente pt-4">examen externo</p>
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
.pacientes-listar{
  .card-padre-local, .card-padre-externo{
    border: none;
    border-radius: 5px;
    max-width: 263px;
    color: white;
    height: 97px;
    transition-duration: .45s;
    &:hover{
      transition-duration: .4s;
      box-shadow: 0.2px 0.3px 6.5px 0.5px rgb(107 106 106);
    }
  }
  .texto-paciente{
    font-size: 31px;
  }
  .card-padre-local{
    background-color: #8C8303;
  }
  .card-padre-externo{
    background-color: #BF6F8C;
  }
}
</style>
