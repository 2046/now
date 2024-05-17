#!/usr/bin/env zx

const profiles = {
  name: 'React',
  settings: JSON.stringify({
    settings: JSON.stringify({
      "files.associations": {
        "*.css": "tailwindcss"
      },
      "editor.quickSuggestions": {
        "strings": "on"
      },
      "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[jsonc]": {
          "editor.defaultFormatter": "vscode.json-language-features"
      },
      "[javascript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[typescript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[react]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      }
    })
  }),
  extensions: [{
    displayName: 'Prettier - Code formatter',
    identifier: {
      id: 'esbenp.prettier-vscode',
      uuid: '96fa4707-6983-4489-b7c5-d5ffdfdcce90'
    }
  }, {
    displayName: 'Pretty TypeScript Errors',
    identifier: {
      id: 'yoavbls.pretty-ts-errors',
      uuid: '1e149c89-8f97-447e-863d-1146f0ad1b70'
    }
  }, {
    displayName: 'ESLint',
    identifier: {
      id: 'dbaeumer.vscode-eslint',
      uuid: '583b2b34-2c1e-4634-8c0b-0b82e283ea3a'
    }
  }, {
    displayName: 'DotENV',
    identifier: {
      id: 'mikestead.dotenv',
      uuid: '532533c9-a894-4a58-9eee-bbfbe7c06f71'
    }
  }, {
    displayName: 'GitLens — Git supercharged',
    identifier: {
      id: 'eamodio.gitlens',
      uuid: '4de763bd-505d-4978-9575-2b7696ecf94e'
    }
  }, {
    displayName: 'Tailwind CSS IntelliSense',
    identifier: {
      id: 'bradlc.vscode-tailwindcss',
      uuid: '4db62a7c-7d70-419c-96d2-6c3a4dc77ea5'
    }
  }]
}


fs.writeFileSync('profiles.code-profile', JSON.stringify({
  ...profiles,
  extensions: JSON.stringify(profiles.extensions)
}), 'utf8')
