public with sharing class OpportunityTriggerDispatcher {
    public static void dispatch(System.TriggerOperation operationType){

        switch on operationType{
            when BEFORE_INSERT{
                OpportunityTriggerHandler.calculateDiscountedPrice(Trigger.New);
            }
            
        }
    }
}