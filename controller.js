var app=angular.module("myApp",[]);

app.controller("myController",["$scope","exprovider","servicer","orgFactory","orgData","orgName",function($scope,exprovider,servicer,orgFactory,orgData,orgName){
	$scope.message=exprovider.name;""
	$scope.message=exprovider.getName();
	$scope.productName=servicer.pname;
	$scope.brand=servicer.brand;
	console.log("Organisation Data from ctlr:"+OrgData);
	console.log(orgFactory);
}])

app.config(["exproviderProvider","orgData",function(exproviderProvider,orgData){
console.log(exproviderProvider.$get().name);
console.log(exproviderProvider.$get().getName());
console.log(OrgData);
}])

app.run(["servicerProvider",function(servicerProvider){
		console.log(servicerProvider.pname);
		console.log(orgName);

}])

