const myModule = angular.module("myModule", []);

// fire before application run
myModule.config(async function () {});

// fire when application run
myModule.run(function () {});

myModule.controller("FruitsController", [
    "$scope",
    function ($scope) {
        $scope.fruits = ["Apple", "Banana", "Durian", "Rambutan"];
    },
]);

myModule.controller("UserController", [
    "$scope",
    function ($scope, users) {
        console.log(users);

        const newArr = [{ name: "Ali" }, { name: "Alia" }];
        $scope.users = newArr;
    },
]);
