<template>
  <div class="input_box">
    <div><input type="text" v-model="input" @keydown.enter="onClick" /></div>
    <div class="button"><button @click="onClick">提交</button></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    onClick() {
      var obj = {
        title: this.input,
        state: 1,
      };
      this.$store.commit("add", obj);
      
    },
  },
};
</script>
<style lang="scss">
.input_box {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 180px;
    height: 30px;
  }
  .button {
    margin-left: 10px;
  }
}
</style>