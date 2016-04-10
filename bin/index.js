#! /usr/bin/env node
const asciify = require('asciify-image')
const request = require('request')
const fs = require('fs')
const puppyPics = require('puppy-pics')

const options = {
  fit: 'box',
  width: 75,
  height: 50
}

console.log('requesting puppy')
puppyPics(image => {
  console.log('fetching', image.url)
  request(image.url).pipe(fs.createWriteStream('image' + image.ext)).on('close', () => {
    console.log('processing puppy')
    asciify('image' + image.ext, options, asciified => {
      console.log(asciified)
      console.log(image.title)
    })
  })
})
