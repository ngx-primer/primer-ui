import { Token } from "./token"

export const CustomPrefix = ["primitive", ] as const;

function baseTokenFactory() {
  return new Token<typeof CustomPrefix[number]>()
}

function functionalTokenFactory() {
  return new Token();
}

function compoentTokenFactory() {
  return new Token();
}

const factory = { 
  create: (category: "base" | "functional" | "component") => {
    let instance: Token;
    switch (category) {
      case "base":
        instance = baseTokenFactory();
        break;
      case "functional":
        instance = functionalTokenFactory();
        break;
      case "component":
        instance = compoentTokenFactory();
        break;
      default:
        instance = new Token();
        break;
    }
    return instance;
  }
}

export {
  factory as tokenFactory
}