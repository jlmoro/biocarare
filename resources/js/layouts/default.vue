<template>
  <div class="main-layout">
    <menu-pos/>
    <navbar />

    <div class="container mt-4 pl-5" :class="ajustesClase">
      <div class="row justify-content-center">
        <child />
      </div>
    </div>

    <!-- <div class="row w-100">
      <div class="col-md-2"> </div>
      <div class="col-md-12">
        <navbar />
        <div class="container mt-4 mr-0">
          <child />
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'
export default {
  name: 'MainLayout',

  components: {
    Navbar,
    MenuPos:()=>import('~/components/menuPos')
  },

  computed:{
    ...mapGetters({
      user: 'auth/user'
    }),
    ajustesClase(){
      if (this.user == null) {
        return '';
      }
    }
  }

}
</script>
