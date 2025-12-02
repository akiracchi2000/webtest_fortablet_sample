# Googleスプレッドシートへの結果保存 セットアップガイド

このガイドでは、アプリのクイズ結果をGoogleスプレッドシートに保存するための設定手順を説明します。

**★ポイント**:
1つのGASスクリプト（WebアプリURL）を、**すべてのテストHTMLで共通して使えます**。
テストごとにスクリプトを作る必要はありません。スプレッドシートに「テスト名」の列が追加されるので、そこでどのテストの結果か判別できます。

## 手順1: Googleスプレッドシートの作成
1.  [Googleスプレッドシート](https://sheets.google.com) にアクセスし、新しいスプレッドシートを作成します。
2.  名前を「数学クイズ結果」などに変更します。
3.  1行目（ヘッダー行）に以下の列名を入力します：
    - **A1**: 日時
    - **B1**: テスト名
    - **C1**: 名前
    - **D1**: スコア
    - **E1**: 全問題数
    - **F1**: かかった時間

## 手順2: スクリプトの作成
1.  スプレッドシートのメニューから **「拡張機能」** > **「Apps Script」** をクリックします。
2.  `Code.gs` ファイルにある既存のコードをすべて削除し、以下のコードを貼り付けます：

```javascript
function doPost(e) {
  try {
    // データを受信
    const jsonData = JSON.parse(e.postData.contents);
    
    // 1. スプレッドシートを取得
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 2. ヘッダー行がない場合は作成（念のため）
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["日時", "テスト名", "名前", "スコア", "全問数", "所要時間"]);
    }
    
    // 3. データを追加
    sheet.appendRow([
      new Date(), // 日時
      jsonData.quizName || "不明なテスト", // テスト名
      jsonData.name,
      jsonData.score,
      jsonData.total,
      jsonData.time
    ]);
    
    // 成功レスポンス
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // エラーレスポンス
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3.  **保存アイコン**（フロッピーディスクのマーク）をクリックして保存します。

## 手順3: ウェブアプリとしてデプロイ
1.  画面右上の青い **「デプロイ」** ボタン > **「新しいデプロイ」** をクリックします。
2.  「種類の選択」の歯車アイコンをクリックし、**「ウェブアプリ」** を選択します。
3.  以下の通り設定します：
    - **説明**: クイズ結果保存
    - **次のユーザーとして実行**: 自分（あなたのメールアドレス）
    - **アクセスできるユーザー**: **全員** (これを選択しないと、アプリからデータを送信できません)
4.  **「デプロイ」** をクリックします。
5.  「アクセスを承認」という画面が出たら「アクセスを承認」をクリックし、自分のアカウントを選択します。
    - ※「このアプリはGoogleによって確認されていません」という警告が出た場合は、左下の **「詳細」** をクリックし、**「無題のプロジェクト（安全ではないページ）に移動」** をクリックして許可してください。
6.  **ウェブアプリのURL** が表示されるので、コピーします（`https://script.google.com/macros/s/...` で始まるURLです）。

## 手順4: アプリとの連携
1.  エディタで `M1-1-1-1.html` を開きます。
2.  `sendResults()` 関数内にある `const GAS_URL = "YOUR_GAS_WEB_APP_URL";` という行を探します。
3.  `"YOUR_GAS_WEB_APP_URL"` の部分を、手順3でコピーした実際のURLに書き換えてください。
