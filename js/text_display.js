const tag_title = document.getElementById("tag_title");
tag_title.textContent = "Haru's PortFolio Sites.";

const nav_title = document.getElementById("nav_title");
nav_title.innerHTML = "Haru's PortFolio Sites.";

const eye_catch_title = document.getElementById("eye_catch_title");
eye_catch_title.innerHTML = "\
                                <span style=\'text-align: center;\'><h1>Haru's PortFolio Sites.</h1></span>\
                                <br>\
                                <br>\
                                <p>\
                                    When you reach for the stars, you may not quite get one,\
                                    <br>but you won't come up with a handful of mud either.\
                                </p>\
                                <span style=\'text-align: center;\'><p>Leo Burnett 1891-1971</p>\
                                ";

// 一段目タイトル
const profile_title = document.getElementById("title_01");
profile_title.textContent = "Profile";

const name_01 = document.querySelector(".name_01");
name_01.textContent = "Tomoharu AKAMATSU";

const text_01 = document.querySelector(".text_01");
text_01.textContent = "東京国際工科専門職大学 情報工学科 AI戦略コース 2024年卒 1期生";

const text_02 = document.querySelector(".text_02");
text_02.textContent = '\
                        大学では深層学習などのAI関連を学習してきました。\
                        また、インターンとして、AI専門メディアでの記事執筆経験やAI開発・データ分析を行う会社での開発業務を経験しています。\
                        AIと人が協力し合って社会課題を解決できるシステムを開発したり、社会に求められているシステムを実現するエンジニアになりたいと思っています。\
                        ';

// 二段目タイトル
const projects_title = document.getElementById("title_02");
projects_title.textContent = "Projects";

const box_title_01 = document.getElementById("box_title_01");
box_title_01.textContent = "転移学習を用いた胸部Ｘ線画像モデルの作成と性能評価";

const box_text_01 = document.getElementById("box_text_01");
box_text_01.innerHTML = "-KeyWord-<br>#AI #Python3";

const box_title_02 = document.getElementById("box_title_02");
box_title_02.textContent = "胸部X線画像分類デスクトップアプリ";

const box_text_02 = document.getElementById("box_text_02");
box_text_02.innerHTML = "-KeyWord-<br>#AI #Python3 #Electron #Node.js #Flask #PyTorch #TorchVision";


const box_title_03 = document.getElementById("box_title_03");
box_title_03.textContent = "数字当てゲームデスクトップアプリ";

const box_text_03 = document.getElementById("box_text_03");
box_text_03.innerHTML = "-KeyWord-<br>#Python3 #Tkinter #SQLight3";


const box_title_04 = document.getElementById("box_title_04");
box_title_04.textContent = "数字あてゲーム（コマンドライン）";

const box_text_04 = document.getElementById("box_text_04");
box_text_04.innerHTML = "-KeyWord-<br>#Python3";


const box_title_05 = document.getElementById("box_title_05");
box_title_05.textContent = "QRコードデスクトップアプリ";

const box_text_05 = document.getElementById("box_text_05");
box_text_05.innerHTML = "-KeyWord-<br>#Python3 #Tkinter #PIL #QRcode";


const box_title_06 = document.getElementById("box_title_06");
box_title_06.textContent = "ポートフォリオサイト";

const box_text_06 = document.getElementById("box_text_06");
box_text_06.innerHTML = "-KeyWord-<br>#HTML #CSS #JavaScript #BootStrap5";


// 三段目タイトル
const skills_title = document.getElementById("title_03");
skills_title.innerHTML = "Skills";

const skill_language_title = document.getElementById("skill_language_title");
skill_language_title.innerHTML = "Language";

const skill_language_text = document.getElementById("skill_language_text");
skill_language_text.innerHTML = '\
                                <ul>\
                                    <li>\
                                        Python3\
                                    </li>\
                                    <li>\
                                        Java\
                                    </li>\
                                    <li>\
                                        HTML\
                                    </li>\
                                    <li>\
                                        CSS\
                                    </li>\
                                    <li>\
                                        JavaScript\
                                    </li>\
                                    <li>\
                                        C\
                                    </li>\
                                    <li>\
                                        C++\
                                    </li>\
                                <ul>\
                                ';

const skill_framework_title = document.getElementById("skill_framework_title");
skill_framework_title.innerHTML = "Framework";

const skill_framework_text = document.getElementById("skill_framework_text");
skill_framework_text.innerHTML = '\
                                <ul>\
                                    <li>\
                                        TensorFlow\
                                    </li>\
                                    <li>\
                                        PyTorch\
                                    </li>\
                                    <li>\
                                        pandas\
                                    </li>\
                                    <li>\
                                        numpy\
                                    </li>\
                                    <li>\
                                        matplotlib\
                                    </li>\
                                <ul>\
                                ';

const skill_tool_title = document.getElementById("skill_tool_title");
skill_tool_title.innerHTML = "Tool";

const skill_tool_text = document.getElementById("skill_tool_text");
skill_tool_text.innerHTML = '\
                            <ul>\
                                <li>\
                                    Vscode\
                                </li>\
                                <li>\
                                    Git\
                                </li>\
                                <li>\
                                    Github\
                                </li>\
                                <li>\
                                    AWS\
                                </li>\
                                <li>\
                                    SourceTree\
                                </li>\
                            <ul>\
                            ';

