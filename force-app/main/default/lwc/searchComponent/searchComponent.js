import { LightningElement,wire,api,track } from 'lwc';
export default class SearchComponent extends LightningElement {
@track searchVal='';


    handleChange(event){
        this.searchVal=event.target.value;


        const searchEvent=new CustomEvent(
            'search',
            {
                detail:this.searchVal
            }
        )
        this.dispatchEvent(searchEvent);
    }
}