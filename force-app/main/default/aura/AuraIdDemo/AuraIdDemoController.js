({
    doAdd : function(component, event, helper) {
        var firstNum = component.find('firstNum').get('v.value');
        var secondNum = component.find('secondNum').get('v.value');
        component.find('output').set('v.value',parseInt(firstNum) + parseInt(secondNum));
    },
    doMultiply: function (component, event, helper) { 
        var firstNum = component.find('firstNum').get('v.value');
        var secondNum = component.find('secondNum').get('v.value');
        component.find('output').set('v.value',parseInt(firstNum) * parseInt(secondNum));
    },
    doReset: function (component, event, helper) { 
        component.find('firstNum').set('v.value', undefined);
        component.find('secondNum').set('v.value', undefined);
        component.find('output').set('v.value', undefined);
    }
})