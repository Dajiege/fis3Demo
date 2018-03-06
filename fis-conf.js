fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('/static/{**.css,**.js,**.png}', {
  useHash: true
});

fis.match('/static/(**.js)', {
  optimizer: fis.plugin('uglify-js'),
  release: '$1'
});

fis.match('/static/(**.css)', {
  useSprite: true,
  optimizer: fis.plugin('clean-css'),
  release: '$1'
});

fis.match('/static/(**.png)', {
  optimizer: fis.plugin('png-compressor'),
  release: '$1'
});

fis.match('/page/(*.html)',{
  release: '$1',
  deploy: fis.plugin('local-deliver',{
    to: './output'
  })
});

fis.match('/static/{(**.css),(**.js),(**.png)}',{
  deploy: fis.plugin('local-deliver',{
    to: './output'
  })
});

fis.media('debug').match('/static/{(**.css),(**.js),(**.png)}', {
  useHash: false,
  useSprite: false,
  optimizer: null
});