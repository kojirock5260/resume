# kojireock5260's resume

## Based on

https://github.com/kawamataryo/resume

## Data

| Version | GitHub Pages | Markdown | PDF (Releases) |
|---|---|---|---|
| 業務委託版 | https://kojirock5260.github.io/resume/ | [docs/README.md](docs/README.md) | resume.pdf |
| 正社員版 | https://kojirock5260.github.io/resume/fulltime.html | [docs/fulltime.md](docs/fulltime.md) | resume-fulltime.pdf |

PDF は [Releases](https://github.com/kojirock5260/resume/releases) から取得できます。

### 編集時の注意

- 2 ファイルは共通部分を二重管理しています（md-to-pdf と textlint が Jekyll の include を処理できないため）。`docs/README.md` を直したら `docs/fulltime.md` にも反映してください。差分は希望条件（希望ポジション）・TK社の厚み・リード経験・経歴一覧の表（正社員版は 1 表に統合）です。`class="web-only"` の要素は Web ページのみに表示され、PDF には出ません
- `［要確認：…］` は本人しか分からない数字・事実のプレースホルダーです。公開前に `npm run todo` で残りがないことを確認してください
- LLM 組み込み実績は未着手のため、追記位置を HTML コメントで確保しています

## Features

### 💅 Lint text

Automatic proofreading with [textlint](https://github.com/textlint/textlint).

```
$ npm run fix
```
`npm run lint` is also executed on pre-commit by [husky](https://github.com/typicode/husky) (`npm install` sets up the hook).  
proofreading rules are set with `.textlintrc`.



### 📝 Convert MD to PDF

You can generate PDF with [md-to-pdf](https://www.npmjs.com/package/md-to-pdf).


```
$ npm run build:pdf
```

The output PDF can be styled as you like with CSS. Edit the `pdf-configs/style.css`.  

### 🛠 Create release

When you push with a `v**` tag, GitHub Actions will run the build, generate both PDFs, create a Release, and register `resume.pdf` / `resume-fulltime.pdf` to Assets.

```
$ git commit -m "add job"
$ git tag v1.0
$ git push origin --tags
```

### 📆 Remind update

Automatically generate issues every three months with GitHub Actions Schedules triggers to prompt you to update your resume.

To change the duration or stop the job, edit `.github/workflows/create-issue.yml`.  
To change the issue contents, edit `.github/ISSUE_TEMPLATE.md`.
