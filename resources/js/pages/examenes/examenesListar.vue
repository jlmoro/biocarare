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
            <th> <span class="letra-capital">estado</span> </th>
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
                <b-form-checkbox switch size="lg" v-model="data.estado_examen" @change="cambiar_estado(data.id)"/>
                <!-- <vs-switch v-model="data.estado_examen" @change="cambiar_estado(data.id)">
                  <template #off danger>
                    <fa icon="times"/>
                  </template>
                  <template #on success>
                    <fa icon="check"/>
                  </template>
                </vs-switch> -->
              </td>
              <td>
                <fa icon="edit" class="boton-editar" @click="abrirModalEditar(data)"/>
                <fa icon="trash-alt" class="boton-eliminar" @click="modal_eliminar(data)"/>
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

    <modal-eliminar ref="modalEliminar"
    titulo="Eliminar Dato"
    :mensaje="`¿Seguro que desea eliminar ${examen.nombre_examen}?`"
    @eliminar="eliminando"
    />

    <modal-crear ref="modalRegistrarExamenPrecio" :ruta="ruta" @registro:creado="listar_examenes"/>
    <modal-editar ref="modalEditarExamenPrecio" :ruta="ruta" @registro:actualizado="listar_examenes"/>

  </section>
</template>
<script>

export default {
  components: {
    ModalCrear:()=>import('./components/modalCrear'),
    ModalEditar:()=>import('./components/modalEditar'),
  },
  name: "",
  data(){
    return{
      ruta:'/api/precio-examenes',
      data_examenes:[],
      valor:'',
      perPage:10,
      currentPage: 1,
      examen:{}
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
    async eliminando(){
      try {
        const {data} = await axios.delete(`${this.ruta}/${this.examen.id}/eliminar-examen`)
        if (data.error) {
          this.$root.notificacion(this,'Atención',data.error,'danger')
          return
        }
        this.$refs.modalEliminar.toggle()
        this.listar_examenes()
        this.$root.notificacion(this,'Dato Eliminado',data.mensaje,'success')
      } catch (e) {
        this.$root.notificacion(this,'Atención','No fue posible eliminar el dato','warn')
      }

    },
    modal_eliminar(dato){
      this.$refs.modalEliminar.toggle()
      this.examen = dato
    },
    async cambiar_estado(dato){
      try {
        const {data} = await axios.put(`${this.ruta}/${dato}/cambiar-estado`)
        if (data.error) {
          this.$root.notificacion(this,'Atención','Error al actualizar estado','danger')
          return
        }
        this.$root.notificacion(this,'Estado Actualizado',data.mensaje,'success')
        this.listar_examenes()
      } catch (e) {
        this.$root.notificacion(this,'Atención','No fue posible cambiar el estado','warn')
      }
    },
    async listar_examenes(){
      try {
        const {data} = await axios(`${this.ruta}/listar-precio-examenes-externos`)
        // this.$root.validar(data);
        this.data_examenes = data
        this.data_examenes.forEach((item, i) => {
          if (item.estado == 0) {
            item.estado_examen = false
          } else {
            item.estado_examen = true
          }
        });
      } catch (e) {
        this.$root.notificacion(this,'Atención','No fue posible mostrar la lista','warn')
      }
    },
    abrirModalEditar(dato){
      this.$refs.modalEditarExamenPrecio.toggle(dato)
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
