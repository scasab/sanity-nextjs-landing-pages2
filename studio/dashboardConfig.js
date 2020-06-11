export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ee293e868dfce02728ad4c7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages2-studio-9umfodqd',
                  apiId: 'a96bb86d-a5e3-47f4-ba28-775be985bfa3'
                },
                {
                  buildHookId: '5ee293e94e93cb0220d5b94b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages2-web-bsvca2ga',
                  apiId: '8e6e00ac-f19f-4fd9-b016-cbb088b4c212'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scasab/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages2-web-bsvca2ga.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
