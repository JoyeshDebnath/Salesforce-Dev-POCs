trigger AccountTrigger on Account (after insert) {

    
    AccountTriggerDispatcher.dispatch(Trigger.operationType);
}