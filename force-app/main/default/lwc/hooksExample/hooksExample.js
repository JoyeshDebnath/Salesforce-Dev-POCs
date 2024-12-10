import { LightningElement } from 'lwc';

export default class HooksExample extends LightningElement {
    name = 'Joyesh';

    constructor() { 
        super();
        console.log('Inside constructor..');
        this.name += '  Debnath';
    }
    connectedCallback () { 
        console.log('Inside the connected callback..');
    }

    disconnectedCallback () {
        console.log('Inside the disconnected callback..');
    }

    renderedCallback () { 
        console.log('Inside the renderd callback ...');
    }
/*
    render () { 
        return 
    }
*/
    errorCallback (error, stack) { 
        console.error(error)
    }


}