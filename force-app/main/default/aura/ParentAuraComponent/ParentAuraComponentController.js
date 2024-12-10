({
    doClick : function(component, event, helper) {
        var childCmp = component.find('childComponent')
        childCmp.child('I am paramater1 ');
    },
    doHandle: function (component, event, helper) { 
        alert('I am in parent component')
    }
})