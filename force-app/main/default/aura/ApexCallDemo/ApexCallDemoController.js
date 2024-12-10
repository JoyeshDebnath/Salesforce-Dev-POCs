({
    invokeApex : function(component, event, helper) {
        var action = component.get('c.displayName');
        
        $A.enqueueAction(action);
    }
})