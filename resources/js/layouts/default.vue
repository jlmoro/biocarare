<template>
  <div class="main-layout">

    <b-row class="justify-content-md-center" >
      <b-col cols="6" md="2">
        <menu-pos/>
      </b-col>
      <navbar />
      <b-col class="mt-3" cols="6" md="9">
        <child />
      </b-col>
    </b-row>


    <!-- <div class="container mt-4 pl-5" :class="ajustesClase">
    <div class="row justify-content-center">
    <child />
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
