const questions =  [
    {
        id: 1,
        question : "Which of the following keywords is used to define a variable in javascript",
        options : [
            'var and let',
            'var',
            'let',
        ]
    },
    {
        id: 2,
        question : "Upon encoutering empty statements, what does the javascript interpreter do?",
        options : [
            'Throws an error',
            'Ignores the statements',
            'Give a warning',
        ]
    },
    {
        id: 3,
        question : "How can a data type be declared to be a constant type?",
        options : [
            'var',
            'let',
            'const',
        ]
    },
    {
        id: 4,
        question : "What keyword is used to check if a given property is valid or not in javascript?",
        options : [
            'includes',
            'in',
            'exists'
        ]
    },
    {
        id: 5,
        question : "When an operators value is NULL, the typeof returned by the unary operator is:",
        options : [
            'Object',
            'Boolean',
            'Undefined',
        ]
    }
];

const answers = [0, 1, 2, 1, 0];

module.exports = {questions, answers}