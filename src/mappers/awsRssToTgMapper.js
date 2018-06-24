const dataMapper = ({ lastBuildDate, items }) => [{
  tag: 'article',
  children: [{
    tag: 'subheader',
    children: [
      { tag: 'h5', children: ['Last Build Date: ', lastBuildDate] },
      { tag: 'br' },
      { tag: 'br' },
    ]
  }, !!items.length ? {
    tag: 'p',
    children: [
      ...items.map(({ title, pubDate, contentSnippet }) => ({
        tag: 'p',
        children: [
          { tag: 'b', children: [title] },
          { tag: 'br' },
          { tag: 'i', children: [pubDate] },
          { tag: 'br' },
          { tag: 'blockquote', children: [contentSnippet] },
          { tag: 'hr' },
        ],
      }))
    ]
  } : {
    tag: 'h4',
    children: ['There are no any issues!']
  }],
}, ]

module.exports = dataMapper;
