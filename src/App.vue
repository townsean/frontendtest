<script setup lang="ts">
import { ref, type Ref } from "vue";
import ChessBoard from "./components/ChessBoard.vue";
import SideBar from "./components/SideBar.vue";

const clickedCells: Ref<string[]> = ref([]);

const onCellClicked = (rank: number, file: string) => {
  clickedCells.value.push(file + rank);
};
</script>

<template>
  <div class="app">
    <main>
      <ChessBoard @cell-clicked="onCellClicked" />
    </main>
    <section>
      <SideBar :cells="clickedCells" />
    </section>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: row;
  height: 100%;

  > main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 2;
  }

  > section {
    flex-grow: 1;
  }
}

@media only screen and (max-width: 768px) {
  .app {
    flex-direction: column;

    > main {
      margin: 2rem 0;
    }
  }
}
</style>
