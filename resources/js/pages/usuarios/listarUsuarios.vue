<template>
  <section class="listar-usuarios">
    <encabezado-principal titulo="listado de usuarios" alinear="text-center"/>

    <b-row class="justify-content-end">
      <!-- <b-col cols="6" md="5">
        <b-form-input placeholder="Buscar" v-model="valor"></b-form-input>
      </b-col>
      <b-col cols="6" md="4">
        <fa icon="file-excel" class="btn-excel"/>
        <fa icon="file-pdf" class="btn-pdf ml-4"/>
      </b-col> -->
      <b-col cols="12" md="3">
        <button type="button" class="btn-crear" @click="abrirModalRegistrar">
          <fa icon="plus"/>
          <span class="letra-capital">registrar usuario</span>
        </button>
      </b-col>
    </b-row>

    <vs-card>
    <template #title>
      <h3>Pot with a plant</h3>
    </template>
    <template #img>
      <img src="/images/logo_1.png" alt="" width="150" height="150">
    </template>
    <template #text>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class='bx bx-chat' ></i>
        <span class="span">
          54
        </span>
      </vs-button>
    </template>
  </vs-card>

  <modal-crear ref="modalRegistrarUsuario"/>

  </section>

</template>

<script>
export default {
  components: {
    ModalCrear:()=>import('./components/modalCrearUsuario'),
    // ModalEditar:()=>import('./components/modalEditar'),
  },
  data(){
    return{

    }
  },
  methods:{
    abrirModalRegistrar() {
      this.$refs.modalRegistrarUsuario.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
