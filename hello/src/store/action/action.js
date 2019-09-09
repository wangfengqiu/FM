import axios from "axios";
var success = "success";
var start = "start"
var listid ="listid"
function request_start() {
    return {
        type: start
    }
}
function request_success(list) {
    return {
        type: success,
        list: list
    }
}
function request_id(list){
    return{
        type:listid,
       list
    }
}
function request_list() {
    return (dispath) => {
        dispath(request_start())
        setTimeout(() => {
            axios.get("/getdata").then(res => {
                dispath(request_success(res.data.list))
            })
        }, 2000)

    }
}
export {
    start, success, request_list, request_id, listid
}