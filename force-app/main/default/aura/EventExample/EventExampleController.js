({
    doInit:	function(component,event,helper){
      component.set('v.text','Value of text is set for first time ~') 
    },
	doChange : function(component, event, helper) {
		alert('Value changed !');
	},
    changeValue: function(component,event,helper){
        component.set('v.text','new value changed !');
    }
})