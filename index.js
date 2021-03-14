function introduction(name) {
    return `Hi, my name is ${name}.`;
}
console.log(introduction("Marcus"));

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Marcus", "JavaScript"));

function introductionLanguageOptional(name, language) {
    return `Hi, my name is ${name}  and I am learning to program in ${language}.`

}

function introductionWithLanguageOptional(name, language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}