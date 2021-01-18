<template>
  <section class="examenes-listar">
    <encabezado-principal titulo="lista costo exámenes" alinear="text-center"/>

    <b-row>
      <b-col cols="6" md="5">
        <b-form-input placeholder="Buscar" v-model="valor"></b-form-input>
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
        <table class="table table-stripe" id="lista-examenes">
          <thead>
            <th>#</th>
            <th> <span class="letra-capital">código</span> </th>
            <th> <span class="letra-capital">nombre exámen</span> </th>
            <th> <span class="letra-capital">precio</span> </th>
            <th></th>
          </thead>
          <tbody>
            <!-- <tr v-for="(data,e) in examenes" :key="e"> -->
            <tr v-for="(data,e) in data_examenes" :key="e">
              <td>{{ e + 1}}</td>
              <td>{{data.codigo}}</td>
              <td>{{data.nombre_examen}}</td>
              <td>{{data.precio}}</td>
              <td>
                <fa icon="edit"/>
                <fa icon="trash-alt"/>
              </td>
            </tr>
          </tbody>
        </table>

        <b-row>
          <b-col cols="12" md="12">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="lista-examenes"
              pills
              class="justify-content-center"
            ></b-pagination>
          </b-col>
        </b-row>

      </b-col>
    </b-row>

    <modal-crear ref="modalRegistrarExamenPrecio" :ruta="ruta" @registro:creado="listar_examenes"/>
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
      ruta:'/api/precio-examenes',
      data_examenes:[],
      valor:'',
      perPage:10,
      currentPage: 1,
    }
  },
  computed:{
    // examenes(){
    //   if (this.valor == '') {
    //     return this.data_examenes
    //   }
    //   return this.data_examenes.filter(a =>
    //     a.codigo.toLowerCase().match( this.valor.toLowerCase() ) ||
    //     a.examen_nombre.toLowerCase().match( this.valor.toLowerCase() )
    //   )
    // },
    rows() {
      return this.data_examenes.length
    }
  },
  created(){
    this.listar_examenes()
  },
  methods: {
    async listar_examenes(){
      try {
        const {data} = await axios(`${this.ruta}/listar-precio-examenes-externos`)
        // this.$root.validar(data);
        this.data_examenes = data
      } catch (e) {
        this.$root.notificacion(this,'Atención','No fue posible mostrar la lista','warn')
      }
    },
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
