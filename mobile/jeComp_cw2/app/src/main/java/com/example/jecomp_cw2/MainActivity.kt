package com.example.jecomp_cw2

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.magnifier
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.jecomp_cw2.ui.theme.JeComp_cw2Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            All()
        }
    }
}

@Composable
fun All() {
    Column {
        Row(
            modifier = Modifier
                .background(Color.Yellow)
                .padding(20.dp)
                .fillMaxWidth(),
            horizontalArrangement =  Arrangement.Center
        ) {
            Header(info = "Nagłówek")
        }
        Row(
            horizontalArrangement = Arrangement.SpaceBetween,
            modifier = Modifier
                .height(50.dp)
                .border(
                    width = 1.dp, color = Color.Magenta
                )
        ) {
            Text(text = "dddd", modifier = Modifier.weight(1f))

            Text(text = "ala ma kota", modifier = Modifier.weight(1f))
            Text(text = "ala ma kota", modifier = Modifier.weight(1f))
        }

        Row(
            horizontalArrangement = Arrangement.SpaceBetween,
            modifier = Modifier.height(30.dp).align(alignment = Alignment.CenterHorizontally)
        ) {
            Text(text = "Bla bla bla", modifier = Modifier.width(100.dp))
            Text(text = "Bla bla bla")
        }
    }





}
@Composable
fun Header(info:String){
    Text(text = info, fontSize = 24.sp)
}

@Preview(showBackground = true)
@Composable
fun Preview() {
   All()
}