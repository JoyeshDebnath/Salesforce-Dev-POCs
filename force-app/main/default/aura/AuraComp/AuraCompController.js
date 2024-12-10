({
	toggleFlag : function(component, event, helper) {
		component.set('v.flag',!component.get('v.flag'));
	},
    createMap : function(component,event,helper){
        var map=[];
        for(var i=0;i<20;i++ ){
            map.push({
                key:i,
                value:'Test '+i
            })
        }
        component.set('v.mapVar',map);
    }
})