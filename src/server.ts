import fastify from "fastify";

const server = fastify({ logger: true });

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 7, name: "Haas", base: "Kannapolis, United States" },
  { id: 8, name: "Racing Bulls", base: "Faenza, Italy" },
  { id: 9, name: "Williams", base: "Grove, United Kingdom" },
  { id: 10, name: "Audi", base: "Hinwil, Switzerland" },
  { id: 11, name: "Cadillac", base: "Silverstone, United Kingdom" },
];

const drivers = [
  { id: 1, name: "Lando Norris", team: "McLaren" },
  { id: 2, name: "Oscar Piastri", team: "McLaren" },

  { id: 3, name: "George Russell", team: "Mercedes" },
  { id: 4, name: "Kimi Antonelli", team: "Mercedes" },

  { id: 5, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 6, name: "Isack Hadjar", team: "Red Bull Racing" },

  { id: 7, name: "Charles Leclerc", team: "Ferrari" },
  { id: 8, name: "Lewis Hamilton", team: "Ferrari" },

  { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },

  { id: 11, name: "Pierre Gasly", team: "Alpine" },
  { id: 12, name: "Franco Colapinto", team: "Alpine" },

  { id: 13, name: "Esteban Ocon", team: "Haas" },
  { id: 14, name: "Oliver Bearman", team: "Haas" },

  { id: 15, name: "Liam Lawson", team: "Racing Bulls" },
  { id: 16, name: "Arvid Lindblad", team: "Racing Bulls" },

  { id: 17, name: "Alexander Albon", team: "Williams" },
  { id: 18, name: "Carlos Sainz", team: "Williams" },

  { id: 19, name: "Nico Hülkenberg", team: "Audi" },
  { id: 20, name: "Gabriel Bortoleto", team: "Audi" },

  { id: 21, name: "Sergio Pérez", team: "Cadillac" },
  { id: 22, name: "Valtteri Bottas", team: "Cadillac" },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver not found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  },
);

interface TeamParams {
  id: string;
}

server.get<{ Params: TeamParams }>("/teams/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const team = teams.find((t) => t.id === id);

  if (!team) {
    response.type("application/json").code(404);
    return { message: "Team not found" };
  } else {
    response.type("application/json").code(200);
    return { team };
  }
});

server.listen({ port: 3333 }, () => {
  console.log("Server init");
  console.log(`Port: ${process.env.PORT}`);
});
