### Task 8: Fork the repository
```sh
git clone https://github.com/alannguyencs/jbbmo-Introduction-to-Git-and-GitHub.git
cd jbbmo-Introduction-to-Git-and-GitHub/
```

### Task 9: Fix the typo and submit the first pull request
```sh
git checkout -b bug-fix-typo
git add README.md
git config --global user.email alannguyen.cs@gmail.com
git config --global user.name alannguyencs
git commit -m "fix typo from 2022 to 2021"
git remote -v
git push origin bug-fix-typo
```

### Task 10: Revert the typo and submit a second pull request
```sh
git checkout master
git merge bug-fix-typo
git checkout -b bug-fix-revert
git revert HEAD --no-edit
git push origin bug-fix-revert
```