package com.example.cw2_view

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView


class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val obrazek = findViewById<ImageView>(R.id.zyrafa_id)
        val textInfo = findViewById<TextView>(R.id.text_id)
        val btnReset = findViewById<Button>(R.id.btnReset)
        var counter = 0;
        obrazek.setOnClickListener {
            counter++
            textInfo.setText("żyrafa jest kliknięta $counter razy")
        }
        btnReset.setOnClickListener {
            if(counter>0) {
                counter=0;
                textInfo.setText("żyrafa jest kliknięta $counter razy")
            }
        }

    }

}