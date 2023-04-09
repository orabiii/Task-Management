export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.fa51e057.js","imports":["_app/immutable/entry/start.fa51e057.js","_app/immutable/chunks/index.5a298011.js","_app/immutable/chunks/singletons.f0c9c076.js","_app/immutable/chunks/index.73f285fa.js","_app/immutable/chunks/control.e7f5239e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.84e736f2.js","imports":["_app/immutable/entry/app.84e736f2.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.5a298011.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
