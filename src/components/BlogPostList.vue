<!-- 
   <template>
    <div class="blog-list">
      <div v-if="blogs.length > 0" class="blog-grid">
        <div v-for="blog in blogs" :key="blog.id" class="blog-card">
          <img :src="blog.thumbnailUrl" alt="Blog Image" class="blog-image" />
          <p>{{ blog.title }}</p>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useBlogStore } from '../stores/blogStore';
  
  export default defineComponent({
    name: 'BlogPostList',
    setup() {
      const blogStore = useBlogStore();
      const blogs = ref(blogStore.blogs);
  
      const fetchBlogs = async () => {
        await blogStore.fetchBlogs();
        blogs.value = blogStore.blogs;
      };
  
      onMounted(async () => {
        await fetchBlogs();
      });
  
      return {
        blogs,
      };
    },
  });
  </script>
  
  <style>
  .blog-list {
    padding: 1rem;
  }
  
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  
  .blog-card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    
  }
  .blog-image {
    width: 100%;
    height: auto;
  }
  </style>
   -->
<template>
  <div class="blog-list">
    <div v-if="blogs.length > 0" class="blog-grid">
      <div v-for="blog in blogs" :key="blog.id" class="blog-card">
        <img :src="blog.thumbnailUrl" alt="Blog Image" class="blog-image" />
        <p>{{ blog.title }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useBlogStore } from '../stores/blogStore';

const blogStore = useBlogStore();
const blogs = ref(blogStore.blogs);

async function fetchBlogs() {
  await blogStore.fetchBlogs();
  blogs.value = blogStore.blogs;
};

onMounted(async () => {
  await fetchBlogs();
});
</script>

<style>
.blog-list {
  padding: 1rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.blog-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  border: solid black;
  border-width: 0.05rem;
}

.blog-image {
  width: 100%;
  height: auto;
}
</style>