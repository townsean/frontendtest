<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  rank: number;
  file: string;
}>();

const name = computed(() => `${props.file}${props.rank}`);

defineExpose({ name });
</script>

<template>
  <div class="cell" :title="name" data-test="cell"></div>
</template>

<style scoped>
.cell {
  height: 10vmin;
  width: 10vmin;
  cursor: pointer;

  &:active {
    background-color: var(--green3);
  }
}
</style>
