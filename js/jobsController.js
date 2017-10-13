var app = angular.module('app')

app.controller('jobsController', function ($scope) {
    $scope.calculateDateDiff = function (startString, endString) {
        return moment(startString).to(endString, true);
    }

    $scope.calculateDateDiffFromNow = function (startString) {
        return moment(startString).fromNow(true);
    }
});