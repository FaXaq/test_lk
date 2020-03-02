<template>
  <div class="rounded overflow-hidden flex inline">
    <div v-if="preText" class="bg-luko-blue-light text-luko-blue py-luko-sm px-luko-lg cursor-text">
      <p>{{ preText }}</p>
    </div>
    <button class="cursor-inherit" @click="$emit('click')">
      <div
        class="py-luko-sm px-luko-lg flex items-center"
        :class="{
          'bg-luko-blue': !secondary,
          'text-white': !secondary,
          'bg-luko-blue-light': secondary,
          'text-luko-blue': secondary
        }">
        <div v-if="withIcon" class="mr-luko-sm">
          <slot name="icon"/>
        </div>
        <div>
          <slot/>
        </div>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    preText: {
      required: false
    },
    withIcon: {
      default: false
    },
    secondary: {
      default: false
    }
  }
});
</script>

