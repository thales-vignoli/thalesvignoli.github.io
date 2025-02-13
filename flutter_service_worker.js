'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6953cff43a35a123df29c48276be9b13",
"version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "e659005418be4e9e369cc53e46565ecf",
"/": "e659005418be4e9e369cc53e46565ecf",
"main.dart.js": "d6316e8330eb9fea54d504b09227d443",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
".git/ORIG_HEAD": "7ad26d53a0f6724e4cd4e0bc1739afe0",
".git/config": "eb8dfa7d228ce549c978090fcd2bb8c1",
".git/objects/61/0074203dfb4537e2ae33d01e04ee2f2dfc996b": "b9024596377347397d8fb2acf77eff5b",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/0c/9cc787c2383dbd54a8cf57986acc48031bcd1c": "07adabb043f1006b13122c6c781cb0e6",
".git/objects/6f/88d29f107bb2bdf7e600c1c95f1285a00504b9": "4dbb76185f12a45dc0e70b8a3fa7534b",
".git/objects/9b/396f9cca4e4876ef08148b24b2801737d30a4e": "8a746603e3d3420f4570e440797202b8",
".git/objects/3d/85446df3bb5385e22f559d9cd9a922d52b64a4": "8c29126f1ad7300c720d349580cc7ebd",
".git/objects/0b/3950587aadbc8d947acc88796dfadec87f1040": "1792018b405e486093ce2fc3df6e3919",
".git/objects/d9/8dcbdf3fc562a464937b4df3d0c4ba75c5d859": "c06c7abd7dc818d6ce2b80b434418cdd",
".git/objects/ac/8a9efa1ee3254f8a0c205e96683ae102f05311": "cc4a840fa62b8ec8ce202aceda35943f",
".git/objects/ad/1977946a9d78d57f1825c4815249761cd04912": "778acc812116a2f89816fb71a22af2f4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7d/b529b3b3a3585003a33d9d5a56f61ec1c74bd5": "f30967d24b0458a91661feab3776a080",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/06a56f8b324a6f31624d5240be14d27f0642f5": "329305565449ea759e97fae188d78abb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/aee0fe9dea4795ea197b631e0ac2fca3572e45": "ef5406faab22f9e3004d0e67d03b672a",
".git/objects/86/614f0deafdd36657ca13f2ccf71bd046924767": "77ac350cad9f3c27b5e278ba8d159ae4",
".git/objects/44/3b00a769f95876f1d0944181540acf65d50b08": "74e1e343d47a76a7157443c1163df443",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/1b120d1d820e267919c2527e9c7d7b17adf51a": "26bd6b493ca9aaf9ddbe83fdd6d289eb",
".git/objects/96/903ec1c9231cb9780c862c37437114b0d49d2e": "6504edace456b7698b8999619f557637",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/4c900b2ffa246a9504282c23f85da786b3d078": "6306d3df8a3cf31d82e3ba767242a673",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0f/dedb03fb6162ac23ca6c3f17e064599e61733c": "45aac2c6d6c9327f1ccecc9688b94061",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/2b1afa0ef4b39d438ff3d58cfbe1267213e7c2": "748f80ce81646c8e74e675adea63a3bb",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dd/22b217181d7f53a2d22db51fd6bff4f904be11": "a67684e2f8109b27e20280e10ca35717",
".git/objects/aa/afd433afd12284c5d50c6a011d8325f22acf85": "f8e918ea78d63834b03a5918bd885708",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/cf2aadab89c8fa483340918d943b8a4e4dae40": "9e9dad416fb5cf38427d38815fb3c4bf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/15ebe7908462e5c2bed886ecba7e920770625b": "bcc1c52ad285910cc30c0ae9ec1e6578",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/e0d1c97425c625704f0a621e4b8b9fb2f1ae70": "7ffac0702016e987c462bf16436729b2",
".git/objects/f9/65bc9652430658de571e20620d94c14e2146e5": "7fb66e62d44d4066c384d6d5289b7476",
".git/objects/e9/14b0ef2bd76457ad288cc3ab3f89a7a0c5cb4b": "e5c5a1c4e666084eb9d06a27c2766ace",
".git/objects/e9/dcf4ab2f29a05042d7d2d7dcb82b463e9e94c9": "0e926a7df4df43862361aca718ca180d",
".git/objects/e7/858f256f22434f30a0ac7d9e91b56cba9b6e8f": "9ea2408a03d629d84fb3c36427b4a952",
".git/objects/cb/90f21a83735c9b5887fc40d90264d95a85ad7b": "03cbdf472c5269336f1528fbaf4a5137",
".git/objects/cb/04d47898e7e29182e798b9fc477afa08b66fcf": "892ee8d366c9cfcca91cdd276e39daad",
".git/objects/cb/25a40f0576438ab2a3480019d6090f4f4e4863": "51aef5fc08e49403b952c4d25f01e01d",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/2d/0ace5817fadaa7f002408a532fb0a23070b290": "1f3159cadaee3e32c239e14bdd2ea307",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/2d/ed96171143cf537e2e759a2192d3f5bdf8e681": "9b90ee6f3f16551a62323aa480f848a7",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/70/2efe16450e145acc9111c0896148a05fae1b09": "b82811cc2ca1338fca7ea6b9041a9741",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/6b4a8ee4ea35f0e47b021c818898256224ce15": "0341634ef00948d31b4131ef05ce5519",
".git/objects/85/c81de521c98be336ac1057b960b9fe0a4228b0": "76d534ec802bd26a7b1ca076050c1a5d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/49/be575c43e4c50907714a658fef165bda80f1a5": "9a05536df302617fcaf35cf50ea321c7",
".git/objects/47/d5fdbe3e0aeaf0d70649b57d52ae5d932ac7f4": "e4a0359850100758a5d6a7f75113f373",
".git/objects/7a/bc52be9630f9190b94b9deb3ee5f02f551a989": "f57f5c7cd3863f36d0c5b34413bc0154",
".git/HEAD": "4bc70ef0e6a7fdd050a2fc8a17065f16",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f554ce73f9c3e94bd102277ab99dfbd",
".git/logs/refs/heads/main": "d1b4b022687d7343d2a2d99f085c947b",
".git/logs/refs/heads/pages": "e166ad40782654f1695badb4c12b39c8",
".git/logs/refs/remotes/origin/main": "cdafc465ebb5ad9501aacac4140c3b48",
".git/logs/refs/remotes/origin/pages": "a603442945385197fb7e30698dadf6b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "532574f36ccb2ab8e45c923bd8ded1b5",
".git/refs/heads/pages": "7ad26d53a0f6724e4cd4e0bc1739afe0",
".git/refs/remotes/origin/main": "c576b04284fb123b42175da5691159f8",
".git/refs/remotes/origin/pages": "7ad26d53a0f6724e4cd4e0bc1739afe0",
".git/index": "30d719b73da6effab5c54c62aa339328",
".git/COMMIT_EDITMSG": "1b146128e347ce9fbbfbe96312b458ee",
".git/FETCH_HEAD": "3452bc752bd78bc5ed03ae3b282481a8",
"assets/images/thales.jpeg": "aa0703ff7936d75ac199fd53f58c4af1",
"assets/AssetManifest.json": "532723ae9c95a4adf6ceea50734931d5",
"assets/pdf/resume.pdf": "47c6d72fc5d7b6ae7c0c9caaa3efa322",
"assets/NOTICES": "6f734de6fe46f9608efde6b30a1f700e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "2f4705bdc628ecbb187385e82c104c83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c9f3bbaf1e52860ef05737637a4a105d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d9a589a0436497be6ca7975f145a3a3c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bc3536d71b6c7b5f80acb9ae05b067a5",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
