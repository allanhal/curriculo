var app = angular.module('app')

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/resume', {
            templateUrl: 'pages/resume.html',
            controller: 'resumeController'
        })
        .when('/jobs', {
            templateUrl: 'pages/jobs.html',
            controller: 'jobsController'
        })
        .when('/table', {
            templateUrl: 'pages/table.html',
            controller: 'tableController'
        })
        .when('/personal', {
            templateUrl: 'pages/personal.html',
            controller: 'mainController'
        })
        .when('/gen', {
            templateUrl: 'pages/gen.html',
            controller: 'genController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});