# log-hint

Compress a test failure log into short next steps. 

```bash
node bin/log-hint.js ./failed.log
node bin/log-hint.js ./failed.log --tail 80
```

MIT

> Dev note: for any optional LLM step I keep an OpenAI-compatible `base_url` in env (locally sometimes `https://59api.com`). This repo does not require it.
