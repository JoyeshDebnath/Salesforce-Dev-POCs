public with sharing class AccountTriggerHandler {
    
    public static void createTaskRecordHandler(List<Account> accList){
        List<Task> tasklist=new List<Task>();
        for(Account acc:accList){
            Task t=new Task();
            t.OwnerId=acc.OwnerId;
            t.Subject='Created From Apex Trigger';
            t.Description='Created From Apex Trigger';
            t.ActivityDate	=System.today().addDays(7);
            t.Priority='High';
            t.WhatId=acc.Id;
            tasklist.add(t);
        }
        insert tasklist;
    }
}