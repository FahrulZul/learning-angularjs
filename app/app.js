const myModule = angular.module("myModule", ["ngRoute"]);

const carsData = [
	{ name: "Nissan GTR", price: 23000, imgUrl: "./assets/nissan-gtr.png" },
	{ name: "Toyota Supra", price: 34000, imgUrl: "./assets/toyota-supra.png" },
	{ name: "Audi TT", price: 26000, imgUrl: "./assets/audi-tt.png" },
	{
		name: "Nissan Fairlady",
		price: 26000,
		imgUrl: "./assets/nissan-fairlady.png",
	},
];

// fire before application run
myModule.config([
	"$routeProvider",
	function ($routeProvider) {
		$routeProvider
			.when("/home", {
				templateUrl: "views/home.html",
				controller: "CarsController",
			})
			.when("/users", {
				templateUrl: "views/userList.html",
				controller: "CarsController",
			})
			.otherwise({
				redirectTo: "/home",
			});
	},
]);

// fire when application run
myModule.run(function () {});

myModule.controller("CarsController", [
	"$scope",
	function ($scope) {
		$scope.cars = carsData;

		$scope.addCar = function () {
			console.log("hello world");
			// $scope.cars.push({
			// 	name: $scope.newCar.name,
			// 	price: $scope.newCar.price,
			// });
		};
	},
]);
