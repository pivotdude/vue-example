<template>
  
    <button @click="showDialog">Клик!</button>
    <my-input v-focus v-model="searchQuerry"></my-input>
  
    <my-select
      v-model="selectedSort"
      :options="sortOptions"
    /> 
  
    <my-modal :show="dialogVisible" @hideDialog="this.dialogVisible = false">
      <my-form @newPost="addNewPost" />
    </my-modal>
  
    <ul>
      <post-list :posts="sortedAndSearchedPosts" @deletePost="deleteThisPost" />
    </ul>
  
    <div v-intersection="loadMorePosts" class="observer" ref="observer"></div>
  
    <!-- <div class="page__wrapper">
      <div 
      v-for="pageNumber in totalPages" 
      :key="pageNumber" 
      :class="{'current-page': 
      pageNumber == page}" 
      class="page"
      @click="changePage(pageNumber)">
        {{ pageNumber }}
      </div>
    </div> -->
  
  </template>
  
  <script>
    import PostList from '@/components/PostList.vue';
    import MyForm from '@/components/MyForm.vue';
    import axios from 'axios';

  export default {
    name: 'my-posts',
    mounted() {
      this.fetchPosts()
    },
    data () {
      return {
        dialogVisible: false,
        posts: [],
        selectedSort: '',
        searchQuerry: '',
        page: 1,
        limit: 10,
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'},
        ]
      }
    },
    components: {
      PostList, MyForm
    },
    methods: {
      addNewPost(post) {
        this.posts.push(post)
      },
      deleteThisPost (post) {
        console.log(post);
        this.posts = this.posts.filter(postEl => postEl.id != post)
      },
      showDialog() {
        this.dialogVisible = true;
      },
      async fetchPosts() {
        const fetched = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=${this.limit}`)
        const json = await fetched.json()
        this.posts = json
        this.totalPages = Math.ceil(fetched.headers.get('x-total-count') / this.limit)
        return json
      },
      changePage (pageNumber) {
        this.page = pageNumber
        this.fetchPosts()
      },
      async loadMorePosts() {
        try {
          this.page += 1;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = [...this.posts, ...response.data];
        } catch (e) {
          alert('Ошибка')
        }
      }
    },
    computed: {
      sortedPosts () {
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
      },
      sortedAndSearchedPosts () {
        return this.sortedPosts.filter(post => post.title.includes(this.searchQuerry))
      }
    },
  }
  </script>
  
  <style sc>

  .page__wrapper {
    display: flex;
    margin-top: 15px;
  }
  .page {
    border: 1px solid black;
    padding: 10px;
  }
  .current-page {
    border: 2px solid teal;
  }
  .observer {
    height: 40px;
  }
  </style>
  