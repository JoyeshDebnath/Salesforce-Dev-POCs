import { LightningElement,api } from 'lwc';
export default class Customlookuprecordlist extends LightningElement {
@api record;

handleSelect(event){

    const selectEvent=new CustomEvent(
        'select',
        {
            detail:this.record.Id
        }
    )
    this.dispatchEvent(selectEvent)
}
}