import React, { Component } from 'react';
import marked from 'marked'
import './App.css';
import { initialState } from './initialState'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	state = {
		text: initialState
	};

	handleChange = (e) => {
		this.setState({
			text: e.target.value
		});
	};
  
	render() {
      const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (
      <div>
        <h2 className="text-center m-4 text-white"> Convert your Markdown </h2>
        <div className="row">
          <div className="col-6">
            <h6 className="text-center text-white"> Enter your Markdown: </h6>
            <textarea
              className="form-control p-2"
              id="editor"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6">
            <h6 className="text-center text-white"> See the Result:</h6>
            <div
              id="preview"
              className="preview rounded p-2"
              dangerouslySetInnerHTML={{ __html: markdown }}
            />
          </div>
        </div>
      </div>
    );
	}
}

export default App;
