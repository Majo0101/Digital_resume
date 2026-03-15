# Digital Resume

My personal digital resume a full-stack single-page portfolio website built with **React + Vite**. Dynamic content (education, experience, gallery) is served by a **PHP 8.2 / MySQL 8** REST API. Development runs entirely in **Docker Compose** the production build is a standard `dist/` output that deploys to any Apache/PHP web host.

---

## Features

- **Single-page portfolio** — Banner, About Me, Education, Experience, Gallery, and Contact sections
- **Certificates sub-page** (`/cert`) — dedicated page for displaying certificates
- **Bilingual content** — EN + additional locales stored in the database
- **Dynamic data** — Education, Experience, and Gallery fetched at runtime via PHP/MySQL endpoints
- **Responsive design** — Bootstrap 5 with fluid, viewport-height-aware sizing
- **Scroll animations** — section reveal powered by `react-intersection-observer`
- **Carousels** — Experience and Gallery sections use `react-slick`
- **Environment-aware builds** — `.env.development` / `.env.production` with a post-build PHP secrets injection script

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 7, React Router v6 |
| Styling | Bootstrap 5, custom CSS |
| HTTP client | Axios |
| Backend | PHP 8.2, Apache (`mod_rewrite`, `mod_headers`) |
| Database | MySQL 8.0 |
| Dev environment | Docker Compose v3.9 + phpMyAdmin |

---

## Project Structure

```
├── src/
│   ├── api/            # Axios data-fetching modules (education, experience, gallery)
│   ├── components/     # UI sections (Banner, AboutMe, Education, Experience, Gallery, Contact …)
│   ├── hooks/          # Custom React hooks (font/size, carousels, loader)
│   ├── pages/          # Route-level pages (MainPage, CertPage)
│   ├── styling/        # Per-component CSS files
│   └── text/           # Static copy as JSON (i18n-ready)
├── public/
│   └── script_*.php    # PHP REST endpoints (education, experience, gallery)
├── server/             # Docker Compose setup (dev only)
│   ├── docker-compose.yml
│   ├── Dockerfile      # PHP 8.2 + Apache image
│   ├── apache/         # Virtual host config
│   └── initdb/         # MySQL seed script (init.sql)
└── build/
    └── php_env_replace.js  # Post-build: injects env secrets into PHP files in dist/
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) — for local development only

### Environment files

Create `.env.development` and `.env.production` in the project root:

| Variable | Description | Example |
|---|---|---|
| `DB_HOST` | MySQL hostname — must match the Docker Compose service name | `db` |
| `DB_NAME` | Database name | `bmcode_db` |
| `DB_USERNAME` | MySQL app user | `your_db_user` |
| `DB_PASSWORD` | Password for `DB_USERNAME` | `your_db_password` |
| `MYSQL_ROOT_PASSWORD` | MySQL root password (Docker only) | `your_root_password` |
| `PORT_MYSQL` | Host port for MySQL container | `3306` |
| `PORT_APP` | Host port for the Apache/PHP container | `8080` |
| `PORT_PMA` | Host port for phpMyAdmin | `8081` |
| `CORS_ORIGIN` | Allowed origin in Apache CORS headers | `http://localhost:8080` |
| `VITE_API_POINT_EDU` | Education PHP endpoint URL (bundled by Vite) | `http://localhost:8080/script_edu.php` |
| `VITE_API_POINT_EXP` | Experience PHP endpoint URL | `http://localhost:8080/script_exp.php` |
| `VITE_API_POINT_GALL` | Gallery PHP endpoint URL | `http://localhost:8080/script_gall.php` |
| `API_KEY_EDU` | Secret injected into `script_edu.php` at build time — never in the JS bundle | `your_edu_api_key` |
| `API_KEY_EXP` | Secret injected into `script_exp.php` | `your_exp_api_key` |
| `API_KEY_GALL` | Secret injected into `script_gall.php` | `your_gall_api_key` |
| `VITE_API_KEY_EDU` | Client-side counterpart of `API_KEY_EDU` — must match | `your_edu_api_key` |
| `VITE_API_KEY_EXP` | Client-side counterpart of `API_KEY_EXP` | `your_exp_api_key` |
| `VITE_API_KEY_GALL` | Client-side counterpart of `API_KEY_GALL` | `your_gall_api_key` |

> **Security:** Never commit `.env.*` files to version control — add them to `.gitignore`.

---

## Development (Docker Compose)

All services (Apache/PHP, MySQL, phpMyAdmin) spin up via Docker Compose. No local PHP or MySQL installation needed.

```bash
# 1. Build the Vite app in development mode (outputs to dist/)
npm run build:dev

# 2. Start all Docker services
npm run docker:dev
```

| Service | URL |
|---|---|
| Website | `http://localhost:<PORT_APP>` |
| phpMyAdmin | `http://localhost:<PORT_PMA>` |
| MySQL | `localhost:<PORT_MYSQL>` |

```bash
# Stop and remove containers
npm run docker:down
```

## Production Deployment (standard hosting)

The production build outputs a `dist/` folder containing the compiled React app alongside the PHP scripts with secrets already injected. Upload the contents of `dist/` to any standard Apache/PHP web host (shared hosting, VPS, etc.) — no Docker required in production.

```bash
# Build for production (Vite build + PHP secret injection)
npm run build

# dist/ is now ready to upload to your web host
```

> Make sure your host runs **PHP 8.2+**, **Apache** with `mod_rewrite` and `mod_headers` enabled, and a **MySQL 8** database. Import `server/initdb/init.sql` to seed the database on first deploy.

---

## Database Schema

Tables are auto-created and seeded on first Docker start via `server/initdb/init.sql`. For production, import the same SQL file through your host's database panel.

| Table | Purpose |
|---|---|
| `bm_edu` | Education history entries |
| `bm_exp` | Work experience entries |
| `bm_gall` | Gallery / certificate items |

All tables include a `lang` column (`EN`, `SK`, …) for multi-language content.

---

## Scripts Reference

| Script | Description |
|---|---|
| `npm run dev` | Vite HMR dev server (frontend only) |
| `npm run edu / exp / gall` | Mock API servers via json-server |
| `npm run build:dev` | Development build + PHP env injection → `dist/` |
| `npm run build` | Production build + PHP env injection → `dist/` |
| `npm run docker:dev` | Start Docker stack with `.env.development` |
| `npm run docker:prod` | Start Docker stack with `.env.production` |
| `npm run docker:down` | Stop and remove all Docker containers |
| `npm run docker:down` | Stop and remove Docker containers |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the Vite production build locally |

---

## License

Copyright (c) 2026 Marian Bodnar

All rights reserved.

This source code is provided for viewing purposes only.
No permission is granted to copy, modify, distribute, or use this software
without explicit written permission from the author.

