import { LightningElement,api,track } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api message;
    @api pagenumber;
    @api contact;
    date = new Date();
    
    @api
    childMethod (messageFromParent, page_number) {
        this.message = messageFromParent;
        this.pagenumber = page_number;
        this.date = new Date();
        
    }

    handleEvent () { 
        const eventS = new CustomEvent('simple', {
            bubbles: true,
            composed:false,
            // detail: {
            //     message: this.message,
            //     pagenumber: this.pagenumber,
            //     staticvalue:"Joyesh Debnath"
            // }
        });
        this.dispatchEvent(eventS);
    }
}