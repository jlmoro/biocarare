import {Notification} from 'element-ui'
import axios from  'axios'
export const getHostname = window.location.hostname
export const getAxios = ()=>new axios.create()
const Helper = {
    validar(a){
        if(a.error){
            this.notificacion('Advertencia',a.error,'warning')
            throw a
        }
    },
    notificacion(title, message, type = 'info', isHtml = false){
        Notification({
            title:title,
            message:message,
            type:type,
            dangerouslyUseHTMLString: isHtml
        })
    },
    error_catch(e){
        console.error(e);
    }
}
export default Helper
