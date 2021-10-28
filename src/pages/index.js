import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import full05 from "../assets/img/gallery/fulls/okazaki.png";
import full06 from "../assets/img/gallery/fulls/tatibana.png";
import full07 from "../assets/img/gallery/fulls/watanabe.png";
import full08 from "../assets/img/gallery/fulls/landfall92.png";
import full09 from "../assets/img/gallery/fulls/tokowalker21.png";
import full10 from "../assets/img/gallery/fulls/indexhero.png";
import Uncle from "../assets/img/uncle.png";
import pic01 from "../assets/img/hero.jpg";
import pic02 from "../assets/img/kansya.jpg";
import Gallery from "../components/Gallery";
import Layout from "../components/layout";


const images02 = [
  {
    id: "5",
    source: full05,
    thumbnail: full05,
    caption: "",
    description: "",
  },
  {
    id: "6",
    source: full06,
    thumbnail: full06,
    caption: "",
    description: "",
  },
  {
    id: "7",
    source: full07,
    thumbnail: full07,
    caption: "",
    description: "",
  },
];

const images03 = [
  {
    id: "8",
    source: full08,
    thumbnail: full08,
    caption: "",
    description: "",
  },
  {
    id: "9",
    source: full09,
    thumbnail: full09,
    caption: "",
    description: "",
  },
  {
    id: "10",
    source: full10,
    thumbnail: full10,
    caption: "",
    description: "",
    landscape: true,
  },
];

