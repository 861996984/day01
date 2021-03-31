<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="未完成" name="1">
        <div
          v-for="(item, index) in $store.state.todolist"
          :key="index"
          v-show="item.state == 1"
        >
          <input
            type="checkbox"
            :checked="item.state !== 1"
            @click="change(index)"
          />
          <span>{{ item.title }}</span>
          <button @click="onClickB(index)">取消</button>
        </div>
      </van-collapse-item>
      <van-collapse-item title="已完成" name="2">
        <div
          v-for="(item, index) in $store.state.todolist"
          :key="index"
          v-show="item.state == 2"
        >
          <input
            type="checkbox"
            :checked="item.state !== 1"
            @click="change(index)"
          />
          <span>{{ item.title }}</span>
          <button @click="onClickB(index)">取消</button>
        </div></van-collapse-item
      >
      <van-collapse-item title="已取消" name="3">
        <div
          v-for="(item, index) in $store.state.todolist"
          :key="index"
          v-show="item.state == 3"
        >
          <span>{{ item.title }}</span>
          <button @click="onClickB(index)">恢复</button>
        </div></van-collapse-item
      >
    </van-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    change(index) {
      this.$store.commit("change", index);
    },
    onClickB(index) {
      this.$store.commit("cancel", index);
    },
  },
};
</script>
<style lang="scss">
</style>