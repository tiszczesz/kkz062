package com.example.cw4_multi_activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        Log.d("LIFE","onCreate")
    }

    override fun onStart() {
        super.onStart()
        Log.d("LIFE","onStart")
    }

    override fun onResume() {
        super.onResume()
        Log.d("LIFE","onResume")
    }

    override fun onPause() {
        super.onPause()
        Log.d("LIFE","onPause")
    }

    override fun onStop() {
        super.onStop()
        Log.d("LIFE","onStop")
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d("LIFE","onDestroy")
    }
}