package com.example.cw3_nwd

class NWDCounter(a:Int=10,b:Int=25) {
    private var _a:Int
    private var _b:Int;
        var A:Int

        get() {return _a;}
        set(value) {
            _a = if (value>0)value else -value
        }

    var B:Int
        get() {return _b}
        set(value) {
            if (value>0)value else -value}
    init {
        this._a = a;
        this._b = b;
    }

}