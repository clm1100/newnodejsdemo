var arr = [1, 2, 3, 4, 5, 6, 7];
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}
// 判断是否为对象
// function isObject (obj) {
//     return obj !== null && typeof obj === 'object'
//   }
function isObject(obj){
    return Object.prototype.toString.apply(obj)
}
console.log(isObject([]))


function normalizeMap(map) {
    return Array.isArray(map) ?
        map.map(key => ({
            key,
            val: key
        })) :
        Object.keys(map).map(key => ({
            key,
            val: map[key]
        }))
}
//   let t1 = normalizeMap(arr)
//   let t2 =  normalizeMap(obj)
//   console.log(t1)
//   console.log(t2)



function normalizeNamespace(fn) {
    return (namespace, map) => {
        if (typeof namespace !== 'string') {
            map = namespace
            namespace = ''
        } else if (namespace.charAt(namespace.length - 1) !== '/') {
            namespace += '/'
        }
        return fn(namespace, map)
    }
}

//   var foo = normalizeNamespace(function(x,y){
//       console.log(x,y)
//   })
//   var fnn = foo(4,3);

const mapState = normalizeNamespace((namespace, states) => {
    const res = {}
    normalizeMap(states).forEach(({
        key,
        val
    }) => {
        console.log(key)
        console.log(val)
        res[key] = function mappedState() {
            let state = {}
            let getters = {}
            return typeof val === 'function' ?
                val.call(this) :
                state[val]
        }
        // mark vuex getter for devtools
        res[key].vuex = true
    })
    return res
})
// mapState(['a', 'b'])

let $store = {
    state:{a:100,b:2000},
    getters:{c:3000}
}


let foo2 = (states) => {
    const res = {}
    normalizeMap(states).forEach(({ key, val}) => {
        res[key] = (function mappedState() {
            let state = $store.state
            let getters = $store.getters
            return typeof val === 'function' ?
                val.call(this, state, getters) :
                state[val]
        })()
        // mark vuex getter for devtools
        res[key].vuex = true
    })
    return res
}

let objfoo2 = foo2(['a','b']);
console.log(objfoo2)
// 测试 vuex modeule的用法