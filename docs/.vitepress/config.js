export default {
  title: 'JLL',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/overview' },
      {
        text: 'Lessons',
        items: [{
          text: 'Writing',
          items: [
            { text: 'Overview', link: '/guide/overview' },
            { text: 'Hiragana', link: '/guide/hiragana' },
            { text: 'Katakana', link: '/guide/katakana' },
          ]
        }]
      },
      { text: 'Sources', link: '/sources/' },
    ],
    sidebar: [
      {
        text: 'Writing system',
        collapsible: true,
        items: [
          { text: 'Overview', link: '/guide/overview' },
          { text: 'Hiragana', link: '/guide/hiragana' },
          { text: 'Katakana', link: '/guide/katakana' },
        ]
      },
 
    ]
  }
}
