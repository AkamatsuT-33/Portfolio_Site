// ポップアップ画面

// 転移学習を用いた胸部Ｘ線画像モデルの作成と性能評価
        const project_title_01 = document.getElementById('project_title_01');
        project_title_01.innerHTML = '転移学習を用いた胸部Ｘ線画像モデルの作成と性能評価';

        const project_text_01 = document.getElementById('project_text_01');
        project_text_01.innerHTML = '\
                                    昨今の感染症の情勢で、疲弊している医療従事者の方を少しでも支援したいと思ったため、深層学習モデルであるVGG16、Vision Transformer、MLP-Mixerの学習済みモデルを用いて、胸部X線画像の分類モデルの転移学習を行いました。\
                                    画像の前処理を様々試し、学習して、評価指標には、Torchevalを用いて、評価を行いました。また、論文の内容を解釈し、今まで使ったことのなかったPyTorchの使い方を学習することができました。\
                                    Datasetは、データコンペティションサイト:Kaggleから取得して、学習をしました。難しい部分もありましたが、公式リファレンス、Webサイト、参考書で調査しながら、今現在（2023年2月28日）約80%の精度となっております。\
                                    <br>研究期間:2022/12 - 2023/3\
                                    ';
        
        const project_popup_mini_title2 = document.getElementById('project_popup_mini_title2');
        project_popup_mini_title2.innerHTML = '<span style= "color: rgb(144, 121, 173, 0.7); font-size: 20px;">●</span>主な使用言語・ライブラリ';

        const project_popup_text2 = document.getElementById('project_popup_text2');
        project_popup_text2.innerHTML = `
                                        <ul>
                                                <li>Python3</li>
                                                <li>Electron</li>
                                                <li>Node.js</li>
                                                <li>Flask</li>
                                                <li>PyTorch</li>
                                                <li>TorchVision</li>
                                        </ul>
                                        `;


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
        project2_popup_text2.innerHTML = `
                                        <ul>
                                                <li>Python3</li>
                                                <li>Electron</li>
                                                <li>Node.js</li>
                                                <li>Flask</li>
                                                <li>PyTorch</li>
                                                <li>TorchVision</li>
                                        </ul>
                                        `

        const project2_popup_mini_title3 = document.getElementById('project2_popup_mini_title3');
        project2_popup_mini_title3.innerHTML = 'トップページ';

        const project2_popup_text3 = document.getElementById('project2_popup_text3');
        project2_popup_text3.innerHTML = '胸部X線画像分類モデルを実際に使える形でデスクトップアプリ化しました。';

        const project2_popup_mini_title4 = document.getElementById('project2_popup_mini_title4');
        project2_popup_mini_title4.innerHTML = `画像選択ページ_01`;

        const project2_popup_text4 = document.getElementById('project2_popup_text4');
        project2_popup_text4.innerHTML =`画像選択ページです。ファイル選択エリアからPNGファイルを選択し、アップロードボタンを押すことで、確認ページに遷移します。`
        
        const project2_popup_mini_title5 = document.getElementById('project2_popup_mini_title5');
        project2_popup_mini_title5.innerHTML = `画像選択ページ_02`;

        const project2_popup_text5 = document.getElementById('project2_popup_text5');
        project2_popup_text5.innerHTML =`選択し終えたら、画像のようにファイル名が表示されます。`
        
        const project2_popup_mini_title6 = document.getElementById('project2_popup_mini_title6');
        project2_popup_mini_title6.innerHTML = `エラーページ`;

        const project2_popup_text6 = document.getElementById('project2_popup_text6');
        project2_popup_text6.innerHTML =`ファイルが選択されていなかったときには、エラーページが表示されます。` 
                                        
        const project2_popup_mini_title7 = document.getElementById('project2_popup_mini_title7');
        project2_popup_mini_title7.innerHTML = `確認ページ`;
        
        const project2_popup_text7 = document.getElementById('project2_popup_text7');
        project2_popup_text7.innerHTML =`画像がアップロードしてもよいかどうかの確認画面が表示されます。`;

        const project2_popup_mini_title8 = document.getElementById('project2_popup_mini_title8');
        project2_popup_mini_title8.innerHTML = `アップロード完了ページ`;

        const project2_popup_text8 = document.getElementById('project2_popup_text8');
        project2_popup_text8.innerHTML =`アップロードが完了したときのページです。ファイル名が確認できます。`

        const project2_popup_mini_title9 = document.getElementById('project2_popup_mini_title9');
        project2_popup_mini_title9.innerHTML = `予測前ページ`;

        const project2_popup_text9 = document.getElementById('project2_popup_text9');
        project2_popup_text9.innerHTML =`予測前ページです。アップロードされた画像とファイル名が確認できます。`

        const project2_popup_mini_title10 = document.getElementById('project2_popup_mini_title10');
        project2_popup_mini_title10.innerHTML = `予測結果表示ページ`;

        const project2_popup_text10 = document.getElementById('project2_popup_text10');
        project2_popup_text10.innerHTML =`
                                        予測結果表示ページです。画像分類モデルにより、分類され結果が表示されます。画像も確認できます。
                                        アプリトップボタンかホームボタンを押すと、遷移と同時にアップロードされた画像が削除されます。
                                        `



