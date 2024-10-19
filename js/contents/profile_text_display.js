// 一段目タイトル
const profile_title = document.getElementById("title_01");
profile_title.textContent = "Profile";

const name_01 = document.querySelector(".name_01");
name_01.textContent = "Tomoharu AKAMATSU";

const text_01 = document.querySelector(".text_01");
text_01.innerHTML = `東京国際工科専門職大学 工科学部 情報工学科 AI戦略コース 卒`;

const text_02 = document.querySelector(".text_02");
text_02.innerHTML = `
                    学生時代に情報工学や深層学習などのAI関連を学習してきました。
                    また、インターンとして、AI専門メディアでの記事執筆経験やAI開発・データ分析を行う会社での開発業務を経験しています。<br>
                    AIと人が協力し合って社会課題を解決できるシステムを開発したり、顧客や社会に求められているシステムを実現するエンジニアになりたいと思っています。
                    `;

const text_03 = document.querySelector(".text_03");
text_03.innerHTML = `
                        <table>
                                <theader>
                                    <tr>
                                            <th>取得資格</th>
                                    </tr>
                                </theader>

                                <tbody>
                                        <tr>
                                                <td style="text-align: center;">
                                                        JDLA Deep Learning for GENERAL 2022 #2
                                                </td>
                                        </tr>

                                        <tr>
                                                <td style="text-align: center;">
                                                        JDLA Generative AI TEST 2023 #2
                                                </td>
                                        </tr>                                                 
                                </tbody>
                        </table>
                    `;
