//import androidx.compose.runtime.getValue
//import androidx.compose.runtime.mutableStateOf
//import androidx.compose.runtime.setValue
//import kotlinx.coroutines.*
//import java.time.Instant
//import java.time.LocalDateTime
//import java.time.ZoneId
//import java.time.format.DateTimeFormatter
//import java.util.*

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import kotlinx.coroutines.*
import java.time.Instant
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.util.*

class StopWatch {
    var formattedTime by mutableStateOf("00:00:000") // formatted time
    private var corutineScope = CoroutineScope(Dispatchers.Default)
    private var isActivate = false // is the stopwatch running
    private var timeMilis = 0L // time in milliseconds
    private var lastTimestamp = 0L // timestamp of the last start
    fun start() {
        if (isActivate) return
        corutineScope.launch { // launch a coroutine
            lastTimestamp = System.currentTimeMillis()
            this@StopWatch.isActivate = true
            while (isActivate) {
                delay(10L) // delay for 10 milliseconds
                timeMilis += System.currentTimeMillis() - lastTimestamp // update the time
                lastTimestamp = System.currentTimeMillis() // update the last timestamp
                formattedTime = formatTime(timeMilis) // update the formatted time
            }
        }
    }

    private fun formatTime(time: Long): String {
        val localDateTime = LocalDateTime.ofInstant(
            Instant.ofEpochMilli(timeMilis),
            ZoneId.systemDefault()
        )
        val formatter = DateTimeFormatter.ofPattern("mm:ss:SSS", Locale.getDefault())// format the time
        return localDateTime.format(formatter)
    }
    fun pause() {
        isActivate = false
    }
    fun reset(){
        corutineScope.cancel()
        corutineScope = CoroutineScope(Dispatchers.Default)
        timeMilis = 0L
        lastTimestamp = 0L
        formattedTime = "00:00:000"
        isActivate = false
    }
}