var jsonArray = '["javascript", "php", "python", "java"]'
var jsonObject = `{
    "name": "ninh",
    "age": "26"
}`
console.log(JSON.parse(jsonArray)[0]);
console.log(JSON.parse(jsonObject).name);