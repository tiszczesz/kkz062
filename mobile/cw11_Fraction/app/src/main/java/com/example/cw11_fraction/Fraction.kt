package com.example.cw11_fraction

class Fraction(private var _numerator:Int,private var _denumerator:Int) {

     var numerator :Int
        get() {
            return _numerator;
        }
        set(value) {
            _numerator = value
        }
     var denumerator:Int
        get() {return _denumerator}
        set(value) {
            _denumerator = if(value!=0) value else 1
        }
    init {
        numerator = _numerator;
        denumerator = _denumerator;
    }
    fun getNwd(num:Int,denum:Int):Int {
        if(denum==0) return num;
        return getNwd(denum,num%denum)
    }
    fun getCommon(frac:Fraction):Int{
        return this.denumerator*frac.denumerator
    }

    fun simplifier():Fraction {
        val common = getNwd(this.numerator,this.denumerator);
        var signed = if((numerator*denumerator)>0) 1 else -1
        if (common==1) return Fraction(this.numerator,this.denumerator);
        return Fraction(signed*(this.numerator/common),this.denumerator/common)
    }
    fun MultiFractions(f:Fraction):Fraction{
        val result = Fraction(
            this.numerator*f.numerator,
            this.denumerator*f.denumerator
            )
        return result.simplifier()
    }
    fun AddFractions(f:Fraction):Fraction{
        val common = getCommon(f);
        val result = Fraction(
            this.numerator*f.denumerator+f.numerator*denumerator,
            common
            );
        return result.simplifier()
    }
    fun Revers():Fraction{
        return Fraction(this.denumerator,this.numerator)
    }
    fun DividedFractions(f:Fraction):Fraction{
        return this.MultiFractions(f.Revers())
    }
    fun SubtractionFractions(f:Fraction):Fraction{
        val common = getCommon(f);
        val result = Fraction(
            this.numerator*f.denumerator-f.numerator*denumerator,
            common
        );
        return result.simplifier()
    }
}