var nets = require('nets')

var url = 'http://imgur.com/r/puppies/hot.json'

module.exports = function puppyPics (cb) {
  nets({url: url, json: true}, (err, res, body) => {
    if (err) { console.eror(err) }
    var imageData = body.data[Math.floor(Math.random() * body.data.length)]
    var image = {
      ext: imageData.ext,
      url: 'http://imgur.com/' + imageData.hash + imageData.ext,
      title: imageData.title
    }
    return cb(image)
  })
}
