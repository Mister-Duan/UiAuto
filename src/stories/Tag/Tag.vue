<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">{{ text }}</a>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    /**
     * 链接
     */
    href: string;
    /**
     * 内容
     */
    text: string;
  }>(),
  {}
);
</script>
