public with sharing class SampleApexController {
    @AuraEnabled
    public static void displayName(){
        System.debug('My name is : Joyesh Debnath');
    }
}