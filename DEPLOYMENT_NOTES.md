# Deployment notes

- Keep this project root at the publishing root: `index.html`, `admin/`, assets, and pages all live at this level.
- For project pages, relative paths are used so nested URLs and asset requests resolve under the repository path.
- `/admin/` is a visible UI preview only. Do not enable public admin mutations until authentication and backend RLS are implemented.
- The target path from the prompt (`/ZENSTORE`) does not match the repository name (`ZEN-STOREV3`). Use the Pages URL GitHub shows in Settings → Pages.
- No GitHub push, Actions run, or deployment was performed in this session.
