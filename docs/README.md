# 職務経歴書

## 基本情報

| key | value |
|---|---|
| 氏名 | 藤田 雄大（Fujita Yudai） |
| 生年月日 | 1984/01/21 |
| 居住地 | 埼玉県 |
| ブログ | https://kojirooooocks.hatenablog.com/ |

---

## サマリー

決済・認証を主軸に、複数社で**5 つの決済サービス連携**（PAY.JP / GMO / 楽天 Pay / Amazon Pay / SBPS）と、**KYC・認証基盤**（Amazon Cognito）の設計から実装・運用までを担ってきました。「お金」と「本人確認」という、重要な領域に長く携わってきました。

開発には**Claude Code / Cursor を日常的に組み込み**、機密性の高い案件でも情報を漏らさない運用ルールを設計したうえで、スピードと品質を両立しています。PHP / Laravel を主軸に、フロント（Vue / Nuxt）・テスト基盤・CI/CD まで一気通貫で対応できます。

2018 年から週 1 回の技術ブログを継続し、ブログ運営コミュニティも主宰。学び続ける姿勢と発信を強みにしています。

---

## 専門領域

### 決済・課金（主軸）

- 多様な決済サービスの連携設計・実装（PAY.JP / GMO / 楽天 Pay / Amazon Pay / SBPS）
- サブスクリプション・従量課金など、複数の課金モデルの設計・実装
- Webhook 連携を含む、決済まわりの状態管理・整合性担保
- ガラケー時代のキャリア決済課金の実装経験

### 認証・本人確認（主軸）

- Amazon Cognito を用いた認証基盤の設計・構築
- KYC（本人確認）フローの実装
- Laravel-permission によるロールベースアクセス制御（RBAC）

### AI 駆動開発

- Claude Code / Cursor を、設計の壁打ち〜実装〜リファクタリングまで日常的に活用
- 機密性の高い案件では、AI のアクセス範囲をディレクトリ単位で制限するなど、**情報を漏らさない運用ルールを設計**して運用（フィンテック案件での実績）
- 生成コードはレビュー・テストで担保しながら進め、スピードと品質を両立
- AI 支援により、未経験言語（Go 等）への立ち上がりも短期間で対応

### 設計・開発

- Clean Architecture を意識したバックエンド設計
- Laravel / CakePHP / Symfony でのサーバーサイド開発
- Vue.js / Nuxt.js でのフロントエンド開発

### テスト・品質 / CI・CD

- PHPUnit / Jest / Playwright でのテスト環境構築
- PHPStan / PHP-CS-Fixer による静的解析・コード整形
- Github Actions / CircleCI での自動テスト・自動デプロイ
- テスト文化のないチームへの導入支援
- Docker でのローカル開発環境整備、レガシーコードのバージョンアップ・リファクタリング

---

## 決済・課金システム実績

### 連携経験のある決済サービス

| サービス | 実装内容 |
|---|---|
| PAY.JP | サブスクリプション決済、都度決済、Webhook 連携 |
| GMO (PayPay) | 決済システム構築 |
| SBPS 決済代行 | PayPay 決済の実装 |
| 楽天Pay | 決済システム構築 |
| Amazon Pay | EC サイトへの決済導入 |

### 認証・本人確認

Amazon Cognito / KYC / Laravel-permission（ロールベースアクセス制御）

---

## 技術スタック

| 分類 | 技術 |
|---|---|
| 言語 | PHP / TypeScript / JavaScript / Go(AI支援含む) |
| FW | Laravel / CakePHP / Symfony / Vue.js / Nuxt.js |
| DB | MySQL / PostgreSQL / Redis |
| AWS | EC2 / RDS / S3 / SQS / CloudFront / Lambda |
| テスト | PHPUnit / Jest / Playwright |
| CI/CD | Github Actions / CircleCI |
| AI / その他 | Claude Code / Cursor / Docker / PHPStan / Storybook |

---

## 職務経歴

### 決済・認証関連の案件

> ※ 決済・認証の観点で抜粋した一覧です（後述の「その他の経歴」と一部重複します）。

