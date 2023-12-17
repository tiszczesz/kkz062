package com.example.cw11_fraction

import org.junit.Test

import org.junit.Assert.*


class ExampleUnitTest {
    @Test
    fun addition_isCorrect() {
        assertEquals(4, 2 + 2)
    }

    @Test
    fun non_zero_denumerator(){
        val frac = Fraction(12,0);
        assertTrue(frac.denumerator!=0)
    }
    @Test
    fun denumerator_one(){
        val frac = Fraction(12,0);
        assertTrue(frac.denumerator==1)
    }
    @Test
    fun denumerator_other(){
        val frac = Fraction(12,7);
        assertTrue(frac.denumerator==7)
    }
    @Test
    fun getNWD(){
        val frac = Fraction(-12,-8);
        assertEquals(4,frac.getNwd(12,8))
    }
    @Test
    fun getNWD2(){
        val frac = Fraction(6,18);
        assertEquals(6,frac.getNwd(6,18))
    }
    @Test
    fun getNWD3(){
        val frac = Fraction(12,7);
        assertEquals(1,frac.getNwd(12,7))
    }

    @Test
    fun getCommonDenumerator(){
        val frac1 = Fraction(4,3)
        val frac2 = Fraction(1,2)
        assertEquals(6,frac1.getCommon(frac2))
    }

    @Test
    fun useSimplifier1(){
        val frac1 = Fraction(2,4)
        val actual = frac1.simplifier();
        assertEquals(1,actual.numerator);
        assertEquals(2,actual.denumerator);
    }
    @Test
    fun useSimplifier2(){
        val frac1 = Fraction(3,4)
        val actual = frac1.simplifier();
        assertEquals(3,actual.numerator);
        assertEquals(4,actual.denumerator);
    }

    @Test
    fun multiFrac1(){
        val frac1 = Fraction(3,4)
        val frac2 = Fraction(1,2)
        val actual = frac1.MultiFractions(frac2);
        assertEquals(3,actual.numerator)
        assertEquals(8,actual.denumerator)
    }
    @Test
    fun multiFrac2(){
        val frac1 = Fraction(2,4)
        val frac2 = Fraction(1,2)
        val actual = frac1.MultiFractions(frac2);
        assertEquals(1,actual.numerator)
        assertEquals(4,actual.denumerator)
    }

    @Test
    fun addFrac1(){
        val frac1 = Fraction(2,4)
        val frac2 = Fraction(1,2)
        val actual = frac1.AddFractions(frac2);
        assertEquals(1,actual.numerator)
        assertEquals(1,actual.denumerator)
    }
    @Test
    fun addFrac2(){
        val frac1 = Fraction(1,3)
        val frac2 = Fraction(3,4)
        val actual = frac1.AddFractions(frac2);
        assertEquals(13,actual.numerator)
        assertEquals(12,actual.denumerator)
    }
    @Test
    fun Subtraction(){
        val frac1 = Fraction(1,3)
        val frac2 = Fraction(1,2)
        val actual = frac1.SubtractionFractions(frac2);
        assertEquals(-1,actual.numerator)
        assertEquals(6,actual.denumerator)
    }
}