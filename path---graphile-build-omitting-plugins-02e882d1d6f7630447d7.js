webpackJsonp([0x212c675c30e01000],{"./node_modules/json-loader/index.js!./.cache/json/graphile-build-omitting-plugins.json":function(n,e){n.exports={data:{remark:{html:'<h2 id="omitting-plugins"><a href="#omitting-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Omitting Plugins</h2>\n<p>Whilst <code>graphile-build</code> and <code>graphile-build-pg</code> come with a lot of useful\nplugins enabled by default, you might not want all of them. It\'s easy to\nremove one though - simply omit it from the list of plugins you pass to\n<code>buildSchema</code>, for example:</p>\n<h3 id="building-the-basic-schema-without-the-node-interface"><a href="#building-the-basic-schema-without-the-node-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Building the basic Schema without the Node interface</h3>\n<p>It\'s possible to build an even more minimal schema without Relay <code>Node</code>\nspecification support by omitting the\n<a href="/graphile-build/default-plugins/#NodePlugin"><code>NodePlugin</code></a> plugin:</p>\n<!-- source: examples/emptier-schema.js -->\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> buildSchema<span class="token punctuation">,</span> defaultPlugins<span class="token punctuation">,</span> NodePlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"graphile-build"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> printSchema <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"graphql/utilities"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">buildSchema</span><span class="token punctuation">(</span>\n  defaultPlugins<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>plugin <span class="token operator">=</span><span class="token operator">></span> plugin <span class="token operator">!==</span> NodePlugin<span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>schema <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printSchema</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>which generates this much simpler schema:</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code><span class="token comment" spellcheck="true"># The root query type which gives access points into the data universe.</span>\ntype Query <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true"># Exposes the root query type nested one level down. This is helpful for Relay 1</span>\n  <span class="token comment" spellcheck="true"># which can only query top level fields if they are in a particular form.</span>\n  <span class="token attr-name">query</span><span class="token punctuation">:</span> Query<span class="token operator">!</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{path:"/graphile-build/omitting-plugins/",title:"Omitting Plugins"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Documents/graphile.com/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.com/src/data/nav.json absPath of file [1] >>> JSON",name:"graphile-build-pg",sections:[{id:"guides",title:"Guides"}],pages:[{to:"/graphile-build-pg/introduction/",title:"Introduction",sectionId:"guides"},{to:"/graphile-build-pg/usage/",title:"Usage",sectionId:"guides"},{to:"/graphile-build-pg/settings/",title:"Settings",sectionId:"guides"},{to:"/graphile-build-pg/connections/",title:"Connections",sectionId:"guides"},{to:"/graphile-build-pg/relations/",title:"Relations",sectionId:"guides"},{to:"/graphile-build-pg/crud-mutations/",title:"CRUD Mutations",sectionId:"guides"},{to:"/graphile-build-pg/computed-columns/",title:"Computed Columns",sectionId:"guides"},{to:"/graphile-build-pg/custom-queries/",title:"Custom Queries",sectionId:"guides"},{to:"/graphile-build-pg/custom-mutations/",title:"Custom Mutations",sectionId:"guides"},{to:"/graphile-build-pg/security/",title:"Security",sectionId:"guides"},{to:"/graphile-build-pg/introspection/",title:"Introspection",sectionId:"guides"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---graphile-build-omitting-plugins-02e882d1d6f7630447d7.js.map