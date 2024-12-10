import { LightningElement,api } from 'lwc';

export default class ParentComponent extends LightningElement {
    
    
    handleSimpleEvent (event) { 
        // const message = event.detail.message;
        // const pagenumber = event.detail.pagenumber;
        // const staticvalue = event.detail.staticvalue;

        // console.log(message + '    ' + pagenumber+'   '+staticvalue);
        
        // alert('Event handled Successfully !'); 
        console.log(event.target.message)
        console.log(event.target.pagenumber);
        console.log(event.target.staticvalue);
    }

    handleClick () { 
        this.template.querySelector('c-child-component').childMethod('After API Function',120);
    }
}