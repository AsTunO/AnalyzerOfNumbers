let num = window.document.querySelector('input#fnum')
let list = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let val = []

function isNum(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inList(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function add(){
    if (isNum(num.value) && !inList(num.value, val)){
        val.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Value ${num.value} added`
        list.appendChild(item)
        res.innerHTML = ``
    }else{
        window.alert(`[Value Invalid or the number's in list]`.toUpperCase())
    }
    num.value = ``
    num.focus()

}

function end(){
    if (list.length == 0){
        window.alert('[Insert some values above]'.toUpperCase())
    }
    else{
        let qe = val.length
        let max = val[0]
        let min = val[0]
        let sum = 0
        let med = 0

        for (let pos in val){
            sum += val[pos]

            if (val[pos] > max){
                max = val[pos]
            }
            if (val[pos] < min){
                min = val[pos]
            }

        }
        med = sum/qe

        res.innerHTML = ``

        res.innerHTML = (`Number of elements : ${qe}`)
        res.innerHTML += (`<p>The biggest number's : ${max}</p>`)
        res.innerHTML += (`<p>The smallest number's : ${min}</p>`)
        res.innerHTML += (`<p>The sum of the numbers' : ${sum}</p>`)
        res.innerHTML += (`<p>The average pf the numbers' : ${med}</p>`)

    }
}