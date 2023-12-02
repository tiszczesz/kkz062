package com.example.cw5_x_o

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.example.cw5_x_o.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var bind:ActivityMainBinding;
    var isCross = true;
    private lateinit var buttons:ArrayList<Button>
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        bind = ActivityMainBinding.inflate(layoutInflater);
        setContentView(bind.root)

        buttons = arrayListOf<Button>(
            bind.btn1,bind.btn2,bind.btn3,
            bind.btn4,bind.btn5,bind.btn6,
            bind.btn7,bind.btn8,bind.btn9
        );
        ClearButtons();
        SetOnClickonButtons()

    }
    private fun ClearButtons(){
        for ( b in buttons){
            b.text=""
        }
    }
    private fun SetOnClickonButtons(){
        for (b in buttons){
            b.setOnClickListener {
                if(isCross) {
                    (it as Button).text = "X"
                    isCross = false
                } else {
                    (it as Button).text = "O"
                    isCross = true
                }
            }
        }
    }
}