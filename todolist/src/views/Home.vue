<template>
  <div class="home">
    <Header></Header>
    <Input />
    <List></List>
  </div>
</template>

<script>
import Header from "../components/header";
import Input from "../components/input";
import List from "../components/list";
export default {
  components: {
    Header,
    Input,
    List,
  },
};
</script>
