var Count = function(){}
Count.prototype.getSummation = function(data, size, groupName){
    var result = [];
    var count = 0;

    if ((size < 0) || (data[0][groupName]) == undefined){
        return this.throwError
    };
    if (size == 0){
        result = 0;
    } else {
        for (i = 0; i < data.length; i++){
            count = count + data[i][groupName];
            if ((i == (data.length - 1)) || ((i + 1) % size == 0)){
                result.push(count)
                count = 0;
            }
        }
    };
    return result;
}
Count.prototype.throwError = function(){
    throw new Error();
}
module.exports._test = {
    "Count": Count
}