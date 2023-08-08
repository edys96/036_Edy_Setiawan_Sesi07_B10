function helloName(params) {
    if (params === "iqbal") {
        return `Hello ${params}`;
    } else {
        return 'Anda bukan Edy';
    }
}

console.log(helloName("Edy"));