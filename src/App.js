import React, { Component } from 'react';
import LocationMap from './components/LocationMap';

export class App extends Component {
    render(){
        return(
            <div>
             <LocationMap/>
            </div>
        );
    }
}

/*
export default GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY,
})(App);
*/

export default App;