<template>
  <textarea
    rows="5"
    class="focus:border-luko-blue rounded border border-luko-gray w-full py-luko-md px-luko-lg"
    v-model="localValue"
  ></textarea>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      localValue: this.value
    };
  },
  watch: {
    localValue(v) {
      this.$emit("update", v);
    }
  }
});
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
}
</style>