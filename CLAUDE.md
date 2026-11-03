@AGENTS.md

# SOP: Vercel deployment rate limits (every site in this repo)

All client sites deploy from `main` through Vercel projects in the Tongfluence
team, which is on the Hobby plan and shares one daily deployment limit. When
that limit is hit, a commit status or deployment reads **"Deployment rate
limited — retry in 24 hours"**. That is a billing limit, not a code failure.

1. **Do not treat it as red CI.** If every other check is green and the user
   asked for the merge, merge the PR anyway. Do not push empty commits, revert,
   or close and reopen anything to "unstick" it.
2. **Tell the user** which Vercel projects were rate limited (the status
   context names the project, e.g. `Vercel – tongfluence`), and that the
   affected sites will not update until the limit resets.
3. **Schedule the retry for the next day.** If the `send_later` tool is
   available, schedule a check-in about 24 hours after the rate-limit status
   appeared (add 15 minutes of margin). Otherwise tell the user to ask again the
   next day.
4. **When the retry fires:**
   - Fetch `main` and check the latest deployment of each affected Vercel
     project (the Vercel MCP tools if they have access, otherwise the commit
     statuses on `main` and on the merged PR).
   - If a project deployed after the limit reset, there is nothing to do.
   - If it is still not live, redeploy it: use the Vercel MCP tools if the
     connection is allowed to; otherwise ask the user to open the project's
     latest deployment in Vercel and click **⋯ → Redeploy**, naming each
     project.
   - Any work merged while the limit was in effect ships with that redeploy;
     a redeploy of the latest `main` commit carries every earlier merge.
   - If it is rate limited again, repeat from step 2.
5. **Save quota while limited.** Commits that only touch one client app's
   folder do not deploy the other apps (see the `ignoreCommand` in each
   `vercel.json`), but changes outside the client folders, like this file,
   `scripts/` or `.github/`, also build the root project. Hold those until
   the limit resets when you can.
