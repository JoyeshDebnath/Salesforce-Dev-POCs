({
	doInit : function(component, event, helper) {
		var action = component.get("c.getTenContacts");
        //Optional : 
        action.setParams({
            accountId:component.get('v.recordId'),
        })
        action.setCallback(this,function(response){
                    var returnedValue=response.getReturnValue();
            		console.log('returned value : ',returnedValue);
            		component.set('v.contactList',returnedValue);
         },'SUCCESS');
        
        $A.enqueueAction(action,false);
	},
    
    doRedirect: function(component,event,helper){
        var eventSource=event.getSource();
        var Id=eventSource.get('v.name');
        //alert(Id);
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": Id,
          "slideDevName": "details"
        });
        navEvt.fire();
    }
})