package com.example.cw9_list

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.cw9_list.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var bind:ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        bind = ActivityMainBinding.inflate(layoutInflater)
        setContentView(bind.root)
    }
}