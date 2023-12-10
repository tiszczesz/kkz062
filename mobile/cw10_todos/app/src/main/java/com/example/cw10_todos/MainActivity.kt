package com.example.cw10_todos

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import com.example.cw10_todos.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var bind:ActivityMainBinding
    val pririty = arrayListOf<Pririty>(
        Pririty.LOW,
        Pririty.MIDDLE,
        Pririty.HIGH,
        Pririty.ALERT
    )
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        bind = ActivityMainBinding.inflate(layoutInflater)
        setContentView(bind.root)
        val todos = arrayListOf<Todo>(
            Todo("poranne czynności",Pririty.LOW),
            Todo("spacer z psem",Pririty.HIGH),
            Todo("zjeść",Pririty.MIDDLE)
            );
        val adapterSpiner = ArrayAdapter<Pririty>(this,
            android.R.layout.simple_spinner_dropdown_item,pririty)
        bind.spPriritety.adapter = adapterSpiner;
        val listAdapter = ArrayAdapter<Todo>(this,
            android.R.layout.simple_list_item_1,todos)
        bind.lvTodos.adapter = listAdapter;
        
    }
}