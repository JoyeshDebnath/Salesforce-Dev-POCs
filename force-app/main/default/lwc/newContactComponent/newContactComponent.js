import { LightningElement,wire,api,track } from 'lwc';

export default class NewContactComponent extends LightningElement {


    handleNext(event){
        event.preventDefault();
        const nextEvt=new CustomEvent(
            'next',
            {
                detail:{
                    showContact:false,
                    showAccount:false,
                    showOpportunity:true,
                    showProduct:false
                }
            }
        )
        
        this.dispatchEvent(nextEvt);

    }

    handlePrevious(event){
        event.preventDefault();
        const prevEvt=new CustomEvent(
            'previous',
            {
                detail:{
                    showContact:false,
                    showAccount:true,
                    showOpportunity:false
                }
            }
        )
        this.dispatchEvent(prevEvt);
    }
}