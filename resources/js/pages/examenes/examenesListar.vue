<template>
  <section class="examenes-listar">
    <encabezado-principal titulo="lista costo exámenes" alinear="text-center"/>

    <b-row >
      <b-col cols="6" md="5">
        <b-form-input placeholder="Buscar"></b-form-input>
      </b-col>
      <b-col cols="6" md="4">
        <fa icon="file-excel" class="btn-excel"/>
        <fa icon="file-pdf" class="btn-pdf ml-4"/>
      </b-col>
      <b-col cols="6" md="3">
        <button type="button" class="btn-crear" @click="abrirModalRegistrar">
          <fa icon="plus"/>
          <span class="letra-capital">nuevo registro</span>
        </button>
      </b-col>
    </b-row>

    <modal-crear ref="modalRegistrarExamenPrecio"/>
  </section>
</template>
<script>
export default {
  components: {
    ModalCrear:()=>import('./components/modalCrear'),
  },
  name: "",
  data(){
    return{

    }
  },
  methods: {
    abrirModalRegistrar() {
      this.$refs.modalRegistrarExamenPrecio.toggle()
    }
  }
}
</script>
<style lang="scss" scoped>
.examenes-listar{

}
</style>
