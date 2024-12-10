({
    showData : function(component, event, helper) {
        
        
        console.log("first name:", component.get('v.firstname'));
        console.log('last name:', component.get('v.lastname'));
        console.log('Email:', component.get('v.email'));
        console.log('Age :',component.get('v.age'))
    },
    clearData: function (component, event, helper) { 
        component.set('v.firstname', null);
        component.set('v.lastname', null);
        component.set('v.email', null);
        component.set('v.phone', null);
        component.set('v.age', null);

    }
})