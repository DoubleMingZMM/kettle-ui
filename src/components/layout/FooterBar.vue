<template>
  <Footer class="text-center">
    hcfdm &copy; {{year}}
  </Footer>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>

</style>
