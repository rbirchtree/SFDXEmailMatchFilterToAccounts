List<String> domains = new List<String>{'gmail.com', 'yahoo.com','hotmail.com'};

//regex for looking at domain name split on periods

// api called to look up account id by domain name

Id accountId = [SELECT Id FROM Account WHERE Contact = :contactId].Id;


for(String domain : domains) {
    // Write value to the debug log
    System.debug(domain);
    //if match domain in list don't add to an account.
    // else add to account
}


