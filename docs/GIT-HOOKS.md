# Sharing Git hooks

Git does not transfer executable hook files in `.git/hooks` when a repository is pushed. Those files live inside each local clone's Git metadata and are not tracked as normal project files.

This project keeps portable hook scripts in the tracked `.githooks/` directory. Each contributor can activate them with:

```sh
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit .githooks/commit-msg
```

The pre-commit hook rejects staged additions containing TODO or FIXME. The commit-msg hook enforces a minimum length of 10 characters and one of the allowed Conventional Commit prefixes.

A user can bypass client-side hooks with `git commit --no-verify`. This should be discouraged because it skips local quality checks. Hooks are a convenience, not a security boundary; CI should repeat important checks.
