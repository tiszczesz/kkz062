package com.example.cw3_iguana

import org.junit.Test

import org.junit.Assert.*

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
class ExampleUnitTest {
    @Test
    fun addition_isPrimal() {
        val actual = PrimaryNumbers.isPrimaryNumber(5);
        assertEquals(true, actual)
    }
    @Test
    fun primal_numbers_size(){
        val actual = PrimaryNumbers.getPrimaryNumbers(4);
        assertEquals(4,actual.size)
    }
    @Test
    fun is_corret_numbers(){
        val actual = PrimaryNumbers.getPrimaryNumbers(4);
        assertEquals(2,actual[0])
        assertEquals(3,actual[1])
        assertEquals(5,actual[2])
        assertEquals(7,actual[3])
    }
}