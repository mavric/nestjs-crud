const { execSync } = require('child_process');
const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const packagesDir = join(__dirname, 'packages');
const packages = readdirSync(packagesDir);
const registryUrl = 'https://npm.pkg.github.com';

packages.forEach(pkg => {
  const pkgDir = join(packagesDir, pkg);
  const pkgJsonPath = join(pkgDir, 'package.json');
  const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'));

  if (pkgJson.name.startsWith('@dataui/')) {
    const originalName = pkgJson.name;
    const newName = originalName.replace('@dataui/', '@mavric/');

    // Bump minor version
    const [major, minor, patch] = pkgJson.version.split('.');
    const newVersion = `${major}.${parseInt(minor) + 1}.${patch}`;

    // Update package name and version
    pkgJson.name = newName;
    pkgJson.version = newVersion;
    writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2), 'utf-8');

    try {
      console.log(`Publishing ${newName} (version ${newVersion}) to ${registryUrl}...`);
      execSync(`npm publish --registry ${registryUrl}`, {
        cwd: pkgDir,
        stdio: 'inherit'
      });
      console.log(`Published ${newName} successfully.`);
    } catch (error) {
      console.error(`Failed to publish ${newName}:`, error);
    }

    // Revert package name and version
    pkgJson.name = originalName;
    pkgJson.version = `${major}.${minor}.${patch}`;
    writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2), 'utf-8');
  } else {
    console.log(`Skipping ${pkgJson.name} as it does not match the prefix @dataui/`);
  }
});
