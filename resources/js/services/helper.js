// import {Notification} from 'element-ui'
import { vsNotification } from 'vuesax'
import axios from  'axios'
export const getHostname = window.location.hostname
export const getAxios = ()=>new axios.create()
const Helper = {
    validar(a){
        if(a.error){
            this.$vs.notification('Advertencia',a.error,'warn')
            throw a
        }
    },
    // notificacion(titulo, mensaje, type = 'info', isHtml = false){
    //     Notification({
    //         title:title,
    //         message:message,
    //         type:type,
    //         dangerouslyUseHTMLString: isHtml
    //     })
    // },
    notificacion(titulo, mensaje ,color = null) {
        // const noti = this.$vs.notification({
        this.$vs.notification({
            flat: true,
            color,
            position:'top-right',
            duration,
            title: titulo,
            text: mensaje
        })
    }
    error_catch(e){
        console.error(e);
    }
}
export default Helper
