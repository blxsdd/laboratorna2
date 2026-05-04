// завдання 2
let object = {};
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
alert(isEmpty(object));
object["80 кілограмів"] = "великий";
alert(isEmpty(object))
