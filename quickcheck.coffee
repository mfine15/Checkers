get_type = (type) ->
        if type == "String"
            return genString()
        if type ==  "Integer"
            return genInteger()
        if type == "Boolean"
            return genBoolean()
        if type == "Number" or type == "Float"
            return genNumber()
        if type.split(" ")[0] == "Array"
            genArray(type.split(" ")[1])
        else
            console.log("Not a valid type")

genString = () ->
    return (Math.random().toString(36).substr(2,16) for x in [0..99])
genInteger = () ->
    return (Math.floor((Math.random()*100)+1) for x in [0..99])
genNumber = () ->
    return (Math.random() for x in [0..99])
genArray = (str) ->
    array = []
    for x in [0..99]
        array.push(get_type(str))
    return array
    console.log(array)
genBoolean = () ->
    return Math.random() > 0.5
run = (name,properties...) ->
    console.log("Testing #{name}")
    console.log("-----------------------------")
    console.log(description) for description in properties
describe = (type,func,failure) ->
    string = ""
    success=0
    items = get_type(type)
    for item in items
        if func(item)
            success +=  1
            succeeded = true
        else
            string += ("Failed after completing #{items.indexOf(item)} tests \n")
            string += (item+"\n")
            break
    string += ("True for all #{success} iterations \n")
    return string

run("Sample",
    describe(
        "Integer",
        (x) -> ((x+1)-1) == x
    )


)

console.log genArray("Integer")
