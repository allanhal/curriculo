var app = angular.module('app')

app.controller('genController', function ($scope) {
    $scope.generateFile = function () {
        var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "hello world.txt");
    };
});