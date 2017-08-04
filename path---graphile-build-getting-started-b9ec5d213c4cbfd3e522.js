webpackJsonp([0x63ff1864eab54000],{"./node_modules/json-loader/index.js!./.cache/json/graphile-build-getting-started.json":function(n,e){n.exports={data:{remark:{html:'<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<h3 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h3>\n<p>Graphile-Build uses your local version of <code>graphql</code> to avoid conflicts, so you need to install both:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save graphile-build graphql\n</code></pre>\n      </div>\n<h3 id="building-your-schema"><a href="#building-your-schema" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Building your Schema</h3>\n<p>The <a href="/graphile-build/schema-builder/#buildSchema"><code>buildSchema</code></a> method will (asynchronously) build a GraphQL schema from a\nlist of plugins. We ship a number of <a href="/graphile-build/default-plugins/">default\nplugins</a>  that are sufficient to create a\nsimple schema, like so:</p>\n<!-- source: examples/empty-schema.js -->\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> buildSchema<span class="token punctuation">,</span> defaultPlugins <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"graphile-build"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> printSchema <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"graphql/utilities"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">buildSchema</span><span class="token punctuation">(</span>defaultPlugins<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>schema <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printSchema</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// ES2017: const schema = await buildSchema(defaultPlugins);</span>\n</code></pre>\n      </div>\n<p>This will generate a basic schema which supports the <a href="https://facebook.github.io/relay/docs/graphql-relay-specification.html">Relay <code>Node</code> interface</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code><span class="token comment" spellcheck="true"># An object with a globally unique `ID`.</span>\ninterface Node <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true"># A globally unique identifier. Can be used in various places throughout the system to identify this single value.</span>\n  <span class="token attr-name">id</span><span class="token punctuation">:</span> ID<span class="token operator">!</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true"># The root query type which gives access points into the data universe.</span>\ntype Query implements Node <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true"># Exposes the root query type nested one level down. This is helpful for Relay 1</span>\n  <span class="token comment" spellcheck="true"># which can only query top level fields if they are in a particular form.</span>\n  <span class="token attr-name">query</span><span class="token punctuation">:</span> Query<span class="token operator">!</span>\n\n  <span class="token comment" spellcheck="true"># The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`.</span>\n  <span class="token attr-name">id</span><span class="token punctuation">:</span> ID<span class="token operator">!</span>\n\n  <span class="token comment" spellcheck="true"># Fetches an object given its globally unique `ID`.</span>\n  node<span class="token punctuation">(</span>\n    <span class="token comment" spellcheck="true"># The globally unique `ID`.</span>\n    <span class="token attr-name">id</span><span class="token punctuation">:</span> ID<span class="token operator">!</span>\n  <span class="token punctuation">)</span><span class="token punctuation">:</span> Node\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>(See <a href="/graphile-build/omitting-plugins/">Omitting Plugins</a> for how to make this\nschema even simpler by omitting the Node interface, and\n<a href="/graphile-build/plugin-options/">Options</a> for how to pass options to plugins.)</p>',frontmatter:{path:"/graphile-build/getting-started/",title:"Getting Started"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Documents/graphile.com/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.com/src/data/nav.json absPath of file [1] >>> JSON",name:"graphile-build-pg",sections:[{id:"guides",title:"Guides"}],pages:[{to:"/graphile-build-pg/introduction/",title:"Introduction",sectionId:"guides"},{to:"/graphile-build-pg/usage/",title:"Usage",sectionId:"guides"},{to:"/graphile-build-pg/settings/",title:"Settings",sectionId:"guides"},{to:"/graphile-build-pg/connections/",title:"Connections",sectionId:"guides"},{to:"/graphile-build-pg/relations/",title:"Relations",sectionId:"guides"},{to:"/graphile-build-pg/crud-mutations/",title:"CRUD Mutations",sectionId:"guides"},{to:"/graphile-build-pg/computed-columns/",title:"Computed Columns",sectionId:"guides"},{to:"/graphile-build-pg/custom-queries/",title:"Custom Queries",sectionId:"guides"},{to:"/graphile-build-pg/custom-mutations/",title:"Custom Mutations",sectionId:"guides"},{to:"/graphile-build-pg/security/",title:"Security",sectionId:"guides"},{to:"/graphile-build-pg/introspection/",title:"Introspection",sectionId:"guides"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---graphile-build-getting-started-b9ec5d213c4cbfd3e522.js.map