<template>
  <section class="externos-listar">

    <encabezado-principal titulo="pacientes externos" alinear="text-center"/>

    <div class="row w-100">
      <div class="col-md-12">

        <b-table striped hover :items="items"></b-table>

      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "",
  data(){
    return{
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },

}
</script>
<style lang="scss" scoped>
.externos-listar{

}
</style>
