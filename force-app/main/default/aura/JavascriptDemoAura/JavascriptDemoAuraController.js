({
    doInit : function(component, event, helper) {
        var car = {
            "name": "CAR A",
            "model": "SUZUKI",
            "color":"RED"
        }
        component.set('v.car', car);
        console.log(component.get('v.car'))
    }
})