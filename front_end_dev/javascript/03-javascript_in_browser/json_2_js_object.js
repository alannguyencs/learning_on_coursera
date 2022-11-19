let json_str = '{"greeting": "hello"}'
let plain_obj = JSON.parse(json_str)
console.log(plain_obj)

plain_obj.greeting = "hi"
console.log(plain_obj)

json_str = JSON.stringify(plain_obj)
console.log(json_str)