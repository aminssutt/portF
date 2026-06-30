# Portfolio de Lakhdar Berache

Portfolio React construit avec Vite et déployé par Dokploy depuis GitHub.

## Stack

- Node.js `20.19.0`
- React 19 et Vite
- Nginx dans Docker
- Docker Compose sur Dokploy

## Développement local

```bash
npm ci
npm run dev
```

## Vérifications

```bash
npm run build
docker compose config --quiet
docker compose build
```

Le conteneur Nginx s'exécute sans privilèges sur le port interne `3000` et expose un healthcheck sur `/healthz`.

## Déploiement

Dokploy déploie directement ce dépôt depuis la branche `main` avec `docker-compose.yml` :

1. un push arrive sur `main` ;
2. Dokploy récupère le commit et reconstruit l'image ;
3. le domaine pointe vers le service `app` sur le port `3000`.

Le workflow GitHub Actions vérifie le build applicatif et l'image Docker. Il ne déclenche pas lui-même le déploiement : l'auto-déploiement reste géré par l'intégration GitHub de Dokploy, comme pour ReBloom.
