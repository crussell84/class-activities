function example(string, _func){
    console.log(string);
    _func();
}

function example2(boolean, _func){
    if (boolean){
        _func();
    }
}

function example3 (_func, val){
    
    return function(){
        return _func(val);
    };
}