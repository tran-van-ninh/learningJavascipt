function highlight(...rest) {
    console.log(rest);
}
highlight("Trần", "Văn", "Ninh");

var brand = 'F8';
var course = 'Javascript';
highlight ` Học lập trình ${course} tại ${brand} !`;

function highlight1([first, ...strings], ...value) {
    console.log("first: ", first);
    console.log("strings: ", strings);
    console.log("value: ", value);
    return value.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], [first]
    ).join("");
}

function highlight2([first, ...strings], ...rest) {

    let result = first;
    let i = 0;

    strings.forEach(element => {
        result += `<span style='color:red'>${rest[i]}</span>` + element;
        if (i < rest.length) i++;
    })

    return result
};

function highlight3([first, ...strings], ...values) {

    return values.reduce(
        (acc, curr) => {
            acc += `<span>${curr}</span>` + strings.shift();
            return acc;
        }, [first])
};
var html1 = highlight1 ` Học lập trình ${course} tại ${brand} !`;
var html2 = highlight2 ` Học lập trình ${course} tại ${brand} !`;
var html3 = highlight3 ` Học lập trình ${course} tại ${brand} !`;
console.log(html1);
console.log(html2);
console.log(html3);