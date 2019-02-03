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
	this.time = "Time";
  }

  render() {
	let currentTime = new Date().toLocaleTimeString();
	return <div>{this.props.mytime} {this.time}: {currentTime}</div>;
  }

  mick() {

  }
}

function tick() {
	let elem = document.body;
	ReactDOM.render(
		<Clock mytime="React"/>
		,elem
	);
}

setInterval(tick, 1000);
