<template>
  <section>
    <div ref="ModalE" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div :class="`modal-dialog modal-dialog-centered modal-${size} ${isScroll}`">
        <div class="modal-content">
          <form class="">
          <div class="modal-header p-1 m-0">
            <div class="modal-header p-1 m-0 mb-0">
              <slot name="header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {{titulo}}
                </h5>
              </slot>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body">
              <p class="text-center">{{mensaje}}</p>
            </slot>
          </div>
          <div class="modal-footer justify-content-center">
            <slot name="footer">
              <button type="button" class="btn-eliminar" @click.stop="$emit('eliminar')">
                Eliminar
              </button>
              <button type="button" class="btn-cancelar" data-dismiss="modal">
                Cancelar
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
  name: "modalEliminar",
  props:{
    scroll:{
      type: Boolean,
      default:false,
    },
    titulo:{
      type:String,
      default:'Ole mano ¿como es el titulo?'
    },
    mensaje:{
      type:String,
      default:'Ole mano aquí va el mensaje'
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
    return{

    }
  },
  methods: {
    toggle() {
      $(this.$refs.ModalE).modal('toggle');
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
