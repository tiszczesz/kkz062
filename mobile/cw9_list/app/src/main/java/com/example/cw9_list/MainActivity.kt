package com.example.cw9_list

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.Toast
import com.example.cw9_list.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var bind:ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        val myFriends = arrayListOf<String>("Adam Nowak",
            "Teresa Maresa",
            "Urszula Gula")
        val listAdapter = ArrayAdapter<String>(this,
            android.R.layout.simple_list_item_1,myFriends)

        super.onCreate(savedInstanceState)
        bind = ActivityMainBinding.inflate(layoutInflater)
        setContentView(bind.root)
        bind.listFriends.adapter = listAdapter
        bind.btnAddFriend.setOnClickListener {
            val item = bind.etAddFriend.text.toString().trim()
            if(item.isEmpty()) return@setOnClickListener
            myFriends.add(item)
            listAdapter.notifyDataSetChanged()
            bind.etAddFriend.setText("")
        }

        bind.listFriends.setOnItemClickListener { parent, view, position, id ->
            val selectedItem = parent.getItemAtPosition(position) as String
            val itemPos = parent.getItemIdAtPosition(position)
            Toast.makeText(this@MainActivity,
                "element na pozycji $itemPos o wartości: $selectedItem",
                Toast.LENGTH_SHORT).show()
        }
    }
}