export default {
  base: '/japanese-lessons-learned/', // Mandatory to deploy on github pages
  title: 'JLL',
  description: 'Summarize what I learn overtime about the japanese language',
  lang: 'en-GB',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/overview' },
      {
        text: 'Lessons',
        items: [
        {
          text: 'Writing',
          items: [
            { text: 'Overview', link: '/guide/overview' },
            { text: 'Hiragana', link: '/guide/hiragana' },
            { text: 'Katakana', link: '/guide/katakana' },
          ]
        }, 
        {
          text: 'Les 4 règles',
          items: [
            { text: 'Les accents', link: '/guide/accents' },
            { text: 'La pause', link: '/guide/pause' },
            { text: 'Les allongements', link: '/guide/allongements' },
            { text: 'Les combinaisons', link: '/guide/combinaisons' },
          ]
        },
        { text: 'Grammaire',
          items: [
            { text: 'La formation d\'une phrase', link: '/guide/grammaire/phrase' },
            { text: 'La particule の', link: '/guide/grammaire/particule-の' },
            { text: 'La particule と', link: '/guide/grammaire/particule-と' }
          ]
        },
        { text: 'Vocabulaire',
          items: [
            { text: 'Premiers mots', link: '/guide/vocabulaire/vocabulaire-01' }
          ]
      }
      ]
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
      }, {
        text: 'Les 4 règles',
        collapsible: true,
        items: [
          { text: 'Les accents', link: '/guide/accents' },
          { text: 'La pause', link: '/guide/pause' },
          { text: 'Les allongements', link: '/guide/allongements' },
          { text: 'Les combinaisons', link: '/guide/combinaisons' },
        ]
      },
      { text: 'Grammaire',
        collapsible: true,
        items: [
          { text: 'La formation d\'une phrase', link: '/guide/grammaire/phrase' },
          { text: 'La particule の', link: '/guide/grammaire/particule-の' },
          { text: 'La particule と', link: '/guide/grammaire/particule-と' }
        ]
      },
      { text: 'Vocabulaire',
        collapsible: true,
        items: [
          { text: 'Premiers mots', link: '/guide/vocabulaire/vocabulaire-01' }
        ]
      }
    ]
  }
}
