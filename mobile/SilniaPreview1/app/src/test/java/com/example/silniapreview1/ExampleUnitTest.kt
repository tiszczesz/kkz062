package com.example.silniapreview1

import org.junit.Test

import org.junit.Assert.*

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
class ExampleUnitTest {
    @Test
    fun iter_isCorrect() {
        val s = Silnia();
        val actual = s.Iter(2)
        assertEquals(2, actual)
    }

    @Test
    fun rec_isCorrect() {
        val s = Silnia();
        val actual = s.Rec(5)
        assertEquals(120, actual)
    }
}