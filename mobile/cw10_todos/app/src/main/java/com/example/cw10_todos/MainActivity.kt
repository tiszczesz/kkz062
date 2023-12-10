package com.example.cw10_todos

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.Toast
import com.example.cw10_todos.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var bind: ActivityMainBinding
    val pririty = arrayListOf<Pririty>(
        Pririty.LOW,
        Pririty.MIDDLE,
        Pririty.HIGH,
        Pririty.ALERT
    )

    // var isInsert = true;
    var selectedId = -1;
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        bind = ActivityMainBinding.inflate(layoutInflater)
        setContentView(bind.root)
        val todos = arrayListOf<Todo>(
            Todo("poranne czynności", Pririty.LOW),
            Todo("spacer z psem", Pririty.HIGH),
            Todo("zjeść", Pririty.MIDDLE)
        );
        val adapterSpiner = ArrayAdapter<Pririty>(
            this,
            android.R.layout.simple_spinner_dropdown_item, pririty
        )
        bind.spPriritety.adapter = adapterSpiner;
        val listAdapter = ArrayAdapter<Todo>(
            this,
            android.R.layout.simple_list_item_1, todos
        )
        bind.lvTodos.adapter = listAdapter;
        bind.btnAddTodo.setOnClickListener {
            val item = bind.etAddTodo.text.toString().trim()
            val pririty = bind.spPriritety.selectedItem as Pririty;
            if (item.isEmpty()) {
                Toast.makeText(
                    this@MainActivity, "Błędne dane",
                    Toast.LENGTH_SHORT
                ).show();
                return@setOnClickListener
            }
            val myTodo = Todo(item, pririty);
            if (selectedId != -1) {
                todos[selectedId] = myTodo;
                selectedId=-1;
            } else {
                listAdapter.add(myTodo)
            }
            listAdapter.notifyDataSetChanged()
            bind.etAddTodo.setText("");
            bind.btnAddTodo.text = "Dodaj"
        }
        bind.lvTodos.setOnItemClickListener { parent, view, position, id ->
            todos.removeAt(id.toInt());
            listAdapter.notifyDataSetChanged()
        }
        bind.lvTodos.setOnItemLongClickListener { adapterView, view, position, id ->
            bind.etAddTodo.setText(todos[id.toInt()].Content)
            bind.spPriritety.setSelection(
                adapterSpiner
                    .getPosition(todos[id.toInt()].MyPririty)
            )
            bind.btnAddTodo.text = "Zmień"
            //isInsert = false;
            selectedId = id.toInt();
            return@setOnItemLongClickListener true
        }
    }
}