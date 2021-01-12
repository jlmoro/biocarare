<template>
  <section>
    <modal-form ref="modalCrear" size="md">
      <div slot="header" class="">
        <span class="letra-capital">registrar examen</span>
      </div>
      <div slot="body" class="">


          <!-- <b-form-group label-cols-lg="3" class="mb-0" > -->
          <b-form-group class="mb-0" >

            <b-form-group label="Street:" label-for="nested-street" label-cols-sm="3" label-align-sm="right" >
              <b-form-input id="nested-street"></b-form-input>
            </b-form-group>

            <b-form-group label="City:" label-for="nested-city" label-cols-sm="3" label-align-sm="right" >
              <b-form-input id="nested-city"></b-form-input>
            </b-form-group>

            <b-form-group label="State:" label-for="nested-state" label-cols-sm="3" label-align-sm="right" >
              <b-form-input id="nested-state"></b-form-input>
            </b-form-group>

            <b-form-group label="Country:" label-for="nested-country" label-cols-sm="3" label-align-sm="right" >
              <b-form-input id="nested-country"></b-form-input>
            </b-form-group>

            <b-form-group label="Ship via:" label-cols-sm="3" label-align-sm="right" class="mb-0" v-slot="{ ariaDescribedby }" >
              <b-form-radio-group
              class="pt-2"
              :options="['Air', 'Courier', 'Mail']"
              :aria-describedby="ariaDescribedby">
            </b-form-radio-group>
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
