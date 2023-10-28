package com.example.cw1

fun main(){
    cw1_arrays()
}
fun cw1_arrays():Unit{
    val t1 = arrayOf(2,5,6,7,8);
    
    //val t4 = emptyArray<String>()
     val t4 = Array<String?>(10){null}
    println("t4 rozmiar: ${t4.size}")
    val t2 = Array<String?>(6){null}
    t1[3] = 666

   // t1[20] = 56
    for (elem in t1){
        print(elem.toString()+" ")
    }
    for (elem in t2){
        println(elem)
    }
    println(t1.size)
}