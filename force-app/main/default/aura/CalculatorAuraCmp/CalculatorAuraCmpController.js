({
	calculate : function(component, event, helper) {
		//var firstnumber=component.find('fnum').get('v.value');
        //var secondnumber=component.find('snum').get('v.value');
        //var result=component.find('res');
        //result.set('v.value',firstnumber+secondnumber);
        var fnumber=component.get('v.firstnumber');
        var snumber=component.get('v.secondnumber');
        var result=fnumber+snumber;
        component.set('v.result',fnumber+snumber);
        
	}
})