package com.example.cw1

fun main(){
    //cw1_arrays()
    cw2_Lists()
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

fun cw2_Lists(){
    val list1 = listOf<String>("czerwony","biały","żółty")
    for (color in list1){
        print(color+" ")
    }
    //list1[1] = "sdddd"
    //list1.add("fff");
    val znak = 'a';
    val list2 = mutableListOf<Int>(3,5,6,99,8)

    for (number in list2){
        print("$number ")
    }
    list2.add(45);
    list2[2] = 999999
    list2.removeAt(3)
    for (number in list2){
        print("$number ")
    }
    //wykonac 2
   // aplikacje proszaca uzytkownika ilosc imion
    //potem do tablicy wpisywac imiona
    // to samo z listami i kolorami
    //uzytkownik podaj tak dlugo az napise null
    //obiekty i klasy w Kotlinie
    //zapoznac sie z projektem w android studio
    // empty VIEW activity
}