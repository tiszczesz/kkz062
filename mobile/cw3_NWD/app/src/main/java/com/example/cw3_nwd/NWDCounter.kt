package com.example.cw3_nwd

class NWDCounter {
//    private var _a:Int
//    private var _b:Int;
//        var A:Int
//
//        get() {return _a;}
//        set(value) {
//            _a = if (value>0)value else -value
//        }
//
//    var B:Int
//        get() {return _b}
//        set(value) {
//            if (value>0)value else -value}
//    init {
//        this._a = a;
//        this._b = b;
//    }
    public fun GetRekNWD(a:Int,b:Int):Int {
        if(b==0)return a;
        return GetRekNWD(b,a%b);
    }
    public fun GetIterNWD(a:Int,b:Int):Int {
        var aa = a;
        var bb = b;
        var temp = aa;
        while(bb!=0){
            temp = aa;
            aa = bb;
            bb = temp%bb;
        }
        return aa;
    }
}