import {mapGetters} from 'vuex'

export default {
    methods:{

        notificacion(titulo, mensaje, color = null) {
            console.log('ingreso notificacion');
            Helper.notificacion(titulo, mensaje, color = null)
        },
    }
}
