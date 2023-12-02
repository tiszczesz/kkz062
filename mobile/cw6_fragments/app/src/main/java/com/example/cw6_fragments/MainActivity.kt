package com.example.cw6_fragments

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import androidx.fragment.app.Fragment

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val btn1 = findViewById<Button>(R.id.btn1)
        val btn2 = findViewById<Button>(R.id.btn2)
        btn1.setOnClickListener { changeFragment(FirstFragment()) }
        btn2.setOnClickListener { changeFragment(SecondFragment()) }
    }

    private fun changeFragment(fragment: Fragment){
        val framentManager = supportFragmentManager
        val fragTransaction = framentManager.beginTransaction()
        fragTransaction.replace(R.id.fragmentContainerView,fragment)
        fragTransaction.commit()
    }
}