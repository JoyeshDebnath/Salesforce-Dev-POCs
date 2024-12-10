({
	doInit : function(component, event, helper) {
		var action=component.get('c.getContacts');
        action.setParams({
            accntId:component.get('v.recordId'),
        })
        
        action.setCallback(this,function(response){
            var state=response.getState();
            
            if(state=='SUCCESS'){
                var responseValue=response.getReturnValue();
                console.log("state",state);
                console.log("Returned Value",responseValue);
                component.set('v.contactList',responseValue);
            }
            
        },'SUCCESS');
        $A.enqueueAction(action);
    },
    doRedirect: function (component, event, helper) { 
        var eventSource = event.getSource();
        var id = eventSource.get('v.name');
        // alert('ID :' + id);
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": id,
            "slideDevName":"detail"
        })
        navEvt.fire();
    }
})