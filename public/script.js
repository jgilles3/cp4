Vue.component('star-rating', VueStarRating.default);

var app = new Vue({
  el: '.app',
  data:{
    addedName: '',
    addedComment: '',
    color1: '',
    color2: '',
    color3: '',
    comments1: [],
    comments2: [],
    comments3: [],
    rating: 0,
    totalRating: {},
    numberRatings: {},
    averageRating: {},
  },
  created: function() {
    this.getComments1();
    this.getComments2();
    this.getComments3();
  },

  computed: {

    chooseColor: function() {

       if(this.comments1.length === 0){
        this.color1 = '#90EE90';
       }
       else {
        this.color1 = 'transparent';
       }
       if(this.comments2.length === 0){
        this.color2 = '#90EE90';
       }
       else {
        this.color2 = 'transparent';
       }
       if(this.comments3.length === 0){
        this.color3 = '#90EE90';
       }
       else {
        this.color3 = 'transparent';
       }
    },
  },

  methods: {

    addComment1: function() {
      axios.post("/api/comments1/", {
  addedComment: this.addedComment,
  author: this.addedName,
  date: this.currentDate(),
  score: 0,
      }).then(response => {
  this.addedComment = "";
  this.addedName = "";
  this.getComments1();
  return true;
      }).catch(err => {
    });
  },

    addComment2: function() {
      axios.post("/api/comments2", {
  addedComment: this.addedComment,
  author: this.addedName,
  date: this.currentDate(),
  score: 0,
      }).then(response => {
  this.addedComment = "";
  this.addedName = "";
  this.getComments2();
  return true;
      }).catch(err => {
    });
  },

    addComment3: function() {
      axios.post("/api/comments3", {
  addedComment: this.addedComment,
  author: this.addedName,
  date: this.currentDate(),
  score: 0,
      }).then(response => {
  this.addedComment = "";
  this.addedName = "";
  this.getComments3();
  return true;
      }).catch(err => {
    });
  },

  getComments1: function() {
      axios.get("/api/comments1").then(response => {
  this.comments1 = response.data;
  console.log(this.comments1);
  return true;
      }).catch(err => {
      });
    },

    getComments2: function() {
      axios.get("/api/comments2").then(response => {
  this.comments2 = response.data;
  return true;
      }).catch(err => {
      });
    },

    getComments3: function() {
      axios.get("/api/comments3").then(response => {
  this.comments3 = response.data;
  return true;
      }).catch(err => {
      });
    },

    currentDate: function() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0
      var hour = today.getHours();
      var minutes = today.getMinutes();

      var yyyy = today.getFullYear();
      if(dd<10){
          dd='0'+dd;
      }
      if(mm<10){
          mm='0'+mm;
      }
      if(minutes < 10){
        minutes='0'+minutes;
      }
      var today = mm+'/'+dd+'/'+yyyy+ " " + hour + ":" + minutes;
      return today;
    },

    deleteItem1: function(item) {
       axios.delete("/api/comments1/" + item.id).then(response => {
   this.getComments1();
   return true;
       }).catch(err => {
       });
     },

     deleteItem2: function(item) {
       axios.delete("/api/comments2/" + item.id).then(response => {
   this.getComments2();
   return true;
       }).catch(err => {
       });
     },

     deleteItem3: function(item) {
       axios.delete("/api/comments3/" + item.id).then(response => {
   this.getComments3();
   return true;
       }).catch(err => {
       });
     },

     addLike1: function(item) {
      axios.put("/api/comments1/" + item.id).then(response => {
        this.getComments1();
        return true;
      }).catch(err => {
      });
     },

     addLike2: function(item) {
      axios.put("/api/comments2/" + item.id).then(response => {
        this.getComments2();
        return true;
      }).catch(err => {
      });
     },

     addLike3: function(item) {
      axios.put("/api/comments3/" + item.id).then(response => {
        this.getComments3();
        return true;
      }).catch(err => {
      });
     },
      /*addRating: function(rating) {

	  if(!this.number in this.averageRating){
	      Vue.set(app.averageRating, this.number, 0);
	      Vue.set(app.totalRating, this.number, 0);
	      Vue.set(app.numberRatings, this.number, 0);
	  }

	  this.rating = rating;
	  this.totalRating[this.number] += this.rating;
	  console.log(this.totalRating[this.number]);
	  this.numberRatings[this.number] += 1;
	  this.averageRating[this.number] = (this.totalRating[this.number]/this.numberRatings[this.number]);
	  console.log(this.averageRating[this.number]);
  },*/
  },

});
