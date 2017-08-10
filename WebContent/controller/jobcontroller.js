/**
 * job controller
 */
app.controller('JobController', function($scope, $location, JobService) {
	$scope.showdetails=true;
	$scope.message=''
	
	$scope.saveJob = function() {
		JobService.saveJob($scope.job).then(function(response) {
			console.log('entering success function')
			$location.path('/getalljobs')
		}, function(response) {
			console.log('entering error callback function')
			$scope.message=response.data.message
			if (response.status==401)
				location.path('/login')
			if (response.status==500)
				$location.path('/savejob')

		})

	}
	
	function getAllJobs(){
		
		$scope.jobs=JobService.getAllJobs().then(function(response){
			$scope.jobs=response.data;
	}, function(response) {
		$scope.message=response.data.message
		location.path('/login')
	})
		
	}
	

	$scope.getJobDetail=function(id) {
		$scope.showdetails=true;
		JobService.getJobById(id).then(function(response){
			$scope.job=response.data;
			},function(response){
				console.log(response.status);
		})
		
	}
	
	getAllJobs;
})
