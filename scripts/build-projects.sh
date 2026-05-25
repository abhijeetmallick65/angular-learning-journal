#!/bin/bash

set -e

REPO_NAME="angular-learning-journal"
DOCS_DIR="docs"
PROJECTS_DIR="projects"

echo "Cleaning docs folder..."
rm -rf "$DOCS_DIR"
mkdir -p "$DOCS_DIR/projects"

cat > "$DOCS_DIR/index.html" <<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Angular Learning Journal</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 900px;
      margin: 40px auto;
      padding: 0 20px;
      line-height: 1.6;
    }
    a {
      color: #0b66c3;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .project {
      padding: 16px;
      border: 1px solid #ddd;
      border-radius: 10px;
      margin-bottom: 12px;
    }
  </style>
</head>
<body>
  <h1>Angular Learning Journal</h1>
  <p>This page contains live demos from my Angular learning journey.</p>
  <h2>Projects</h2>
HTML

for project in "$PROJECTS_DIR"/*; do
  if [ -d "$project" ] && [ -f "$project/package.json" ]; then
    PROJECT_NAME=$(basename "$project")

    echo "Building $PROJECT_NAME..."

    cd "$project"

    npm install
    npx ng build --configuration production --base-href="/$REPO_NAME/projects/$PROJECT_NAME/"

    cd ../..

    DIST_PATH=$(find "$project/dist" -mindepth 1 -maxdepth 2 -type f -name "index.html" | head -n 1 | xargs dirname)

    if [ -z "$DIST_PATH" ]; then
      echo "Could not find build output for $PROJECT_NAME"
      exit 1
    fi

    mkdir -p "$DOCS_DIR/projects/$PROJECT_NAME"
    cp -R "$DIST_PATH"/* "$DOCS_DIR/projects/$PROJECT_NAME/"

    cat >> "$DOCS_DIR/index.html" <<HTML
  <div class="project">
    <h3>$PROJECT_NAME</h3>
    <p><a href="./projects/$PROJECT_NAME/">View Live Demo</a></p>
  </div>
HTML

  fi
done

cat >> "$DOCS_DIR/index.html" <<HTML
</body>
</html>
HTML

echo "All projects built successfully."
