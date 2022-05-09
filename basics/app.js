// console.log(Vue)
const app = Vue.createApp({
  // template: `
  // <h1>Hola Mundo</h1>
  // <p>From app.js</p>
  // <p> {{ !true ? 'Active' : 'False' }} </p>
  // `

  // OPTIONS API
  methods: {},
  watch: {},

  data() {
    return {
      // Return the state of the app or the component
      quote: "I'm Batman",
      author: 'Bruce Wayne'
    }
  },

  methods: {
    changeQuote() { // (event)
      // console.log(event);
      this.author = 'Cristian Ramirez'
      this.capitalize()
    },
    capitalize() {
      this.quote = this.quote.toUpperCase()
    }
  }
})

app.mount('#myApp')