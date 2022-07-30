# GoogleCalenderSync

GoogleCalenderの予定を同期化する

# 実行するコマンド

```bash
npm init -y
npm install @google/clasp
npm install google-apps-script
```

Googleアカウントで認証する
claspコマンドが認識されていない時は`Node.js command prompt`から実行する

```bash
clasp login --no-localhost
```

claspコマンドが認識されていない時は`Node.js command prompt`から実行する
または、`Node.js command prompt`のプロパティにあるコマンドをVSCodeのターミナル(コマンドプロンプト)で実行する

```cmd
C:\Windows\System32\cmd.exe /k "C:\Program Files\nodejs\nodevars.bat"
```

ターミナル上に出力されたURLへアクセスすると、ログインと権限の許可が求められるので、
ログインするGoogleアカウントを選択し、claspからのアクセスを許可する。
表示された認証コードをターミナルにコピペすると認証が完了する

---

# デプロイ

```bash
clasp push
```

jsファイルからgsファイルが作成され、GASプロジェクトにアップロードされる。

```bash
clasp deploy --deploymentId {deployId} --description "{description}"
```

GASプロジェクトをデプロイする。外部から使用可能となる。
