package com.example.cw3_iguana

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.cw3_iguana.databinding.ActivityMainBinding
import java.lang.StringBuilder

class MainActivity : AppCompatActivity() {
    private lateinit var bind:ActivityMainBinding;
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        bind = ActivityMainBinding.inflate(layoutInflater);
        setContentView(bind.root)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
        bind.btnGenerate.setOnClickListener {
            val size:Int = bind.etSize.text.toString().toInt();
            val result = PrimaryNumbers.getPrimaryNumbers(size)
            val sb:StringBuilder = StringBuilder();
            for (number in result){
                sb.append("$number ");
            }
            bind.tvResult.text = "$size liczb pierwszych: ${sb.toString()}";
        }
    }
}