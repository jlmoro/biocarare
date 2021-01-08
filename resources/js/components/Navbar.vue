<template>
  <div v-if="user" class="center examplex">

    <vs-navbar left-collapsed >

        <template #right>
          <vs-navbar-group>

            <img :src="user.photo_url" class="foto-nav" alt="" height="40" width="40">
            <template #items>
              <vs-navbar-item >
                <fa icon="user-circle"/>
                <span class="letra-capital">perfil</span>
              </vs-navbar-item>
              <vs-navbar-item @click.prevent="logout">
                <fa icon="sign-out-alt"/>
                <span class="letra-capital">salir</span>
              </vs-navbar-item>
            </template>

          </vs-navbar-group>
        </template>
      </vs-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName,

  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.foto-nav{
  border-radius: 5px;
}
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
.navbar{
  position: fixed;
  width: -webkit-fill-available;
  z-index: 10;
}
</style>
