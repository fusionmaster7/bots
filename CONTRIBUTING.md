# Getting Started

Ready to contribute, but not sure how or where to start?

> If you've never cloned a repository, or made a new branch or made a pull request before, we recommend taking a look at (https://docs.github.com/en/free-pro-team@latest/github)

1. First up you need to fork (make a copy) this repo to your Github account.
2. Clone (download) your fork to your computer.
3. Set your streams so you can sync your clone with the original repo (get the latest updates).

   - `git remote add upstream https://github.com/fusionmaster7/bots.git`
   - `git pull upstream master`
   - The above 2 commands will synchronize your forked version of the project with the actual repository.

4. Create a branch for your task and complete the task.
5. Pull from the upstream again, like we did in step 3. This is to ensure we still have the latest code.
   - `git pull upstream master`

6. Commit and push the code to your fork.
    - After commiting, use the following code to push the code.
    - `git push origin branch-name:branch-name`
    - Here the branch-name will be the name you give to your branch.

7. The pull request will be reviwed and decided upon by the collaborators.


# Steps to add a new Bot
1. After cloning the repo. Create a new local branch having name same as the site for which you are creating the bot. For example, if you are creating a bot for Telegram, the new branch should be named Telegram.

2. Checkout to the new branch using `git checkout branch-name`.

3. Create a new directory having the same name as the branch

4. Run `npm init -y`. Make sure the package name is in **lowercase**.

5. All the source code of the bot should be in the **src** directory inside the bot directory

6. The entry point of the Application should be an index.js file

7. Use **Prettier** and **ESLint** to format code