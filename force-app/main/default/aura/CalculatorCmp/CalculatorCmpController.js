({
	doAdd : function(component, event, helper) {
		var val1=parseInt(component.get('v.val1'));
        var val2=parseInt(component.get('v.val2'));
        var res=val1+val2;
        component.set('v.output',res);
     
	},
    doSubtract : function(component, event, helper) {
		var val1=parseInt(component.get('v.val1'));
        var val2=parseInt(component.get('v.val2'));
        var res=val1-val2;
        component.set('v.output',res);
     
	},
    doMultiply : function(component, event, helper) {
		var val1=parseInt(component.get('v.val1'));
        var val2=parseInt(component.get('v.val2'));
        var res=val1*val2;
        component.set('v.output',res);
        
	},
    doDivide : function(component, event, helper) {
		var val1=parseInt(component.get('v.val1'));
        var val2=parseInt(component.get('v.val2'));
        var res=val1/val2;
        component.set('v.output',res);
     
	}
})