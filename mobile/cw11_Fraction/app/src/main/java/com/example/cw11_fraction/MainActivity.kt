package com.example.cw11_fraction

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.EditText
import android.widget.Spinner
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        val actions = arrayListOf<Char>('+', '-', '*', '/');
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val adapter = ArrayAdapter(
            this,
            android.R.layout.simple_spinner_item,
            // R.layout.spinner_item,
            actions
        )
        val spinner = findViewById<Spinner>(R.id.spChoice)

        spinner.adapter = adapter;

        val runButton = findViewById<Button>(R.id.btnCount);
        val numA = findViewById<EditText>(R.id.etNumA)
        val numB = findViewById<EditText>(R.id.etNumB)
        val denumA = findViewById<EditText>(R.id.etDenumA)
        val denumB = findViewById<EditText>(R.id.etDenumB)
        val resultNum = findViewById<TextView>(R.id.tvNumResult)

        val resultDenum = findViewById<TextView>(R.id.tvDenumResult)
        runButton.setOnClickListener {
            try {
                val numberNumA: Int = numA.text.trim().toString().toInt();
                val numberNumB: Int = numB.text.trim().toString().toInt();
                val numberDenumA: Int = denumA.text.trim().toString().toInt();
                val numberDenumB: Int = denumB.text.trim().toString().toInt();
                val choicer = spinner.selectedItem as Char
                val fracA = Fraction(numberNumA, numberDenumA)
                val fracB = Fraction(numberNumB, numberDenumB)
                var fracResult: Fraction
                when (choicer) {
                    '+' -> fracResult = fracA.AddFractions(fracB)
                    '*' -> fracResult = fracA.MultiFractions(fracB)
                    else -> fracResult = Fraction(1, 1)
                }
                resultNum.text = fracResult.numerator.toString()
                resultDenum.text = fracResult.denumerator.toString()
            } catch (ex: Exception) {
                Toast.makeText(
                    this@MainActivity, ex.message,
                    Toast.LENGTH_SHORT
                ).show()
            }
        }
    }
}