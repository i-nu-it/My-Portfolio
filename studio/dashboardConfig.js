export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ef0c24405ba26cb53eb3514',
                  title: 'Sanity Studio',
                  name: 'My-Portfolio-studio',
                  apiId: 'e31e7b74-5026-442e-80de-5ffbe30c3ab3'
                },
                {
                  buildHookId: '5ef0c2444c0b439e67e1ee59',
                  title: 'Portfolio Website',
                  name: 'My-Portfolio-web',
                  apiId: 'de0d70f5-f2df-4a9c-bcdc-48be93989bdb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/i-nu-it/My-Portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://My-Portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
