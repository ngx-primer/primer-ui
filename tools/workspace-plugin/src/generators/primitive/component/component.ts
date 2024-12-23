/* eslint-disable @typescript-eslint/no-unused-vars */
import * as path from 'path';

import {
  Tree,
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  joinPathFragments,
} from '@nx/devkit';

import { PrimitiveComponentGeneratorGeneratorSchema } from './schema';

export async function primitiveComponentGeneratorGenerator(
  tree: Tree,
  options: PrimitiveComponentGeneratorGeneratorSchema,
) {
  // toodo implement component
}

export default primitiveComponentGeneratorGenerator;
