…or create a new repository on the command line

echo "# asis" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/epiharyono/asis.git
git push -u origin master
