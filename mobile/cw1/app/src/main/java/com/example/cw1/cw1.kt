package com.example.cw1

fun main() {
    println("Hello, world!!!")
    println("dddddddd");
    print("dddddd>>>>>");
    print("dddddd");
    val a = "12"; // const int a = 12;
    //a = 45;
    var b = 56;  // int b = 56
    b = 77;
    println("b = $b")
    val result = a + b;
    println("\n"+Hello("Alojzy"));
    println(result);
}
fun Hello(message:String):String{
    return "Hello: "+message;
}
fun Test(){
    Hello("dddd")
}
