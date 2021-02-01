<template>
  <section>
    <modal-form ref="modalEditar" size="md">

      <div slot="header" class="">
        <span class="letra-capital f-20">editar examen</span>
      </div>
      <div slot="body" class="">
        <ValidationObserver ref="Registrar" v-slot="{ invalid  }">

          <!-- <b-form-group label-cols-lg="3" class="mb-0" > -->
          <b-form-group class="mb-0" >
            <ValidationProvider v-slot="{ errors }" name="código" rules="required|numeric">
              <b-form-group label="Código:" label-for="codigoEdit" label-cols-sm="4" label-align-sm="right" >
                <b-form-input id="codigoEdit" v-model="form.codigo"></b-form-input>
                <!-- <b-form-input id="codigo" type="number" v-model="form.codigo"></b-form-input> -->
              </b-form-group>
              <span class="text-danger f-11"> {{errors[0]}} </span>
            </ValidationProvider>

            <b-form-group label="Nombre Exámen:" label-for="nombre-examen-edit" label-cols-sm="4" label-align-sm="right" >
              <ValidationProvider v-slot="{ errors }" name="nombre exámen" rules="required">
                <b-form-input id="nombre-examen-edit" v-model="form.nombre_examen"></b-form-input>
                <span class="text-danger f-11"> {{errors[0]}} </span>
              </ValidationProvider>
            </b-form-group>

            <b-form-group label="Precio:" label-for="precio-editar" label-cols-sm="4" label-align-sm="right" >
              <ValidationProvider v-slot="{ errors }" name="precio" rules="required">
              <vue-numeric id="precio-editar"
              currency="$"
              separator="."
              v-model="form.precio"
              class="p-2 input-precio"
              :empty-value="0"
              :minus="false">
            </vue-numeric>
            <span class="text-danger f-11"> {{errors[0]}} </span>
          </ValidationProvider>
          </b-form-group>
        </b-form-group>
      </ValidationObserver>
    </div>
    <div slot="footer" class="">
      <button type="button" class="btn-guardar" @click="registrarExamen">
        <fa icon="check"/>
        <span class="letra-capital">actualizar</span>
      </button>
      <button type="button" class="btn-cancelar" data-dismiss="modal" aria-label="Close">
        <fa icon="times"/>
        <span class="letra-capital">cancelar</span>
      </button>
    </div>


  </modal-form>
</section>
</template>
<script>
export default {
  name: "",
  props: ['ruta'],
  data(){
    return{
      form:{},

    }
  },
  methods: {
    async registrarExamen(){
      try {
        const isValid = await this.$refs.Registrar.validate()
        if (!isValid){
          this.notificacion('Mensaje', 'Campos obligatorios', 'warning')
          return false
        }
        const {data} = await axios.put(`${this.ruta}/editar-precio-examen-externo`,this.form)
        if (data.error) {
          this.$root.notificacion(this,'Problemas al actualizar',data.error,'danger')
          return
        }
        this.$root.notificacion(this,'Registro Actualizado',data.mensaje,'success')
        this.$emit('registro:actualizado')
        // this.form = {}
        this.$refs.modalEditar.toggle()        

      } catch (e) {
        this.$root.notificacion(this,'Atención','No es posible registrar','warn')
      }
    },
    toggle(dato) {
      this.form = _.cloneDeep(dato)
      this.$refs.modalEditar.toggle()
    }
  }
}
</script>
<style lang="scss" scoped>
.input-precio{
  width: -webkit-fill-available;
  border: 1px solid lightgray;
  border-radius: 2px;
}
</style>
