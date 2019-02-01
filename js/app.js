window.onload = function() {
	let body = document.getElementsByTagName('body')[0];
	let elem = document.createElement('div'); 
	elem.innerHTML = "My DIV";
	body.appendChild(elem);

	/*
	installReact();

	class Clock extends React.Component {
	  render() {
		return (
		  <div>
			<h1>Hello, world!</h1>
			<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
		  </div>
		);
	  }
	}

	function tick() {
	  ReactDOM.render(
		<Clock date={new Date()} />,
		document.getElementById('root')
	  );
	}

	setInterval(tick, 1000);
	//*/
}

function installReact() {
	/*
	let head = document.getElementsByTagName('head')[0];
	let script = document.createElement('script');
	script.src = 'https://unpkg.com/react@16/umd/react.production.min.js';
	head.appendChild(script);

	script = document.createElement('script');
	script.src = 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js';
	head.appendChild(script);
	//*/

	let head = document.getElementsByTagName('head')[0];
	let script = document.createElement('script');
	script.src = 'js/react.production.min.js';
	head.appendChild(script);

	script = document.createElement('script');
	script.src = 'js/react-dom.production.min.js';
	head.appendChild(script);
}

