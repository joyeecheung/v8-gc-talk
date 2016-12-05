### Are Your V8 GC Logs Speaking to You?

**NOTE: this is for my talk at Node Live Beijing, which preceded the talk at Node Interactive 2016. If you are coming for the slides of that NINA talk, [please click here](https://github.com/joyeecheung/talks/tree/master/node_interactive_2016).**

For my talk at [Node Live Beijing](http://live.nodejs.org/events/beijing.html), May 2016.

> Chau Yee is an intern at alinode, currently working on analysis and visualization of V8 GC logs, heapdumps and CPU profiles.

> Long garbage collection(GC) pauses can contribute to many performance problems that arise in web application backends written in VM-based dynamic languages. Node.js, as a relatively new technology based on the V8 JavaScript engine, still doesn't have much tools to tackle this problem, and at the moment there aren't many documentation or articles about V8 GC logs either - to really understand those logs, you still have to dive into the V8 source code. In this talk, Chau Yee will talk about Alinode's experiences in analyzing the V8 GC logs, hopefully saving you the trouble of digging around the V8 source code.

The GC logs are generated using [alinode](http://alinode.aliyun.com/), so they are a little bit different from the ones gerenated by the upstream(e.g. we have statistics about memory usuage in each space before the GC starts). Most of the logs are still the same though.
