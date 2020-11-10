const rollup = require('rollup')
const buble = require('rollup-plugin-buble')

// see below for details on the options
const inputOptions = {
  input: "src/main.js",
  plugins: [
    buble()
  ]
}
const outputOptions = {
  file: "dist/index.js",
  format: "iife",
  name: 'myPlugin'
}

async function build() {
  // create a bundle
  try {
    const bundle = await rollup.rollup(inputOptions)

    console.log(bundle.imports) // an array of external dependencies
    console.log(bundle.exports) // an array of names exported by the entry point
    console.log(bundle.modules) // an array of module objects

    // generate code and a sourcemap
    // const { code, map } = await bundle.generate(outputOptions)
    // console.log(code, map)

    // or write the bundle to disk
    await bundle.write(outputOptions)
  } catch (error) {
    console.log(error)
  }
}

build()
