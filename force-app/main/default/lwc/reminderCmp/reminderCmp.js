import { LightningElement, api, wire, track } from 'lwc';
import fetchTodoList from '@salesforce/apex/ReminderService.getTodos';
import { NavigationMixin } from 'lightning/navigation';

export default class ReminderCmp extends LightningElement {
    @track reminderList = [];
    @track errors;
    showModal = false;
    @track selectedRecord;
    @track selectedEditRecord;
    @track editModal = false;


    @wire(fetchTodoList)
    fetchTodoReponse ({ data, error }) {
        if (data)
        {
            let currentDate = new Date();

            this.reminderList = data.map((todo) => {
                let activityDate = todo.ActivityDate;
                let activityDateConverted = new Date(activityDate);

                return {
                    ...todo,
                    headingStyle: currentDate > activityDateConverted ? '' : 'color:red'
                }
            })
        } if (error)
        {
            console.log('Error while fetching todos !', error);
        }
    }

    handleClick (event) {
        event.preventDefault();
        this.showModal = true;
    }

    handleCancel () {
        this.showModal = false;
        this.selectedRecord = undefined;
        this.editModal = false;
        this.selectedEditRecord=undefined;

    }

    handleSuccess (event) { 
        this.showModal = false;
        this.selectedRecord = undefined;
        this.editModal = false;
        this.selectedEditRecord = undefined;
        location.reload(true);//reloads the window 
    }

    viewReminder (event) {
        event.preventDefault();
        let recordId = event.target.dataset.id;
        console.log(recordId);
        this.selectedRecord=this.reminderList.find((reminder) => { 
            return reminder.Id===recordId;
        })
        console.log('The Selected Record is :', JSON.stringify(this.selectedRecord));
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__recordPage',
        //     attributes: {
        //         recordId:event.target.dataset.id,
        //         objectApiName: 'Task',
        //         actionName: 'view'
        //     }
        // })
    }

    editReminder (event) { 
        event.preventDefault();
        this.editModal = true;
        let recordId = event.target.dataset.id;
        console.log(recordId);
        this.selectedEditRecord=this.reminderList.find((reminder) => { 
            return reminder.Id===recordId;
        })
        console.log('The Selected Record is :', JSON.stringify(this.selectedEditRecord));


            // console.log('clicked',event.target.dataset.id);
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__recordPage',
        //     attributes: {
        //         recordId:event.target.dataset.id,
        //         objectApiName: 'Task',
        //         actionName: 'edit'
        //     }
        // })
    }


}