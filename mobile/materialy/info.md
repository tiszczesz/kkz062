# Informacje Wstępne

### 1. Android Studio
https://developer.android.com/

### 2. Xamarian
https://learn.microsoft.com/pl-pl/xamarin/get-started/what-is-xamarin

### 3. React Native
https://reactnative.dev/

### 4. Flutter
https://flutter.dev/?gclid=EAIaIQobChMI16yVwb_hgQMVeUZBAh0OIAmXEAAYASAAEgLAi_D_BwE&gclsrc=aw.ds

### 5. Embarcadero
https://www.embarcadero.com/

### 6. Cordova
https://cordova.apache.org/


# Kotlin i Android studio


## System Android
Budowa warstwowa:
![Alt text](Android-system-architecture.jpg)

## Język Kotlin
https://kotlinlang.org/

kompilator kotlina:
https://otfried.org/courses/cs109/project-install.html

https://github.com/JetBrains/kotlin/releases/tag/v1.9.10

### Kotlin typy danych
https://kotlinlang.org/docs/basic-types.html


- Typy danych: https://kotlinlang.org/docs/basic-types.html


```kotlin
    val one = 1 // Int
    val threeBillion = 3000000000 // Long
    val oneLong = 1L // Long
    val oneByte: Byte = 1

    //typy zmiennoprzecinkowe
    val e = 2.7182818284 // Double
    val eFloat = 2.7182818284f // Float, actual value is 2.7182817

    //string
    val myStr = "Hello World"
    var firCharInStr = myStr[0]
    var lastCharInStr = myStr[myStr.length - 1]
    val str = "abcd"
    println(str.uppercase()) // Create and print a new String object
    println(str) // The original string remains the same

    //boolean
    val myTrue: Boolean = true
    val myFalse: Boolean = false
    val boolNull: Boolean? = null

    println(myTrue || myFalse)
    println(myTrue && myFalse)
    println(!myTrue) 

    //char
    val aChar: Char = 'a'

    println(aChar)
    println('\n') // Prints an extra newline character
    println('\uFF00')

``` 

## Typy Nulowalne
```kotlin
fun parseInt(str: String): Int? {
    // ...
}

fun printProduct(arg1: String, arg2: String) {
    val x = parseInt(arg1)
    val y = parseInt(arg2)

    // Using `x * y` yields error because they may hold nulls.
    if (x != null && y != null) {
        // x and y are automatically cast to non-nullable after null check
        println(x * y)
    }
    else {
        println("'$arg1' or '$arg2' is not a number")
    }    
}

```

### Instrukcje sterujące:
https://kotlinlang.org/docs/basic-syntax.html

```kotlin
var max = a
if (a < b) max = b

// With else
if (a > b) {
    max = a
} else {
    max = b
}

// As expression
max = if (a > b) a else b

// You can also use `else if` in expressions:
val maxLimit = 1
val maxOrLimit = if (maxLimit > a) maxLimit else if (a > b) a else b


when (x) {
    1 -> print("x == 1")
    2 -> print("x == 2")
    else -> {
        print("x is neither 1 nor 2")
    }
}

when (x) {
    in 1..10 -> print("x is in the range")
    in validNumbers -> print("x is valid")
    !in 10..20 -> print("x is outside the range")
    else -> print("none of the above")
}
```

https://kotlinlang.org/docs/control-flow.html

### Tablice w Kotlinie
https://kotlinlang.org/docs/arrays.html

### Zbiory w Kotlinie:
https://kotlinlang.org/docs/kotlin-tour-collections.html

### Klasy i obiekty
https://kotlinlang.org/docs/classes.html


```kotlin
class Person(
    val firstName: String,
    val lastName: String,
    var age: Int, // trailing comma
) { /*...*/ }


class Person(val name: String) {
    val children: MutableList<Person> = mutableListOf()
    constructor(name: String, parent: Person) : this(name) {
        parent.children.add(this)
    }
}

class Constructors {
    init {
        println("Init block")
    }

    constructor(i: Int) {
        println("Constructor $i")
    }
}
```



### Cykl życia Activity
![Alt text](activity_lifecycle.png)


### aplikacje MultiActivity

https://www.geeksforgeeks.org/creating-multiple-screen-applications-in-android/


Fragments

A Fragment represents a reusable portion of your app's UI. A fragment defines and manages its own layout, has its own lifecycle, and can handle its own input events. Fragments can't live on their own. They must be hosted by an activity or another fragment. The fragment’s view hierarchy becomes part of, or attaches to, the host’s view hierarchy.
Note: Some Android Jetpack libraries, such as Navigation, BottomNavigationView, and ViewPager2, are designed to work with fragments.
Modularity

Fragments introduce modularity and reusability into your activity’s UI by letting you divide the UI into discrete chunks. Activities are an ideal place to put global elements around your app's user interface, such as a navigation drawer. Conversely, fragments are better suited to define and manage the UI of a single screen or portion of a screen.

Consider an app that responds to various screen sizes. On larger screens, you might want the app to display a static navigation drawer and a list in a grid layout. On smaller screens, you might want the app to display a bottom navigation bar and a list in a linear layout.

Managing these variations in the activity is unwieldy. Separating the navigation elements from the content can make this process more manageable. The activity is then responsible for displaying the correct navigation UI, while the fragment displays the list with the proper layout.


![Alt text](fragment-screen-sizes.png)