# KUMA Lab.

玖馬巌 / Kuma Iwao のポートフォリオサイトです。  
Science / System / Stories を軸に、科学・システム・物語を横断する制作と活動をまとめます。

## 公開想定URL

```text
https://qiwao.github.io/
```

GitHubリポジトリ想定: `https://github.com/qiwao/qiwao.github.io`

GitHub Pages公開URL想定: `https://qiwao.github.io/`

GitHub Pagesで異なるURLを使う場合は、以下のファイル内のURLを書き換えてください。

- `index.html`
- `science.html`
- `system.html`
- `stories.html`
- `robots.txt`
- `sitemap.xml`

## ファイル構成

```text
index.html
science.html
system.html
stories.html
style.css
script.js
robots.txt
sitemap.xml
assets/
  hero-clean.png
  ogp.png
```

## GitHub Pagesでの公開手順

1. このフォルダの中身をGitHubリポジトリのルートに配置します。
2. GitHubのリポジトリで `Settings` → `Pages` を開きます。
3. `Source` を `Deploy from a branch` にします。
4. `Branch` を `main`、フォルダを `/ root` にします。
5. 保存後、GitHub Pagesの公開URLを確認します。

## OGP画像

SNS共有用のOGP画像は以下です。

```text
assets/ogp.png
```

サイズは 1200 × 630 px です。

## 更新時の注意

- トップ画像を変更した場合は、`assets/ogp.png` も再作成するとSNS表示が揃います。
- GitHub PagesのURLが変わる場合は、`sitemap.xml` とOGPメタタグ内のURLも変更してください。
- 画像ファイル名は大文字・小文字を含めてHTML内の指定と一致させてください。

## Latest copy update

- About subtitle changed to `玖馬巌 / Kuma Iwao`.
- About body text revised.

## OGP thumbnail update

外部リンク先に `og:image` または `twitter:image` がある場合、リンクカードのサムネイルに反映しています。取得できなかったものはローカル生成サムネイルを維持しています。

## Stories OGP thumbnail recheck

Stories Archiveの外部リンクについて、`og:image` / `twitter:image` / JSON-LD `image` の取得を試し、取得できたものはサムネイルへ反映しています。
