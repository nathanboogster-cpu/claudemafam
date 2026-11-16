#!/usr/bin/env bash
# Vercel "Ignored Build Step" for the repo-root app (pampered-puppies-site).
# Exit 0 = skip the build, exit 1 = build. Builds only when something outside
# the client app folders changed. Lives in a script because Vercel rejects an
# inline ignoreCommand longer than 256 characters.
git diff --quiet "${VERCEL_GIT_PREVIOUS_SHA:-HEAD^}" HEAD -- . \
  ':!bark-and-bork-mobile-pet-spa' ':!bow-wags' ':!flos-happy-clipper' \
  ':!groomer-on-call' ':!i-love-dogs' ':!pet-spa-luxe' \
  ':!sittin-pretty-pet-grooming' ':!sky-pet-grooming' ':!tongfluence' \
  2>/dev/null || exit 1
