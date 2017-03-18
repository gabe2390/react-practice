import React from 'react';

 export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: ['Yerp son!', "First pass!!!!"]
        }
    }

    render() {
        var messageNodes = this.state.messages.map(x => <p>{x}</p>)
        return <div>{messageNodes}</div>
    }

}