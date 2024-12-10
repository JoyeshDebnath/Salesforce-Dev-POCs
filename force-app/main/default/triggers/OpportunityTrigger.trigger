trigger OpportunityTrigger on Opportunity (before insert) {
    OpportunityTriggerDispatcher.dispatch(Trigger.operationType);
}