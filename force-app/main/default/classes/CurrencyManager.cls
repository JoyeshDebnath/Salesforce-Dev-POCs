public class CurrencyManager {

    public static void getCurrency(Map<String,String> currencyMap){
        currencyMap = currencyMap ?? new Map<String,String>();
        System.debug('map passed here :'+currencyMap);
        currencyMap.put('USA','DOLLAR');
        currencyMap.put('UK','POUND');
        currencyMap.put('JAPAN','YEN');
        currencyMap.put('INDIA','INR');
        
        System.debug('The map values are --------'+currencyMap);
        System.debug('The currency of Japan:'+currencyMap.get('JAPAN'));
        if(currencyMap.containsKey('Bangladesh')){
            System.debug('The currency of bangladesh :'+currencyMap.get('Bangladesh'));
        }else{
            currencyMap.put('Bangladesh','Taka');
            System.debug(currencyMap);
        }
        
        currencyMap.clear();
        
    }
}