package com.example.cw7_seekbar

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.cw7_seekbar.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var bind: ActivityMainBinding;
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        bind = ActivityMainBinding.inflate(layoutInflater);
        setContentView(bind.root)
    }
}