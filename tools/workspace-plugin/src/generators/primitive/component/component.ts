import * as path from 'path';

import {
  Tree,
  addProjectConfiguration,
  formatFiles,
  generateFiles,
} from '@nx/devkit';

import { PrimitiveComponentGeneratorGeneratorSchema } from './schema';

export async function primitiveComponentGeneratorGenerator(
  tree: Tree,
  options: PrimitiveComponentGeneratorGeneratorSchema
) {
  // const projectRoot = `libs/${options.name}`;
  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: 'library',
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  // await formatFiles(tree);
  console.log(tree);
}

export default primitiveComponentGeneratorGenerator;
