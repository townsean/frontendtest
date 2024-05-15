<script setup lang="ts">
import { computed, ref, type Ref } from "vue";

const props = defineProps<{
  rank: number;
  file: string;
}>();

const isActive: Ref<boolean> = ref(false);

const name = computed(() => `${props.file}${props.rank}`);

const onCellClicked = () => {
  isActive.value = true;
};

defineExpose({ name, isActive });
</script>

<template>
  <div
    class="cell"
    :class="{ 'cell--active': isActive }"
    :title="name"
    @click="onCellClicked"
    data-test="cell"
  ></div>
</template>

<style scoped>
.cell {
  height: 10vmin;
  width: 10vmin;
  cursor: pointer;
}

.cell--active {
  background-color: var(--green3);
}
</style>
