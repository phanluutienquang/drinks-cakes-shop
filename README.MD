Start GitHub runner
↓
Install Node.js environment
↓
Restore packages
↓
Build project
↓
Run tests
↓
Report result

| Your idea         | CI step       |
| ----------------- | ------------- |
| start environment | runs-on       |
| install nodejs    | setup-node    |
| restore packages  | npm install   |
| build project     | npm run build |
| run test          | npm test      |
