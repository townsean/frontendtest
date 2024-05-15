<script setup lang="ts">
const props = defineProps<{
  cells: string[];
}>();
</script>

<template>
  <section class="sidebar">
    <h1 v-if="cells.length">Cells Clicked:</h1>
    <em v-else>No cells selected</em>
    <ol class="sidebar-list">
      <li v-for="(cell, index) in props.cells" :key="index">
        {{ cell }}
      </li>
    </ol>
  </section>
</template>

<style scoped>
.sidebar {
  background-color: var(--green4);
  height: 100%;
  padding: 1rem;
}

h1 {
  margin-bottom: 1rem;
}

ol {
  column-count: 2;
}

@media only screen and (max-width: 768px) {
  ol {
    column-count: 3;
  }
}
</style>
