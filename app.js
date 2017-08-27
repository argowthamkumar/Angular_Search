'use strict';
var app = angular.module("appComponent", []);

app.directive('gridComponent', function(){
    var grid = "<div class='searchComponent'>"+
                   "<input type='text' name='searchBroker' id='searchBroker' placeholder='Search by Broker Name or Client Name' ng-model='brokerName' />"+
                "</div>"+
                "<div class='gridContainer'>"+
                    "<h2>Grid Container</h2>"+
                    "<ul>"+
                        "<li class = 'policyDetailsHeader'>"+
                            "<div class='policyNumber'>Policy#</div>"+
                            "<div class='brokerName'>Broker Name</div>"+
                            "<div class='clientName'>Client Name</div>"+
                        "</li>"+
                        "<li ng-repeat = 'policy in policyDetails | filter:brokerName'>"+
                            "<div class='policyNumber'>{{policy.policyNo}}</div>"+
                            "<div class='brokerName'>{{policy.brokerName}}</div>"+
                            "<div class='clientName'>{{policy.clientName}}</div>"+
                        "</li>"+
                        "<li ng-repeat = 'policy in policyDetails | filter:!brokerName'>"+
                            "<p>Sorry No Results</p>"+
                        "</li>"+
                    "<ul>"+
                "</div>";
    var linkFunction = function($scope, elem, attr){
        $scope.policyDetails = [
           {
               "policyNo": "00001",
               "brokerName": "Gowtham",
               "clientName": "Vinod"
           },
           {
               "policyNo": "00002",
               "brokerName": "John",
               "clientName": "Joe"
           },
           {
               "policyNo": "00003",
               "brokerName": "Ian",
               "clientName": "Harry"
           },
           {
               "policyNo": "00004",
               "brokerName": "Ian",
               "clientName": "Karin"
           },
           {
               "policyNo": "00005",
               "brokerName": "John",
               "clientName": "Vitis"
           },
           {
               "policyNo": "00006",
               "brokerName": "Ian",
               "clientName": "gowtham"
           },
           {
               "policyNo": "00007",
               "brokerName": "John",
               "clientName": "Harry"
           },
           {
               "policyNo": "00008",
               "brokerName": "John",
               "clientName": "Karin"
           },
           {
               "policyNo": "00009",
               "brokerName": "Ian",
               "clientName": "Vinod"
           },
           {
               "policyNo": "00010",
               "brokerName": "John",
               "clientName": "Vinifera"
           }
       ];

    }
    return {
        restrict: "AEC",
        template: grid,
        link: linkFunction
    }
});
