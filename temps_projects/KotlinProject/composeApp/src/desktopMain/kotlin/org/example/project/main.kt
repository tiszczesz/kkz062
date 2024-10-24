package org.example.project

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application

fun main() = application {
    var secondWindowOpened by remember {
        mutableStateOf(false)
    }
    Window(
        onCloseRequest = ::exitApplication,
        title = "KotlinProject",
    ) {
        App()
        Window(
            onCloseRequest = {},
            title = "New Window",
        ){}
    }
}