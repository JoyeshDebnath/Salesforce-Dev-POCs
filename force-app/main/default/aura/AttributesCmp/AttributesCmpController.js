({
	doClick : function(component, event, helper) {
		alert(component.isValid());
        alert(component.getName());
        console.log(component.get('v.whom'));
        component.set('v.whom','Joyesh Debnath Legend');
        var age=component.find('input').get('v.value');
        
        console.log("AGE=",age);
	}
})