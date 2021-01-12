<template>
  <section>
    <div ref="ModalB" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div :class="`modal-dialog modal-dialog-centered modal-${size} ${isScroll}`">
        <div class="modal-content">
          <form class="">
          <div class="modal-header p-1 m-0">
            <div class="modal-header p-1 m-0 mb-0">
              <slot name="header">
                <h5 class="modal-title" id="exampleModalLabel">
                  titulo
                </h5>
              </slot>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body">
              <p>Cuerpo por defecto</p>
            </slot>
          </div>
          <div class="modal-footer justify-content-end">
            <slot name="footer">
              <button type="button" class="btn btn-cerrar" data-dismiss="modal">
                Cerrar
              </button>
              <button type="button" class="btn-guardar">
                Guardar
              </button>
            </slot>
          </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "modalForm",
  props: {
    scroll:{
      type: Boolean,
      default:false,
    },
    size:{
      type: String,
      default:'md',
    },
  },
  computed:{
    isScroll() {
     if (this.scroll === true) {
       return "modal-dialog-scrollable";
     }
   },
  },
  data(){
    return {
    }
  },
  methods: {
    toggle() {
      $(this.$refs.ModalB).modal('toggle');
    }
  }
}
</script>
<style lang="scss" scoped>
.modal-header{
  background-color: #025949;
  color: white;
}
</style>
