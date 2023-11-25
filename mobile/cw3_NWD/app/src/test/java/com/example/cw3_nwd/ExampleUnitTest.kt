package com.example.cw3_nwd

import org.junit.Test

import org.junit.Assert.*

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
class ExampleUnitTest {
    @Test
    fun addition_isCorrect() {
        assertEquals(3, 2 + 1)
    }
    @Test
    fun NWDRec_IsCorrect(){
        val nwd:NWDCounter = NWDCounter();
        val actual = nwd.GetRekNWD(10,8)
        assertEquals(2,actual)
    }
    @Test
    fun NWDRec_IsIncorrect(){
        val nwd:NWDCounter = NWDCounter();
        val actual = nwd.GetRekNWD(12,6)
        val isCorrect = (actual!=6)
        assertFalse(isCorrect)
    }
    @Test
    fun NWDITER_IsCorrect(){
        val nwd = NWDCounter();
        val actual = nwd.GetIterNWD(120,18)
        assertEquals(6,actual)
    }
}