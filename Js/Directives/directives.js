'use strict';
app.directive('whatIfAnalysis', function(){
    return{
        controller: ($scope, $http, $timeout)=>{
            $scope.chartLeftHeading = "Total Cost DC ($/Watt)";
            $scope.chartTopHeading = "1st Year kWH Production (Efficency Factor)";
            
            /*Ajax call to post data to live service http://httpbin.org/post. if posted, modal will show successful message else will show error */
            $scope.SendData = (tabledata)=>{
                $scope.tabledata = null;
                $scope.showSuccess = false;
                $scope.showError = false;
                $scope.loading = true;
                let dataObject = {tabledata:tabledata};
                
                //To test that this function works, change or remove the url address to a none valid one. An error message should display in modal 
                $http.post('http://httpbin.org/post', JSON.stringify(dataObject)).then(successHandler, errorHandler );
            }
            
             var successHandler = (response)=>{
                    if(response.data)
                        //set a timeout of 1 seconds to wait to show the result if the data was saved or not. 
                        $timeout(()=>{
                            $scope.loading = false;
                            $scope.showSuccess = true;
                            $scope.msg = "Data Saved Successfully!";
                        }, 2000);
                }
                
                var errorHandler = (response)=>{
                    
                    $timeout(()=>{
                        $scope.showError = true;
                        $scope.msg = "Data Was Not Saved!";
                        $scope.statusval = response.status;
                        $scope.statustext = response.statusText;
                        $scope.headers = response.headers();
                    }, 1000);
                }
        },
        transclude: true,
        restrict: 'E',
        templateUrl: 'Views/whatifanalysis.html',
        scope: { tableBodyData: "=localdata"}
    }
});

app.directive('modal', function(){
    return {
        require: "^whatIfAnalysis",
        transclude: true,
        restrict: 'E',
        templateUrl: 'Views/modal.html'
    }
});

app.directive('navigation', function(){
    return {
        scope: {},
        controller: ($scope)=>{
            $scope.navigationData = {
                titles:["Home", "About Us", "Careers", "Services"],
                projectSubtitles: ["Colusa High School Solar Project", "Houston Projects", "California Projects"], 
                dropdowns: ["Projects"],
                dropdownTitle: ["Projects"],
                dropdownHeaders: ["Future Projects"],
                dropdownSubTitles: ["Parking Garages", "Stadiums / Arenas"]
            }
        },
        transclude: true,
        restrict: 'E',
        templateUrl: 'Views/navigation.html'
    }
});

app.directive('layout', function(){
    return {
        controller: 'defaultCtrl',
        transclude: true,
        restrict: 'E',
        templateUrl: 'Views/layout.html'
    }
});

