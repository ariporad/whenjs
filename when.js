function when(condition, callback){
    if(typeof condition != "function"){
        throw new Error("Condition Must Be A Function");
    }
    if(typeof callback != "function"){
        throw new Error("Callback Must Be A Function");
    }
    handler(c, cb);
}

if(typeof exports != 'object'){
    window.when = when;
} else {
    exports = when;
}

var nextTick;

if(process.nextTick){
    nextTick = process.nextTick;
} else {
    nextTick = function(fn){
        setTimeout(fn, 0);
    }
}

function handler(c, cb){
    if(condition()){
        callback();
    } else {
        nextTick(function(){ handler(c, cb); });
    }
}