({
    doInit : function(component, event, helper) {
        component.find('contactRecordCreator').getNewRecord(
            'Contact',
             null,
             false,
             $A.getCallback(function(){
                var rec=component.get('v.newContact');
                var error=component.get('v.newContactError');
                if(error || rec===null){
                    console.log('Error initilisiing the record ',error);
                    return ;
                }
                console.log('Record template initialised !!!',rec.apiName);
             })
        )
    },

    handleSaveContact:function(component,event,helper){

        component.find('contactRecordCreator').saveRecord(function(saveResult){
            if(saveResult.state=='SUCCESS' || saveResult.state=='DRAFT'){
                var toast=$A.get('e.force:showToast');
                toast.setParams({
                    "title":"Saved Successfully !",
                    "message":"The record was saved !"
                })
                toast.fire();
            }
            else if(saveResult.state==='INCOMPLETE'){
                console.log('The draft is inmcmoplete .. ')
            }
            else if(saveResult.state=='ERROR'){
                console.log('Something went wrong !',saveResult.error);
            }
        })
    },
    handleDeleteRecord:function(component,event,helper){
        component.find('contactRecordCreator').deleteRecord(
            $A.getCallback(function(deletedResult){
                if(deletedResult.state=='SUCCESS' || deletedResult.state=='DRAFT'){
                    console.log('Deleted successfully !!!');
                }
                else if(deletedResult.state=='INCOMPLETE'){
                    console.log('user offline ! device doesnt support draft !')
                }else if(deletedResult.state=='ERROR'){
                    console.log('Error occurred ', JSON.stringify(deletedResult.error))
                }
            })
        );
    },

    handleRecordUpdated:function(component,event,helper){
        var eventParams=event.getParams();
        if(eventParams.changeType==='CHANGED'){
            //changed record 
            console.log('record is changed !!');
        }
        else if(eventParams.changeType==='LOADED'){
            console.log('Loaded the record ..');
        }
        else if(eventParams.changeType==='REMOVED'){
            //deleted the record 
            var toastEvent=$A.get('e.force:showToast');
            toastEvent.setParams({
                "title":"Deleted record !",
                "message":"Deleted record successfully !"
            })
            toastEvent.fire();
        }
        else if(eventParams.changeType==='ERROR'){
            console.log('error ')
        }
    }
})