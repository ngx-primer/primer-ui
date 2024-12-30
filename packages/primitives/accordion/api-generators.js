const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// Use process.cwd() to resolve paths relative to the current working directory
const packageDir = __dirname; // Current directory (packages/primitives/accordion)
const distDir = path.resolve(packageDir, '../../../dist/packages/primitives/accordion');
const outputDocsDir = path.resolve(packageDir, '../../../apps/documentations-server/src/assets/contents/api-reference/primitives/accordion');

// Validate if the paths exist
function validatePaths() {
  if (!fs.existsSync(packageDir)) {
    console.error(`Error: Accordion package directory does not exist at ${packageDir}`);
    // process.exit(1);
  }

  if (!fs.existsSync(distDir)) {
    console.error(`Error: Dist directory for accordion package does not exist at ${distDir}`);
    // process.exit(1);
  }

  if (!fs.existsSync(outputDocsDir)) {
    console.log(`Creating docs directory: ${outputDocsDir}`);
    fs.mkdirSync(outputDocsDir, { recursive: true });
  }
}

// Validate paths
validatePaths();

// Function to find tsconfig.json for the 'accordion' package
function findTsConfig() {
  const tsConfigPath = path.join(packageDir, 'tsconfig.json');
  return fs.existsSync(tsConfigPath) ? tsConfigPath : null;
}

// Function to build the 'accordion' package
function buildAccordionPackage() {
  console.log('Building the Accordion package...');
  const tsConfigPath = findTsConfig();
  if (!tsConfigPath) {
    console.error(`Error: No tsconfig.json found for the Accordion package at ${packageDir}`);
    process.exit(1);
  }

  try {
    execSync(`nx run ngx-primer-accordion:build --configuration=production --verbose`, { stdio: 'inherit' });
  } catch (error) {
    console.error('Error during Accordion package build:', error.message);
    process.exit(1);
  }
}

// Function to run API Extractor and generate docs
function runApiExtractorAndGenerateDocs() {
  console.log('Running API Extractor for Accordion package...');
  const tsConfigPath = findTsConfig();
  if (!tsConfigPath) {
    console.error(`Error: No tsconfig.json found for the Accordion package at ${packageDir}`);
    process.exit(1);
  }

  // Assuming that 'api-extractor.json' exists for the Accordion package
  const apiExtractorConfigPath = path.join(packageDir, 'api-extractor.json');
  if (!fs.existsSync(apiExtractorConfigPath)) {
    console.error(`Error: No api-extractor.json found for the Accordion package at ${apiExtractorConfigPath}`);
    process.exit(1);
  }

  try {
    execSync(`npx api-extractor run --config="${apiExtractorConfigPath}" --local --verbose`, { stdio: 'inherit', cwd: packageDir });
  } catch (error) {
    console.error('Error running API Extractor for Accordion package:', error.message + 'Skipping documentation generation...');
  }

  console.log('Generating markdown docs for Accordion package...');
  try {
    execSync(
      `npx api-documenter markdown --input-folder ${packageDir}/temp --output-folder ${outputDocsDir}`,
      { stdio: 'inherit' }
    );
  } catch (error) {
    console.error(`Error generating markdown docs for Accordion package:`, error.message);
    process.exit(1);
  }
}

// Start the process
function main() {
  try {
    buildAccordionPackage();
    runApiExtractorAndGenerateDocs();
    console.log('Accordion package build and documentation generation completed successfully.');
  } catch (error) {
    console.error('An unexpected error occurred:', error.message);
    process.exit(1);
  }
}

// Execute the script
main();
