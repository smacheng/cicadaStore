PointMall.controller("VolumeInputCtrl",function($state,$rootScope,$ionicPopup,$scope,Util,MallSev){

    //获得当前选择的商品
    var  volume = Util.getSgObj("volume");
    $scope.post = volume;


});