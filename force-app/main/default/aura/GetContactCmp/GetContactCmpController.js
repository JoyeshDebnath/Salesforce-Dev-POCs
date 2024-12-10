({
	getContactData : function(component, event, helper) {
		var action = component.get("c.getCons");
        action.setCallback(this,function(response){
            var state=response.getState();//get the state "SUCCESS" "FAIL" etc 
            if(state==='SUCCESS'){
           		
                var returnedData=response.getReturnValue();//  getReturnValue()   returns the response data 
                component.set("v.getConList",returnedData);
                
            }
           
           
        })
        //this line calls the function 👇
        $A.enqueueAction(action);
	}
    ,
    openCreateContactPopup : function(component,event,helper){
       component.set('v.openModal',true);
       component.set('v.editForm',false);
    },
    
    closeModal: function(component,event,helper){
        component.set('v.openModal',false);
    },
    
    saveContact: function(component,event,helper){
        var firstname=component.find('FName').get('v.value');
        var lastname=component.find('LName').get('v.value');
        var email=component.find('email').get('v.value');
        var phone=component.find('phone').get('v.value');
        
        var action = component.get("c.insertCon");
        action.setParams({
            firstname:firstname,
            lastname:lastname,
            phone:phone,
            email:email
        });
        action.setCallback(this,function(response){
            if(response.getState()=='SUCCESS'){
                //refresh the coimponent 👇👇
                $A.get('e.force:refreshView').fire();
                component.set('v.openModal',false);
            }
            else{
                alert('Something went Wrong !');
            }
        })
        $A.enqueueAction(action);
    },
    
    editConHandler : function (component,event,helper){
        component.set('v.openModal',true);
        component.set('v.editForm',true);
        var contactId=event.currentTarget.dataset.conid;
        component.set('v.conId',contactId);
        var action= component.get('c.getContactById');
        action.setParams({
            'Id':contactId
        });
        action.setCallback(this,function(response){
            if(response.getState()=='SUCCESS'){
                component.set('v.getcont',response.getReturnValue());
                //console.log('Contact got :', component.get('v.getcont'));
            }
        });
        $A.enqueueAction(action);
    }
    ,
    editContactHandler : function (component,event,helper){
        var firstname=component.find('EFName').get('v.value');
        var lastname=component.find('ELName').get('v.value');
        var email=component.find('Eemail').get('v.value');
        var action = component.get('c.updateContact');
        action.setParams({
            'id':component.get('v.conId'),
            'firstname':firstname,
            'lastname':lastname,
            'email':email
        });
        action.setCallback(this,function(response){
            if(response.getState()=='SUCCESS'){
                alert('Contact Updated Successfully!');
                component.set('v.openModal',false);
                component.set('v.editForm',false);
                $A.get('e.force:refreshView').fire();
            }
        })
        $A.enqueueAction(action);
    }
    ,
    deleteConHandler : function (component,event,helper){
        var contactid=event.currentTarget.dataset.conid; 
        var action=component.get('c.deleteContact');
        action.setParams({
            'Id':contactid
        })
        action.setCallback(this,function(response){
            if(response.getState()=='SUCCESS'){
                $A.get('e.force:refreshView').fire();
            }
        })
        $A.enqueueAction(action);
    }
})