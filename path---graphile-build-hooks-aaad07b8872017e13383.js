webpackJsonp([0x3458184d473e9400],{"./node_modules/json-loader/index.js!./.cache/json/graphile-build-hooks.json":function(e,o){e.exports={data:{remark:{html:'<h2 id="hooks"><a href="#hooks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hooks</h2>\n<p>The most common thing for a plugin to do is to add hooks to the builder.</p>\n<p>Hooks allow you to manipulate the argument (specification) that is being passed\nto the GraphQL object constructors before the objects are constructed. You can\nthink of hooks as wrappers around the original object spec, like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> MyType <span class="token operator">=</span> <span class="token function">newWithHooks</span><span class="token punctuation">(</span>GraphQLObjectType<span class="token punctuation">,</span> spec<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// is equivalent to:</span>\n\n<span class="token keyword">const</span> MyType <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GraphQLObjectType</span><span class="token punctuation">(</span><span class="token function">hook3</span><span class="token punctuation">(</span><span class="token function">hook2</span><span class="token punctuation">(</span><span class="token function">hook1</span><span class="token punctuation">(</span>spec<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Hooks are registered via a call to <code>builder.hook(hookName, hookFunction)</code>.</p>\n<p>Every <code>hookFunction</code> must synchronously return a value - either the value that it was passed\nor a derivative of it (preferably immutable, but we\'re not strict on that).</p>\n<h3 id="which-hook-to-attach-to-hookname"><a href="#which-hook-to-attach-to-hookname" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Which hook to attach to: <code>hookName</code></h3>\n<p>The <code>hookName</code> that you register via <code>builder.hook(hookName, hookFunction)</code>\nmust match one of the supported hooks. See <a href="/graphile-build/all-hooks/">All\nHooks</a> for a list of all the hooks we support,\nhere\'s a brief overview of some of the more important ones:</p>\n<ul>\n<li>\n<p><code>build</code>: extend the <a href="/graphile-build/build-object/">Build object</a> passed to all other hooks</p>\n</li>\n<li>\n<p><code>init</code>: perform setup after <code>build</code> freezes but before building the schema starts</p>\n</li>\n<li>\n<p><code>GraphQLSchema</code>: root-level schema - hook to add <code>query</code>,\n<code>mutation</code> or <code>subscription</code> fields; called implicitly by <code>buildSchema(plugins, options)</code></p>\n</li>\n<li>\n<p>When creating a <code>GraphQLObjectType</code> via\n<code>newWithHooks</code>:</p>\n<ul>\n<li><code>GraphQLObjectType</code> add/remove any root-level attributes, e.g. add a description</li>\n<li><code>GraphQLObjectType:interfaces</code> add/remove interfaces</li>\n<li><code>GraphQLObjectType:fields</code> add/remove fields (delayed)</li>\n<li><code>GraphQLObjectType:fields:field</code>: manipulate individual field spec, e.g.\nadd a description</li>\n<li><code>GraphQLObjectType:fields:field:args</code> add/remove arguments to an individual field</li>\n</ul>\n</li>\n<li>\n<p>When creating a <code>GraphQLInputObjectType</code> via\n<code>newWithHooks</code>:</p>\n<ul>\n<li><code>GraphQLInputObjectType</code> add/remove root-level attributes, e.g. description</li>\n<li><code>GraphQLInputObjectType:fields</code> add/remove additional fields to this object type (delayed)</li>\n<li><code>GraphQLInputObjectType:fields:field</code>: customize an individual field from above</li>\n</ul>\n</li>\n<li>\n<p>When creating a <code>GraphQLEnumType</code> via <code>newWithHooks</code>:</p>\n<ul>\n<li><code>GraphQLEnumType</code> add/remove any root-level attributes, e.g. add a description</li>\n<li><code>GraphQLEnumType:values</code> add/remove values</li>\n</ul>\n</li>\n</ul>\n<p>The "(delayed)" hooks above (and their descendents) are not called until\n<em>after</em> the object is constructed (which means they can reference the object\nitself - allowing circular references such as our <code>type Query { query: Query }</code>\ncircular type); GraphQL will automatically call them when <code>Type.getFields()</code> is\ncalled, which may still be within the same tick - i.e. they are not fully\nasynchronous.</p>\n<h3 id="what-to-do-when-that-hook-fires-hookfunction"><a href="#what-to-do-when-that-hook-fires-hookfunction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What to do when that hook fires: <code>hookFunction</code></h3>\n<p>The <code>hookFunction</code> that you register via <code>builder.hook(hookName, hookFunction)</code> will be called with 3 arguments:</p>\n<ol>\n<li>The input object (e.g. the spec that would be passed to the GraphQLObjectType constructor)</li>\n<li>The <code>Build</code> object (see below)</li>\n<li>The <code>Context</code> object (see below) which contains a <code>scope</code> property</li>\n</ol>\n<h4 id="input-object"><a href="#input-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Input object</h4>\n<p>Depending on the hook being called the input object might be an array (as in\nthe case of <code>GraphQLObjectType:interfaces</code>) or an object (as in all other\ncases, currently).  See <a href="/graphile-build/all-hooks/">All Hooks</a> for a list of\nall the hooks, their input types, etc</p>\n<h4 id="build-object-build"><a href="#build-object-build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build object (<code>Build</code>)</h4>\n<p>The build object (see <a href="/graphile-build/build-object/">Build Object</a>) contains a\nnumber of helpers and sources of information relevant to the current build of\nthe GraphQL API. If you\'re in watch mode then every time a new schema is\ngenerated a new build object will be used.</p>\n<p>Plugins may extend the <code>build</code> object via the <code>build</code> hook. Once the <code>build</code>\nhook is complete the build object is frozen.</p>\n<p>The most commonly used methods are:</p>\n<ul>\n<li><code>build.extend(obj1, obj2)</code> - returns a new object based on a non-destructive\nmerge of <code>obj1</code> and <code>obj2</code> (will not overwrite keys!) - normally used at the\nreturn value for a hook</li>\n<li><code>build.graphql</code> - equivalent to <code>require(\'graphql\')</code>, but helps ensure\nGraphQL version clashes do not occur</li>\n</ul>\n<p>See <a href="/graphile-build/build-object/">Build Object</a>) for the rest.</p>\n<h4 id="context-object-context"><a href="#context-object-context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Context object (<code>Context</code>)</h4>\n<p>The context object (see <a href="/graphile-build/context-object/">Context Object</a>) contains\nthe information relevant to the current hook. Most importantly it contains the\n<code>scope</code> (an object based on the third argument passed to <code>newWithHooks</code>) but it\nalso contains a number of other useful things. Here\'s some of the more commonly\nused ones:</p>\n<ul>\n<li><code>scope</code> - an object based on the third argument to <code>newWithHooks</code> or\n<code>fieldWithHooks</code>; for deeper hooks (such as <code>GraphQLObjectType:fields:field</code>)\nthe scope from shallower hooks (such as <code>GraphQLObjectType</code>) are merged in.</li>\n<li><code>Self</code> - only available on hooks that are called after the object is created\n(e.g. <code>GraphQLObjectType:fields</code>), this contains the object that has been\ncreated allowing recursive references.</li>\n<li><code>fieldWithHooks(fieldName, spec, scope = {})</code> - on <code>GraphQLObjectType:fields</code>, used for adding a field if\nyou need access to the field helpers (or want to define a scope)</li>\n</ul>\n<h3 id="namespaces"><a href="#namespaces" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Namespaces</h3>\n<p>Properties added to the <code>Build</code> object or set on the <code>Context.scope</code> should be\nnamespaced so that they do not conflict; for example <code>graphile-build-pg</code> uses\nthe <code>pg</code> namespace: <code>pgSql</code>, <code>pgIntrospection</code>, <code>isPgTableType</code>, etc</p>\n<p>TODO: expand</p>',frontmatter:{path:"/graphile-build/hooks/",title:"Hooks"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Documents/graphile.com/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"}]}},{node:{id:"/Users/benjiegillam/Documents/graphile.com/src/data/nav.json absPath of file [1] >>> JSON",name:"graphile-build-pg",sections:[{id:"guides",title:"Guides"}],pages:[{to:"/graphile-build-pg/introduction/",title:"Introduction",sectionId:"guides"},{to:"/graphile-build-pg/usage/",title:"Usage",sectionId:"guides"},{to:"/graphile-build-pg/settings/",title:"Settings",sectionId:"guides"},{to:"/graphile-build-pg/connections/",title:"Connections",sectionId:"guides"},{to:"/graphile-build-pg/relations/",title:"Relations",sectionId:"guides"},{to:"/graphile-build-pg/crud-mutations/",title:"CRUD Mutations",sectionId:"guides"},{to:"/graphile-build-pg/computed-columns/",title:"Computed Columns",sectionId:"guides"},{to:"/graphile-build-pg/custom-queries/",title:"Custom Queries",sectionId:"guides"},{to:"/graphile-build-pg/custom-mutations/",title:"Custom Mutations",sectionId:"guides"},{to:"/graphile-build-pg/security/",title:"Security",sectionId:"guides"},{to:"/graphile-build-pg/introspection/",title:"Introspection",sectionId:"guides"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---graphile-build-hooks-aaad07b8872017e13383.js.map