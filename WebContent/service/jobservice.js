/**
 * job service
 */

app.factory('JobService', function($http) {
	var jobService = {}
	jobService.saveJob = function(job) {
		console.log(job)
		return $http.post("http://localhost:9005/backend_project2/savejob", job)
	}
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:9005/backend_project2/getalljobs")
	}
	
	jobService.getJobById=function(id) {
		console.log(id)
		return $http.get("http://localhost:9005/backend_project2/getjobbyid/"+id)
	}
	
	return jobService;

})