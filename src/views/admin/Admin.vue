<template>
    <div>
        <Navbar/>
        <!-- <Alert/> -->
        <div>
            <div class="row m-0">
                <Sidebar></Sidebar>
                <main class="col-12">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>
<script>
import Sidebar from '@/components/admin/Sidebar'
import Navbar from '@/components/admin/Navbar'
// import Alert from '@/components/admin/AlertMessage'
export default {
  components: {
    Sidebar,
    Navbar
    // Alert
  }
}
</script>