| 期間 | 会社 | 内容 | 決済・認証 |
|---|---|---|---|
| 2023/06〜現在 | DF社 | フィンテック系サービス新規開発 | Cognito 認証、KYC、権限管理 |
| 2022/12〜2023/07 | FM社 | アンケートサービス新規開発 | PAY.JP（サブスク・従量課金） |
| 2020/03〜2022/06 | YM社 | 既存サービス追加開発 | SBPS、PAY.JP、楽天Pay、PayPay(GMO) |
| 2019/08〜2020/03 | GM社 | Webサービス新規開発 | PAY.JP |
| 2017/10〜2019/08 | CP社 | ECサイト改修・機能追加 | Amazon Pay |

---

### 直近の主要案件

#### DF社（2023/06 〜 現在） フィンテック系サービス / 週 5 / エンジニア 3 名

- Amazon Cognito を用いた認証基盤を 0 → 1 で設計・実装
- KYC ライブラリによる本人確認フローの実装
- Laravel-permission によるロールベースアクセス制御
- Claude Code をディレクトリ制限のもと安全に運用し、開発を効率化
- PHP 8.3 / Laravel 12 / MySQL 8 / Vue.js 3 / Inertia.js

#### TK社（2026/01 〜 現在）教育系サービス / 週 2 / エンジニア 6 名

- 教育系自社サービスの保守・運用
- Unit テスト文化を作る
- 主にバックエンド側の設計思想の提案・定着まで
- PHP 8.4 / Laravel 12 / MySQL 8 / Twig

#### KS社（2026/03 〜 現在）自社情報サイト / 週 2 / エンジニア 6 名

- 自社情報サイトの保守・運用
- PHP 8.4 / Wordpress / MySQL

#### H社（2022/08〜2023/06） 組織サーベイサービス / 週 3 / エンジニア 3 名

- PHPStan / PHP-CS-Fixer の導入・設定
- Storybook / Jest / Playwright の導入・設定
- Github Actions での自動テスト構築
- PHP 8.1 / Laravel 9 / Vue.js 3 / Inertia.js

---

### その他の経歴

| 期間 | 会社 | 概要 | 貢献 |
|---|---|---|---|
| 2024/02〜2025/12 | TP社 | 複数プロジェクトの保守・開発 | Laravel / CakePHP / React |
| 2022/12〜2023/07 | FM社 | 自社アンケートサービスの保守・開発 | Laravel / MySQL / Nuxt |
| 2022/12〜2024/01 | K社 | マッチング PF 保守・開発 | テスト文化導入、開発環境整備 |
| 2022/01〜2022/12 | TB社 | 既存サービス追加開発 | Clean Architecture、テスト開発 |
| 2020/03〜2022/06 | YM社 | 自社サービス追加開発 | CakePHP / Vue |
| 2020/03〜2020/10 | PT社 | Webサービス新規開発 | AWS 構築、デプロイフロー構築 |
| 2017/10〜2019/08 | CP社 | ECサイト改修・機能追加 | 開発環境の刷新（Docker 化）、AWS 構築 |

---

### 過去の職歴（詳細）

上記以前の職歴は[こちら](https://docs.google.com/document/d/1x7QgoWSjXnER4zvwVO6DW4NnvHwQEH1J)を参照してください。

---

## 業務外活動

### 技術発信

- **ブログ**：2018 年から週 1 回ペースで技術ブログを継続中
  - https://kojirooooocks.hatenablog.com/

### LT 発表

- [レガシー感謝の日で発表してみたかった話](https://speakerdeck.com/kojirock5260/regasigan-xie-falseri-defa-biao-sitemitakatutahua)
- [初心者にやさしい LT 会](https://speakerdeck.com/kojirock5260/chu-xin-zhe-niyasasiilthui-1)

### コミュニティ運営

- **write-blog-every-week**：週 1 回ブログを書く Slack コミュニティを運営中

---

## 希望条件

- 業務委託（フルリモート）
- 週 2〜2.5 稼働から開始、相互に問題なければ稼働増も可能
- 土日・平日夜間の稼働が可能だと嬉しい
- 平日日中の MTG は調整可能
- 基本的に PC の前にいるため、レスポンスは早め
- Go 案件も対応可能（主軸は PHP / TS。Go は AI 支援を活用して実装。新言語への立ち上がりは速い）
