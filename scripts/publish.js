import fs from 'fs';
import { execSync } from 'child_process';

const TEMP_PACKAGE = 'package.temp.json';
const PUBLISH_PACKAGE = 'package.publish.json';

try {
  // 1. Backup current package.json
  console.log('Backing up package.json...');
  fs.copyFileSync('package.json', TEMP_PACKAGE);

  // 2. Copy optimized package.json for publishing
  console.log('Copying publishing configuration...');
  fs.copyFileSync(PUBLISH_PACKAGE, 'package.json');

  // 3. Publish the package
  console.log('Publishing package...');
  execSync('npm publish', { stdio: 'inherit' });

  // 4. Restore original package.json
  console.log('Restoring development configuration...');
  fs.copyFileSync(TEMP_PACKAGE, 'package.json');
  fs.unlinkSync(TEMP_PACKAGE);

  console.log('Package published successfully!');
} catch (error) {
  // Ensure we restore the original package.json even if publishing fails
  if (fs.existsSync(TEMP_PACKAGE)) {
    console.log('Restoring development configuration after error...');
    fs.copyFileSync(TEMP_PACKAGE, 'package.json');
    fs.unlinkSync(TEMP_PACKAGE);
  }
  
  console.error('Error during publishing:', error.message);
  process.exit(1);
} 