({
	doCreateMap : function(component, event, helper) {
		var map=[];
        for(var i=0;i<=10;i++){
            map.push({
                key:i,
                value:'Test '+i
            });
        }
        
        component.set("v.mapVar",map);
	}
})