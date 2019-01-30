<template>
  <form @submit.prevent="onSubmitted">
    <div class="form-group">
      <label for="content">Content</label>
      <input type="text"
       id="content"
       class="form-control"
       v-model="quoteContent">
       <button class="btn btn-primary" type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      quoteContent: ''
    }
  },
  methods: {
    onSubmitted() {
        axios.post('http://127.0.0.1:8000/api/quote', {
          content: this.quoteContent
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  }
}
</script>
