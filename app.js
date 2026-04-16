let x=y=z=0
// x for msec y for sec z for mint
let myinterval
let state = false
let st

function start(){

    x=y=z=0
    state=false
    myinterval=setInterval(mytimer,10)
    st = document.getElementById('btn1')
    st.disabled = true

}

function mytimer(){

    x=x+1
    if(x===100){

        x=0
        y=y+1
        if(y===60){

            y=0
            z=z+1
            if(z===60){
                x=y=z=0
            }
        }

    }

    document.getElementById('result').innerHTML=
    `<h1>`+String(z).padStart(2,'0')+`:`+String(y).padStart(2,'0')+`</h1>`
}

function pause(){
    state = !state
    if(state===true){
        clearInterval(myinterval)
    }
    else{        
        myinterval=setInterval(mytimer,10)
    }

}

function clear_timer(){

    clearInterval(myinterval)
    x=y=z=0
    state=false
    document.getElementById('result').innerHTML=`<h1>`+String(z).padStart(2,'0')+`:`+String(y).padStart(2,'0')+`</h1>`
    st= document.getElementById('btn1')
    st.disabled = false
}