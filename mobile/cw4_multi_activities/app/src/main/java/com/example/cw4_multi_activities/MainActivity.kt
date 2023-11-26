package com.example.cw4_multi_activities

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val btn1 = findViewById<Button>(R.id.btn1)
        val btn2 = findViewById<Button>(R.id.btn2)

        btn1.setOnClickListener {
            val intent = Intent(this,SecondActivity::class.java);
            startActivity(intent)
        }
        btn2.setOnClickListener {
            val intent=Intent(this,ThirdActivity::class.java)
            startActivity(intent)
        }
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