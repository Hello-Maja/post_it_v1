var Board = function(el) {
  this.$el = el;  // $("#board") <-- Do this in your dom.ready callback
  this.postIts = [];
  var self = this;
   // console.log(this);
   //   console.log(Board);
  //       console.log(el);
     console.log(this.$el);
  // Responabilities
  // 1. Manage an array of post its
  // 2. Capture click events and create post its on click

  // Rules
  // 1. All events must be bound to this.$el or some child
  // 2. All dom manipluation/queries must be done via this.$el

  // Create a post it
  this.$el.on("click", function(e) { 
    console.log(e)
     var left = e.clientX;
     var top = e.clientY;

     // Two steps:
     // 1. Create a PostIt model
     // 2. Create a PostItView: passing a reference to the model, left & top.
     var model = new PostIt();
     var view = new PostItView(model, left, top);
     self.$el.append(view.$el);
     console.log(view.$el);
   })
};
 
 var PostIt = function() {
  this.contents = "";
}

var PostItView = function(model, left, top) {
  this.model = model;
  this.left = left;
  this.top = top;

  this.$el = $('<div style="position:absolute; left: '+ left +'; top: '+ top +'" class="post-it"><div class="header"><a>X</a></div><p contenteditable="true" class="content" ></p></div>').draggable({handle: ".header"});
  this.button = this.$el.find(".header a")
  this.body = this.$el.find(".content")
  console.log(this.button)

//Remove PostIt by clicking on header - ideally should happen when clicking on X in header
  var self = this;
  this.button.on('click', function(e) {
    e.stopPropagation();
    self.$el.remove();
  })

//Attempting to add text to PostIt
  this.body.on('click', function(e) {
    console.log("clicked on body");
    e.stopPropagation();
    // self.body.html("WTF");
  })
};
 
$(function() {
  // This code will run when the DOM has finished loading
  new Board($("#board"));
});

