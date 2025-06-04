# Resume Builder

This project demonstrates a resume builder built with Next.js App Router, Tailwind CSS, Prisma, Auth.js, and PDFKit.

The app includes authentication, resume data stored in a Prisma database, and an API route that generates PDFs using PDFKit.

Due to environment restrictions, dependencies are not installed automatically. Install Node.js packages using `npm install` before running the app.

## Running with Docker

Alternatively you can run the app in a container. The repository provides a
`Dockerfile` and `docker-compose.yml` which install dependencies, build the
Next.js project and start the server.

Build and start the container:

```bash
docker compose up --build
```

The application will be available at <http://localhost:3000>. Resume data is
stored in a SQLite database inside the `prisma-data` volume defined in the
compose file.
