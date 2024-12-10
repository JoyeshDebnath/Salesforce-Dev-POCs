({
    doAdd: function(component, event, helper) {
        var number1 = component.get('v.firstNum');
        var number2 = component.get('v.secondNum');
        var res = parseInt(number1) + parseInt(number2);
        console.log(res)
        component.set("v.res", res);
    },
    doSubtract: function (component, event, helper) {
        var number1 = component.get('v.firstNum');
        var number2 = component.get('v.secondNum');
        var res = parseInt(number1) - parseInt(number2);
        component.set('v.res', res);
    },
    doMultiply: function (component, event, helper) {
        var number1 = component.get('v.firstNum');
        var number2 = component.get('v.secondNum');
        var res = parseInt(number1) * parseInt(number2);
        component.set('v.res', res);
    }
    ,

    doDivide: function (component, event, helper) {
        var number1 = component.get('v.firstNum');
        var number2 = component.get('v.secondNum');
        var res = parseInt(number1) / parseInt(number2);
        component.set('v.res', res);
    }
})