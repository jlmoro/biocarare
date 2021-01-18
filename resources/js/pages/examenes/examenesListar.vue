<template>
  <section class="examenes-listar">
    <encabezado-principal titulo="lista costo exámenes" alinear="text-center"/>

    <b-row>
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

    <b-row class="mt-4">
      <b-col cols="12" md="12">
        <table class="table table-stripe">
          <thead>
            <th>#</th>
            <th> <span class="letra-capital">código</span> </th>
            <th> <span class="letra-capital">nombre exámen</span> </th>
            <th> <span class="letra-capital">precio</span> </th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>99999</td>
              <td>ñkljghñkljgs</td>
              <td>2000000</td>
              <td>
                <fa icon="edit"/>
                <fa icon="trash-alt"/>
              </td>
            </tr>
          </tbody>
        </table>
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
  // computed:{
  //   contactos(){
  //     return this.data_examenes.filter(a =>
  //       a.codigo.toLowerCase().match(this.valor.toLowerCase()) ||
  //       a.exmamen_nombre.toLowerCase().match(this.valor.toLowerCase())
  //     );
  //   }
  // },
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
