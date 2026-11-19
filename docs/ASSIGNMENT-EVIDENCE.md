# VCS Assignment-2 — Evidence index

Student enrollment: 2581403  
Repository: https://github.com/sunilaro1975-coder/vcs-campusnotes-2581403  
Partner: Advik1816478  
Partner repository: https://github.com/Advik1816478/vcs-campusnotes-2581348

## Q1 — Remote workflow
Repository and commit history are available online. The first-party GitHub API integration cannot run commands in the student's local terminal, so `git remote -v`, `git push`, `git clone`, and `git pull` output must be captured from a local clone. Suggested commands:

```sh
git remote -v
git push -u origin main
git clone https://github.com/sunilaro1975-coder/vcs-campusnotes-2581403.git CampusNotes-copy
cd CampusNotes-copy
git pull origin main
```

## Q2 — Feature branch and PR
Feature branch: `feature/kusharora-note-search`  
Issue: https://github.com/sunilaro1975-coder/vcs-campusnotes-2581403/issues/1  
Pull request: https://github.com/sunilaro1975-coder/vcs-campusnotes-2581403/pull/2

This PR is within the student's own repository. The requested fork workflow against the partner repository is not complete: the connected GitHub integration has read access only to the partner repository and does not expose a fork operation. Do not describe this PR as a partner fork PR.

## Q3 — Review and merge
The partner repository had no pull requests at the time it was inspected. A review of the student's own PR by its author would not be a valid independent partner review. This requirement remains pending a genuine partner PR and reviewer interaction.

## Q4 — Conventional commits, ignore rule, tags and release
Five conventional commit types have been added: feat, fix, docs, refactor, chore. `.gitignore` excludes Node dependencies, coverage, environment files, OS metadata, and logs. Tag and release commands are in `docs/RELEASE.md`; tags/release are not yet published because the connected integration does not expose tag or release creation.

## Q5 — Hooks
Tracked hook scripts are in `.githooks/pre-commit` and `.githooks/commit-msg`. Sharing and bypass analysis is in `docs/GIT-HOOKS.md`. In a local clone, run:

```sh
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit .githooks/commit-msg
```

Test the pre-commit hook by staging a line containing TODO or FIXME; it should block the commit. Remove the marker and commit again; it should pass. Test commit-msg with a message shorter than 10 characters or an invalid prefix (blocked), then with e.g. `docs: explain hook setup` (accepted).

## AI-use disclosure
AI assistance was used to draft code, documentation, and this evidence index. All local commands and tests must be run and verified by the student or partner before submission.