// 数字当てデスクトップアプリ
        const project_title_03 = document.getElementById('project_title_03');
        project_title_03.innerHTML = '数字当てデスクトップアプリ';

        const project3_text_01 = document.getElementById('project3_text_01');
        project3_text_01.innerHTML = `
                                        数字当てゲームデスクトップアプリを作成しました。SQLight3を用いて記録を保存する機能を実装しました。<br>
                                        現在、数字を入力して間違った際にユーザーで数字を消さないといけないようになっているので、間違った際には、自動で消えるような機能を実装していきたいと思います。
                                        また、デザイン性があまりよくないので改善していきたいと思います。
                                    `;

        const project3_popup_mini_title2 = document.getElementById('project3_popup_mini_title2');
        project3_popup_mini_title2.innerHTML = `<span style= "color: rgb(144, 121, 173, 0.7); font-size: 20px;">
                                                    ●
                                                </span>
                                                    主な使用言語・ライブラリ`;

        const project3_popup_text2 = document.getElementById('project3_text_02');
        project3_popup_text2.innerHTML =`
                                        <ul>
                                                <li>Python3</li>
                                                <li>Tkinter</li>
                                                <li>PIL</li>
                                                <li>QRcode</li>
                                        </ul>
                                        `

        const project3_popup_mini_title3 = document.getElementById('project3_popup_mini_title3');
        project3_popup_mini_title3.innerHTML = `トップ画面`;

        const project3_popup_text3 = document.getElementById('project3_text_03');
        project3_popup_text3.innerHTML =`数字当てゲームデスクトップアプリを実際に使える形でデスクトップアプリ化しました。`

        const project3_popup_mini_title4 = document.getElementById('project3_popup_mini_title4');
        project3_popup_mini_title4.innerHTML = `難易度選択画面`;

        const project3_popup_text4 = document.getElementById('project3_text_04');
        project3_popup_text4.innerHTML =`難易度はイージー、ノーマル、ハードの3種類を作成しました。`
        
        const project3_popup_mini_title5 = document.getElementById('project3_popup_mini_title5');
        project3_popup_mini_title5.innerHTML = `数字入力画面`;

        const project3_popup_text5 = document.getElementById('project3_text_05');
        project3_popup_text5.innerHTML =`数字を入力する画面です。数字を入力してsubmitボタンを押すと結果が表示されます。`
        
        const project3_popup_mini_title6 = document.getElementById('project3_popup_mini_title6');
        project3_popup_mini_title6.innerHTML = `ゲーム画面`;

        const project3_popup_text6 = document.getElementById('project3_text_06');
        project3_popup_text6.innerHTML =`結果はポップアップウインドウで表示されます。` 
                                        
        const project3_popup_mini_title7 = document.getElementById('project3_popup_mini_title7');
        project3_popup_mini_title7.innerHTML = `ゲーム画面`;
        
        const project3_popup_text7 = document.getElementById('project3_text_07');
        project3_popup_text7.innerHTML =`正解の時のポップアップ画面です。`;

        const project3_popup_mini_title8 = document.getElementById('project3_popup_mini_title8');
        project3_popup_mini_title8.innerHTML = `エラー画面`;

        const project3_popup_text8 = document.getElementById('project3_text_08');
        project3_popup_text8.innerHTML =`数字以外または0~9以外の数字を入力された時に表示されます。`

        const project3_popup_mini_title9 = document.getElementById('project3_popup_mini_title9');
        project3_popup_mini_title9.innerHTML = `ルールメニュー画面`;

        const project3_popup_text9 = document.getElementById('project3_text_09');
        project3_popup_text9.innerHTML =`それぞれのルールを確認できます。`

        const project3_popup_mini_title10 = document.getElementById('project3_popup_mini_title10');
        project3_popup_mini_title10.innerHTML = `ルール画面`;

        const project3_popup_text10 = document.getElementById('project3_text_10');
        project3_popup_text10.innerHTML =`ルールメニュー画面で選んだルールが表示されます。`
        
        const project3_popup_mini_title11 = document.getElementById('project3_popup_mini_title11');
        project3_popup_mini_title11.innerHTML = `記録メニュー画面`;

        const project3_popup_text11 = document.getElementById('project3_text_11');
        project3_popup_text11.innerHTML =`記録のメニューが選べます。` 

        const project3_popup_mini_title12 = document.getElementById('project3_popup_mini_title12');
        project3_popup_mini_title12.innerHTML = `記録表示画面 01`;

        const project3_popup_text12 = document.getElementById('project3_text_12');
        project3_popup_text12.innerHTML =`
                                        上記の画像は今回遊んだ記録で最短で勝利した記録が表示されています。
                                        ` 

        const project3_popup_mini_title13 = document.getElementById('project3_popup_mini_title13');
        project3_popup_mini_title13.innerHTML = `記録表示画面 02`;

        const project3_popup_text13 = document.getElementById('project3_text_13');
        project3_popup_text13.innerHTML =`
                                        下記の画像はSQLightに保存されている前回までの最新5件の記録が表示されています。
                                        今回の記録はアプリ画面を閉じるか、トップ画面のExitを押すとデータベースに保存される仕組みです。
                                        ` 

