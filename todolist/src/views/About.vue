<template>
  <div class="about">
    <!-- <select v-model="sel">
      <option value="one">未完成</option>
      <option value="tow">已完成</option>
      <option value="three">已取消</option>
    </select> -->
    <div class="about_box">
      <div></div>
      <input type="text" v-model="sel" @keydown.enter="onClickS" />
      <button @click="onClickS">搜索</button>
    </div>
    <div>
      <!-- <van-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :value="item.state == 1 ? '已完成' : '未完成'"
        size="large"
      /> -->
      <div v-for="(item, index) in $store.state.todo" :key="index" class="box">
        {{ item.title }}
      </div>
    </div>
    <div>
      <div class="removeEE">
        搜索历史
        <div class="remove"><button @click="onRemove">清空</button></div>
      </div>

      <div>
        <div v-for="(item, index) in history" :key="index" v-if="index < 5">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sel: "",
      list: [],
      history: [],
    };
  },
  mounted() {
    this.history = JSON.parse(localStorage.getItem("history")) || [];
  },

  methods: {
    onClickS() {
      let sel = this.sel;
      if (this.sel == "") {
        return alert("搜索内容不能为空");
      } else {
        this.$store.commit("app", sel);
        console.log(this.$store.state.todo);
        this.history.unshift(this.sel);
      }

      // console.log(this.list);
      // if (this.sel == "one") {
      //   console.log(111);
      //   this.list = this.$store.state.todolist.filter((item) => {
      //     return item.state == 2;
      //   });
      // } else if (this.sel == "tow") {
      //   this.list = this.$store.state.todolist.filter((item) => {
      //     return item.state == 1;
      //   });
      // } else if (this.sel == "three") {
      //   this.list = this.$store.state.todolist.filter((item) => {
      //     return item.state == 3;
      //   });
      // }
    },
    onRemove() {
      localStorage.removeItem("history");
      this.history = [];
    },
  },
};
</script>
<style lang="scss">
.removeEE {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about_box {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: chartreuse;
}
.box {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
</style>