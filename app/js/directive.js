app.directive('myform', function(){
	// Runs during compile
	return {
		name: 'myForm',
		restrict: 'E',
		templateUrl: 'app/include/form.html'
	};
});