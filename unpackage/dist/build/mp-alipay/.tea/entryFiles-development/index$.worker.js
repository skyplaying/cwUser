if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app');
require('../../components/uni-popup/uni-popup');
require('../../components/mc-image-upload/mc-image-upload');
require('../../components/w-picker/w-picker');
require('../../components/uni-icon/uni-icon');
require('../../components/uni-rate/uni-rate');
require('../../pages/index/index');
require('../../pages/test/test');
require('../../pages/order/getService/getService');
require('../../pages/order/evaluate/evaluate');
require('../../pages/order/oderDetail/oderDetail');
require('../../pages/order/myOrder/myOrder');
require('../../pages/mine/my/my');
require('../../pages/mine/withdraw/withdraw');
require('../../pages/mine/uniQuestion/uniQuestion');
require('../../pages/mine/myAddress/myAddress');
require('../../pages/userAdvise/userAdvise');
require('../../pages/login/login');
require('../../pages/register/register');
require('../../pages/shopCenter/addShopInfo/addShopInfo');
require('../../pages/shopCenter/shopCenter/shopCenter');
require('../../pages/shopCenter/shoperInfo/shoperInfo');
require('../../pages/order/orderCenter/orderCenter');
require('../../pages/mine/myShop/myShop');
require('../../pages/mine/Stores/Stores');
require('../../pages/mine/updateRecord/updateRecord');
require('../../pages/mine/transOrder/transOrder');
require('../../pages/indexModule/getMoneyCode/getMoneyCode');
require('../../pages/indexModule/goodsManage/goodsManage');
require('../../pages/indexModule/proxyGoods/proxyGoods');
require('../../pages/indexModule/staffManage/staffManage');
require('../../pages/indexModule/switchShop/switchShop');
require('../../pages/index1/index1');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}