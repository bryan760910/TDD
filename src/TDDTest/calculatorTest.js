var test = require('unit.js');
var calculator = require('./calculator.js')

describe('商品清單運算測試', function(){

    var ProductDetail = function() {
        this.ProductDetailList = [
            {"id": 1,   "cost": 1,  "revenue": 11,  "sellPrice": 21},
            {"id": 2,   "cost": 2,  "revenue": 12,  "sellPrice": 22},
            {"id": 3,   "cost": 3,  "revenue": 13,  "sellPrice": 23},
            {"id": 4,   "cost": 4,  "revenue": 14,  "sellPrice": 24},
            {"id": 5,   "cost": 5,  "revenue": 15,  "sellPrice": 25},
            {"id": 6,   "cost": 6,  "revenue": 16,  "sellPrice": 26},
            {"id": 7,   "cost": 7,  "revenue": 17,  "sellPrice": 27},
            {"id": 8,   "cost": 8,  "revenue": 18,  "sellPrice": 28},
            {"id": 9,   "cost": 9,  "revenue": 19,  "sellPrice": 29},
            {"id": 10,  "cost": 10, "revenue": 20,  "sellPrice": 30},
            {"id": 11,  "cost": 11, "revenue": 21,  "sellPrice": 31},
        ]
    };

    ProductDetail.prototype.getList = function(){
        return this.ProductDetailList;
    };

    it('Cost 每三筆取一組     結果為 6,15,24,21', function(){
        //arrange
        var target = new calculator._test.Count();
        var product = new ProductDetail();
        var expected = [6, 15, 24, 21];

        //act
        var actual = target.getSummation(product.getList(), 3, "cost");

        //assert
        test.array(actual).is(expected);
    }); 
    
    it('Revenue 每四筆取一組  結果為 50, 66, 60', function(){
        //arrange
        var target = new calculator._test.Count();
        var product = new ProductDetail();
        var expected = [50, 66, 60];

        //act
        var actual = target.getSummation(product.getList(), 4, "revenue");

        //assert
        test.array(actual).is(expected);
    }); 
    it('筆數輸入負數，預期會拋 ArgumentException', function(){
        var target = new calculator._test.Count();
        var product = new ProductDetail();
        test
            .exception(target.getSummation(product.getList(), -1, "revenue")).is(new Error())
    });
    it('尋找的欄位若不存在，預期會拋 ArgumentException', function(){
        var target = new calculator._test.Count();
        var product = new ProductDetail();
        test
            .exception(target.getSummation(product.getList(), 3, "test")).is(new Error())
    });
    it('筆數若輸入為0, 則傳回0', function(){
        //arrange
        var target = new calculator._test.Count();
        var product = new ProductDetail();
        var expected = 0;
        //act
        var actual = target.getSummation(product.getList(), 0, "revenue");

        //assert
        test.number(actual).is(expected);
        
    });
  
});