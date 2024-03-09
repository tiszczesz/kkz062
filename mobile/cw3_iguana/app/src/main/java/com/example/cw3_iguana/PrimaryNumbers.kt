package com.example.cw3_iguana

class PrimaryNumbers {
    companion object{
        fun getPrimaryNumbers(howMany:Int):ArrayList<Int>{
            val result = ArrayList<Int>();
            var number = 2;
            while(result.size<howMany){
                if(isPrimaryNumber(number)){
                    result.add(number);
                }
                number++;
            }
            return result;
        }

        fun isPrimaryNumber(number:Int):Boolean {
            var counter = 2;
            if(number<=1) return false
            while (counter*counter<=number){
                if (number%counter==0) return false;
                counter++;
            }
            return true;
        }
    }
}