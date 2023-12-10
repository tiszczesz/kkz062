package com.example.cw10_todos

class Todo(content: String, pririty: Pririty) {
    private var content: String;
    private var pririty: Pririty;
    var Content: String
        get() {
            return content
        }
        set(value) {
            content = value.toString().trim()
        }
    var MyPririty: Pririty
        get() {
            return pririty;
        }
        set(value) {
            pririty = value;
        }
    init {
        this.content = content;
        this.pririty = pririty;
    }


    public override fun toString(): String {
        return "$Content ważność: $MyPririty";
    }
}


enum class Pririty(private var info: String) {
    LOW("niski"), MIDDLE("średni"), HIGH("wysoki"), ALERT("najwyższy");

    override fun toString(): String {
        return info;
    }
}