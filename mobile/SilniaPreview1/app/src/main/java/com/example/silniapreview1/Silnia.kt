package com.example.silniapreview1

class Silnia {
    public fun Iter(n:Int):Int{
        if(n<=1) return 1;
        var result = 1;
        for (i in 1..n){
            result *= i;
        }
        return result
    }
    public fun Rec(n:Int):Int {
        if (n<=1) return 1;
        return Rec(n-1)*n;
    }
}