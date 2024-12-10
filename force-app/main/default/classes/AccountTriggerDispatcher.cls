public with sharing class AccountTriggerDispatcher {
    
    public static void dispatch(System.TriggerOperation operationType){
        switch on operationType {
            when BEFORE_INSERT{

            }
            when AFTER_INSERT{
                AccountTriggerHandler.createTaskRecordHandler(Trigger.New);
            }
            when BEFORE_UPDATE{

            }
            when AFTER_UPDATE{

            }
            when else{

            }
        }
    }
}