import { PORT } from "../config";

export const options = {
  definition: {
    openapi: "3.0.2",
    info: {
      title: "Synapsefi REST API",
      version: "1.0.0",
      description: "This is a REST API example that integrates the basic Synapsefi banking services. This API is built with NodeJS, Typescript, and ExpressJS",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/docs/*.doc.ts"],
};
