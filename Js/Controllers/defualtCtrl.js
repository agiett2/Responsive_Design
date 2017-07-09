'use strict';
app.controller('defaultCtrl', ['$scope', '$http', function ($scope, $http){
    $scope.headerText1 = "REINVENTING ENERGY";
    $scope.headerText2 = "RENEWABLE SOLAR FINANCE INVESTMENT";
    
    $scope.subHeading1= "Sub Heading 1";
    $scope.subHeading2= "Sub Heading 2";
    $scope.subHeading3= "Sub Heading 3";
    
    $scope.subHeadingText1 = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.";
    $scope.subHeadingText2 = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.";
    $scope.subHeadingText3 = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.";
    
    $scope.text = "This entire app is responsive to the screen size. This is using Bootstraps grid layout. The layout will remain as is (assuming that you are viewing this from a screen 766 px or greater). Once screen size is less than 768px the layout will collapse And this text will move to the top and the analysis chart will move below this text. The sub heading area will also collapse to adapt to screen size. ";
    
     /*Restful call to retreive table data. 
    Not being used since I changed the way the table data is generated in order to get the desired css styling of the inner box*/
    $http.get('Data/bodyData.json').then(successHandler, errorHandler);
    
    var successHandler = (response)=>{
        $scope.bodyData = response.data; 
    }
    
    var errorHandler = (response)=>{
        $scope.bodyData = response.data; 
    }
    //Use to assign data for the table body
    $scope.tableBodyData = {
        headerRow: [11.41, 12.84, 14.26, 15.69, 17.11], 
        //when using ng-repeat, cannot have repeated values. used null (object) and string "null" as place holder.  
        firstRow: [null, "null",945, 1063, 1181, 1299, 1417 ],
        secondRow: ["$1.60", "-$1,512,000.00", "8.01%", "9.34%","10.61%", "11.81%", "12.97%" ],
        thirdRow: ["$1.69", "-$1,596,000.00", "7.47%", "8.76%","9.98%", "11.15%", "12.28%"],
        forthRow: ["$1.78", "-$1,680,000.00", "6.96%", "8.22%","9.41%", "10.55%", "11.64%"],
        fithRow: ["$1.87", "-$1,764,000.00", "6.50%", "7.73%","8.89%", "9.99%", "11.05%"],
        sixthRow: ["$1.95", "-$1,848,000.00", "6.06%", "7.26%","8.39%", "9.47%", "10.50%"]
    };
}]);