<template>
  <section class="menu-principal">

    <div v-if="user" class="hidden">
      <vs-sidebar v-model="active" open square not-shadow>
        <template #logo>
          <img src="/images/logo_1.png" >
        </template>

        <vs-sidebar-group v-for="(data,m) in dataMenu" :key="m">
          <template #header>

            <vs-sidebar-item :id="data.nombre_item" v-show="!data.subItems.length" :to="data.ruta">
              <template #icon>
                <fa :icon="data.icono"/>
              </template>
              <span class="letra-capital">{{data.nombre_item}}</span>
            </vs-sidebar-item>

            <vs-sidebar-item arrow v-show="data.subItems.length">
              <template #icon>
                <fa :icon="data.icono"/>
              </template>
              <span class="letra-capital">{{data.nombre_item}}</span>
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item :id="data2.nombre_item" v-show="data.subItems.length"
            v-for="(data2,s) in data.subItems" :key="s" :to="data2.ruta">
            <template #icon>
              <fa :icon="data2.icono"/>
            </template>
            <span class="letra-capital">{{data2.nombre_item}}</span>
          </vs-sidebar-item>

        </vs-sidebar-group>

        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar>
              <img :src="user.photo_url" alt="">
            </vs-avatar>

            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class='bx bx-bell' ></i>

              <template #badge>
                28
              </template>
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>

  </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: "menuPos",
  data(){
    return{
      active: 'home',
    }
  },

  computed:{
    ...mapGetters({
      user: 'auth/user',
      dataMenu: 'menu/getMenu'
    }),
  },

  created() {
    if(this.$store.getters['auth/check']){
      this.$store.dispatch('menu/listarMenu')
    }
  },


}
</script>
<style lang="scss" scoped>
.menu-principal{
  .vs-sidebar-content .vs-sidebar__logo img {
    max-width: 101px;
    max-height: 110px;
  }
  .vs-sidebar-content{
    position: fixed;
    z-index: 9001;
    width: 255px;
    height: 100%;
  }

}
</style>
