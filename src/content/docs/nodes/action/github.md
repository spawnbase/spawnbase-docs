---
title: GitHub
description: Monitor PRs, triage issues, automate repo workflows.
---

The GitHub node lets your agents interact with repositories, issues, pull requests, gists, and GitHub Actions workflows.

## Connection Setup

Standard OAuth via Pipedream Connect. No special setup required.

## Available Actions

| Action                          | Description                                             |
| ------------------------------- | ------------------------------------------------------- |
| Create Branch                   | Create a new branch in a repo                           |
| Create Gist                     | Create a gist with one or more files                    |
| Create Issue                    | Create a new issue                                      |
| Create Issue Comment            | Add a comment to an issue                               |
| Create or Update File Contents  | Create or update a file in a repo                       |
| Create Pull Request             | Create a new pull request                               |
| Create Repository               | Create a new repo for the authenticated user            |
| Create Workflow Dispatch        | Trigger a GitHub Actions workflow                       |
| Disable Workflow                | Disable a GitHub Actions workflow                       |
| Enable Workflow                 | Enable a GitHub Actions workflow                        |
| Get Commit                      | Get details for a specific commit                       |
| Get Current User                | Get profile, orgs, and teams for the authenticated user |
| Get Issue Assignees             | Get assignees for an issue                              |
| Get Repository Content          | Get file or directory contents                          |
| Get Repository Info             | Get metadata for a repo                                 |
| Get Reviewers                   | Get reviewers for a PR or commit                        |
| Get Workflow Run                | Get details for a specific workflow run                 |
| List Commits                    | List commits in a repo                                  |
| List Gists for a User           | List public gists for a user                            |
| List Releases                   | List releases for a repo                                |
| List Workflow Runs              | List workflow runs for a repo                           |
| Search Issues and Pull Requests | Search by state and keyword                             |
| Star Repo                       | Star a repository                                       |
| Sync Fork Branch with Upstream  | Sync a forked branch with upstream                      |
| Update Gist                     | Update a gist's description or files                    |
| Update Issue                    | Update an existing issue                                |
| Update Project (V2) Item Status | Update item status in a GitHub Project                  |
| Update Pull Request             | Update title, body, state, or base branch               |

## Tips

- Most actions require **Repository** — this loads dynamically from your connected account.
- **Search Issues and Pull Requests** uses [GitHub search syntax](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests) — your agent can construct queries like `is:open label:bug`.
- **Create Workflow Dispatch** is useful for triggering CI/CD pipelines from your agent.
