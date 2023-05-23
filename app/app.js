const myModule = angular.module("myModule", ["ngRoute"]);

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
	"$http",
	function ($scope, $http) {
		$http.get("data/cars.json").then(
			function (response) {
				$scope.cars = response.data;
			},
			function (error) {
				console.log(error.statusText);
			}
		);

		$scope.addCar = () => {
			$scope.cars.push({
				name: $scope.newCar.name,
				price: $scope.newCar.price,
			});

			$scope.newCar.name = "";
			$scope.newCar.price = "";
			$("#addNewCarModal").modal("hide");
		};

		$scope.removeCar = (car) => {
			console.log($scope.cars.indexOf(car));
			const thiscarIndex = $scope.cars.indexOf(car);
			$scope.cars.splice(thiscarIndex, 1);
		};
	},
]);
