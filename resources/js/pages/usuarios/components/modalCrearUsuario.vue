<template>
  <section>
    <modal-form ref="modalCrear" size="md">

      <div slot="header" class="">
        <span class="letra-capital f-20">registrar usuario</span>
      </div>
      <div slot="body" class="">
        <ValidationObserver ref="Registrar" v-slot="{ invalid  }">

          <!-- <b-form-group label-cols-lg="3" class="mb-0" > -->
          <b-row class="justify-content-center">
            <b-col cols="12" md="6">
              <croppa v-model="myCroppa" :accept="'image/*'" ></croppa>
              <br>
              <button type="button" class="btn btn-primary" name="button" @click="uploadCroppedImage">
                subir
              </button>
            </b-col>
          </b-row>

          <b-form-group class="mb-0" >
            <ValidationProvider v-slot="{ errors }" name="código" rules="required|numeric">

              <span class="text-danger f-11"> {{errors[0]}} </span>
            </ValidationProvider>

            <ValidationProvider v-slot="{ errors }" name="nombre exámen" rules="required">

              <span class="text-danger f-11"> {{errors[0]}} </span>
            </ValidationProvider>

        </b-form-group>
      </ValidationObserver>
    </div>
    <div slot="footer" class="">
      <button type="button" class="btn-guardar" @click="registrarExamen">
        <fa icon="check"/>
        <span class="letra-capital">registrar</span>
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
      form:{
        foto:{}
      },
      myCroppa: {},

    }
  },
  methods: {

    uploadCroppedImage() {
       this.myCroppa.generateBlob((blob) => {
         console.log(blob,"aquiiii");
         // write code to upload the cropped image file (a file is a blob)
       }, 'image/jpeg', 0.8) // 80% compressed jpeg file
    },

    async registrarExamen(){
      try {
        const isValid = await this.$refs.Registrar.validate()
        if (!isValid){
          this.notificacion('Mensaje', 'Campos obligatorios', 'warning')
          return false
        }
        const {data} = await axios.post(`${this.ruta}/registrar-precio-examen-externo`,this.form)
        if (data.error) {
          this.$root.notificacion(this,'Problemas al registrar',data.error,'danger')
          return
        }
        this.$root.notificacion(this,'Registro Creado',data.mensaje,'success')
        this.$emit('registro:creado')
        this.form = {}
        this.$refs.Registrar.reset()
        this.toggle()

      } catch (e) {
        this.$root.notificacion(this,'Atención','No es posible registrar','warn')
      }
    },
    toggle() {
      this.$refs.modalCrear.toggle()
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
