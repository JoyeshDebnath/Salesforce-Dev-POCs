({
    doInit : function(component, event, helper) {
            component.find('contactRecordCreator').getNewRecord(
                "Contact",
                null,//recordtype id 
                false,
                $A.getCallback(function(){
                    var rec=component.get('v.contact');
                    var error=component.get("v.contactError");
                    if(error || rec==null){
                        console.log('Error occurred !  ',error)
                    }else{
                        console.log('The new record created !',rec.apiName);
                    }
                })
            );
    },


    handleSaveContact:function(component,event,helper){
        if(helper.validateContactForm(component)){
            component.set("v.simpleContact.AccountId",component.get("v.simpleAccount.Id"));
            component.get('contactRecordCreator').saveRecord(function(saveResult){
                if(saveResult.state==='SUCCESS' || saveResult.state=='DRAFT'){
                    var showToast=$A.get("e.force:showToast");
                    showToast.setParams({
                        "title":"saved record successfully !",
                        "message":"the new record was created .. "
                    })

                    

                    $A.get("e.force:closeQuickAction").fire();
                    showToast.fire();
                }
                else if(saveResult.state=='INCOMPLETE'){
                    console.log('user is offline , device doesnt support drafts /..')
                }
                else if(saveResult.state==='ERROR'){
                    console.log('erorr while saving ',JSON.stringify(saveResult.error))
                }
            })
        }
    },
    handleCancel: function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    },

})