import axios from "axios";

export default {
  // get NYT articles
  /* 
    {
      q: "yankees",
      begin_date: "2001"
    } 
  */
  nytSearch: function(query) {
    return axios.get("/api/nyt", {params: query})
  },

  // save article to mongo
  /* 
    {
      url: "path/to/nyt",
      title: "sports!",
      date: "20010808 date stuff"
    }
  */
  articleSave: function(articleInfo) {
    return axios.post("/api/articles", articleInfo)
  },

  // retrieve all saved articles from mongo
  articleRetrieve: function() {
    return axios.get("/api/articles")
  },

  // article delete
  articleDelete: function(id) {
    return axios.delete(`/api/articles/${id}`)
  }
}