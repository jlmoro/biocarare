import Swal from 'sweetalert2'
import {vsNotification} from 'vuesax'
import ToastPlugin from 'bootstrap-vue'

const alerta = (title='',message='',icon='info') => {
  Swal.fire(title,message,icon)
}

const confirmar = (elTitle = '', elText = '')=>{
    return Swal.fire({
        title: elTitle ? elTitle : '¿Está seguro?',
        text: elText ? elText : 'No sera posible deshacer esta acción',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Confirmar'
    })
}


const notificacion = (self,titulo = null, mensaje = null, color)=> {
    self.$vs.notification({
    position: 'top-right',
    flat: true,
    color: color ? color: 'primary',
    duration:4000,
    title: titulo ? titulo : 'Ole mano no puso titulo',
    text: mensaje ? mensaje :`Ole mano, ¿ y el mensaje que ?`
  })
}


export {
  alerta,
  confirmar,
  notificacion
}
