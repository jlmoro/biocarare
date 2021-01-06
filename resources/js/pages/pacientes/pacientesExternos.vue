<template>
  <section class="externos-listar">
    <encabezado-principal titulo="Listado pacientes externos" alinear="text-center"/>

    <div class="row w-100">
      <div class="col-md-12">

        <table class="table table-striped" width="100">
          <thead class="thead-dark">
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th colspan="3" class="text-center">Opciones</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Juan</td>
              <td>Perez</td>
              <td>56</td>
              <td>
                <button type="button" class="btn btn-outline-primary" name="button">eliminar</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-primary" name="button">editar</button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-primary" name="button">Ver</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "",
  data(){
    return{

    }
  },

}
</script>
<style lang="scss" scoped>
.externos-listar{

}
</style>
