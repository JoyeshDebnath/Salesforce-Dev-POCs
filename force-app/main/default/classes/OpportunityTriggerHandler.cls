public with sharing class OpportunityTriggerHandler {
    
    public static void calculateDiscountedPrice(List<Opportunity> oppList){

        for(Opportunity opp:oppList){
            if(opp.Discount__c!=null && opp.Amount!=null){
                Decimal discount=(opp.Discount__c*opp.Amount)/100;
                Decimal discountedPrice=(opp.Amount-discount);
                opp.Discounted_Price__c=discountedPrice;
            }
        }
    }
}