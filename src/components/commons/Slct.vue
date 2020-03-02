<template>
  <div class="w-64 relative">
    <p
      class="cursor-default border border-lk-blue px-luko-sm py-luko-sm rounded flex"
      :class="{ 'text-luko-gray': selectedIndex < 0 }"
      @click="toggleOpen()"
    >
      <span>{{ options[selectedIndex] ? options[selectedIndex] : "Please select an email" }}</span>
    </p>
    <ul class="absolute b-0 shadow w-full max-h-64 overflow-auto" v-if="open">
      <li
        class="px-luko-md py-luko-sm cursor-default"
        v-for="(option, index) in options"
        :key="option"
        @click="() => {
          toggleOpen()
          $emit('update', index)
        }"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    options: {
      required: true,
      type: Array
    },
    selectedIndex: {
      required: true,
      type: Number
    }
  },

  data() {
    return {
      open: false
    }
  },

  methods: {
    toggleOpen() {
      this.open = !this.open
    }
  }
})
</script>