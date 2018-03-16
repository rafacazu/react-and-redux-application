import React, {Prototypes} from 'react';

class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <p>header comes here...</p>
                {this.props.children}
            </div>
        );
    }
}

App.prototype = {
    children: Prototypes.Object.isRequired
};

export default App;