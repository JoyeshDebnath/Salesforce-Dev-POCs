({
    submit : function(component, event, helper) {
        var evtValue = event.getParam('flag');
        component.set('v.flag', evtValue);
    }
})