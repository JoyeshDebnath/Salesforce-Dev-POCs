import { LightningElement } from 'lwc';
export default class AccountWithContactAndOppProgressCmp extends LightningElement {
    currentStep="Account";
    showContact=false;
    showAccount=true;
    showOpportunity=false;
    showProduct=false;
    stepValues=[
        {label:'Account',value:'Account'},
        {label:'Contact',value:'Contact'},
        {label:'Opportunity',value:'Opportunity'},
        {label:'Product',value:'Product'}
    ]

    handleNext(evt){
        evt.preventDefault();
        this.prepareCurrentStep(evt);
    }

    handlePrevious(evt){
        evt.preventDefault();
        this.prepareCurrentStep(evt);
    }

    prepareCurrentStep(event){
        this.showContact=event.detail.showContact;
        this.showAccount=event.detail.showAccount;
        this.showOpportunity=event.detail.showOpportunity;

        if(this.showAccount){
            this.currentStep='Account';
        }else if(this.showContact){
            this.currentStep='Contact';
        }
        else if(this.showOpportunity){
            this.currentStep='Opportunity'
        }
    }

    
}