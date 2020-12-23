<template>
  <div class="main-layout">
    <div class="row">
      <div class="col-md-12">
        <menu-pos/>
      </div>
      <!-- <div class="col"> -->
        <!-- <navbar /> -->
        <div class="container mt-4 mr-0">
          <child />
        </div>
      <!-- </div> -->
    </div>

  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  name: 'MainLayout',

  components: {
    Navbar,
    MenuPos:()=>import('~/components/menuPos')
  }
}
</script>
