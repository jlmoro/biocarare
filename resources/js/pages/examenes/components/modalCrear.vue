<template>
  <section>
    <modal-form ref="modalCrear" size="md">
      <div slot="header" class="">
        <span class="letra-capital">registrar examen</span>
      </div>
      <div slot="body" class="">


          <!-- <b-form-group label-cols-lg="3" class="mb-0" > -->
          <b-form-group class="mb-0" >

            <b-form-group label="Código:" label-for="codigo" label-cols-sm="4" label-align-sm="right" >
              <b-form-input id="codigo"></b-form-input>
            </b-form-group>

            <b-form-group label="Nombre Exámen:" label-for="nombre-examen" label-cols-sm="4" label-align-sm="right" >
              <b-form-input id="nombre-examen"></b-form-input>
            </b-form-group>

            <b-form-group label="Precio:" label-for="precio" label-cols-sm="4" label-align-sm="right" >
              <b-form-input id="precio"></b-form-input>
                <currency-input v-model="value" locale="de" />
            </b-form-group>

          </b-form-group>


      </div>
      <div slot="footer" class="">
        <button type="button" class="btn-guardar">
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
  data(){
    return{
      value:100000
    }
  },
  methods: {
    toggle() {
      this.$refs.modalCrear.toggle()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
