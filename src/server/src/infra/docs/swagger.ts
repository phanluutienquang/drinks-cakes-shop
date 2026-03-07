const option = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Drinks and Cakes Shop API',
      version: '1.0.0',
      description: 'API documentation for the Drinks and Cakes Shop application.',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/infra/docs/*.yaml'], // Path to the API docs
};

export default option;