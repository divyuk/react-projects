import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import PokemonList from "../pokemon-list";
import userEvent from "@testing-library/user-event";
import { server, rest } from "../test/mock-server";
import pokemonsResultPage1 from "./pokemon-result-limit-5-offset-0.json";
import pokemonsResultPage2 from "./pokemon-result-limit-5-offset-5.json";
import pokemonsResultPage3 from "./pokemon-result-limit-5-offset-10.json";

describe("Pokemon list with 'Load more' button", () => {
  let getPokemonsMock = jest.fn();
  beforeEach(() => {
    server.use(
      rest.get("https://pokeapi.co/api/v2/pokemon", async (req, res, ctx) => {
        console.log(
          `Pokemons API was called with ${req.url.searchParams.toString()}`
        );
        const offset = parseInt(req.url.searchParams.get("offset")),
          limit = parseInt(req.url.searchParams.get("limit"));
        getPokemonsMock({ offset, limit });

        if (offset === 0) {
          return res(ctx.json(pokemonsResultPage1));
        } else if (offset === 5) {
          return res(ctx.json(pokemonsResultPage2));
        } else if (offset === 10) {
          // Mocked data is different from real world:
          // total count was changed to 12, to pretend this is the last page
          return res(ctx.json(pokemonsResultPage3));
        } else {
          return res(ctx.json({ count: 0, results: [] }));
        }
      })
    );
  });

  it("initially displays the first 5 pokemons", async () => {
    render(<PokemonList />);

    // Use a list to display the products - e.g. an `ul` or `ol` element
    expect(await screen.findByRole("list")).toBeInTheDocument();

    // Check that 5 items are displayed
    expect(await screen.findAllByRole("listitem")).toHaveLength(5);

    // Check that for each pokemon, its name is displayed
    expect(
      screen.getAllByRole("listitem").map((listItem) => listItem.textContent)
    ).toMatchInlineSnapshot(`
[
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
]
`);

    // Check the API was called with the correct `offset` and `limit`
    expect(getPokemonsMock).toHaveBeenCalledWith({ offset: 0, limit: 5 });
  });
});
