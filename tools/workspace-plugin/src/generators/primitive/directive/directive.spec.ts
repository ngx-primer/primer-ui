import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { primitiveDirectiveGeneratorGenerator } from './directive';
import { PrimitiveDirectiveGeneratorGeneratorSchema } from './schema';

describe('primitive-directive-generator generator', () => {
  let tree: Tree;
  const options: PrimitiveDirectiveGeneratorGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await primitiveDirectiveGeneratorGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
