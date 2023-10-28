package com.example.cw1


import java.util.Scanner
import kotlin.random.Random


fun main(){
   // cw1()
    cw2()
}
fun cw2(){
    println(isPrimal(55))
    print("Podaj zakres liczb: ")
    val scaner = Scanner(System.`in`);
    var limit = scaner.nextInt()
    limit = if(limit<0) -limit else limit
    GenerPrimal(limit)
}
fun GenerPrimal(limit:Int){
    if(limit<2) println("Brak liczb pierwszych w przedziale (0,$limit)")
    for (i in 2..limit){
        if(isPrimal(i)) print("$i ")
    }
    println("wszystkie liczby pierwsze w przedziale (0,$limit)")
}
fun isPrimal(number:Int):Boolean {
    if(number<=1) return false;
    var i = 2
    while (i*i<=number){
        if(number%i==0) return false;
        i++
    }
    return true;
}


fun cw1(){
    val rnd = Random;
//    for(i in 0..10){
//        println("i = $i")
//    }
    var number = 12;
    while(number!=0){
        number = rnd.nextInt(0,20)
        print(number.toString()+" ")
    }
}
fun test(){
    val a = "test";
    //a = "dddd";
    var b = "ggg";
    b = "fffff";

}