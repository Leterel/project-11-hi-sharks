import {mkdir,copyFile,readFile} from 'node:fs/promises';import {resolve} from 'node:path';import {fileURLToPath} from 'node:url';import {validateCampaign} from '../campaign-model.mjs';
const target=process.argv[2];if(!target)throw Error('node tools/package-web.mjs NEUER-ZIELORDNER');const root=fileURLToPath(new URL('../',import.meta.url)),out=resolve(target);
validateCampaign(JSON.parse(await readFile(resolve(root,'campaign-config.json'),'utf8')));
await mkdir(out);const files=['campaign.css','campaign.mjs','campaign-model.mjs','campaign-config.json','manifest.webmanifest','shark.svg','sw.js','icon-192.png','icon-512.png','touch-icon.png','LICENSE'];
await copyFile(resolve(root,'campaign.html'),resolve(out,'index.html'));for(const file of files)await copyFile(resolve(root,file),resolve(out,file));console.log(JSON.stringify({directory:out,files:files.length+1,nativeStoreRelease:false,paymentsConfigured:false}));
