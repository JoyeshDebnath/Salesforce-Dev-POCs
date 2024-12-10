({
    calculateSalary : function(component, event, helper) {
        var salary = component.get('v.salary');
        var tax = component.get('v.tax');
        var netIncome = salary - ((tax / 100) * salary);
        component.set('v.netIncome', netIncome);
    },

    resetFields: function (component, event, helper) { 
        component.set('v.firstname', null);
        component.set('v.lastname', null);
        component.set('v.salary', null);
        component.set('v.tax', null);
        component.set('v.netIncome', null);
    }
})