<template>
  <div>
    <!-- Header -->
    <UserNavbar />
    <main>
      <router-view></router-view>
    </main>
    <UserGotop />
    <UserFooter />
  </div>
</template>
<script>
import UserNavbar from '@/components/user/UserNavbar'
import UserGotop from '@/components/user/UserGotop'
import UserFooter from '@/components/user/UserFooter'
export default {
  components: {
    UserNavbar,
    UserGotop,
    UserFooter
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import "../../assets/css/user.scss";
</style>
