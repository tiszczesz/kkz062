package com.example.cw2_view

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast


class MainActivity : AppCompatActivity() {
    private var counter = 0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val obrazek = findViewById<ImageView>(R.id.zyrafa_id)
        val textInfo = findViewById<TextView>(R.id.text_id)
        val btnReset = findViewById<Button>(R.id.btnReset)
        val btn2 = findViewById<Button>(R.id.btn2)
        btn2.setOnClickListener {
          //  it->{
                NewFunction()
            textInfo.text = "żyrafa jest kliknięta $counter razy"
       // }
        }
        obrazek.setOnClickListener {
            counter++
            textInfo.text = "żyrafa jest kliknięta $counter razy"
            Toast.makeText(this@MainActivity,"Hello from Toast!!"+btn2.text.toString(),Toast.LENGTH_LONG)
                .show()
        }
        btnReset.setOnClickListener {
            if(counter>0) {
                counter=0;
                textInfo.setText("żyrafa jest kliknięta $counter razy")
            }
        }

    }
    public fun NewFunction(){
        counter--
    }

}