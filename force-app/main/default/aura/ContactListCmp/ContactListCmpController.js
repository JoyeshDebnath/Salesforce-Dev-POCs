({
    doInit : function(component, event, helper) {
        var action = component.get('c.getAllContacts');
        action.setParams({
            AccountId:component.get('v.recordId')
        })
        action.setCallback(this, function (response) {
            var responseValue = response.getReturnValue();
            component.set('v.contactList', responseValue);
            
        }, 'SUCCESS')
        $A.enqueueAction(action,false);
    },
    doRedirect: function (component, event, helper) { 
        var recordId = event.getSource().get('v.name');
        var navEvt = $A.get("e.force:navigateToSObject");
    navEvt.setParams({
        "recordId": recordId,
        "slideDevName": "related"
    });
    navEvt.fire();
    },

    handleComponentEvent:function(component,event,helper){
        alert('test....')
    }
})