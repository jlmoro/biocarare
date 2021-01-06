<template>
  <section class="encabezado">
    <p class="mt-5 titulo" :class="alinear">{{titulo}}</p>
  </section>
</template>
<script>
export default {
  name: "EncabezadoPrincipal",
  props: {
    titulo:{
      type: String,
      default:'Titulo',
    },
    alinear:{
      type: String,
      default:'text-center',
    },
  },
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
.encabezado{
  .titulo{
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 300;
  }
}
</style>
