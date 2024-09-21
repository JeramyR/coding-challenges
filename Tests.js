Tests = {}
for (let key in chai.assert) {
    let testkey = `assert${key[0].toUpperCase()}${key.slice(1)}`.replace('Equal', 'Equals')
    Tests = {
        ...Tests,
        [testkey]: (...e) => {
            try {
                chai.assert[key](...e)
                console.log(`${e[0]} is correct!`)
            } catch {
                console.log(`${e[0]} is not ${testkey.replace('assert', '').replace('Equals', 'Equal').toLowerCase()} to ${e[1]} ${e[2] ? ', ' + e[2] : ''}`)
            }
        }
    }
}
Tests = {
    ...Tests,
    assertSimilar: Tests.assertDeepEquals
}
Test = { ...Tests, }