
// import { defineStore } from 'pinia';
// import axios from 'axios';

// interface Blog {
//   albumId: number;
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// }

// export const useBlogStore = defineStore('blogstore', {
//   state: () => ({
//     blogs: [] as Blog[],
//   }),
//   actions: {
//     async fetchBlogs() {
//       try {
//         const response = await axios.get<Blog[]>('https://jsonplaceholder.typicode.com/photos');
//         this.blogs = response.data.slice(0, 30); // Limit to 30 items for display purposes
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//       }
//     },
//   },
// });



import { defineStore } from 'pinia';
import axios from 'axios';

interface Blog {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const useBlogStore = defineStore('blogStore', {
  state: () => ({
    blogs: [] as Blog[],
  }),
  actions: {
    async fetchBlogs() {
      try {
        const response = await axios.get<Blog[]>('https://jsonplaceholder.typicode.com/photos');
        this.blogs = response.data.slice(0, 30); 
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    },
  },
});
