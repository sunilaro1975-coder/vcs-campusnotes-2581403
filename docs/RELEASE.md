# Release and tags

The assignment asks for both a lightweight tag and an annotated tag named `v0.1.0`, followed by a GitHub Release. The connected GitHub integration used for this submission can create commits and pull requests but does not expose tag/ref or release creation actions. Therefore these are the exact local commands to finish that portion in a clone:

```sh
git tag v0.1.0
git tag -a v1.0.0 -m "CampusNotes v1.0.0"
git push origin v0.1.0 v1.0.0
```

Then open the repository's Releases page and choose **Draft a new release**, select `v1.0.0`, set title `CampusNotes v1.0.0`, add release notes summarizing note creation, validation, search, tests, and hooks, and publish.

Verification commands:

```sh
git log --oneline
git tag -n
```

Do not report a release as published until the Release page shows the published release.
