import fastify from "fastify";
import cors from "@fastify/cors";

import { DriverParams, TeamParams } from "./utils/interfaces";
import { teams, drivers } from "./utils/data";

const server = fastify({ logger: true });

//everyone can consume this API
server.register(cors, {
  origin: "*",
});

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);

    if (isNaN(id)) {
      return response.code(400).send({ message: "Invalid ID format" });
    }

    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
      return response
        .type("application/json")
        .code(404)
        .send({ message: "Driver not found" });
    }

    return response.type("application/json").code(200).send({ driver });
  },
);

server.get<{ Params: TeamParams }>("/teams/:id", async (request, response) => {
  const id = parseInt(request.params.id);

  if (isNaN(id)) {
    return response.code(400).send({ message: "Invalid ID format" });
  }

  const team = teams.find((t) => t.id === id);

  if (!team) {
    return response
      .type("application/json")
      .code(404)
      .send({ message: "Team not found" });
  }

  return response.type("application/json").code(200).send({ team });
});

server.listen({ port: 3333 }, () => {
  console.log("Server init");
  console.log(`Port: ${process.env.PORT}`);
});
