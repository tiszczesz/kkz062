package com.example.cw3_nwd

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.Toast
import com.example.cw3_nwd.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var bind:ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        bind = ActivityMainBinding.inflate(layoutInflater);
        setContentView(bind.root)
        val choiceData = arrayListOf<String>("rekurencyjnie","iteracyjnie")
        val adapterSpin =
            ArrayAdapter<String>(this,
                android.R.layout.simple_spinner_dropdown_item,choiceData);
        bind.spinner.adapter = adapterSpin
        bind.btnOblicz.setOnClickListener {
            try {
                val A = bind.editA.text.toString().toInt()
                val B = bind.editB.text.toString().toInt()
                val choice = bind.spinner.selectedItem as String
                val nwd = NWDCounter();
                if(choice=="rekurencyjnie"){
                    val result = nwd.GetRekNWD(A,B)
                    bind.tvResult.text = "NWD_REK($A,$B) = $result";
                }else{
                    val result = nwd.GetIterNWD(A,B)
                    bind.tvResult.text = "NWD_ITER($A,$B) = $result";
                }

            }catch (ex:NumberFormatException){
                Toast.makeText(this@MainActivity,"Błędne dane",Toast.LENGTH_LONG)
                    .show()
            }catch (ex2:Exception){
                Toast.makeText(this@MainActivity,ex2.message,Toast.LENGTH_LONG)
                    .show()
            }

        }
    }
}