function when(condition, callback){
    if(typeof condition != "function"){
        throw new Error("Condition Must Be A Function");
    }
    if(typeof callback != "function"){
        throw new Error("Callback Must Be A Function");
    }
    handler(condition, callback);
}

if(typeof module != 'object'){
    window.when = when;
} else {
    module.exports = when;
}

var nextTick;

if(process.nextTick){
    nextTick = setImmediate;
} else {
    nextTick = function(fn){
        setTimeout(fn, 0);
    }
}

function handler(c, cb){
    if(c()){
        cb();
    } else {
        nextTick(function(){ handler(c, cb); });
    }
}