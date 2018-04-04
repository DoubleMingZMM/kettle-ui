<template>
<div>姓名：{{msg}}，年龄：{{age}}
</div>
</template>

<script>
export default {
  name: 'zmm',
  data () {
    return {
      msg: 'daniel',
      age: this.$store.state.zmm.age || 0
    }
  },
  created () {
    this.load()
  },
  methods: {
    load () {
      this.$store.dispatch('FETCH_MODULES', {
        payload: {
          type: 1,
          name: ''
        }
      }).then(() => {
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
