const Arena = require('bull-arena');

const arena = Arena({
  queues: [
    {
      name: "Rates_Queue",
      hostId: "MyAwesomeQueues",
      // Redis auth.
      redis: {
        port: 6379,
        host: 'redis',
        password: ''
      },
    },
  ],
},
{
  // Make the arena dashboard become available at {my-site.com}/arena.
  basePath: '/arena',

  // Let express handle the listening.
  disableListen: true
});

module.exports = arena;
