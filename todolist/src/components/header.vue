<template>
  <div class="header" :style="{ background: this.isColor }">
    <div></div>
    <div>记事本</div>
    <div>
      <div @click="showPopup">
        <img
          src="../assets/fenleishezhi.png"
          alt=""
          :style="{ width: '30px' }"
        />
      </div>
      <van-popup
        v-model="show"
        position="left"
        :style="{ height: '100%', width: '30%' }"
      >
        <button class="popup_button" @click="onClick">切换主题</button>
        <button class="popup_button" @click="onClickI">编辑数据</button>
      </van-popup>
      <van-popup
        v-model="isShow"
        position="left"
        :style="{ height: '100%', width: '30%' }"
        :overlay="over"
      >
        <button class="popup_button" @click="changeColor('#00b0f0')">
          #00b0f0
        </button>
        <button class="popup_button" @click="changeColor('#00d1b2')">
          #00d1b2
        </button>
        <button class="popup_button" @click="changeColor('#f4b976')">
          #f4b976
        </button>
        <button class="popup_button" @click="changeColor('#f39894')">
          #f39894
        </button>
        <button class="popup_button" @click="changeColor('#26b6be')">
          #26b6be
        </button>
      </van-popup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      isShow: false,
      isColor: "#26b6be",
      over: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onClick() {
      this.isShow = true;
      this.show = false;
    },
    changeColor(color) {
      this.isColor = color;
      this.isShow = false;
    },
    onClickI() {
      this.$router.push({ path: "/about" });
    },
  },
};
</script>
<style lang="scss">
.header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aqua;
}
.popup_button {
  display: block;
}
</style>