import Vue from 'vue'
import Swal from 'sweetalert2'
import axios from 'axios'

let vue = new Vue;

export default class Helper {

    static notificacion(titulo, mensaje, color = null){
        vue.$notify({
            title: titulo,
            message: mensaje,
            color: tipo
        });
    }
}
