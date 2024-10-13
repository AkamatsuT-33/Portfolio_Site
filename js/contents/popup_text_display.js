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

const project2_popup_mini_title2 = document.getElementById('project2_popup_mini_title2');
project2_popup_mini_title2.innerHTML = '<span style= "color: rgb(144, 121, 173, 0.7); font-size: 20px;">●</span>主な使用言語・ライブラリ';

const project2_popup_text2 = document.getElementById('project2_popup_text2');
project2_popup_text2.innerHTML = '\
                            \aaaaa\
                            ';

const project2_popup_mini_title3 = document.getElementById('project2_popup_mini_title3');
project2_popup_mini_title3.innerHTML = 'トップページ';

const project2_popup_text3 = document.getElementById('project2_popup_text3');
project2_popup_text3.innerHTML = '胸部X線画像分類モデルを実際に使える形でデスクトップアプリ化しました。';



















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