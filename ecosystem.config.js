module.exports = {
  apps: [
    {
      name: 'YourProjectName',
      script: 'index.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'hostname',
      host: '0.0.0.0',
      ref: 'origin/master',
      repo: 'git@bitbucket.org:githubUsername/project.git',
      path: '/var/www',
      'post-deploy': 'npm install && npm run build'
    }
  }
};
