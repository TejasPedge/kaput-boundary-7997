export const Throttle=(fun,delay)=>{

    let wait=false;

    if(wait)return
    fun()
    wait=true
    setTimeout(()=>{
        wait=false
    },delay)
 
}