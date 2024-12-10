import { LightningElement,wire,track } from 'lwc';
import getContactsInfo from '@salesforce/apex/ContactController.getContactsInfo';

const actions=[
    {label:'Show Details' , name:'details'},
    {label:'Delete' , name:'delete'}
];

const columns=[
    {label:'Name' , fieldName:'recordURL',type:'url',
        typeAttributes:{
            label:{
                fieldName:'Name'
            },
            target:'_blank'
        }
    },
    {label:'Phone' , fieldName:'Phone',type:'phone'},
    {label:'Email' , fieldName:'Email',type:'Email'},
    {label:'Title' , fieldName:'Title',type:'text'},
    {label:'AccountId' , fieldName:'AccountId',type:'text'},
    {label:'Accout name',fieldName:'accountURL',type:'url',
    typeAttributes:{
        label:{
            fieldName:'ACCOUNT_NAME'
        },
        target:'_blank'
    }
    },
    {
            type:'button',
            fixedWidth:150,
            typeAttributes:{
                label:'View Details',
                title:'View Details',
                name:'viewDetails',
                value:'viewDetails',
                variant:'brand',
                class:'scaled-down'
            }
    },
    {type:'action' , typeAttributes:{rowActions:actions}}
    
]

export default class DatatableComponent extends LightningElement {
    contactsData;
    columnList=columns;
    error;

    @wire(getContactsInfo)
    wiredResponse({data,error}){
        if(data){
            console.log('The returned Data : \n ',data);
            //convert the data as wire method returns data that are read only . 
            let parsedData =JSON.parse( JSON.stringify(data) );
            let baseURL='https://'+location.host+'/';
            parsedData.forEach(contact=>{
                if(contact.AccountId){
                    contact.ACCOUNT_NAME=contact.Account.Name;
                    contact.ACCOUNT_INDUSTRY=contact.Account.Industry;
                    contact.recordURL = baseURL+contact.Id;
                    contact.accountURL=baseURL+contact.AccountId;

                }
            })
            
            this.contactsData=parsedData;
            
            console.log('Mdoified Data : \n ',this.contactsData);
            this.error=undefined;

        }if(error){
            this.error=error;
            this.contactsData=undefined;
        }
    }

    handleRowAction(event){
        let action=event.detail.action;
        const row=event.detail.row;
        switch(action.name){
            case 'details':
            alert('Showing details '+ JSON.stringify(row))
            break;
            case 'delete':
            alert('Deleting '+JSON.stringify(row))
            break;
        }
    }
}