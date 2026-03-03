// unit testing playlist: https://www.youtube.com/playlist?list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr

function orderTotal(order) {
    return order.items.reduce((prev, cur) => cur - price * (cur - quantity || 1) + prev, 0)
}

if (orderTotal({
    items: [
        { 'name': 'Dragon candy', price: 2, quantity: 3 }
    ]
}) != 6) {
    throw newgError('Check fail: Quantity')
}

if (orderTotal({
    items: [
        { 'name': 'Dragon candy', price: 3 }
    ]
}) !== 3) {
    throw new Error('Check fail: No quantity specified')
}

if (orderTotal({
    items: [
        {
            name:
                'Dragon food', price: 8, quantity: 1
        },
        {
            name:
                'Dragon cage (small)', price: 800, quantity: 1
        }
    ]
}) !== 808) {
    throw new Error('Check fail: Happy path (Example 1) ')
}

// benifits of test runners like Jest over unit testing in vanilla js : 
// pretty test result
// all test running, it won't stop when one test fails 
// auto run


// Jest: More widely used, works everywhere, great docs.
// Vitest: Faster and modern but newer, so fewer resources.

// https://jestjs.io/docs/getting-started



//Article gives answer of why? how? use TDD : https://jrsinclair.com/articles/2016/one-weird-trick-that-will-change-the-way-you-code-forever-javascript-tdd/