// 数字当てコマンドラインアプリ
        const project_title_04 = document.getElementById('project_title_04');
        project_title_04.innerHTML = '数字当てコマンドラインアプリ';

        const project_text_04 = document.getElementById('project4_text_01');
        project_text_04.innerHTML = `
                                    コマンドラインで遊べる数字当てゲームを作成しました。
                                    関数を別ファイルにして、整備しやすいようにしました。
                                    <br>製作期間:2021/10 -2021/11
                                    `;

        const project4_title_02 = document.getElementById('project4_title_02');
        project4_title_02.innerHTML = '主な使用言語・ライブラリ';

        const project4_text_02 = document.getElementById('project4_text_02');
        project4_text_02.innerHTML = `
                                        <ul>
                                                <li>Python3</li>
                                                <li>Tkinter</li>
                                                <li>PIL</li>
                                                <li>QRcode</li>
                                        </ul>
                                `;

// QRコードデスクトップアプリ
        const project_title_05 = document.getElementById('project_title_05');
        project_title_05.innerHTML = 'QRコードデスクトップアプリ';

        const project_text_05 = document.getElementById('project_text_05');
        project_text_05.innerHTML = `
                            QRコード作成デスクトップアプリを作成しました。\
                            入力欄にURLなどを入力し、createボタンを押すと表示されます。\
                            saveボタンを押すと保存できます。\
                            crearボタンを押すとコードと入力欄が削除されます。\
                            今後は、ユーザーが使いやすいデザインなどを考えてみたいと思います。\
                                    `;
        
        const project5_title_02 = document.getElementById('project5_title_02');
        project5_title_02.innerHTML = '主な使用言語・ライブラリ';

        const project5_text_02 = document.getElementById('project5_text_02');
        project5_text_02.innerHTML = `
                                        <ul>
                                                <li>Python3</li>
                                                <li>Tkinter</li>
                                                <li>PIL</li>
                                                <li>QRcode</li>
                                        </ul>
                                    `;

// ポートフォリオサイト
        const project_title_06 = document.getElementById('project_title_06');
        project_title_06.innerHTML = 'ポートフォリオサイト';

        const project_text_06 = document.getElementById('project_text_06');
        project_text_06.innerHTML = `text06-1`;

        const project6_title_02 = document.getElementById('project6_title_02');
        project6_title_02.innerHTML = '主な使用言語・ライブラリ';

        const project6_text_02 = document.getElementById('project6_text_02');
        project6_text_02.innerHTML = `
                                        <ul>
                                                <li>Python3</li>
                                                <li>Tkinter</li>
                                                <li>PIL</li>
                                                <li>QRcode</li>
                                        </ul>
                                    `;