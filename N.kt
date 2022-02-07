fun main(args: Array<String>) {
    var N:Int = 4
    val L = arrayOf(2, 2, 2, 2)
    val H = arrayOf(6, 6, 6, 6)
    val P = L.clone()
    var i = 0
//    P = L
    fun process(P: Array<Int>){
        P.forEach { print(it) }
        println()
    }
    process(P)
    while (i < N) {
        P[i]++
        if( P[i] <= H[i]){
            process(P)
            i=0
        }
        else {
            P[i] = L[i]
            i++
        }
    }
}


