<template>
  <div>
    <button class="btn btn-primary" @click="onGetQuotes">Get Quotes</button>
    <hr>
  <app-quote v-for="quote in quotes" :key="quote.id" :qt="quote"
    @quoteDeleted="onQuoteDeleted($event)"></app-quote>
  </div>
</template>

<script>
import Quote from './quote.vue';
import axios from 'axios';
export default {
  data() {
    return {
      quotes: []
    }
  },
  components: {
    'app-quote': Quote
  },
  methods: {
    onGetQuotes() {
      axios.get('http://127.0.0.1:8000/api/quotes')
      .then(
        response => {
            this.quotes = response.data.quotes;
        }
      )
      .catch(
        error => console.log(error)
      );
    },
    onQuoteDeleted(id) {
        const position = this.quotes.findIndex((element) => {
          element.id === id
        })
        this.quotes.splice(position, 1);
    }
  }
}
</script>
