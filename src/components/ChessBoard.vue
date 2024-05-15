<script setup lang="ts">
import { ref, type Ref } from "vue";
import ChessBoardCell from "@/components/ChessBoardCell.vue";

const emit = defineEmits(["cell-clicked"]);

const ranks: Ref<number[]> = ref([8, 7, 6, 5, 4, 3, 2, 1]);
const files: Ref<string[]> = ref(["a", "b", "c", "d", "e", "f", "g", "h"]);
</script>

<template>
  <table class="chessboard">
    <tr v-for="(rank, rankIndex) in ranks" :key="rankIndex">
      <td
        v-for="(file, fileIndex) in files"
        :key="fileIndex"
        data-test="chessboard-td"
      >
        <ChessBoardCell
          :rank="rank"
          :file="file"
          @click="emit('cell-clicked', rank, file)"
        />
      </td>
    </tr>
  </table>
</template>

<style scoped>
.chessboard {
  background: var(--green1);
  border-collapse: collapse;

  td {
    border: 1px solid var(--green4);
    padding: 0;
    margin: 0;
  }

  tr:nth-child(even) td:nth-child(odd),
  tr:nth-child(odd) td:nth-child(even) {
    background-color: var(--green4);
  }
}
</style>
