({
    register: function (component, event, helper) {
        //get the event 
        var evt = component.getEvent('myevent')
        evt.setParams({
            "flag":true
        })
        evt.fire();
    }
})