const IndexPage = () => (
  <Layout>
    <section className="intro">
      <header>
        <h1>
          LANDFALL 研究室紹介
        </h1>
        <p>
          東工大生協学生委員会 LANDFALL
          <br />
          <a href="https://twitter.com/landfall_pr">@LANDFALL_PR</a> /{" "}
          <a href="https://landfaller.com">LANDFALL公式サイト</a>
        </p>
        {/* <ul className="actions">
          <li>
            <a href="#first" className="arrow scrolly">
              <span className="label">Next</span>
            </a>
          </li>
        </ul> */}
      </header>
      <div className="content">
        <span className="image fill" data-position="center">
          <img src={pic01} alt="" />
        </span>
      </div>
    </section>

    <section id="first">
      <header>
        <h2>工大祭に寄せて</h2>
      </header>
      <div className="content">
        <section>
          <header>
        <p>
          今年は<strong>2年ぶり</strong>
          の工大祭の開催となりました！一昨年は台風で、昨年は新型コロナウイルスにより、工大祭が開催されずとっても悲しかった…
          <br />
          今年はオンラインという形になりましたが、なんとか工大祭が開かれることとなり、LANDFALLの部員一同大変喜ばしく思います。厳しい状況の中でも、工大祭の開催を実行したすべての関係者の皆様に厚く御礼申し上げます。
        </p>
        </header>
        <div className="content">
        <span className="image main">
          <img src={pic02} alt="" />
          <small>
            <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1209247">
              Free-Photos
            </a>
            による
            <a href="https://pixabay.com/ja/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1209247">
              Pixabay
            </a>
            からの画像
          </small>
        </span>
        </div>
        </section>
      </div>
    </section>

    <section>
      <header>
        <h2>LANDFALL93号の配布が始まりました。</h2>
      </header>
      <div className="content">
        <p></p>

        <section>
          <header>
            <h3></h3>
            <p>
              なんと92号を発行したのは<strong>2018年</strong>。
              私が入部したときから一度も発行していなかったLANDFALL誌をついに発行することができました！！！
            </p>
            <p>
              　コロナなどの影響もあり引継ぎ・新歓に苦労してしまい、なかなか発行まで行きつけませんでした。そんな中でも編集委員一人一人が努力することで何とか発行まで行きつくことができました。こんなにまでに発行が遅くなってしまったこと、本当に申し訳ございませんでした。
            </p>
            <p style={{ marginBottom:"2px"}}>
            記事へのリンク
            </p>
            <ul className="actions">
              <li><a href="https://landfaller.com/magazines/93-1-okazaki/">岡崎研究室</a></li>
              <li><a href="https://landfaller.com/magazines/93-2-watanabe/">渡邊研究室</a></li>
              <li><a href="https://landfaller.com/magazines/93-3-tachibana/">立花研究室</a></li>
            </ul>
          </header>
          <div className="content">
            <Gallery
              images={images02.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                })
              )}
            />
          </div>
        </section>
      </div>
    </section>
    
    <section>
      <header>
        <h2>LANDFALLの制作物を見てみたい？</h2>
        <div style={{widht: "60%", }}>
          <a href="https://landfaller.com">
        <StaticImage src="../assets/img/landfallsite.png" alt="landfall"/>
        </a>
        </div>
        <ul className="actions">
          <li>
          <a href="https://landfaller.com/" className="">
              LANDFALLのTOPページへ
            </a>
          </li>
        </ul>

      </header>
      <div className="content">
        <p>
          昔のように年に何本もLANDFALL誌を出せるほどの力はすっかりなくなってしまいましたが、LANDFALLは現在、WEBに活動拠点を移して細々と活動を続けています。
        </p>
        <p>過去の記事のアーカイブをLANDFALLは公開しています。管理人の私もよく見るのですが昔のLANDFALLの記事はとっても面白いし、自分の研究室選びやほかの系の研究室ではどのようなことをしているかが学生の視点で書かれていて分かりやすいです。</p>
        <p>PDFの記事で非常に読みにくいですが、あなたもlandfaller.comで研究室を探してみませんか？</p>
        <ul className="actions">
          <li>
            <a href="https://landfaller.com/magazines/" className="button primary large">
              LANDFALL本誌を読む
            </a>
          </li>
          <li>
            <a href="https://landfaller.com/blogs" className="button large">
              BLOGを読む
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <header>
        <h2>LANDFALLとは</h2>
      </header>
      <div className="content">
        <section>
          <header>
            <p>
              申し遅れました。LANDFALLとはどのような組織かを説明いたします。LANDFALLは学生のための情報冊子を作成しているサークルです。東工大生協学生委員会のもとであり、生協からのお仕事などを引き受けたりもしています。
            </p>
            <p>
              主な制作物は毎年新入生に配布している「TOKO
              WALKER」という冊子です。新入生が大学生活のスタートダッシュをきることができればとの思いで制作しています。ちなみに冊子の名前は「TOKYO
              WALKER」という雑誌に名前の由来のだとか。
            </p>
          </header>
          <div className="content">
            <Gallery
              images={images03.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                })
              )}
            />
          </div>
        </section>
      </div>
    </section>

    <section>
      <header>
        <h2>LANDFALLはTOKOWALKERを一緒に作ってくれる新入部員を募集中です</h2>
        <div style={{widht: "40%", }}>
        <StaticImage src="../assets/img/uncle.png" alt="uncle-sam"/>
        </div>
      </header>
      <div className="content">
        <p>
        現在LANDFALLはTOKOWALKERを作成しています。あなたが大学に入ったときにこんなことを知っておきたかったということはありませんか？そうした情報を直接伝えることができるのは東工大では「TOKOWALKER」だけです！あなたのクリエイティブな発想を私たちは切望しています。
        </p>
        <p>
          これは余談までに、大学に行く機会が増えた今、少し静かなところで休みたいなあということはありませんか？実はLANDFALLには非常に大きな部室があります。PCもWIFIもレンジに、冷蔵庫、ボードゲームまであります。LANDFALLに入れば非常に快適な大学生活を送ることができますよ！？
        </p>
        <a href="https://landfaller.com/blogs/clubroom/" className="button primary large">LANDFALLの部室について</a>
      </div>      
    </section>
  </Layout>
);

export default IndexPage;
