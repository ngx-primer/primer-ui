import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { primitiveTokenGeneratorGenerator } from './token';
import { PrimitiveTokenGeneratorGeneratorSchema } from './schema';

describe('primitive-token-generator generator', () => {
  let tree: Tree;
  const options: PrimitiveTokenGeneratorGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await primitiveTokenGeneratorGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
