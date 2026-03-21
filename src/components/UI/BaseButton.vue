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
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background: teal;
  color: white;
}

.btn:active {
  opacity: 0.7;
}
</style>
