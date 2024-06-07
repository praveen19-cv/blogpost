<!-- 

<template>
  <div id="app">
    <BlogPostList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BlogPostList from '../components/BlogPostList.vue';

export default defineComponent({
  name: 'App',
  components: {
    BlogPostList,
  },
});
</script> -->

<template>
  <div id="app">
    <BlogPostList />
  </div>
</template>

<script setup lang="ts">
import BlogPostList from '../components/BlogPostList.vue';
</script>