// 四段目タイトル
const future_title = document.getElementById("title_04");
future_title.innerHTML = "Future";

const future_text = document.getElementById("future_text");
future_text.innerHTML = '\
                            私はAIを用いて社会課題の解決に、貢献したいと思っております。<br>\
                            今後もAI関連や先端技術の勉強を行って、人とAIが協力し合える世界を目指して頑張っていきたいと思っております。\
                            ';


// ポップアップ画面

const project_title_01 = document.getElementById('project_title_01');
project_title_01.innerHTML = '転移学習を用いた胸部Ｘ線画像モデルの作成と性能評価';

const project_text_01 = document.getElementById('project_text_01');
project_text_01.innerHTML = '\
                            昨今の感染症の情勢で、疲弊している医療従事者の方を少しでも支援したいと思ったため、深層学習モデルであるVGG16、Vision Transformer、MLP-Mixerの学習済みモデルを用いて、胸部X線画像の分類モデルの転移学習を行いました。\
                            画像の前処理を様々試し、学習して、評価指標には、Torchevalを用いて、評価を行いました。また、論文の内容を解釈し、今まで使ったことのなかったPyTorchの使い方を学習することができました。\
                            Datasetは、データコンペティションサイト:Kaggleから取得して、学習をしました。難しい部分もありましたが、公式リファレンス、Webサイト、参考書で調査しながら、今現在（2023年2月28日）約80%の精度となっております。\
                            <br>研究期間:2022/12 - 2023/3\
                            ';


// 胸部X線画像デスクトップアプリ
const project_title_02 = document.getElementById('project_title_02');
project_title_02.innerHTML = '胸部X線画像デスクトップアプリ';

const project_text_02 = document.getElementById('project_text_02');
project_text_02.innerHTML = '\
                            精度のよかったモデルで胸部X線画像デスクトップアプリをFlask、Electronを用いて作成しました。\
                            ユーザーが胸部X線画像をアップロードし、その画像を4種類（新型コロナウイルス肺炎、灰白濁の肺、通常状態の肺、細菌性肺炎）に分類予測し、結果を表示するアプリケーションです。\
                            医療機関で使用されることを前提に作成しており、個人情報といった観点からデスクトップアプリケーションとして完結させました。\
                            また、病院内ネットワークでの使用も想定し、サーバー上に載せ、転用できるようにできるようにFlaskで実装をしました。\
                            現在、Python環境がないPCでは、扱うことができないので、パッケージ化をすることやアプリ終了時、Electronからの子プロセスの終了が不安定なので、今後に改善していきたいと思っております。\
                            <br>製作期間:2023/3 -2023/7\
                            ';

const h3_title_02 = document.getElementById('h3_title_02');
h3_title_02.innerHTML = '主な使用言語・ライブラリ';

const project_title_03 = document.getElementById('project_title_03');
project_title_03.innerHTML = '数字当てゲームデスクトップアプリ';

const project_text_03 = document.getElementById('project_text_03');
project_text_03.innerHTML = '\
                            数字当てゲームデスクトップアプリを作成しました。\
                            SQLight3を用いて記録を保存する機能を実装しました。\
                            現在、数字を入力して間違った際にユーザーで数字を消さないといけないようになっているので、間違った際には、自動で消えるような機能を実装していきたいと思います。 \
                            また、デザイン性があまりよくないので改善していきたいと思います。\
                            ';

const project_title_04 = document.getElementById('project_title_04');
project_title_04.innerHTML = '数字あてゲーム（コマンドライン）';

const project_text_04 = document.getElementById('project_text_04');
project_text_04.innerHTML = '\
                            コマンドラインで遊べる数字当てゲームを作成しました。\
                            関数を別ファイルにして、整備しやすいようにしました。\
                            ';

const project_title_05 = document.getElementById('project_title_05');
project_title_05.innerHTML = 'QRコードデスクトップアプリ';

const project_text_05 = document.getElementById('project_text_05');
project_text_05.innerHTML = '\
                            QRコード作成デスクトップアプリを作成しました。\
                            入力欄にURLなどを入力し、createボタンを押すと表示されます。\
                            saveボタンを押すと保存できます。\
                            crearボタンを押すとコードと入力欄が削除されます。\
                            今後は、ユーザーが使いやすいデザインなどを考えてみたいと思います。\
                            ';

const project_title_06 = document.getElementById('project_title_06');
project_title_06.innerHTML = 'ポートフォリオサイト';

const project_text_06 = document.getElementById('project_text_06');
project_text_06.innerHTML = '\
                            精度のよかったモデルで胸部X線画像デスクトップアプリをFlask、Electronを用いて作成しました。\
                            ユーザーが胸部X線画像をアップロードし、その画像を4種類（新型コロナウイルス肺炎、灰白濁の肺、通常状態の肺、細菌性肺炎）に分類予測し、結果を表示するアプリケーションです。\
                            医療機関で使用されることを前提に作成しており、個人情報といった観点からデスクトップアプリケーションとして完結させました。\
                            また、病院内ネットワークでの使用も想定し、サーバー上に載せ、転用できるようにできるようにFlaskで実装をしました。\
                            現在、Python環境がないPCでは、扱うことができないので、パッケージ化をすることやアプリ終了時、Electronからの子プロセスの終了が不安定なので、今後に改善していきたいと思っております。\
                            <br>製作期間:2023/3 -2023/7\
                            ';