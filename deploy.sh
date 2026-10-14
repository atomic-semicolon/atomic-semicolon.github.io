#!/bin/bash

# Simple deployment script for GitHub Pages
echo "Deploying portfolio website to GitHub Pages..."

# Check if we're on the main branch
if [ "$(git rev-parse --abbrev-ref HEAD)" != "main" ]; then
  echo "Warning: You are not on the main branch. Deploying to main anyway."
fi

# Add all changes
git add .

# Commit if there are changes
if ! git diff-index --quiet HEAD --; then
  git commit -m "Update portfolio website"
fi

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

echo "Deployment complete!"