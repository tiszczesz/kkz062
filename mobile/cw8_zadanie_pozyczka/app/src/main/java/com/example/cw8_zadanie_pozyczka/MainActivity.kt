package com.example.cw8_zadanie_pozyczka

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.SeekBar
import android.widget.SeekBar.*
import android.widget.Toast
import com.example.cw8_zadanie_pozyczka.databinding.ActivityMainBinding
import java.lang.NumberFormatException

class MainActivity : AppCompatActivity() {
    private lateinit var bind:ActivityMainBinding;
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        bind = ActivityMainBinding.inflate(layoutInflater)
        setContentView(bind.root)
        bind.seekBar.setOnSeekBarChangeListener(object:
            OnSeekBarChangeListener{
            override fun onProgressChanged(p0: SeekBar?, p1: Int, p2: Boolean) {
                    bind.tvMonth.text = p1.toString()
            }

            override fun onStartTrackingTouch(p0: SeekBar?) {

            }

            override fun onStopTrackingTouch(p0: SeekBar?) {
                try {
                    val sum= bind.etSum.text.toString().toFloat()
                    val procent = bind.etProcent.text.toString().toFloat()
                    val month = p0?.progress ?: 0;
                    val total = sum + (procent/12/100 )* month*sum//do poprawienia petla
                    bind.etResult.text = String.format("%.2f", total)
                }catch (ex:NumberFormatException){
                    Toast.makeText(this@MainActivity,"Błędne dane",Toast.LENGTH_SHORT)
                        .show()
                }
            }
        })
    }
}