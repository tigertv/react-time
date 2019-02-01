'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
	this.time = "Times";
  }

  render() {
	//return e('div', null, 'HHH');
	//return "dddd";
	//return React.createElement('div', null, new Date().toLocaleTimeString());
	//return e('div', null, "Time: "+new Date().toLocaleTimeString());
	return e('div', null, `${this.props.mytime} Time: `+new Date().toLocaleTimeString());
	/*
	e("<div>"+
	"<h1>Hello, world!</h1>"+
	"<h2>It is {this.props.date.toLocaleTimeString()}.</h2>"+
	"</div>")
	;
	//*/
  }

  mick() {

  }
}

//let myclock = e(Clock);

//*
function tick() {
	//let elem = document.getElementById('root');
	let elem = document.body;
	//ReactDOM.render(myclock,elem);
	ReactDOM.render(e(Clock, {mytime: "React"}),elem);
}

//*/
setInterval(tick, 1000);

//const domContainer = document.querySelector('#like_button_container');
//ReactDOM.render(e(LikeButton), domContainer);
//ReactDOM.render(e(Clock), domContainer);
//ReactDOM.render(e('div', null, 'Hello World'), domContainer);

