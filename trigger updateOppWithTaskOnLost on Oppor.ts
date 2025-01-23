trigger updateOppWithTaskOnLost on Opportunity (after update){

if (Opportunity.StageName = 'Closed Lost') {
	List<Task> tasks = new List<Task>();
			for(Opportunity opportunity : Trigger.New) {
					Task task = new Task();
					task.Subject = 'Follow up';
					task.Description = 'Don\\'t forget to follow the data.';
					task.Priority = 'Medium';
					task.WhatId = opportunity.Id;
					
					tasks.add(task);
			}

			insert tasks;
		}
}

//Write a trigger that creates a follow-up Task for an Account if an Opportunity is lost.
trigger OpportunityTrigger on Opportunity (before update) {


	for(Opportunity opp : trigger.new) {
	
			if(opp.StageName == 'Closed Lost') {
			List<Task> tasks = new List<Task>();
							for(Opportunity opportunity : Trigger.New) {
											Task task = new Task();
											task.Subject = 'Follow up';
											task.Description = 'Do not forget to follow the data.';
											task.WhatId = opportunity.Id;
											
											tasks.add(task);
							}
	
							insert tasks;
					}
	
	
			}
	
	
	}
	
