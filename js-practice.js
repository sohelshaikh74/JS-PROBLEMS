const a = {
    title:"Meet",
    abc:"A"
}
const b = {
    id:2,
    title:"Shah"
}
const c = {
    ...a,...b 
}
console.log(c); // {/ttle:"Shah",abc:"A",id:2}