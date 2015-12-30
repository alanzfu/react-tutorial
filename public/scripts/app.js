var CommentBox = React.createClass({
  render: function(){
    return (
      <div className = "commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    return (
      <div className="commentList">
        Hello world! I am a commentList
      </div>
    );
  }
});



var CommentForm = React.createClass({
  render: function(){
    return (
      <div className="commentForm">
        <form>
          <input placeholder="your name">
          </input>
          <input placeholder="what's up">
          </input>
        </form>
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function(){
    return (
      
    )
  }
})

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
) 
