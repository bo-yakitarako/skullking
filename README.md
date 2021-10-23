# SkullKingのゲームを作るぞぉ！
作れたらいいね。

## 環境構築
Macでの環境構築方法だよ

### 1. このリポジトリをcloneする
Gitが無い場合は[こことか](https://tracpath.com/bootcamp/git-install-to-mac.html)参考に入れといてくなんせ

Gitの設定確認しておく
```shell
$ git config --list --global
```
ここで`user.name`と`user.email`が無いとアレなので追加しときましょ。あったら多分大丈夫

```shell
$ git config --global user.name [GitHubのユーザー名]
$ git config --global user.email [GitHubのユーザー名]@users.noreply.github.com
```

Gitの設定再確認して`user.name`と`user.email`が追加されてたらOK
```shell
$ git config --list --global
```

したら好きなフォルダでこのリポジトリをcloneしようね
```shell
$ git clone https://github.com/bo-yakitarako/skullking.git
```

OK
したら`skullking`フォルダーをVS Codeで開いておきまひょ
VS Code開いたら<br>
`ファイル > 開く`からのフォルダ選択でOK

今後はこのフォルダで作業するぞい！

### 2. Node.js入れる
Node.jsのバージョンを簡単に変えられるnvmってやつ入れて、そっからNode.jsをインストールするぞい。

VS Codeでターミナル開いて

```shell
$ brew update
$ brew install nvm
$ nvm install v14.18.1
$ node --version
```

### 3. パッケージインストールする
必要なやつ入れていくぜ

```shell
$ npm install --global yarn
$ yarn install
```

これで完璧だ...

## 開発サーバー立てる
以下のコマンドで開発サーバー立てると http://localhost:3000/ にアクセスでなんか見れるよん

```shell
$ yarn dev
```

## テスト
**サーバーサイドでなんか作ったら必ずテストで確認しとこうね**

`server/tests`以下がテストファイルをしまっておくところ。

テスト実行するときは

```shell
$ yarn test
$ yarn test server/tests/testModule.test.ts # モジュール指定版
```

テストの書き方は以下のとことか参考になるかも
- https://qiita.com/okazuki/items/991a068892e946531612
- https://zenn.dev/296u/articles/7175641f1c4492
