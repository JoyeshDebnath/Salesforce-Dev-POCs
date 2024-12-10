import { LightningElement,api } from 'lwc';
import searchProductModal from  'c/searchProduct';

export default class ModalDemo extends LightningElement {



    async handleClick(){
        const res=await searchProductModal.open({
            size:'large',
            description:'Search Product Modal',
            label:'Search Product',
            content:'Simple Content from Parent Component !'
        })

        console.log('Result :',res);
    }
}