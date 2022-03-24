class LocalCache {
    setCache(key,value){
       window.localStorage.setItem(key,JSON.stringify(value))
    }
    getCache(key){
        let res = window.localStorage.getItem(key)
        if(res){
            return JSON.parse(res)
        }
    }
    deleteCache(key){
        window.localStorage.removeItem(key)
    }
    clearCache(){
        window.localStorage.clear()
    }
}
export default new LocalCache()