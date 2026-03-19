<script setup lang="ts"></script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  border: 1px solid teal;
  padding: 10px 15px;
  background: none;
  color: teal;
}
</style>
