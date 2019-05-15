<template>
  <div class="test">
    <my-button>HELLO</my-button>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton";
export default {
  name: "demo",

  components: {
    MyButton
  }
};
</script>

<style lang="stylus" scoped>
.test {
  width: 200px;
  height: 200px;
  background: #33aa22;
}
</style>

