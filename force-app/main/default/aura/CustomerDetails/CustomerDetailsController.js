({
    display : function(component, event, helper) {
        var acc = event.getParam('accnt');
        console.log('JD:',acc)
        component.set('v.acc', acc);
        console.log('inside the Custokmer  details component:',component.get('v.acc'));
        component.set('v.flag', true);

    }
})