window.MT_DATA = window.MT_DATA || {};
window.MT_DATA["e2"] = {
"tag": "e2",
"label": "小学2年 算数",
"short": "小2",
"kind": "E",
"units": [
{
"id": "e2_u01",
"name": "1000より大きい数の仕組み",
"domain": "数と計算"
},
{
"id": "e2_u02",
"name": "簡単な分数",
"domain": "数と計算"
},
{
"id": "e2_u03",
"name": "たし算の筆算",
"domain": "数と計算"
},
{
"id": "e2_u04",
"name": "ひき算の筆算",
"domain": "数と計算"
},
{
"id": "e2_u05",
"name": "かけ算の意味と九九",
"domain": "数と計算"
},
{
"id": "e2_u06",
"name": "三角形と四角形",
"domain": "図形"
},
{
"id": "e2_u07",
"name": "長さの単位(mm・cm・m)",
"domain": "測定"
},
{
"id": "e2_u08",
"name": "かさの単位(mL・dL・L)",
"domain": "測定"
},
{
"id": "e2_u09",
"name": "時刻と時間",
"domain": "測定"
},
{
"id": "e2_u10",
"name": "表とグラフ",
"domain": "データの活用"
}
],
"questions": [
{
"q": 1,
"unit": "e2_u01",
"topic": "4けたの数",
"level": 1,
"question": "1000が4こ、100が0こ、10が7こ、1が5こ あつまった<ruby>数<rt>かず</rt></ruby>は いくつですか。",
"choices": [
"4057",
"4075",
"4705",
"4750"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 4075 です。\n1000が4こで4000、100が0こで0、10が7こで70、1が5こで5です。\n4000と70と5を あわせると 4075に なります。\n<ruby>百<rt>ひゃく</rt></ruby>のくらいが 0の ときは、0を かきわすれると けたが ずれて しまいます。\nポイント: くらいごとに 0も かならず かきます。"
},
{
"q": 2,
"unit": "e2_u01",
"topic": "10のまとまり",
"level": 1,
"question": "びんの <ruby>中<rt>なか</rt></ruby>に 10<ruby>円玉<rt>えんだま</rt></ruby>が 48まい たまって います。あわせて いくらに なりますか。",
"choices": [
"408<ruby>円<rt>えん</rt></ruby>",
"4800<ruby>円<rt>えん</rt></ruby>",
"480<ruby>円<rt>えん</rt></ruby>",
"840<ruby>円<rt>えん</rt></ruby>"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 480<ruby>円<rt>えん</rt></ruby> です。\n10が 48こ あつまった <ruby>数<rt>かず</rt></ruby>を もとめます。\n10が 40こで 400、10が 8こで 80です。\n400と 80を あわせて 480<ruby>円<rt>えん</rt></ruby>に なります。\n10を 100と とりちがえると 4800<ruby>円<rt>えん</rt></ruby>に なって しまいます。\nポイント: 10が □こ の ときは、□の うしろに 0を 1つ つけます。"
},
{
"q": 3,
"unit": "e2_u01",
"topic": "数の大小",
"level": 1,
"question": "ある <ruby>店<rt>みせ</rt></ruby>で、4つの せんぷうきの ねだんを くらべます。いちばん <ruby>高<rt>たか</rt></ruby>い ねだんは どれですか。",
"choices": [
"2450<ruby>円<rt>えん</rt></ruby>",
"2504<ruby>円<rt>えん</rt></ruby>",
"2540<ruby>円<rt>えん</rt></ruby>",
"2405<ruby>円<rt>えん</rt></ruby>"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 2540<ruby>円<rt>えん</rt></ruby> です。\n4つとも <ruby>千<rt>せん</rt></ruby>のくらいは 2で <ruby>同<rt>おな</rt></ruby>じです。\nつぎに <ruby>百<rt>ひゃく</rt></ruby>のくらいを くらべると 4、5、5、4です。\n<ruby>百<rt>ひゃく</rt></ruby>のくらいが 5の 2504と 2540を くらべます。\n<ruby>十<rt>じゅう</rt></ruby>のくらいは 0と 4なので 2540が いちばん <ruby>大<rt>おお</rt></ruby>きいです。\n<ruby>下<rt>した</rt></ruby>の くらいから くらべると まちがえやすいです。\nポイント: <ruby>大<rt>おお</rt></ruby>きさは <ruby>上<rt>うえ</rt></ruby>の くらいから じゅんに くらべます。"
},
{
"q": 4,
"unit": "e2_u01",
"topic": "数直線",
"level": 1,
"question": "<ruby>数直線<rt>すうちょくせん</rt></ruby>の あ が <ruby>表<rt>あらわ</rt></ruby>す <ruby>数<rt>かず</rt></ruby>は いくつですか。",
"choices": [
"600",
"700",
"750",
"800"
],
"answer": 2,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 170\"><line x1=\"40\" y1=\"110\" x2=\"520\" y2=\"110\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"40\" y1=\"110\" x2=\"40\" y2=\"88\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"88\" y1=\"110\" x2=\"88\" y2=\"98\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"136\" y1=\"110\" x2=\"136\" y2=\"98\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"184\" y1=\"110\" x2=\"184\" y2=\"98\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"232\" y1=\"110\" x2=\"232\" y2=\"98\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"280\" y1=\"110\" x2=\"280\" y2=\"88\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"328\" y1=\"110\" x2=\"328\" y2=\"98\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"376\" y1=\"110\" x2=\"376\" y2=\"98\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"424\" y1=\"110\" x2=\"424\" y2=\"98\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"472\" y1=\"110\" x2=\"472\" y2=\"98\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"520\" y1=\"110\" x2=\"520\" y2=\"88\" stroke=\"#333\" stroke-width=\"2\"/><text x=\"40\" y=\"140\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">0</text><text x=\"280\" y=\"140\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">500</text><text x=\"520\" y=\"140\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">1000</text><line x1=\"376\" y1=\"42\" x2=\"376\" y2=\"74\" stroke=\"#f2a73b\" stroke-width=\"3\"/><polygon points=\"376,92 368,72 384,72\" fill=\"#f2a73b\"/><text x=\"376\" y=\"32\" font-size=\"22\" fill=\"#f2a73b\" text-anchor=\"middle\">あ</text></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 700 です。\n0から 1000までを <ruby>同<rt>おな</rt></ruby>じ はばで 10こに <ruby>分<rt>わ</rt></ruby>けた <ruby>目<rt>め</rt></ruby>もりです。\n1<ruby>目<rt>め</rt></ruby>もり<ruby>分<rt>ぶん</rt></ruby>は 100を <ruby>表<rt>あらわ</rt></ruby>して います。\nあ は 0から <ruby>右<rt>みぎ</rt></ruby>へ 7つ<ruby>目<rt>め</rt></ruby>の <ruby>目<rt>め</rt></ruby>もりの ところに あります。\n100が 7こ あつまった <ruby>数<rt>かず</rt></ruby>なので 700です。\n<ruby>目<rt>め</rt></ruby>もりの <ruby>数<rt>かず</rt></ruby>を そのまま 7と こたえないように します。\nポイント: さきに 1<ruby>目<rt>め</rt></ruby>もり<ruby>分<rt>ぶん</rt></ruby>の <ruby>大<rt>おお</rt></ruby>きさを たしかめます。"
},
{
"q": 5,
"unit": "e2_u01",
"topic": "100のまとまり",
"level": 2,
"question": "ちょきんばこに 4300<ruby>円<rt>えん</rt></ruby> <ruby>入<rt>はい</rt></ruby>って います。ぜんぶを 100<ruby>円玉<rt>えんだま</rt></ruby>に かえると、<ruby>何<rt>なん</rt></ruby>まいに なりますか。",
"choices": [
"34まい",
"403まい",
"430まい",
"43まい"
],
"answer": 4,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 43まい です。\n4300が 100を いくつ あつめた <ruby>数<rt>かず</rt></ruby>かを かんがえます。\n4000は 100が 40こ、300は 100が 3こです。\n40こと 3こで あわせて 43こなので 43まいです。\n0の <ruby>数<rt>かず</rt></ruby>を そのまま うつして 430まいと しないように します。\nポイント: 100が □こ の ときは、□の うしろに 0が 2つ つきます。"
},
{
"q": 6,
"unit": "e2_u01",
"topic": "表とくらべ方",
"level": 2,
"question": "<ruby>下<rt>した</rt></ruby>の <ruby>表<rt>ひょう</rt></ruby>は、ある <ruby>家<rt>いえ</rt></ruby>の 4か<ruby>月<rt>げつ</rt></ruby>ぶんの <ruby>電気代<rt>でんきだい</rt></ruby>です。<ruby>電気代<rt>でんきだい</rt></ruby>が いちばん <ruby>安<rt>やす</rt></ruby>かった <ruby>月<rt>つき</rt></ruby>は どれですか。",
"choices": [
"4<ruby>月<rt>がつ</rt></ruby>",
"5<ruby>月<rt>がつ</rt></ruby>",
"6<ruby>月<rt>がつ</rt></ruby>",
"7<ruby>月<rt>がつ</rt></ruby>"
],
"answer": 4,
"figure": null,
"table": [
[
"<ruby>月<rt>つき</rt></ruby>",
"<ruby>電気代<rt>でんきだい</rt></ruby>"
],
[
"4<ruby>月<rt>がつ</rt></ruby>",
"4050<ruby>円<rt>えん</rt></ruby>"
],
[
"5<ruby>月<rt>がつ</rt></ruby>",
"3960<ruby>円<rt>えん</rt></ruby>"
],
[
"6<ruby>月<rt>がつ</rt></ruby>",
"4005<ruby>円<rt>えん</rt></ruby>"
],
[
"7<ruby>月<rt>がつ</rt></ruby>",
"3906<ruby>円<rt>えん</rt></ruby>"
]
],
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 7<ruby>月<rt>がつ</rt></ruby> です。\nまず <ruby>千<rt>せん</rt></ruby>のくらいで 2つの グループに <ruby>分<rt>わ</rt></ruby>けます。\n4050と 4005は 4、3960と 3906は 3です。\n<ruby>千<rt>せん</rt></ruby>のくらいが <ruby>小<rt>ちい</rt></ruby>さい 3の グループの ほうが <ruby>安<rt>やす</rt></ruby>いです。\n3960と 3906は <ruby>百<rt>ひゃく</rt></ruby>のくらいが どちらも 9なので、<ruby>十<rt>じゅう</rt></ruby>のくらいで くらべます。\n6と 0では 0の ほうが <ruby>小<rt>ちい</rt></ruby>さいので、3906<ruby>円<rt>えん</rt></ruby>が いちばん <ruby>安<rt>やす</rt></ruby>いです。\n4けたの 1けた<ruby>目<rt>め</rt></ruby>だけを <ruby>見<rt>み</rt></ruby>て きめると まちがえます。\nポイント: <ruby>千<rt>せん</rt></ruby>のくらいで グループに <ruby>分<rt>わ</rt></ruby>けてから くらべます。"
},
{
"q": 7,
"unit": "e2_u01",
"topic": "くり上がる数",
"level": 2,
"question": "ある <ruby>駅<rt>えき</rt></ruby>の <ruby>北口<rt>きたぐち</rt></ruby>を、<ruby>朝<rt>あさ</rt></ruby>のうちに 2900<ruby>人<rt>にん</rt></ruby>が <ruby>通<rt>とお</rt></ruby>りました。その あと さらに 100<ruby>人<rt>にん</rt></ruby>が <ruby>通<rt>とお</rt></ruby>ると、あわせて <ruby>何人<rt>なんにん</rt></ruby>に なりますか。",
"choices": [
"2800<ruby>人<rt>にん</rt></ruby>",
"2910<ruby>人<rt>にん</rt></ruby>",
"3000<ruby>人<rt>にん</rt></ruby>",
"3900<ruby>人<rt>にん</rt></ruby>"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 3000<ruby>人<rt>にん</rt></ruby> です。\n2900は 100が 29こ あつまった <ruby>数<rt>かず</rt></ruby>です。\nそこに 100が 1こ ふえるので 100が 30こに なります。\n100が 30こは 3000です。\n100を 10と とりちがえると 2910に なって しまいます。\nポイント: <ruby>百<rt>ひゃく</rt></ruby>のくらいが 9の とき、100 ふえると <ruby>千<rt>せん</rt></ruby>のくらいが くり<ruby>上<rt>あ</rt></ruby>がります。"
},
{
"q": 8,
"unit": "e2_u01",
"topic": "数のならべ方",
"level": 2,
"question": "6280、6208、6082、6802 の 4つの <ruby>数<rt>かず</rt></ruby>を <ruby>小<rt>ちい</rt></ruby>さい じゅんに ならべます。2ばんめに くる <ruby>数<rt>かず</rt></ruby>は どれですか。",
"choices": [
"6280",
"6208",
"6082",
"6802"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 6208 です。\n<ruby>千<rt>せん</rt></ruby>のくらいは 4つとも 6で <ruby>同<rt>おな</rt></ruby>じです。\nつぎの <ruby>百<rt>ひゃく</rt></ruby>のくらいは 2、2、0、8です。\nいちばん <ruby>小<rt>ちい</rt></ruby>さいのは <ruby>百<rt>ひゃく</rt></ruby>のくらいが 0の 6082です。\nのこりの 6280と 6208は <ruby>十<rt>じゅう</rt></ruby>のくらいが 8と 0なので、6208の ほうが <ruby>小<rt>ちい</rt></ruby>さいです。\nならびかたは 6082、6208、6280、6802に なります。\nポイント: 「2ばんめ」を いちばん <ruby>小<rt>ちい</rt></ruby>さい <ruby>数<rt>かず</rt></ruby>と とりちがえないように します。"
},
{
"q": 9,
"unit": "e2_u01",
"topic": "お金と位",
"level": 3,
"question": "つくえの <ruby>上<rt>うえ</rt></ruby>に 1000<ruby>円<rt>えん</rt></ruby>さつが 3まい、100<ruby>円玉<rt>えんだま</rt></ruby>が 12まい、10<ruby>円玉<rt>えんだま</rt></ruby>が 5まい あります。あわせて いくらですか。",
"choices": [
"4250<ruby>円<rt>えん</rt></ruby>",
"3170<ruby>円<rt>えん</rt></ruby>",
"4205<ruby>円<rt>えん</rt></ruby>",
"3250<ruby>円<rt>えん</rt></ruby>"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 4250<ruby>円<rt>えん</rt></ruby> です。\n1000が 3こで 3000<ruby>円<rt>えん</rt></ruby>です。\n100が 12こは、100が 10こで 1000<ruby>円<rt>えん</rt></ruby>、100が 2こで 200<ruby>円<rt>えん</rt></ruby>なので 1200<ruby>円<rt>えん</rt></ruby>です。\n10が 5こで 50<ruby>円<rt>えん</rt></ruby>です。\n3000と 1200と 50を あわせると 4250<ruby>円<rt>えん</rt></ruby>に なります。\n12まいを その まま けたに <ruby>書<rt>か</rt></ruby>くと 3125のように なって しまいます。\nポイント: 10こ たまったら 1つ <ruby>上<rt>うえ</rt></ruby>の くらいに くり<ruby>上<rt>あ</rt></ruby>げます。"
},
{
"q": 10,
"unit": "e2_u01",
"topic": "数づくり",
"level": 3,
"question": "0、3、6、9 と <ruby>書<rt>か</rt></ruby>かれた カードが 1まいずつ あります。4まい ぜんぶを つかって 4けたの <ruby>数<rt>かず</rt></ruby>を つくるとき、いちばん <ruby>小<rt>ちい</rt></ruby>さい <ruby>数<rt>かず</rt></ruby>は いくつですか。",
"choices": [
"0369",
"3096",
"3069",
"6039"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 3069 です。\n<ruby>小<rt>ちい</rt></ruby>さい <ruby>数<rt>かず</rt></ruby>を つくるには、<ruby>大<rt>おお</rt></ruby>きい くらいに <ruby>小<rt>ちい</rt></ruby>さい カードを おきます。\nいちばん <ruby>大<rt>おお</rt></ruby>きい <ruby>千<rt>せん</rt></ruby>のくらいに 0を おくと、4けたの <ruby>数<rt>かず</rt></ruby>に なりません。\nそこで <ruby>千<rt>せん</rt></ruby>のくらいは つぎに <ruby>小<rt>ちい</rt></ruby>さい 3に します。\nのこりの 0、6、9を <ruby>小<rt>ちい</rt></ruby>さい じゅんに ならべて 069と します。\nポイント: 4けたの <ruby>数<rt>かず</rt></ruby>の いちばん <ruby>大<rt>おお</rt></ruby>きい くらいに 0は おけません。"
},
{
"q": 11,
"unit": "e2_u02",
"topic": "はんぶん",
"level": 1,
"question": "60 cm の リボンを、<ruby>同<rt>おな</rt></ruby>じ <ruby>長<rt>なが</rt></ruby>さに なるように 2つに <ruby>切<rt>き</rt></ruby>ります。1つ<ruby>分<rt>ぶん</rt></ruby>の <ruby>長<rt>なが</rt></ruby>さは <ruby>何<rt>なん</rt></ruby> cm ですか。",
"choices": [
"20 cm",
"30 cm",
"40 cm",
"120 cm"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 30 cm です。\n<ruby>同<rt>おな</rt></ruby>じ <ruby>長<rt>なが</rt></ruby>さに 2つに <ruby>分<rt>わ</rt></ruby>けるので、はんぶんに します。\n60は 30と 30に <ruby>分<rt>わ</rt></ruby>けられます。\nだから 1つ<ruby>分<rt>ぶん</rt></ruby>は 30 cm です。\nこの <ruby>長<rt>なが</rt></ruby>さは、もとの <ruby>長<rt>なが</rt></ruby>さの <span class=\"frac\"><span class=\"n\">1</span><span class=\"d\">2</span></span>に あたります。\n2つに <ruby>分<rt>わ</rt></ruby>けるのに 2を たしたり かけたりすると まちがえます。\nポイント: はんぶんは <ruby>同<rt>おな</rt></ruby>じ <ruby>大<rt>おお</rt></ruby>きさ 2つ<ruby>分<rt>ぶん</rt></ruby>で もとに もどります。"
},
{
"q": 12,
"unit": "e2_u02",
"topic": "4分の1",
"level": 1,
"question": "1まいの <ruby>紙<rt>かみ</rt></ruby>を、<ruby>同<rt>おな</rt></ruby>じ <ruby>大<rt>おお</rt></ruby>きさに なるように 4つに <ruby>分<rt>わ</rt></ruby>けました。その 1つ<ruby>分<rt>ぶん</rt></ruby>は、もとの <ruby>大<rt>おお</rt></ruby>きさの どれだけですか。",
"choices": [
"<span class=\"frac\"><span class=\"n\">1</span><span class=\"d\">2</span></span>",
"<span class=\"frac\"><span class=\"n\">1</span><span class=\"d\">4</span></span>",
"<span class=\"frac\"><span class=\"n\">1</span><span class=\"d\">3</span></span>",
"<span class=\"frac\"><span class=\"n\">4</span><span class=\"d\">1</span></span>"
],
"answer": 2,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 190\"><text x=\"280\" y=\"28\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">1まいの かみを おなじ おおきさに 4つに わけた</text><rect x=\"100\" y=\"45\" width=\"90\" height=\"100\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><rect x=\"100\" y=\"45\" width=\"360\" height=\"100\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"190\" y1=\"45\" x2=\"190\" y2=\"145\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"280\" y1=\"45\" x2=\"280\" y2=\"145\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"370\" y1=\"45\" x2=\"370\" y2=\"145\" stroke=\"#333\" stroke-width=\"2\"/><text x=\"280\" y=\"175\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">いろの ついた ところが 1つぶん</text></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは <span class=\"frac\"><span class=\"n\">1</span><span class=\"d\">4</span></span> です。\nもとの <ruby>大<rt>おお</rt></ruby>きさを <ruby>同<rt>おな</rt></ruby>じ <ruby>大<rt>おお</rt></ruby>きさに 4つに <ruby>分<rt>わ</rt></ruby>けて います。\nその うちの 1つ<ruby>分<rt>ぶん</rt></ruby>なので <span class=\"frac\"><span class=\"n\">1</span><span class=\"d\">4</span></span>と <ruby>書<rt>か</rt></ruby>きます。\n<ruby>読<rt>よ</rt></ruby>みかたは 「よんぶんの いち」です。\nいくつに <ruby>分<rt>わ</rt></ruby>けたかを <ruby>下<rt>した</rt></ruby>に、いくつ<ruby>分<rt>ぶん</rt></ruby>かを <ruby>上<rt>うえ</rt></ruby>に <ruby>書<rt>か</rt></ruby>きます。\n<ruby>上<rt>うえ</rt></ruby>と <ruby>下<rt>した</rt></ruby>を ぎゃくに <ruby>書<rt>か</rt></ruby>かないように <ruby>気<rt>き</rt></ruby>を つけます。\nポイント: <ruby>下<rt>した</rt></ruby>の <ruby>数<rt>かず</rt></ruby>は 「いくつに <ruby>分<rt>わ</rt></ruby>けたか」を <ruby>表<rt>あらわ</rt></ruby>して います。"
},
{
"q": 13,
"unit": "e2_u02",
"topic": "等分の見分け",
"level": 2,
"question": "つぎの あ、い、う、え の <ruby>図<rt>ず</rt></ruby>の うち、<ruby>色<rt>いろ</rt></ruby>の ついた ところが もとの <ruby>大<rt>おお</rt></ruby>きさの <span class=\"frac\"><span class=\"n\">1</span><span class=\"d\">4</span></span>に なって いるのは どれですか。",
"choices": [
"あ",
"い",
"う",
"え"
],
"answer": 3,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 260\"><text x=\"70\" y=\"30\" font-size=\"20\" fill=\"#333\">あ</text><rect x=\"70\" y=\"40\" width=\"100\" height=\"70\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><rect x=\"70\" y=\"40\" width=\"200\" height=\"70\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"110\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"110\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"110\" stroke=\"#333\" stroke-width=\"2\"/><text x=\"330\" y=\"30\" font-size=\"20\" fill=\"#333\">い</text><rect x=\"330\" y=\"40\" width=\"67\" height=\"70\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><rect x=\"330\" y=\"40\" width=\"200\" height=\"70\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"397\" y1=\"40\" x2=\"397\" y2=\"110\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"463\" y1=\"40\" x2=\"463\" y2=\"110\" stroke=\"#333\" stroke-width=\"2\"/><text x=\"70\" y=\"160\" font-size=\"20\" fill=\"#333\">う</text><rect x=\"70\" y=\"170\" width=\"50\" height=\"70\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><rect x=\"70\" y=\"170\" width=\"200\" height=\"70\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"120\" y1=\"170\" x2=\"120\" y2=\"240\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"170\" y1=\"170\" x2=\"170\" y2=\"240\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"220\" y1=\"170\" x2=\"220\" y2=\"240\" stroke=\"#333\" stroke-width=\"2\"/><text x=\"330\" y=\"160\" font-size=\"20\" fill=\"#333\">え</text><rect x=\"330\" y=\"170\" width=\"80\" height=\"70\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><rect x=\"330\" y=\"170\" width=\"200\" height=\"70\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"410\" y1=\"170\" x2=\"410\" y2=\"240\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"450\" y1=\"170\" x2=\"450\" y2=\"240\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"490\" y1=\"170\" x2=\"490\" y2=\"240\" stroke=\"#333\" stroke-width=\"2\"/></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは う です。\n<span class=\"frac\"><span class=\"n\">1</span><span class=\"d\">4</span></span>は、もとの <ruby>大<rt>おお</rt></ruby>きさを <ruby>同<rt>おな</rt></ruby>じ <ruby>大<rt>おお</rt></ruby>きさに 4つに <ruby>分<rt>わ</rt></ruby>けた 1つ<ruby>分<rt>ぶん</rt></ruby>です。\nう は 4つに <ruby>同<rt>おな</rt></ruby>じ <ruby>大<rt>おお</rt></ruby>きさで <ruby>分<rt>わ</rt></ruby>けて、そのうち 1つに <ruby>色<rt>いろ</rt></ruby>が ついて います。\nあ は <ruby>色<rt>いろ</rt></ruby>が 2つ<ruby>分<rt>ぶん</rt></ruby>、い は 3つに <ruby>分<rt>わ</rt></ruby>けた 1つ<ruby>分<rt>ぶん</rt></ruby>です。\nえ は 4つに <ruby>分<rt>わ</rt></ruby>かれて いますが、<ruby>大<rt>おお</rt></ruby>きさが そろって いません。\nポイント: <ruby>分<rt>わ</rt></ruby>けた <ruby>数<rt>かず</rt></ruby>だけでなく、<ruby>同<rt>おな</rt></ruby>じ <ruby>大<rt>おお</rt></ruby>きさかも たしかめます。"
},
{
"q": 14,
"unit": "e2_u02",
"topic": "具体物の等分",
"level": 2,
"question": "12<ruby>本<rt>ほん</rt></ruby>の えんぴつを、<ruby>同<rt>おな</rt></ruby>じ <ruby>数<rt>かず</rt></ruby>ずつ 4つの ふくろに <ruby>分<rt>わ</rt></ruby>けます。1つの ふくろに <ruby>入<rt>はい</rt></ruby>る えんぴつは <ruby>何本<rt>なんぼん</rt></ruby>ですか。",
"choices": [
"3<ruby>本<rt>ぼん</rt></ruby>",
"4<ruby>本<rt>ほん</rt></ruby>",
"6<ruby>本<rt>ぽん</rt></ruby>",
"8<ruby>本<rt>ぽん</rt></ruby>"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 3<ruby>本<rt>ぼん</rt></ruby> です。\n4つの ふくろに 1<ruby>本<rt>ぽん</rt></ruby>ずつ <ruby>配<rt>くば</rt></ruby>ると 4<ruby>本<rt>ほん</rt></ruby> つかいます。\nもう 1<ruby>回<rt>かい</rt></ruby> <ruby>配<rt>くば</rt></ruby>ると 8<ruby>本<rt>ぽん</rt></ruby>、さらに もう 1<ruby>回<rt>かい</rt></ruby>で 12<ruby>本<rt>ほん</rt></ruby>に なります。\n3<ruby>回<rt>かい</rt></ruby> <ruby>配<rt>くば</rt></ruby>れたので、1つの ふくろは 3<ruby>本<rt>ぼん</rt></ruby>です。\nこの 3<ruby>本<rt>ぼん</rt></ruby>は 12<ruby>本<rt>ほん</rt></ruby>の <span class=\"frac\"><span class=\"n\">1</span><span class=\"d\">4</span></span>に あたります。\nふくろの <ruby>数<rt>かず</rt></ruby>の 4を こたえに して しまう まちがいが <ruby>多<rt>おお</rt></ruby>いです。\nポイント: <ruby>同<rt>おな</rt></ruby>じ <ruby>数<rt>かず</rt></ruby>ずつ <ruby>配<rt>くば</rt></ruby>って いくと こたえが <ruby>見<rt>み</rt></ruby>つかります。"
},
{
"q": 15,
"unit": "e2_u02",
"topic": "等分と長さ",
"level": 3,
"question": "24 cm の テープを、<ruby>同<rt>おな</rt></ruby>じ <ruby>長<rt>なが</rt></ruby>さに なるように 4つに <ruby>切<rt>き</rt></ruby>りました。その うちの 2つ<ruby>分<rt>ぶん</rt></ruby>を あわせた <ruby>長<rt>なが</rt></ruby>さは <ruby>何<rt>なん</rt></ruby> cm ですか。",
"choices": [
"6 cm",
"8 cm",
"12 cm",
"18 cm"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 12 cm です。\nまず 24 cm を <ruby>同<rt>おな</rt></ruby>じ <ruby>長<rt>なが</rt></ruby>さに 4つに <ruby>分<rt>わ</rt></ruby>けます。\n6 cm が 4つで 24 cm に なるので、1つ<ruby>分<rt>ぶん</rt></ruby>は 6 cm です。\nききたいのは 2つ<ruby>分<rt>ぶん</rt></ruby>なので、6 cm と 6 cm で 12 cm です。\n4つに <ruby>分<rt>わ</rt></ruby>けた 2つ<ruby>分<rt>ぶん</rt></ruby>は、もとの <ruby>長<rt>なが</rt></ruby>さの はんぶんと <ruby>同<rt>おな</rt></ruby>じに なります。\n1つ<ruby>分<rt>ぶん</rt></ruby>の 6 cm で <ruby>止<rt>と</rt></ruby>めて しまう まちがいが <ruby>多<rt>おお</rt></ruby>いです。\nポイント: いくつ<ruby>分<rt>ぶん</rt></ruby>かを さいごに たしかめます。"
},
{
"q": 16,
"unit": "e2_u03",
"topic": "くり上がり",
"level": 1,
"question": "<ruby>次<rt>つぎ</rt></ruby>の たし<ruby>算<rt>ざん</rt></ruby>を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。\n26 + 58 の <ruby>答<rt>こた</rt></ruby>えは いくつですか。",
"choices": [
"84",
"74",
"83",
"94"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 84 です。\n<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 6 + 8 = 14 なので、4 を <ruby>書<rt>か</rt></ruby>いて 1 を <ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>へ くり<ruby>上<rt>あ</rt></ruby>げます。\n<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 2 + 5 に くり<ruby>上<rt>あ</rt></ruby>がりの 1 を たして 8 です。\nならべて <ruby>読<rt>よ</rt></ruby>むと 84 に なります。\nくり<ruby>上<rt>あ</rt></ruby>がりの 1 を わすれると 74 に なってしまいます。\nポイント: <ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>の <ruby>答<rt>こた</rt></ruby>えが 10 いじょうに なったら、<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>に 1 を くり<ruby>上<rt>あ</rt></ruby>げます。"
},
{
"q": 17,
"unit": "e2_u03",
"topic": "3けたの筆算",
"level": 1,
"question": "3けたの たし<ruby>算<rt>ざん</rt></ruby>です。\n<ruby>筆算<rt>ひっさん</rt></ruby>で 235 + 142 を <ruby>計算<rt>けいさん</rt></ruby>すると、<ruby>答<rt>こた</rt></ruby>えは いくつに なりますか。",
"choices": [
"367",
"377",
"387",
"477"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 377 です。\n<ruby>筆算<rt>ひっさん</rt></ruby>では <ruby>位<rt>くらい</rt></ruby>を たてに そろえて <ruby>書<rt>か</rt></ruby>き、<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>から <ruby>順<rt>じゅん</rt></ruby>に <ruby>計算<rt>けいさん</rt></ruby>します。\n<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 5 + 2 = 7、<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 3 + 4 = 7、<ruby>百<rt>ひゃく</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 2 + 1 = 3 です。\nどの <ruby>位<rt>くらい</rt></ruby>も 10 に とどかないので、くり<ruby>上<rt>あ</rt></ruby>がりは ありません。\n<ruby>位<rt>くらい</rt></ruby>を ずらして <ruby>書<rt>か</rt></ruby>くと 367 や 477 のように まちがえます。\nポイント: けたが <ruby>多<rt>おお</rt></ruby>くなっても、<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>から <ruby>順<rt>じゅん</rt></ruby>に たす やり<ruby>方<rt>かた</rt></ruby>は <ruby>同<rt>おな</rt></ruby>じです。"
},
{
"q": 18,
"unit": "e2_u03",
"topic": "たし算の文章題",
"level": 1,
"question": "Aさんは <ruby>先週<rt>せんしゅう</rt></ruby> <ruby>本<rt>ほん</rt></ruby>を 27ページ、<ruby>今週<rt>こんしゅう</rt></ruby> 68ページ <ruby>読<rt>よ</rt></ruby>みました。\nあわせて <ruby>何<rt>なん</rt></ruby>ページ <ruby>読<rt>よ</rt></ruby>みましたか。",
"choices": [
"85ページ",
"96ページ",
"95ページ",
"105ページ"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 95ページ です。\n27 + 68 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。\n<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 7 + 8 = 15 なので、5 を <ruby>書<rt>か</rt></ruby>いて 1 を くり<ruby>上<rt>あ</rt></ruby>げます。\n<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 2 + 6 に くり<ruby>上<rt>あ</rt></ruby>がりの 1 を たして 9 です。\nあわせて 95ページ に なります。\nくり<ruby>上<rt>あ</rt></ruby>がりを わすれると 85ページ に なってしまいます。\nポイント: 「あわせて」と <ruby>書<rt>か</rt></ruby>かれている ときは たし<ruby>算<rt>ざん</rt></ruby>で <ruby>考<rt>かんが</rt></ruby>えます。"
},
{
"q": 19,
"unit": "e2_u03",
"topic": "時間のたし算",
"level": 1,
"question": "<ruby>通勤<rt>つうきん</rt></ruby>に、<ruby>電車<rt>でんしゃ</rt></ruby>で 38<ruby>分<rt>ぷん</rt></ruby>、<ruby>歩<rt>ある</rt></ruby>いて 45<ruby>分<rt>ふん</rt></ruby> かかります。\nあわせて <ruby>何<rt>なん</rt></ruby><ruby>分<rt>ぷん</rt></ruby> かかりますか。",
"choices": [
"73<ruby>分<rt>ぷん</rt></ruby>",
"84<ruby>分<rt>ぷん</rt></ruby>",
"93<ruby>分<rt>ぷん</rt></ruby>",
"83<ruby>分<rt>ぷん</rt></ruby>"
],
"answer": 4,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 83<ruby>分<rt>ぷん</rt></ruby> です。\n38 + 45 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。\n<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 8 + 5 = 13 なので、3 を <ruby>書<rt>か</rt></ruby>いて 1 を くり<ruby>上<rt>あ</rt></ruby>げます。\n<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 3 + 4 に くり<ruby>上<rt>あ</rt></ruby>がりの 1 を たして 8 です。\nあわせて 83<ruby>分<rt>ぷん</rt></ruby> かかります。\nくり<ruby>上<rt>あ</rt></ruby>がりを わすれると 73<ruby>分<rt>ぷん</rt></ruby>、2<ruby>回<rt>かい</rt></ruby> かぞえると 93<ruby>分<rt>ぷん</rt></ruby> に なります。\nポイント: くり<ruby>上<rt>あ</rt></ruby>がった 1 は <ruby>小<rt>ちい</rt></ruby>さく <ruby>書<rt>か</rt></ruby>いて おくと <ruby>見<rt>み</rt></ruby>おとしません。"
},
{
"q": 20,
"unit": "e2_u03",
"topic": "位取り",
"level": 1,
"question": "9 + 63 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。\n9 は どの <ruby>数字<rt>すうじ</rt></ruby>に そろえて <ruby>書<rt>か</rt></ruby>きますか。",
"choices": [
"63 の 6 の <ruby>下<rt>した</rt></ruby>",
"63 の 3 の <ruby>下<rt>した</rt></ruby>",
"63 の 6 と 3 の <ruby>間<rt>あいだ</rt></ruby>の <ruby>下<rt>した</rt></ruby>",
"63 の 3 の <ruby>右<rt>みぎ</rt></ruby><ruby>下<rt>した</rt></ruby>"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは「63 の 3 の <ruby>下<rt>した</rt></ruby>」です。\n<ruby>筆算<rt>ひっさん</rt></ruby>は <ruby>位<rt>くらい</rt></ruby>を たてに そろえて <ruby>書<rt>か</rt></ruby>きます。\n9 は <ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>の <ruby>数<rt>かず</rt></ruby>なので、63 の <ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>である 3 の <ruby>下<rt>した</rt></ruby>に そろえます。\nそのまま <ruby>計算<rt>けいさん</rt></ruby>すると 9 + 3 = 12 で 2 を <ruby>書<rt>か</rt></ruby>いて 1 を くり<ruby>上<rt>あ</rt></ruby>げ、<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 6 + 1 = 7 と なり、<ruby>答<rt>こた</rt></ruby>えは 72 です。\n<ruby>左<rt>ひだり</rt></ruby>に そろえて 6 の <ruby>下<rt>した</rt></ruby>に <ruby>書<rt>か</rt></ruby>くと、まったく ちがう <ruby>計算<rt>けいさん</rt></ruby>に なります。\nポイント: けた<ruby>数<rt>すう</rt></ruby>が ちがう たし<ruby>算<rt>ざん</rt></ruby>は、<ruby>右<rt>みぎ</rt></ruby>はしを そろえて <ruby>書<rt>か</rt></ruby>きます。"
},
{
"q": 21,
"unit": "e2_u03",
"topic": "3けたと2けた",
"level": 2,
"question": "<ruby>会場<rt>かいじょう</rt></ruby>に はじめに 486<ruby>人<rt>にん</rt></ruby>、そのあと 57<ruby>人<rt>にん</rt></ruby> が <ruby>入<rt>はい</rt></ruby>りました。\nあわせて <ruby>何人<rt>なんにん</rt></ruby> <ruby>入<rt>はい</rt></ruby>りましたか。",
"choices": [
"543<ruby>人<rt>にん</rt></ruby>",
"443<ruby>人<rt>にん</rt></ruby>",
"533<ruby>人<rt>にん</rt></ruby>",
"553<ruby>人<rt>にん</rt></ruby>"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 543<ruby>人<rt>にん</rt></ruby> です。\n486 + 57 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。57 は 2けたの <ruby>数<rt>かず</rt></ruby>なので、<ruby>右<rt>みぎ</rt></ruby>はしを そろえて <ruby>書<rt>か</rt></ruby>きます。\n<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 6 + 7 = 13 で 3 を <ruby>書<rt>か</rt></ruby>いて くり<ruby>上<rt>あ</rt></ruby>がり 1。\n<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 8 + 5 + 1 = 14 で 4 を <ruby>書<rt>か</rt></ruby>いて くり<ruby>上<rt>あ</rt></ruby>がり 1。\n<ruby>百<rt>ひゃく</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 4 + 1 = 5 です。\nくり<ruby>上<rt>あ</rt></ruby>がりを 1<ruby>回<rt>かい</rt></ruby> わすれると 533<ruby>人<rt>にん</rt></ruby> に なります。\nポイント: けた<ruby>数<rt>すう</rt></ruby>が ちがっても、<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>から <ruby>順<rt>じゅん</rt></ruby>に <ruby>進<rt>すす</rt></ruby>めます。"
},
{
"q": 22,
"unit": "e2_u03",
"topic": "くり上がり2回",
"level": 2,
"question": "<ruby>家<rt>いえ</rt></ruby>から <ruby>公園<rt>こうえん</rt></ruby>までは 286m、<ruby>公園<rt>こうえん</rt></ruby>から <ruby>図書館<rt>としょかん</rt></ruby>までは 175m あります。\n<ruby>家<rt>いえ</rt></ruby>から <ruby>図書館<rt>としょかん</rt></ruby>までは あわせて <ruby>何<rt>なん</rt></ruby>m ですか。",
"choices": [
"361m",
"451m",
"461m",
"471m"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 461m です。\n286 + 175 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。\n<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 6 + 5 = 11 で 1 を <ruby>書<rt>か</rt></ruby>いて くり<ruby>上<rt>あ</rt></ruby>がり 1。\n<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 8 + 7 に くり<ruby>上<rt>あ</rt></ruby>がりの 1 を たして 16 なので、6 を <ruby>書<rt>か</rt></ruby>いて くり<ruby>上<rt>あ</rt></ruby>がり 1。\n<ruby>百<rt>ひゃく</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 2 + 1 + 1 = 4 です。\nくり<ruby>上<rt>あ</rt></ruby>がりが 2<ruby>回<rt>かい</rt></ruby> つづくので、どちらかを わすれると 451m や 361m に なります。\nポイント: くり<ruby>上<rt>あ</rt></ruby>がりの 1 は、つぎの <ruby>位<rt>くらい</rt></ruby>の <ruby>計算<rt>けいさん</rt></ruby>に かならず たします。"
},
{
"q": 23,
"unit": "e2_u03",
"topic": "答えの見積り",
"level": 2,
"question": "297<ruby>円<rt>えん</rt></ruby>の <ruby>品物<rt>しなもの</rt></ruby>と 406<ruby>円<rt>えん</rt></ruby>の <ruby>品物<rt>しなもの</rt></ruby>を 1つずつ <ruby>買<rt>か</rt></ruby>います。\n<ruby>代金<rt>だいきん</rt></ruby>の <ruby>合計<rt>ごうけい</rt></ruby>は およそ <ruby>何<rt>なん</rt></ruby><ruby>円<rt>えん</rt></ruby>に なりますか。",
"choices": [
"およそ 500<ruby>円<rt>えん</rt></ruby>",
"およそ 600<ruby>円<rt>えん</rt></ruby>",
"およそ 700<ruby>円<rt>えん</rt></ruby>",
"およそ 800<ruby>円<rt>えん</rt></ruby>"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは およそ 700<ruby>円<rt>えん</rt></ruby> です。\n<ruby>見<rt>み</rt></ruby>つもりでは、それぞれの <ruby>数<rt>かず</rt></ruby>を きりの よい <ruby>数<rt>かず</rt></ruby>に なおしてから たします。\n297 は 300 に <ruby>近<rt>ちか</rt></ruby>く、406 は 400 に <ruby>近<rt>ちか</rt></ruby>いので、300 + 400 = 700 と <ruby>考<rt>かんが</rt></ruby>えます。\nじっさいに <ruby>筆算<rt>ひっさん</rt></ruby>すると 297 + 406 = 703 で、およそ 700<ruby>円<rt>えん</rt></ruby> と <ruby>合<rt>あ</rt></ruby>っています。\n297 を 200 と <ruby>見<rt>み</rt></ruby>て しまうと 600<ruby>円<rt>えん</rt></ruby> に なるので <ruby>気<rt>き</rt></ruby>を つけます。\nポイント: <ruby>見<rt>み</rt></ruby>つもりは、いちばん <ruby>近<rt>ちか</rt></ruby>い きりの よい <ruby>数<rt>かず</rt></ruby>に そろえてから たします。"
},
{
"q": 24,
"unit": "e2_u03",
"topic": "くり上がりの数",
"level": 2,
"question": "364 + 258 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。\nとちゅうで くり<ruby>上<rt>あ</rt></ruby>がりは <ruby>何回<rt>なんかい</rt></ruby> ありますか。",
"choices": [
"0<ruby>回<rt>かい</rt></ruby>",
"1<ruby>回<rt>かい</rt></ruby>",
"2<ruby>回<rt>かい</rt></ruby>",
"3<ruby>回<rt>かい</rt></ruby>"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 2<ruby>回<rt>かい</rt></ruby> です。\n<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>から <ruby>順<rt>じゅん</rt></ruby>に <ruby>計算<rt>けいさん</rt></ruby>します。\n<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 4 + 8 = 12 なので、ここで くり<ruby>上<rt>あ</rt></ruby>がりが 1<ruby>回<rt>かい</rt></ruby>。\n<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 6 + 5 に くり<ruby>上<rt>あ</rt></ruby>がりの 1 を たして 12 なので、ここでも くり<ruby>上<rt>あ</rt></ruby>がりが 1<ruby>回<rt>かい</rt></ruby>。\n<ruby>百<rt>ひゃく</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 3 + 2 + 1 = 6 で、くり<ruby>上<rt>あ</rt></ruby>がりは ありません。\n<ruby>答<rt>こた</rt></ruby>えは 622 で、くり<ruby>上<rt>あ</rt></ruby>がりは あわせて 2<ruby>回<rt>かい</rt></ruby> です。\n<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>に たす 1 を <ruby>入<rt>い</rt></ruby>れ<ruby>忘<rt>わす</rt></ruby>れると、<ruby>回数<rt>かいすう</rt></ruby>も <ruby>答<rt>こた</rt></ruby>えも ずれます。\nポイント: くり<ruby>上<rt>あ</rt></ruby>がりの <ruby>回数<rt>かいすう</rt></ruby>も、<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>から <ruby>順<rt>じゅん</rt></ruby>に かぞえます。"
},
{
"q": 25,
"unit": "e2_u03",
"topic": "3けたになる和",
"level": 2,
"question": "<ruby>仕事<rt>しごと</rt></ruby>で、<ruby>午前<rt>ごぜん</rt></ruby>に 48<ruby>分<rt>ぷん</rt></ruby>、<ruby>午後<rt>ごご</rt></ruby>に 75<ruby>分<rt>ふん</rt></ruby> <ruby>会議<rt>かいぎ</rt></ruby>を しました。\nあわせて <ruby>何<rt>なん</rt></ruby><ruby>分<rt>ぷん</rt></ruby> <ruby>会議<rt>かいぎ</rt></ruby>を しましたか。",
"choices": [
"113<ruby>分<rt>ぷん</rt></ruby>",
"123<ruby>分<rt>ぷん</rt></ruby>",
"127<ruby>分<rt>ふん</rt></ruby>",
"133<ruby>分<rt>ぷん</rt></ruby>"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 123<ruby>分<rt>ぷん</rt></ruby> です。\n48 + 75 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。\n<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 8 + 5 = 13 なので、3 を <ruby>書<rt>か</rt></ruby>いて 1 を くり<ruby>上<rt>あ</rt></ruby>げます。\n<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 4 + 7 に くり<ruby>上<rt>あ</rt></ruby>がりの 1 を たして 12 なので、そのまま 12 と <ruby>書<rt>か</rt></ruby>いて 123 に なります。\n<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>の <ruby>答<rt>こた</rt></ruby>えが 10 を こえる ときは、<ruby>百<rt>ひゃく</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>へ くり<ruby>上<rt>あ</rt></ruby>がって けたが <ruby>増<rt>ふ</rt></ruby>えます。\nくり<ruby>上<rt>あ</rt></ruby>がりを わすれると 113<ruby>分<rt>ぷん</rt></ruby> に なります。\nポイント: 2けた どうしの たし<ruby>算<rt>ざん</rt></ruby>でも、<ruby>答<rt>こた</rt></ruby>えが 3けたに なる ことが あります。"
},
{
"q": 26,
"unit": "e2_u03",
"topic": "3つの数の和",
"level": 3,
"question": "スープを つくるのに <ruby>使<rt>つか</rt></ruby>う ざいりょうの かさを、<ruby>下<rt>した</rt></ruby>の <ruby>表<rt>ひょう</rt></ruby>に まとめました。\n3つ あわせて <ruby>何<rt>なん</rt></ruby>mL に なりますか。",
"choices": [
"400mL",
"490mL",
"510mL",
"500mL"
],
"answer": 4,
"figure": null,
"table": [
[
"<ruby>材料<rt>ざいりょう</rt></ruby>",
"かさ"
],
[
"<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>",
"168mL"
],
[
"<ruby>水<rt>みず</rt></ruby>",
"245mL"
],
[
"<ruby>調味料<rt>ちょうみりょう</rt></ruby>",
"87mL"
]
],
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 500mL です。\n3つの <ruby>数<rt>かず</rt></ruby>は、2つずつ <ruby>順<rt>じゅん</rt></ruby>に たしていきます。\nまず 168 + 245 を <ruby>計算<rt>けいさん</rt></ruby>します。8 + 5 = 13 で 3、6 + 4 に 1 を たして 11 で 1、1 + 2 に 1 を たして 4 と なり 413 です。\nつぎに 413 + 87 を <ruby>計算<rt>けいさん</rt></ruby>します。3 + 7 = 10 で 0、1 + 8 に 1 を たして 10 で 0、4 に 1 を たして 5 と なり 500 です。\nとちゅうの くり<ruby>上<rt>あ</rt></ruby>がりを 1<ruby>回<rt>かい</rt></ruby> わすれると 490mL に なります。\nポイント: 3つ いじょうの たし<ruby>算<rt>ざん</rt></ruby>は、2つずつ <ruby>区切<rt>くぎ</rt></ruby>って <ruby>計算<rt>けいさん</rt></ruby>すると <ruby>確<rt>たし</rt></ruby>かめやすいです。"
},
{
"q": 27,
"unit": "e2_u03",
"topic": "代金の合計",
"level": 3,
"question": "238<ruby>円<rt>えん</rt></ruby>の <ruby>品物<rt>しなもの</rt></ruby>と 275<ruby>円<rt>えん</rt></ruby>の <ruby>品物<rt>しなもの</rt></ruby>を 1つずつ レジに <ruby>持<rt>も</rt></ruby>って いきます。\n500<ruby>円<rt>えん</rt></ruby>で はらえるか どうかについて、<ruby>正<rt>ただ</rt></ruby>しく <ruby>言<rt>い</rt></ruby>っている ものは どれですか。",
"choices": [
"<ruby>合計<rt>ごうけい</rt></ruby> 513<ruby>円<rt>えん</rt></ruby>で、13<ruby>円<rt>えん</rt></ruby> <ruby>足<rt>た</rt></ruby>りない",
"<ruby>合計<rt>ごうけい</rt></ruby> 513<ruby>円<rt>えん</rt></ruby>で、13<ruby>円<rt>えん</rt></ruby> あまる",
"<ruby>合計<rt>ごうけい</rt></ruby> 503<ruby>円<rt>えん</rt></ruby>で、3<ruby>円<rt>えん</rt></ruby> <ruby>足<rt>た</rt></ruby>りない",
"<ruby>合計<rt>ごうけい</rt></ruby> 403<ruby>円<rt>えん</rt></ruby>で、97<ruby>円<rt>えん</rt></ruby> あまる"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは「<ruby>合計<rt>ごうけい</rt></ruby> 513<ruby>円<rt>えん</rt></ruby>で、13<ruby>円<rt>えん</rt></ruby> <ruby>足<rt>た</rt></ruby>りない」です。\n238 + 275 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。\n<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 8 + 5 = 13 で 3 を <ruby>書<rt>か</rt></ruby>いて くり<ruby>上<rt>あ</rt></ruby>がり 1。\n<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 3 + 7 に 1 を たして 11 で 1 を <ruby>書<rt>か</rt></ruby>いて くり<ruby>上<rt>あ</rt></ruby>がり 1。\n<ruby>百<rt>ひゃく</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 2 + 2 + 1 = 5 と なり、<ruby>合計<rt>ごうけい</rt></ruby>は 513<ruby>円<rt>えん</rt></ruby> です。\n513 は 500 より <ruby>大<rt>おお</rt></ruby>きいので はらえません。500 との ちがいは 13 なので、13<ruby>円<rt>えん</rt></ruby> <ruby>足<rt>た</rt></ruby>りません。\n<ruby>足<rt>た</rt></ruby>りないのに あまると <ruby>答<rt>こた</rt></ruby>えないよう、どちらが <ruby>大<rt>おお</rt></ruby>きいかを <ruby>先<rt>さき</rt></ruby>に くらべます。\nポイント: はらえるか どうかは、<ruby>合計<rt>ごうけい</rt></ruby>を <ruby>出<rt>だ</rt></ruby>してから <ruby>持<rt>も</rt></ruby>っている お<ruby>金<rt>かね</rt></ruby>と くらべます。"
},
{
"q": 28,
"unit": "e2_u03",
"topic": "虫食い算",
"level": 3,
"question": "<ruby>筆算<rt>ひっさん</rt></ruby>で つぎの たし<ruby>算<rt>ざん</rt></ruby>を したところ、<ruby>答<rt>こた</rt></ruby>えは 662 に なりました。\n3□8 + 274 = 662\n□ に <ruby>入<rt>はい</rt></ruby>る <ruby>数字<rt>すうじ</rt></ruby>は どれですか。",
"choices": [
"6",
"7",
"8",
"9"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 8 です。\nまず <ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 8 + 4 = 12 なので、<ruby>答<rt>こた</rt></ruby>えの <ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 2 に なり、1 が くり<ruby>上<rt>あ</rt></ruby>がります。\nつぎに <ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は □ + 7 に くり<ruby>上<rt>あ</rt></ruby>がりの 1 を たした <ruby>数<rt>かず</rt></ruby>で、その <ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>が 6 に なります。□ + 8 が 16 に なる ときなので、□ は 8 です。\nこのとき また 1 が くり<ruby>上<rt>あ</rt></ruby>がり、<ruby>百<rt>ひゃく</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>は 3 + 2 + 1 = 6 と なって <ruby>合<rt>あ</rt></ruby>います。\n□ を 6 と すると 6 + 7 + 1 = 14 で <ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>が 4 に なり、<ruby>合<rt>あ</rt></ruby>いません。\nポイント: <ruby>虫<rt>むし</rt></ruby>くい<ruby>算<rt>ざん</rt></ruby>は、<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>から くり<ruby>上<rt>あ</rt></ruby>がりを <ruby>順<rt>じゅん</rt></ruby>に <ruby>追<rt>お</rt></ruby>って <ruby>調<rt>しら</rt></ruby>べます。"
},
{
"q": 29,
"unit": "e2_u04",
"topic": "くりさがり",
"level": 1,
"question": "<ruby>次<rt>つぎ</rt></ruby>の <ruby>筆算<rt>ひっさん</rt></ruby>の <ruby>答<rt>こた</rt></ruby>えは いくつですか。\n62 − 35",
"choices": [
"27",
"37",
"33",
"23"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 27 です。<ruby>一<rt>いち</rt></ruby>のくらいは 2 から 5 が ひけないので、<ruby>十<rt>じゅう</rt></ruby>のくらいから 1 くり<ruby>下<rt>さ</rt></ruby>げて 12 − 5 = 7 と します。<ruby>十<rt>じゅう</rt></ruby>のくらいは 6 が 1 へって 5 に なるので、5 − 3 = 2 です。あわせて 27 に なります。くり<ruby>下<rt>さ</rt></ruby>げた あとに <ruby>十<rt>じゅう</rt></ruby>のくらいを へらしわすれると 37 に なります。ポイント: くり<ruby>下<rt>さ</rt></ruby>げたら、<ruby>上<rt>うえ</rt></ruby>の くらいの <ruby>数<rt>かず</rt></ruby>を かならず 1 <ruby>小<rt>ちい</rt></ruby>さくします。"
},
{
"q": 30,
"unit": "e2_u04",
"topic": "2けたのひきざん",
"level": 1,
"question": "コピー<ruby>用紙<rt>ようし</rt></ruby>が 82まい あります。<ruby>会議<rt>かいぎ</rt></ruby>で 46まい <ruby>使<rt>つか</rt></ruby>いました。のこりは <ruby>何<rt>なん</rt></ruby>まいですか。",
"choices": [
"44まい",
"36まい",
"46まい",
"26まい"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 36まい です。82 − 46 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。<ruby>一<rt>いち</rt></ruby>のくらいは 2 から 6 が ひけないので、<ruby>十<rt>じゅう</rt></ruby>のくらいから 1 くり<ruby>下<rt>さ</rt></ruby>げて 12 − 6 = 6 です。<ruby>十<rt>じゅう</rt></ruby>のくらいは 8 が 7 に なるので、7 − 4 = 3 です。のこりは 36まい です。ひけないからと 6 − 2 = 4 と <ruby>計算<rt>けいさん</rt></ruby>すると 44まい に なって しまいます。ポイント: <ruby>一<rt>いち</rt></ruby>のくらいが ひけない ときは、<ruby>十<rt>じゅう</rt></ruby>のくらいから 1 くり<ruby>下<rt>さ</rt></ruby>げて <ruby>計算<rt>けいさん</rt></ruby>します。"
},
{
"q": 31,
"unit": "e2_u04",
"topic": "3けたのひきざん",
"level": 1,
"question": "<ruby>受信<rt>じゅしん</rt></ruby>した メールが 386<ruby>通<rt>つう</rt></ruby> あります。そのうち 124<ruby>通<rt>つう</rt></ruby>を <ruby>整理<rt>せいり</rt></ruby>しました。のこりは <ruby>何通<rt>なんつう</rt></ruby>ですか。",
"choices": [
"272<ruby>通<rt>つう</rt></ruby>",
"262<ruby>通<rt>つう</rt></ruby>",
"242<ruby>通<rt>つう</rt></ruby>",
"162<ruby>通<rt>つう</rt></ruby>"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 262<ruby>通<rt>つう</rt></ruby> です。386 − 124 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。くらいを たてに そろえて、<ruby>一<rt>いち</rt></ruby>のくらいは 6 − 4 = 2、<ruby>十<rt>じゅう</rt></ruby>のくらいは 8 − 2 = 6、<ruby>百<rt>ひゃく</rt></ruby>のくらいは 3 − 1 = 2 です。この <ruby>式<rt>しき</rt></ruby>は くり<ruby>下<rt>さ</rt></ruby>がりが ないので、くらいごとに そのまま ひけます。くらいを ずらして <ruby>書<rt>か</rt></ruby>くと、162<ruby>通<rt>つう</rt></ruby>の ような まちがいに なります。ポイント: <ruby>筆算<rt>ひっさん</rt></ruby>は まず たての くらいを そろえて <ruby>書<rt>か</rt></ruby>きます。"
},
{
"q": 32,
"unit": "e2_u04",
"topic": "じかんのひきざん",
"level": 1,
"question": "<ruby>休<rt>やす</rt></ruby>みじかんは 60<ruby>分<rt>ぷん</rt></ruby> あります。そのうち 25<ruby>分<rt>ふん</rt></ruby> かけて お<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べました。のこりは <ruby>何分<rt>なんぷん</rt></ruby>ですか。",
"choices": [
"45<ruby>分<rt>ふん</rt></ruby>",
"25<ruby>分<rt>ふん</rt></ruby>",
"40<ruby>分<rt>ぷん</rt></ruby>",
"35<ruby>分<rt>ふん</rt></ruby>"
],
"answer": 4,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 35<ruby>分<rt>ふん</rt></ruby> です。60 − 25 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。<ruby>一<rt>いち</rt></ruby>のくらいは 0 から 5 が ひけないので、<ruby>十<rt>じゅう</rt></ruby>のくらいから 1 くり<ruby>下<rt>さ</rt></ruby>げて 10 − 5 = 5 です。<ruby>十<rt>じゅう</rt></ruby>のくらいは 6 が 5 に なるので、5 − 2 = 3 です。のこりは 35<ruby>分<rt>ふん</rt></ruby> です。くり<ruby>下<rt>さ</rt></ruby>げた ことを わすれると 45<ruby>分<rt>ふん</rt></ruby> に なります。ポイント: <ruby>時間<rt>じかん</rt></ruby>でも、<ruby>分<rt>ふん</rt></ruby>どうしなら ふつうの ひき<ruby>算<rt>ざん</rt></ruby>と <ruby>同<rt>おな</rt></ruby>じように <ruby>計算<rt>けいさん</rt></ruby>できます。"
},
{
"q": 33,
"unit": "e2_u04",
"topic": "ひっさんのしくみ",
"level": 1,
"question": "<ruby>図<rt>ず</rt></ruby>の <ruby>筆算<rt>ひっさん</rt></ruby>で、<ruby>一<rt>いち</rt></ruby>のくらいの <ruby>計算<rt>けいさん</rt></ruby>は どう すれば よいですか。",
"choices": [
"<ruby>十<rt>じゅう</rt></ruby>のくらいから 1 くり<ruby>下<rt>さ</rt></ruby>げて、14 − 8 を <ruby>計算<rt>けいさん</rt></ruby>する",
"<ruby>一<rt>いち</rt></ruby>のくらいだけを <ruby>見<rt>み</rt></ruby>て、8 − 4 を <ruby>計算<rt>けいさん</rt></ruby>する",
"<ruby>十<rt>じゅう</rt></ruby>のくらいから 2 くり<ruby>下<rt>さ</rt></ruby>げて、24 − 8 を <ruby>計算<rt>けいさん</rt></ruby>する",
"<ruby>一<rt>いち</rt></ruby>のくらいは ひけないので、0 と <ruby>書<rt>か</rt></ruby>く"
],
"answer": 1,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 200\"><rect x=\"280\" y=\"28\" width=\"58\" height=\"122\" rx=\"6\" fill=\"#e0f2f1\" stroke=\"#00897b\" stroke-width=\"2\"/><text x=\"248\" y=\"82\" font-size=\"40\" fill=\"#333\" text-anchor=\"middle\">7</text><text x=\"309\" y=\"82\" font-size=\"40\" fill=\"#333\" text-anchor=\"middle\">4</text><text x=\"188\" y=\"136\" font-size=\"40\" fill=\"#333\" text-anchor=\"middle\">−</text><text x=\"248\" y=\"136\" font-size=\"40\" fill=\"#333\" text-anchor=\"middle\">2</text><text x=\"309\" y=\"136\" font-size=\"40\" fill=\"#333\" text-anchor=\"middle\">8</text><line x1=\"170\" y1=\"150\" x2=\"345\" y2=\"150\" stroke=\"#333\" stroke-width=\"3\"/><line x1=\"345\" y1=\"90\" x2=\"392\" y2=\"90\" stroke=\"#00897b\" stroke-width=\"2\"/><text x=\"400\" y=\"97\" font-size=\"20\" fill=\"#00897b\">いちのくらい</text></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 「<ruby>十<rt>じゅう</rt></ruby>のくらいから 1 くり<ruby>下<rt>さ</rt></ruby>げて、14 − 8 を <ruby>計算<rt>けいさん</rt></ruby>する」 です。4 から 8 は ひけないので、<ruby>十<rt>じゅう</rt></ruby>のくらいの 7 から 1 かりてきて、<ruby>一<rt>いち</rt></ruby>のくらいを 14 と <ruby>見<rt>み</rt></ruby>ます。14 − 8 = 6 です。かりた ので <ruby>十<rt>じゅう</rt></ruby>のくらいは 6 に なり、つぎに 6 − 2 を <ruby>計算<rt>けいさん</rt></ruby>します。ひけないからと いって 8 − 4 と ぎゃくに ひくと まちがいます。ポイント: くり<ruby>下<rt>さ</rt></ruby>げるのは いつも となりの くらいから 1 だけです。"
},
{
"q": 34,
"unit": "e2_u04",
"topic": "たしかめざん",
"level": 2,
"question": "81 − 47 の <ruby>答<rt>こた</rt></ruby>えを 34 と しました。たし<ruby>算<rt>ざん</rt></ruby>を つかって、この <ruby>答<rt>こた</rt></ruby>えが <ruby>正<rt>ただ</rt></ruby>しいか たしかめます。どの <ruby>式<rt>しき</rt></ruby>を <ruby>計算<rt>けいさん</rt></ruby>すれば よいですか。",
"choices": [
"81 + 47",
"34 + 47",
"81 + 34",
"34 + 7"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 34 + 47 です。ひき<ruby>算<rt>ざん</rt></ruby>の たしかめは、<ruby>出<rt>で</rt></ruby>た <ruby>答<rt>こた</rt></ruby>えと ひいた <ruby>数<rt>かず</rt></ruby>を たして、はじめの <ruby>数<rt>かず</rt></ruby>に もどるかを <ruby>見<rt>み</rt></ruby>ます。34 + 47 = 81 と なり、はじめの 81 に もどるので、<ruby>答<rt>こた</rt></ruby>えは <ruby>正<rt>ただ</rt></ruby>しいと わかります。もどらない ときは、くり<ruby>下<rt>さ</rt></ruby>がりの まちがいが ないか <ruby>見<rt>み</rt></ruby>なおします。ひかれる <ruby>数<rt>かず</rt></ruby>の 81 に たしても たしかめには なりません。ポイント: (こたえ) + (ひく<ruby>数<rt>かず</rt></ruby>) = (ひかれる<ruby>数<rt>かず</rt></ruby>) です。"
},
{
"q": 35,
"unit": "e2_u04",
"topic": "おつりのけいさん",
"level": 2,
"question": "レジで 100<ruby>円<rt>えん</rt></ruby><ruby>玉<rt>だま</rt></ruby>を 1こ <ruby>出<rt>だ</rt></ruby>して、58<ruby>円<rt>えん</rt></ruby>の <ruby>品物<rt>しなもの</rt></ruby>を <ruby>買<rt>か</rt></ruby>いました。おつりは <ruby>何円<rt>なんえん</rt></ruby>ですか。",
"choices": [
"48<ruby>円<rt>えん</rt></ruby>",
"58<ruby>円<rt>えん</rt></ruby>",
"42<ruby>円<rt>えん</rt></ruby>",
"52<ruby>円<rt>えん</rt></ruby>"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 42<ruby>円<rt>えん</rt></ruby> です。100 − 58 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。<ruby>一<rt>いち</rt></ruby>のくらいは 0 から 8 が ひけません。<ruby>十<rt>じゅう</rt></ruby>のくらいも 0 なので、<ruby>百<rt>ひゃく</rt></ruby>のくらいの 1 から かりて <ruby>十<rt>じゅう</rt></ruby>のくらいを 10 に します。そこから さらに 1 かりて 10 − 8 = 2、<ruby>十<rt>じゅう</rt></ruby>のくらいは 9 − 5 = 4 です。おつりは 42<ruby>円<rt>えん</rt></ruby> です。ポイント: 100 から ひく ときは、99 から ひいて <ruby>最後<rt>さいご</rt></ruby>に 1 を たすと たしかめやすいです。"
},
{
"q": 36,
"unit": "e2_u04",
"topic": "のこりをもとめる",
"level": 2,
"question": "245ページの <ruby>本<rt>ほん</rt></ruby>を、128ページまで <ruby>読<rt>よ</rt></ruby>みました。のこりは <ruby>何<rt>なん</rt></ruby>ページですか。",
"choices": [
"127ページ",
"123ページ",
"107ページ",
"117ページ"
],
"answer": 4,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 117ページ です。245 − 128 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。<ruby>一<rt>いち</rt></ruby>のくらいは 5 から 8 が ひけないので、<ruby>十<rt>じゅう</rt></ruby>のくらいから 1 かりて 15 − 8 = 7 です。<ruby>十<rt>じゅう</rt></ruby>のくらいは 4 が 3 に なるので 3 − 2 = 1、<ruby>百<rt>ひゃく</rt></ruby>のくらいは 2 − 1 = 1 です。のこりは 117ページ です。かりた ことを わすれると 127ページ に なります。ポイント: かりた くらいは、つぎの <ruby>計算<rt>けいさん</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>に かならず 1 へらします。"
},
{
"q": 37,
"unit": "e2_u04",
"topic": "かさのひきざん",
"level": 2,
"question": "すいとうに お<ruby>茶<rt>ちゃ</rt></ruby>が 500mL <ruby>入<rt>はい</rt></ruby>って います。240mL <ruby>飲<rt>の</rt></ruby>むと、のこりは <ruby>何<rt>なん</rt></ruby>mLですか。",
"choices": [
"260mL",
"340mL",
"270mL",
"250mL"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 260mL です。500 − 240 を <ruby>筆算<rt>ひっさん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>します。<ruby>一<rt>いち</rt></ruby>のくらいは 0 − 0 = 0 です。<ruby>十<rt>じゅう</rt></ruby>のくらいは 0 から 4 が ひけないので、<ruby>百<rt>ひゃく</rt></ruby>のくらいから 1 かりて 10 − 4 = 6 です。<ruby>百<rt>ひゃく</rt></ruby>のくらいは 5 が 4 に なるので 4 − 2 = 2 です。のこりは 260mL です。くらいごとに <ruby>大<rt>おお</rt></ruby>きい <ruby>数<rt>かず</rt></ruby>から ひくと 340mL に なって しまいます。ポイント: ひけない くらいは、<ruby>左<rt>ひだり</rt></ruby>どなりの くらいから 1 かりてきます。"
},
{
"q": 38,
"unit": "e2_u04",
"topic": "ちがいをもとめる",
"level": 2,
"question": "<ruby>表<rt>ひょう</rt></ruby>は、ある <ruby>人<rt>ひと</rt></ruby>が <ruby>歩<rt>ある</rt></ruby>いた <ruby>時間<rt>じかん</rt></ruby>です。<ruby>先週<rt>せんしゅう</rt></ruby>と <ruby>今週<rt>こんしゅう</rt></ruby>では、どちらが <ruby>何分<rt>なんぷん</rt></ruby> <ruby>多<rt>おお</rt></ruby>いですか。",
"choices": [
"<ruby>今週<rt>こんしゅう</rt></ruby>が 28<ruby>分<rt>ふん</rt></ruby> <ruby>多<rt>おお</rt></ruby>い",
"<ruby>先週<rt>せんしゅう</rt></ruby>が 28<ruby>分<rt>ふん</rt></ruby> <ruby>多<rt>おお</rt></ruby>い",
"<ruby>先週<rt>せんしゅう</rt></ruby>が 32<ruby>分<rt>ふん</rt></ruby> <ruby>多<rt>おお</rt></ruby>い",
"<ruby>今週<rt>こんしゅう</rt></ruby>が 32<ruby>分<rt>ふん</rt></ruby> <ruby>多<rt>おお</rt></ruby>い"
],
"answer": 2,
"figure": null,
"table": [
[
"いつ",
"<ruby>歩<rt>ある</rt></ruby>いた <ruby>時間<rt>じかん</rt></ruby>(<ruby>分<rt>ふん</rt></ruby>)"
],
[
"<ruby>先週<rt>せんしゅう</rt></ruby>",
"76"
],
[
"<ruby>今週<rt>こんしゅう</rt></ruby>",
"48"
]
],
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 「<ruby>先週<rt>せんしゅう</rt></ruby>が 28<ruby>分<rt>ふん</rt></ruby> <ruby>多<rt>おお</rt></ruby>い」 です。<ruby>表<rt>ひょう</rt></ruby>から、<ruby>先週<rt>せんしゅう</rt></ruby>は 76<ruby>分<rt>ふん</rt></ruby>、<ruby>今週<rt>こんしゅう</rt></ruby>は 48<ruby>分<rt>ふん</rt></ruby>と わかります。<ruby>多<rt>おお</rt></ruby>い ほうから <ruby>少<rt>すく</rt></ruby>ない ほうを ひくので、76 − 48 を <ruby>計算<rt>けいさん</rt></ruby>します。<ruby>一<rt>いち</rt></ruby>のくらいは 6 から 8 が ひけないので、1 かりて 16 − 8 = 8 です。<ruby>十<rt>じゅう</rt></ruby>のくらいは 7 が 6 に なるので 6 − 4 = 2 で、ちがいは 28<ruby>分<rt>ふん</rt></ruby> です。くらいごとに <ruby>大<rt>おお</rt></ruby>きい <ruby>数<rt>かず</rt></ruby>から ひくと 32<ruby>分<rt>ふん</rt></ruby> に なって しまいます。ポイント: ちがいを もとめる ときも ひき<ruby>算<rt>ざん</rt></ruby>を つかいます。"
},
{
"q": 39,
"unit": "e2_u04",
"topic": "むしくいざん",
"level": 3,
"question": "<ruby>次<rt>つぎ</rt></ruby>の <ruby>計算<rt>けいさん</rt></ruby>が <ruby>正<rt>ただ</rt></ruby>しく なるように、□に <ruby>数字<rt>すうじ</rt></ruby>を 1つ <ruby>入<rt>い</rt></ruby>れます。□に <ruby>入<rt>はい</rt></ruby>る <ruby>数字<rt>すうじ</rt></ruby>は どれですか。□は <ruby>十<rt>じゅう</rt></ruby>のくらいです。\n63 − □8 = 25",
"choices": [
"2",
"4",
"3",
"5"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 3 です。<ruby>一<rt>いち</rt></ruby>のくらいを <ruby>見<rt>み</rt></ruby>ると、3 から 8 は ひけないので 1 かりて 13 − 8 = 5 と なり、<ruby>答<rt>こた</rt></ruby>えの <ruby>一<rt>いち</rt></ruby>のくらいの 5 と <ruby>合<rt>あ</rt></ruby>います。かりた ので <ruby>十<rt>じゅう</rt></ruby>のくらいの 6 は 5 に なり、5 − □ = 2 に なる □ は 3 です。じっさいに 63 − 38 = 25 と なり、<ruby>正<rt>ただ</rt></ruby>しい ことが わかります。かりた ことを わすれて 6 − □ = 2 と すると 4 に なります。ポイント: □を さがす ときも、<ruby>一<rt>いち</rt></ruby>のくらいから <ruby>順<rt>じゅん</rt></ruby>に <ruby>考<rt>かんが</rt></ruby>えます。"
},
{
"q": 40,
"unit": "e2_u04",
"topic": "かいもののこり",
"level": 3,
"question": "350<ruby>円<rt>えん</rt></ruby> <ruby>持<rt>も</rt></ruby>って <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>に <ruby>行<rt>い</rt></ruby>き、<ruby>表<rt>ひょう</rt></ruby>の 2つを <ruby>買<rt>か</rt></ruby>いました。のこりは <ruby>何円<rt>なんえん</rt></ruby>ですか。",
"choices": [
"230<ruby>円<rt>えん</rt></ruby>",
"240<ruby>円<rt>えん</rt></ruby>",
"150<ruby>円<rt>えん</rt></ruby>",
"140<ruby>円<rt>えん</rt></ruby>"
],
"answer": 4,
"figure": null,
"table": [
[
"<ruby>品物<rt>しなもの</rt></ruby>",
"ねだん(<ruby>円<rt>えん</rt></ruby>)"
],
[
"お<ruby>茶<rt>ちゃ</rt></ruby>",
"120"
],
[
"パン",
"90"
]
],
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 140<ruby>円<rt>えん</rt></ruby> です。まず <ruby>買<rt>か</rt></ruby>った 2つの ねだんを たして 120 + 90 = 210<ruby>円<rt>えん</rt></ruby> です。つぎに <ruby>持<rt>も</rt></ruby>っていた 350<ruby>円<rt>えん</rt></ruby>から ひいて 350 − 210 = 140<ruby>円<rt>えん</rt></ruby> と なります。1つずつ ひいても よく、350 − 120 = 230、230 − 90 = 140 で <ruby>同<rt>おな</rt></ruby>じ <ruby>答<rt>こた</rt></ruby>えです。とちゅうの 230<ruby>円<rt>えん</rt></ruby>で <ruby>計算<rt>けいさん</rt></ruby>を やめると まちがいに なります。ポイント: <ruby>買<rt>か</rt></ruby>った ものが 2つ ある ときは、<ruby>両方<rt>りょうほう</rt></ruby> ひいたか たしかめます。"
},
{
"q": 41,
"unit": "e2_u04",
"topic": "こたえのけんとう",
"level": 3,
"question": "<ruby>答<rt>こた</rt></ruby>えが 100より <ruby>小<rt>ちい</rt></ruby>さく なる <ruby>式<rt>しき</rt></ruby>は どれですか。",
"choices": [
"216 − 143",
"368 − 152",
"475 − 231",
"529 − 316"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 216 − 143 です。216 − 143 は、<ruby>一<rt>いち</rt></ruby>のくらいが 6 − 3 = 3、<ruby>十<rt>じゅう</rt></ruby>のくらいは 1 から 4 が ひけないので 1 かりて 11 − 4 = 7、<ruby>百<rt>ひゃく</rt></ruby>のくらいは 2 が 1 に なって 1 − 1 = 0 と なり、<ruby>答<rt>こた</rt></ruby>えは 73 です。ほかは 368 − 152 = 216、475 − 231 = 244、529 − 316 = 213 で、どれも 100より <ruby>大<rt>おお</rt></ruby>きい <ruby>数<rt>かず</rt></ruby>です。ポイント: <ruby>百<rt>ひゃく</rt></ruby>のくらいが のこるかを <ruby>見<rt>み</rt></ruby>ると、<ruby>答<rt>こた</rt></ruby>えの <ruby>大<rt>おお</rt></ruby>きさの <ruby>見当<rt>けんとう</rt></ruby>が つきます。"
},
{
"q": 42,
"unit": "e2_u05",
"topic": "九九の計算",
"level": 1,
"question": "6×7 の <ruby>計算<rt>けいさん</rt></ruby>を しましょう。<ruby>答<rt>こた</rt></ruby>えは いくつ ですか。",
"choices": [
"42",
"36",
"48",
"13"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 42 です。6×7 は、6 が 7 つ<ruby>分<rt>ぶん</rt></ruby> <ruby>集<rt>あつ</rt></ruby>まった <ruby>数<rt>かず</rt></ruby>です。6 の <ruby>段<rt>だん</rt></ruby>の <ruby>九九<rt>くく</rt></ruby>では、6×6=36 の <ruby>次<rt>つぎ</rt></ruby>が 6×7 なので、36 に 6 を たして 42 に なります。「ろくしちしじゅうに」と となえて おぼえます。6+7=13 の ように たし<ruby>算<rt>ざん</rt></ruby>に して しまう まちがいが <ruby>多<rt>おお</rt></ruby>いので<ruby>気<rt>き</rt></ruby>を つけます。ポイント: かけ<ruby>算<rt>ざん</rt></ruby>は <ruby>同<rt>おな</rt></ruby>じ <ruby>数<rt>かず</rt></ruby>を なん<ruby>回<rt>かい</rt></ruby>も たした<ruby>数<rt>かず</rt></ruby>です。"
},
{
"q": 43,
"unit": "e2_u05",
"topic": "かけ算の文章題",
"level": 1,
"question": "1 ふくろに 4<ruby>個<rt>こ</rt></ruby> <ruby>入<rt>はい</rt></ruby>った パンを 5 ふくろ <ruby>買<rt>か</rt></ruby>いました。パンは <ruby>全部<rt>ぜんぶ</rt></ruby>で <ruby>何<rt>なん</rt></ruby><ruby>個<rt>こ</rt></ruby> ありますか。",
"choices": [
"16<ruby>個<rt>こ</rt></ruby>",
"20<ruby>個<rt>こ</rt></ruby>",
"9<ruby>個<rt>こ</rt></ruby>",
"24<ruby>個<rt>こ</rt></ruby>"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 20<ruby>個<rt>こ</rt></ruby> です。1 ふくろ<ruby>分<rt>ぶん</rt></ruby>の 4<ruby>個<rt>こ</rt></ruby>が 5 ふくろ<ruby>分<rt>ぶん</rt></ruby> あるので、4×5=20 と<ruby>計算<rt>けいさん</rt></ruby>します。<ruby>九九<rt>くく</rt></ruby>では「しごにじゅう」です。4+5=9 と たし<ruby>算<rt>ざん</rt></ruby>に したり、ふくろの<ruby>数<rt>かず</rt></ruby>を 6 と <ruby>見<rt>み</rt></ruby>まちがえて 24 に したり しやすいので、<ruby>何<rt>なに</rt></ruby>が いくつ<ruby>分<rt>ぶん</rt></ruby>か たしかめます。ポイント: 「1つ<ruby>分<rt>ぶん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>」×「いくつ<ruby>分<rt>ぶん</rt></ruby>」で <ruby>全体<rt>ぜんたい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が もとまります。"
},
{
"q": 44,
"unit": "e2_u05",
"topic": "九九の計算",
"level": 1,
"question": "3×9 の <ruby>計算<rt>けいさん</rt></ruby>を しましょう。<ruby>答<rt>こた</rt></ruby>えは いくつ ですか。",
"choices": [
"12",
"24",
"27",
"30"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 27 です。3×9 は 3 が 9 つ<ruby>分<rt>ぶん</rt></ruby> なので、3 を 9 <ruby>回<rt>かい</rt></ruby> たした<ruby>数<rt>かず</rt></ruby>です。3 の<ruby>段<rt>だん</rt></ruby>は 3、6、9、12、15、18、21、24、27 と 3 ずつ <ruby>増<rt>ふ</rt></ruby>えて いき、9 ばん<ruby>目<rt>め</rt></ruby>が 27 です。「さんくにじゅうしち」と となえます。3+9=12 と たし<ruby>算<rt>ざん</rt></ruby>に しないよう <ruby>注意<rt>ちゅうい</rt></ruby>します。ポイント: <ruby>段<rt>だん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>ずつ <ruby>増<rt>ふ</rt></ruby>える ことを つかうと <ruby>答<rt>こた</rt></ruby>えを たしかめられます。"
},
{
"q": 45,
"unit": "e2_u05",
"topic": "かけ算の文章題",
"level": 1,
"question": "1 <ruby>皿<rt>さら</rt></ruby>に からあげを 7<ruby>個<rt>こ</rt></ruby> ずつ もりつけます。3 <ruby>皿<rt>さら</rt></ruby><ruby>分<rt>ぶん</rt></ruby> つくると、からあげは <ruby>全部<rt>ぜんぶ</rt></ruby>で <ruby>何<rt>なん</rt></ruby><ruby>個<rt>こ</rt></ruby> いりますか。",
"choices": [
"10<ruby>個<rt>こ</rt></ruby>",
"24<ruby>個<rt>こ</rt></ruby>",
"28<ruby>個<rt>こ</rt></ruby>",
"21<ruby>個<rt>こ</rt></ruby>"
],
"answer": 4,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 21<ruby>個<rt>こ</rt></ruby> です。1<ruby>皿<rt>さら</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の 7<ruby>個<rt>こ</rt></ruby>が 3<ruby>皿<rt>さら</rt></ruby><ruby>分<rt>ぶん</rt></ruby> あるので、7×3=21 と<ruby>計算<rt>けいさん</rt></ruby>します。<ruby>九九<rt>くく</rt></ruby>では「しちさんにじゅういち」です。7+3=10 と たし<ruby>算<rt>ざん</rt></ruby>に したり、<ruby>皿<rt>さら</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を 4 と とりちがえて 28 に したり しやすいので、いくつ<ruby>分<rt>ぶん</rt></ruby>かを ていねいに <ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>ります。ポイント: まず 「1つ<ruby>分<rt>ぶん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>」を <ruby>見<rt>み</rt></ruby>つけます。"
},
{
"q": 46,
"unit": "e2_u05",
"topic": "かけ算の式",
"level": 1,
"question": "1 <ruby>箱<rt>はこ</rt></ruby>に 6<ruby>本<rt>ぽん</rt></ruby> <ruby>入<rt>はい</rt></ruby>った <ruby>飲<rt>の</rt></ruby>みものを 4 <ruby>箱<rt>はこ</rt></ruby> <ruby>買<rt>か</rt></ruby>いました。<ruby>本数<rt>ほんすう</rt></ruby>を もとめる <ruby>式<rt>しき</rt></ruby>と <ruby>答<rt>こた</rt></ruby>えは どれ ですか。",
"choices": [
"6+4=10",
"4×4=16",
"6×4=24",
"6×3=18"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 6×4=24 です。1<ruby>箱<rt>はこ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の <ruby>本数<rt>ほんすう</rt></ruby>が 6<ruby>本<rt>ぽん</rt></ruby>で、それが 4<ruby>箱<rt>はこ</rt></ruby><ruby>分<rt>ぶん</rt></ruby> あるので 6×4 と <ruby>式<rt>しき</rt></ruby>に します。<ruby>九九<rt>くく</rt></ruby>では「ろくしにじゅうし」なので 24<ruby>本<rt>ほん</rt></ruby>です。たし<ruby>算<rt>ざん</rt></ruby>に すると 10 に なり、<ruby>箱<rt>はこ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を 3 と まちがえると 18 に なって しまいます。ポイント: <ruby>式<rt>しき</rt></ruby>は 「1つ<ruby>分<rt>ぶん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>」×「いくつ<ruby>分<rt>ぶん</rt></ruby>」の <ruby>順<rt>じゅん</rt></ruby>に かきます。"
},
{
"q": 47,
"unit": "e2_u05",
"topic": "かけ算のきまり",
"level": 1,
"question": "2×8 と <ruby>答<rt>こた</rt></ruby>えが <ruby>同<rt>おな</rt></ruby>じに なる <ruby>式<rt>しき</rt></ruby>は どれ ですか。",
"choices": [
"8×2",
"2+8",
"8−2",
"2×9"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 8×2 です。2×8 は 16 で、8×2 も 16 に なります。かけ<ruby>算<rt>ざん</rt></ruby>は かけられる<ruby>数<rt>かず</rt></ruby>と かける<ruby>数<rt>かず</rt></ruby>を <ruby>入<rt>い</rt></ruby>れかえても <ruby>答<rt>こた</rt></ruby>えが かわりません。2+8=10、8−2=6、2×9=18 なので、どれも 16 には なりません。この きまりを つかうと、おぼえる <ruby>九九<rt>くく</rt></ruby>の <ruby>手間<rt>てま</rt></ruby>を へらせます。ポイント: かけ<ruby>算<rt>ざん</rt></ruby>は じゅんばんを <ruby>入<rt>い</rt></ruby>れかえても <ruby>答<rt>こた</rt></ruby>えは <ruby>同<rt>おな</rt></ruby>じです。"
},
{
"q": 48,
"unit": "e2_u05",
"topic": "かけ算の文章題",
"level": 2,
"question": "<ruby>毎日<rt>まいにち</rt></ruby> 5<ruby>分<rt>ふん</rt></ruby>ずつ ストレッチを します。8<ruby>日間<rt>ようかかん</rt></ruby> <ruby>続<rt>つづ</rt></ruby>けると、<ruby>合計<rt>ごうけい</rt></ruby>で <ruby>何<rt>なん</rt></ruby><ruby>分<rt>ぷん</rt></ruby>に なりますか。",
"choices": [
"35<ruby>分<rt>ふん</rt></ruby>",
"40<ruby>分<rt>ぷん</rt></ruby>",
"13<ruby>分<rt>ぷん</rt></ruby>",
"45<ruby>分<rt>ふん</rt></ruby>"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 40<ruby>分<rt>ぷん</rt></ruby> です。1<ruby>日<rt>にち</rt></ruby><ruby>分<rt>ぶん</rt></ruby>が 5<ruby>分<rt>ふん</rt></ruby>で、それが 8<ruby>日<rt>ようか</rt></ruby><ruby>分<rt>ぶん</rt></ruby> あるので 5×8=40 です。「ごはしじゅう」と となえます。<ruby>日数<rt>にっすう</rt></ruby>を 7 や 9 と <ruby>見<rt>み</rt></ruby>まちがえると 35 や 45 に なり、たし<ruby>算<rt>ざん</rt></ruby>に すると 13 に なって しまいます。<ruby>答<rt>こた</rt></ruby>えには <ruby>分<rt>ふん</rt></ruby>と いう <ruby>単位<rt>たんい</rt></ruby>を つける ことも わすれないように します。ポイント: <ruby>同<rt>おな</rt></ruby>じ <ruby>数<rt>かず</rt></ruby>が くりかえされる <ruby>場面<rt>ばめん</rt></ruby>は かけ<ruby>算<rt>ざん</rt></ruby>で まとめられます。"
},
{
"q": 49,
"unit": "e2_u05",
"topic": "2けたのかけ算",
"level": 2,
"question": "<ruby>長<rt>なが</rt></ruby>さ 12cm の テープを 3<ruby>本<rt>ぼん</rt></ruby> つくります。テープは <ruby>全部<rt>ぜんぶ</rt></ruby>で <ruby>何<rt>なん</rt></ruby>cm いりますか。",
"choices": [
"15cm",
"32cm",
"42cm",
"36cm"
],
"answer": 4,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 36cm です。12 を 10 と 2 に <ruby>分<rt>わ</rt></ruby>けて <ruby>考<rt>かんが</rt></ruby>えます。10 が 3 つ<ruby>分<rt>ぶん</rt></ruby>で 30、2 が 3 つ<ruby>分<rt>ぶん</rt></ruby>で 6 なので、あわせて 30+6=36 です。10 の<ruby>分<rt>ぶん</rt></ruby>だけ <ruby>計算<rt>けいさん</rt></ruby>して 2 の<ruby>分<rt>ぶん</rt></ruby>を わすれると 32、たし<ruby>算<rt>ざん</rt></ruby>に すると 15 に なって しまいます。ポイント: 2 けたの<ruby>数<rt>かず</rt></ruby>は 10 の まとまりと ばらに <ruby>分<rt>わ</rt></ruby>けると、<ruby>九九<rt>くく</rt></ruby>だけで <ruby>計算<rt>けいさん</rt></ruby>できます。"
},
{
"q": 50,
"unit": "e2_u05",
"topic": "かけ算と表",
"level": 2,
"question": "<ruby>下<rt>した</rt></ruby>の <ruby>表<rt>ひょう</rt></ruby>は、1<ruby>箱<rt>はこ</rt></ruby>に 7<ruby>個<rt>こ</rt></ruby>ずつ みかんを <ruby>入<rt>い</rt></ruby>れた ときの <ruby>箱<rt>はこ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>と みかんの<ruby>数<rt>かず</rt></ruby>を まとめた ものです。? に あてはまる <ruby>数<rt>かず</rt></ruby>は いくつ ですか。",
"choices": [
"24",
"27",
"28",
"35"
],
"answer": 3,
"figure": null,
"table": [
[
"<ruby>箱<rt>はこ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>(<ruby>箱<rt>はこ</rt></ruby>)",
"みかんの<ruby>数<rt>かず</rt></ruby>(<ruby>個<rt>こ</rt></ruby>)"
],
[
"1",
"7"
],
[
"2",
"14"
],
[
"3",
"21"
],
[
"4",
"?"
]
],
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 28 です。<ruby>表<rt>ひょう</rt></ruby>を <ruby>上<rt>うえ</rt></ruby>から <ruby>見<rt>み</rt></ruby>て いくと、<ruby>箱<rt>はこ</rt></ruby>が 1つ <ruby>増<rt>ふ</rt></ruby>える ごとに みかんは 7<ruby>個<rt>こ</rt></ruby>ずつ <ruby>増<rt>ふ</rt></ruby>えて います。21 に 7 を たすと 28 です。かけ<ruby>算<rt>ざん</rt></ruby>で <ruby>考<rt>かんが</rt></ruby>えると 7×4=28 に なります。<ruby>箱<rt>はこ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を 5 と まちがえると 35、21 に 3 を たすと 24 に なって しまいます。ポイント: <ruby>表<rt>ひょう</rt></ruby>は <ruby>増<rt>ふ</rt></ruby>え<ruby>方<rt>かた</rt></ruby>に <ruby>目<rt>め</rt></ruby>を つけると きまりが <ruby>見<rt>み</rt></ruby>つかります。"
},
{
"q": 51,
"unit": "e2_u05",
"topic": "かけ算の意味",
"level": 2,
"question": "5×3 の <ruby>式<rt>しき</rt></ruby>で <ruby>答<rt>こた</rt></ruby>えが もとめられる <ruby>場面<rt>ばめん</rt></ruby>は どれ ですか。",
"choices": [
"1 ふくろに 5<ruby>個<rt>こ</rt></ruby> <ruby>入<rt>はい</rt></ruby>った あめを 3 ふくろ <ruby>買<rt>か</rt></ruby>った ときの あめの <ruby>数<rt>かず</rt></ruby>",
"5<ruby>個<rt>こ</rt></ruby> <ruby>入<rt>はい</rt></ruby>りの あめと 3<ruby>個<rt>こ</rt></ruby> <ruby>入<rt>はい</rt></ruby>りの ガムを 1 ふくろずつ <ruby>買<rt>か</rt></ruby>った ときの <ruby>全部<rt>ぜんぶ</rt></ruby>の <ruby>数<rt>かず</rt></ruby>",
"<ruby>部屋<rt>へや</rt></ruby>に 5<ruby>人<rt>にん</rt></ruby> いた ところへ 3<ruby>人<rt>にん</rt></ruby> <ruby>来<rt>き</rt></ruby>た ときの <ruby>人数<rt>にんずう</rt></ruby>",
"5m の ひもから 3m <ruby>使<rt>つか</rt></ruby>った あとの のこりの <ruby>長<rt>なが</rt></ruby>さ"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 「1 ふくろに 5<ruby>個<rt>こ</rt></ruby> <ruby>入<rt>はい</rt></ruby>った あめを 3 ふくろ <ruby>買<rt>か</rt></ruby>った ときの あめの <ruby>数<rt>かず</rt></ruby>」 です。5<ruby>個<rt>こ</rt></ruby>の まとまりが 3 つ<ruby>分<rt>ぶん</rt></ruby> あるので 5×3=15 と もとめられます。あめと ガムを あわせる <ruby>場面<rt>ばめん</rt></ruby>や、<ruby>部屋<rt>へや</rt></ruby>に <ruby>人<rt>ひと</rt></ruby>が <ruby>来<rt>く</rt></ruby>る <ruby>場面<rt>ばめん</rt></ruby>は たし<ruby>算<rt>ざん</rt></ruby>、ひもの のこりは ひき<ruby>算<rt>ざん</rt></ruby>に なります。ポイント: <ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>の まとまりが いくつ あるかを さがすと、かけ<ruby>算<rt>ざん</rt></ruby>か どうかが わかります。"
},
{
"q": 52,
"unit": "e2_u05",
"topic": "かけ算の文章題",
"level": 2,
"question": "<ruby>本<rt>ほん</rt></ruby>を <ruby>毎日<rt>まいにち</rt></ruby> 9ページ ずつ <ruby>読<rt>よ</rt></ruby>みます。6<ruby>日間<rt>むいかかん</rt></ruby> <ruby>読<rt>よ</rt></ruby>むと、<ruby>全部<rt>ぜんぶ</rt></ruby>で <ruby>何<rt>なん</rt></ruby>ページ <ruby>読<rt>よ</rt></ruby>めますか。",
"choices": [
"45ページ",
"54ページ",
"63ページ",
"15ページ"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 54ページ です。1<ruby>日<rt>にち</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の 9ページが 6<ruby>日<rt>むいか</rt></ruby><ruby>分<rt>ぶん</rt></ruby> あるので 9×6=54 です。「くろくごじゅうし」と となえます。9 の<ruby>段<rt>だん</rt></ruby>は 9 ずつ <ruby>増<rt>ふ</rt></ruby>えるので、9×5=45 に 9 を たして たしかめる ことも できます。<ruby>日数<rt>にっすう</rt></ruby>を 5 や 7 と まちがえると 45 や 63 に なるので、いくつ<ruby>分<rt>ぶん</rt></ruby>かを <ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>ります。ポイント: <ruby>九九<rt>くく</rt></ruby>が あやふやな ときは、1つ <ruby>前<rt>まえ</rt></ruby>の<ruby>答<rt>こた</rt></ruby>えに <ruby>段<rt>だん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を たします。"
},
{
"q": 53,
"unit": "e2_u05",
"topic": "2だんかいの計算",
"level": 3,
"question": "1 パックに 8<ruby>個<rt>こ</rt></ruby> <ruby>入<rt>はい</rt></ruby>った たまごを 3 パック <ruby>買<rt>か</rt></ruby>いました。その うち 7<ruby>個<rt>こ</rt></ruby> <ruby>使<rt>つか</rt></ruby>いました。たまごは <ruby>何<rt>なん</rt></ruby><ruby>個<rt>こ</rt></ruby> のこって いますか。",
"choices": [
"24<ruby>個<rt>こ</rt></ruby>",
"31<ruby>個<rt>こ</rt></ruby>",
"17<ruby>個<rt>こ</rt></ruby>",
"25<ruby>個<rt>こ</rt></ruby>"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 17<ruby>個<rt>こ</rt></ruby> です。はじめに <ruby>買<rt>か</rt></ruby>った<ruby>数<rt>かず</rt></ruby>を もとめます。8<ruby>個<rt>こ</rt></ruby><ruby>入<rt>い</rt></ruby>りが 3 パック<ruby>分<rt>ぶん</rt></ruby> なので 8×3=24<ruby>個<rt>こ</rt></ruby> です。つぎに <ruby>使<rt>つか</rt></ruby>った 7<ruby>個<rt>こ</rt></ruby>を ひいて 24−7=17<ruby>個<rt>こ</rt></ruby> と なります。ひくのを わすれると 24、たして しまうと 31、パックの<ruby>数<rt>かず</rt></ruby>を 4 と <ruby>見<rt>み</rt></ruby>まちがえると 25 に なります。ポイント: <ruby>計算<rt>けいさん</rt></ruby>が 2つ ある ときは、<ruby>先<rt>さき</rt></ruby>に ぜんたいの<ruby>数<rt>かず</rt></ruby>を もとめます。"
},
{
"q": 54,
"unit": "e2_u05",
"topic": "かけ算のきまり",
"level": 3,
"question": "8×6=48 です。この ことを つかって 8×7 の <ruby>答<rt>こた</rt></ruby>えを もとめると、いくつに なりますか。",
"choices": [
"49",
"54",
"56",
"55"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 56 です。8×7 は 8 が 7 つ<ruby>分<rt>ぶん</rt></ruby>、8×6 は 8 が 6 つ<ruby>分<rt>ぶん</rt></ruby> なので、8 が 1 つ<ruby>分<rt>ぶん</rt></ruby> <ruby>多<rt>おお</rt></ruby>い ことに なります。だから 48 に 8 を たして 48+8=56 です。1 だけ たして 49 に したり、6 や 7 を たして 54 や 55 に したり しやすいので、<ruby>増<rt>ふ</rt></ruby>える<ruby>数<rt>かず</rt></ruby>は かけられる<ruby>数<rt>かず</rt></ruby>の 8 だと たしかめます。ポイント: かける<ruby>数<rt>かず</rt></ruby>が 1 <ruby>増<rt>ふ</rt></ruby>えると、<ruby>答<rt>こた</rt></ruby>えは かけられる<ruby>数<rt>かず</rt></ruby>だけ <ruby>増<rt>ふ</rt></ruby>えます。"
},
{
"q": 55,
"unit": "e2_u05",
"topic": "いくつ分をもとめる",
"level": 3,
"question": "あめを 1<ruby>人<rt>にん</rt></ruby>に 4<ruby>個<rt>こ</rt></ruby> ずつ <ruby>配<rt>くば</rt></ruby>った ところ、ちょうど 32<ruby>個<rt>こ</rt></ruby> <ruby>使<rt>つか</rt></ruby>いました。あめを <ruby>配<rt>くば</rt></ruby>ったのは <ruby>何<rt>なん</rt></ruby><ruby>人<rt>にん</rt></ruby> ですか。",
"choices": [
"8<ruby>人<rt>にん</rt></ruby>",
"7<ruby>人<rt>にん</rt></ruby>",
"6<ruby>人<rt>にん</rt></ruby>",
"28<ruby>人<rt>にん</rt></ruby>"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 8<ruby>人<rt>にん</rt></ruby> です。1<ruby>人<rt>にん</rt></ruby><ruby>分<rt>ぶん</rt></ruby>が 4<ruby>個<rt>こ</rt></ruby> なので、4×□=32 に なる □ を さがします。4 の<ruby>段<rt>だん</rt></ruby>を <ruby>順<rt>じゅん</rt></ruby>に となえると 4、8、12、16、20、24、28、32 と なり、32 は 8 ばん<ruby>目<rt>め</rt></ruby>です。だから 8<ruby>人<rt>にん</rt></ruby>に <ruby>配<rt>くば</rt></ruby>った ことに なります。32−4=28 と ひき<ruby>算<rt>ざん</rt></ruby>に したり、4×7=28 で とめて しまったり しやすいので、さいごまで となえます。ポイント: 「いくつ<ruby>分<rt>ぶん</rt></ruby>」を さがす ときは、<ruby>段<rt>だん</rt></ruby>を となえて <ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>を <ruby>見<rt>み</rt></ruby>つけます。"
},
{
"q": 56,
"unit": "e2_u06",
"topic": "四角形の性質",
"level": 1,
"question": "<ruby>四角形<rt>しかくけい</rt></ruby>の ちょう<ruby>点<rt>てん</rt></ruby>は いくつ ありますか。",
"choices": [
"3つ",
"4つ",
"5つ",
"6つ"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 4つ です。<ruby>四角形<rt>しかくけい</rt></ruby>は 4<ruby>本<rt>ほん</rt></ruby>の <ruby>直線<rt>ちょくせん</rt></ruby>で かこまれた <ruby>形<rt>かたち</rt></ruby>です。<ruby>直線<rt>ちょくせん</rt></ruby>と <ruby>直線<rt>ちょくせん</rt></ruby>の つなぎ<ruby>目<rt>め</rt></ruby>、つまり かどの <ruby>点<rt>てん</rt></ruby>を ちょう<ruby>点<rt>てん</rt></ruby>と いい、<ruby>四角形<rt>しかくけい</rt></ruby>には 4つ あります。へんの<ruby>数<rt>かず</rt></ruby>も 4<ruby>本<rt>ほん</rt></ruby>で <ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>です。<ruby>三角形<rt>さんかくけい</rt></ruby>は へんも ちょう<ruby>点<rt>てん</rt></ruby>も 3つ なので、<ruby>見<rt>み</rt></ruby>まちがえないように します。ポイント: へんの<ruby>数<rt>かず</rt></ruby>と ちょう<ruby>点<rt>てん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>は <ruby>同<rt>おな</rt></ruby>じに なります。"
},
{
"q": 57,
"unit": "e2_u06",
"topic": "図形の見分け",
"level": 1,
"question": "<ruby>下<rt>した</rt></ruby>の <ruby>図<rt>ず</rt></ruby>の ア〜エの うち、<ruby>四角形<rt>しかくけい</rt></ruby>は どれ ですか。",
"choices": [
"ア",
"イ",
"ウ",
"エ"
],
"answer": 3,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 190\"><polygon points=\"90,45 45,130 135,130\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><circle cx=\"230\" cy=\"88\" r=\"45\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><polygon points=\"330,50 415,45 420,130 325,125\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><polygon points=\"510,48 549,77 535,124 485,124 471,77\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><text x=\"90\" y=\"168\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">ア</text><text x=\"230\" y=\"168\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">イ</text><text x=\"370\" y=\"168\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">ウ</text><text x=\"510\" y=\"168\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">エ</text></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは ウ です。<ruby>四角形<rt>しかくけい</rt></ruby>は 4<ruby>本<rt>ほん</rt></ruby>の <ruby>直線<rt>ちょくせん</rt></ruby>で かこまれた <ruby>形<rt>かたち</rt></ruby>の ことです。ウは かどが 4つ、へんが 4<ruby>本<rt>ほん</rt></ruby> あるので <ruby>四角形<rt>しかくけい</rt></ruby>です。へんが 3<ruby>本<rt>ぼん</rt></ruby>の <ruby>形<rt>かたち</rt></ruby>は <ruby>三角形<rt>さんかくけい</rt></ruby>、まるい <ruby>線<rt>せん</rt></ruby>で かこまれた <ruby>形<rt>かたち</rt></ruby>は <ruby>三角形<rt>さんかくけい</rt></ruby>でも <ruby>四角形<rt>しかくけい</rt></ruby>でも ありません。へんが 5<ruby>本<rt>ほん</rt></ruby>の <ruby>形<rt>かたち</rt></ruby>も <ruby>四角形<rt>しかくけい</rt></ruby>では ありません。ポイント: かたむいて いても、へんの<ruby>数<rt>かず</rt></ruby>で <ruby>形<rt>かたち</rt></ruby>の <ruby>名前<rt>なまえ</rt></ruby>が きまります。"
},
{
"q": 58,
"unit": "e2_u06",
"topic": "正方形の性質",
"level": 1,
"question": "<ruby>正方形<rt>せいほうけい</rt></ruby>の 4<ruby>本<rt>ほん</rt></ruby>の へんに ついて、<ruby>正<rt>ただ</rt></ruby>しい ものは どれ ですか。",
"choices": [
"4<ruby>本<rt>ほん</rt></ruby>とも <ruby>長<rt>なが</rt></ruby>さが <ruby>同<rt>おな</rt></ruby>じ",
"<ruby>長<rt>なが</rt></ruby>い へんが 2<ruby>本<rt>ほん</rt></ruby>、<ruby>短<rt>みじか</rt></ruby>い へんが 2<ruby>本<rt>ほん</rt></ruby>",
"4<ruby>本<rt>ほん</rt></ruby>とも <ruby>長<rt>なが</rt></ruby>さが ばらばら",
"まるく カーブした へんが 2<ruby>本<rt>ほん</rt></ruby> ある"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 4<ruby>本<rt>ほん</rt></ruby>とも <ruby>長<rt>なが</rt></ruby>さが <ruby>同<rt>おな</rt></ruby>じ です。<ruby>正方形<rt>せいほうけい</rt></ruby>は かどが 4つ とも <ruby>直角<rt>ちょっかく</rt></ruby>で、へんの<ruby>長<rt>なが</rt></ruby>さが みんな <ruby>同<rt>おな</rt></ruby>じ <ruby>四角形<rt>しかくけい</rt></ruby>です。<ruby>長<rt>なが</rt></ruby>い へんと <ruby>短<rt>みじか</rt></ruby>い へんが 2<ruby>本<rt>ほん</rt></ruby>ずつ ある <ruby>形<rt>かたち</rt></ruby>は <ruby>長方形<rt>ちょうほうけい</rt></ruby>なので、この 2つを とりちがえない ように します。へんは かならず <ruby>直線<rt>ちょくせん</rt></ruby>なので、カーブした へんは ありません。ポイント: <ruby>正方形<rt>せいほうけい</rt></ruby>は 「<ruby>直角<rt>ちょっかく</rt></ruby>が 4つ」と 「へんが みんな <ruby>同<rt>おな</rt></ruby>じ <ruby>長<rt>なが</rt></ruby>さ」が そろった <ruby>形<rt>かたち</rt></ruby>です。"
},
{
"q": 59,
"unit": "e2_u06",
"topic": "直角三角形",
"level": 1,
"question": "かどの 1つが <ruby>直角<rt>ちょっかく</rt></ruby>に なって いる <ruby>三角形<rt>さんかくけい</rt></ruby>を <ruby>何<rt>なん</rt></ruby>と いいますか。",
"choices": [
"<ruby>正方形<rt>せいほうけい</rt></ruby>",
"<ruby>長方形<rt>ちょうほうけい</rt></ruby>",
"<ruby>四角形<rt>しかくけい</rt></ruby>",
"<ruby>直角三角形<rt>ちょっかくさんかくけい</rt></ruby>"
],
"answer": 4,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは <ruby>直角三角形<rt>ちょっかくさんかくけい</rt></ruby> です。<ruby>紙<rt>かみ</rt></ruby>の かどの ように、きちんと かくばった かどを <ruby>直角<rt>ちょっかく</rt></ruby>と いいます。<ruby>三角形<rt>さんかくけい</rt></ruby>の 3つの かどの うち 1つが <ruby>直角<rt>ちょっかく</rt></ruby>に なって いる とき、その <ruby>形<rt>かたち</rt></ruby>を <ruby>直角三角形<rt>ちょっかくさんかくけい</rt></ruby>と よびます。<ruby>正方形<rt>せいほうけい</rt></ruby>や <ruby>長方形<rt>ちょうほうけい</rt></ruby>は かどが 4つ ある <ruby>四角形<rt>しかくけい</rt></ruby>なので、<ruby>三角形<rt>さんかくけい</rt></ruby>の なかまでは ありません。ポイント: <ruby>三角形<rt>さんかくけい</rt></ruby>か <ruby>四角形<rt>しかくけい</rt></ruby>かは へんの<ruby>数<rt>かず</rt></ruby>、よび<ruby>名<rt>な</rt></ruby>は かどの <ruby>様子<rt>ようす</rt></ruby>で きまります。"
},
{
"q": 60,
"unit": "e2_u06",
"topic": "まわりの長さ",
"level": 2,
"question": "<ruby>下<rt>した</rt></ruby>の <ruby>図<rt>ず</rt></ruby>は、たてが 3cm、よこが 5cm の <ruby>長方形<rt>ちょうほうけい</rt></ruby>です。まわりの <ruby>長<rt>なが</rt></ruby>さは <ruby>何<rt>なん</rt></ruby>cm ですか。",
"choices": [
"8cm",
"11cm",
"15cm",
"16cm"
],
"answer": 4,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 230\"><rect x=\"170\" y=\"60\" width=\"240\" height=\"144\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><text x=\"290\" y=\"44\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">5cm</text><text x=\"152\" y=\"139\" font-size=\"20\" fill=\"#333\" text-anchor=\"end\">3cm</text></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 16cm です。<ruby>長方形<rt>ちょうほうけい</rt></ruby>は <ruby>向<rt>む</rt></ruby>かい<ruby>合<rt>あ</rt></ruby>う へんの <ruby>長<rt>なが</rt></ruby>さが <ruby>同<rt>おな</rt></ruby>じ なので、たては 3cm が 2<ruby>本<rt>ほん</rt></ruby>、よこは 5cm が 2<ruby>本<rt>ほん</rt></ruby> あります。3+5+3+5=16 で 16cm です。3+5=8 で とめて しまうと はんぶん<ruby>分<rt>ぶん</rt></ruby>しか もとめられず、3×5=15 と かけ<ruby>算<rt>ざん</rt></ruby>に しても まわりの <ruby>長<rt>なが</rt></ruby>さには なりません。ポイント: まわりの <ruby>長<rt>なが</rt></ruby>さは 4<ruby>本<rt>ほん</rt></ruby>の へん すべてを たします。"
},
{
"q": 61,
"unit": "e2_u06",
"topic": "四角形と三角形",
"level": 2,
"question": "<ruby>下<rt>した</rt></ruby>の <ruby>図<rt>ず</rt></ruby>の <ruby>四角形<rt>しかくけい</rt></ruby>に <ruby>直線<rt>ちょくせん</rt></ruby>を 1<ruby>本<rt>ぽん</rt></ruby> ひいて、<ruby>三角形<rt>さんかくけい</rt></ruby>を 2つ つくります。どの ちょう<ruby>点<rt>てん</rt></ruby>どうしを むすべば よいですか。",
"choices": [
"アと イ",
"アと ウ",
"イと ウ",
"ウと エ"
],
"answer": 2,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 240\"><polygon points=\"150,60 410,75 390,195 175,180\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><circle cx=\"150\" cy=\"60\" r=\"5\" fill=\"#333\"/><circle cx=\"410\" cy=\"75\" r=\"5\" fill=\"#333\"/><circle cx=\"390\" cy=\"195\" r=\"5\" fill=\"#333\"/><circle cx=\"175\" cy=\"180\" r=\"5\" fill=\"#333\"/><text x=\"134\" y=\"50\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">ア</text><text x=\"430\" y=\"66\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">イ</text><text x=\"410\" y=\"218\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">ウ</text><text x=\"156\" y=\"206\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">エ</text></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは アと ウ です。<ruby>向<rt>む</rt></ruby>かい<ruby>合<rt>あ</rt></ruby>う ちょう<ruby>点<rt>てん</rt></ruby>どうしを むすぶと、<ruby>四角形<rt>しかくけい</rt></ruby>が <ruby>三角形<rt>さんかくけい</rt></ruby>2つに <ruby>分<rt>わ</rt></ruby>かれます。アと ウは <ruby>向<rt>む</rt></ruby>かい<ruby>合<rt>あ</rt></ruby>って いるので、この 2つを むすびます。イと エを むすんでも <ruby>同<rt>おな</rt></ruby>じように <ruby>三角形<rt>さんかくけい</rt></ruby>が 2つ できます。となりどうしの ちょう<ruby>点<rt>てん</rt></ruby>を むすぶと、それは もとから ある へんを なぞる だけ なので <ruby>形<rt>かたち</rt></ruby>は <ruby>分<rt>わ</rt></ruby>かれません。ポイント: <ruby>四角形<rt>しかくけい</rt></ruby>は <ruby>向<rt>む</rt></ruby>かい<ruby>合<rt>あ</rt></ruby>う ちょう<ruby>点<rt>てん</rt></ruby>を むすぶと <ruby>三角形<rt>さんかくけい</rt></ruby>2つに なります。"
},
{
"q": 62,
"unit": "e2_u06",
"topic": "はこの形",
"level": 2,
"question": "<ruby>下<rt>した</rt></ruby>の <ruby>図<rt>ず</rt></ruby>の ような、さいころの <ruby>形<rt>かたち</rt></ruby>を した <ruby>箱<rt>はこ</rt></ruby>が あります。この <ruby>箱<rt>はこ</rt></ruby>の <ruby>面<rt>めん</rt></ruby>は <ruby>全部<rt>ぜんぶ</rt></ruby>で いくつ ありますか。",
"choices": [
"3つ",
"4つ",
"6つ",
"8つ"
],
"answer": 3,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 340\">\n  <rect x=\"0\" y=\"0\" width=\"560\" height=\"340\" fill=\"#ffffff\"/>\n\n  <!-- 上の面 -->\n  <polygon points=\"150,110 340,110 410,40 220,40\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <!-- 右の面 -->\n  <polygon points=\"340,110 410,40 410,230 340,300\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <!-- 手前の面（正方形 190×190） -->\n  <polygon points=\"150,110 340,110 340,300 150,300\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n\n  <!-- 見えない辺 -->\n  <line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"230\" stroke=\"#333\" stroke-width=\"2\" stroke-dasharray=\"8 7\"/>\n  <line x1=\"220\" y1=\"230\" x2=\"410\" y2=\"230\" stroke=\"#333\" stroke-width=\"2\" stroke-dasharray=\"8 7\"/>\n  <line x1=\"220\" y1=\"230\" x2=\"150\" y2=\"300\" stroke=\"#333\" stroke-width=\"2\" stroke-dasharray=\"8 7\"/>\n\n  <!-- 辺の長さが同じ印 -->\n  <line x1=\"240\" y1=\"292\" x2=\"240\" y2=\"308\" stroke=\"#f2a73b\" stroke-width=\"3\"/>\n  <line x1=\"332\" y1=\"196\" x2=\"348\" y2=\"196\" stroke=\"#f2a73b\" stroke-width=\"3\"/>\n  <line x1=\"240\" y1=\"102\" x2=\"240\" y2=\"118\" stroke=\"#f2a73b\" stroke-width=\"3\"/>\n  <line x1=\"142\" y1=\"196\" x2=\"158\" y2=\"196\" stroke=\"#f2a73b\" stroke-width=\"3\"/>\n\n  <text x=\"280\" y=\"332\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\" font-family=\"sans-serif\">さいころの 形を した 箱</text>\n</svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 6つ です。さいころの <ruby>形<rt>かたち</rt></ruby>を した <ruby>箱<rt>はこ</rt></ruby>には、<ruby>上<rt>うえ</rt></ruby>と <ruby>下<rt>した</rt></ruby>、<ruby>前<rt>まえ</rt></ruby>と <ruby>後<rt>うし</rt></ruby>ろ、<ruby>右<rt>みぎ</rt></ruby>と <ruby>左<rt>ひだり</rt></ruby>に <ruby>面<rt>めん</rt></ruby>が あるので、あわせて 6つ です。<ruby>図<rt>ず</rt></ruby>で <ruby>手前<rt>てまえ</rt></ruby>から <ruby>見<rt>み</rt></ruby>える <ruby>面<rt>めん</rt></ruby>は 3つ だけ ですが、<ruby>見<rt>み</rt></ruby>えない がわにも <ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>だけ <ruby>面<rt>めん</rt></ruby>が あります。ちょう<ruby>点<rt>てん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>の 8つと とりちがえない ように します。ポイント: <ruby>見<rt>み</rt></ruby>えない ところに ある <ruby>面<rt>めん</rt></ruby>も わすれずに かぞえます。"
},
{
"q": 63,
"unit": "e2_u06",
"topic": "方眼と長方形",
"level": 2,
"question": "<ruby>下<rt>した</rt></ruby>の <ruby>図<rt>ず</rt></ruby>では、<ruby>方眼<rt>ほうがん</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に 3つの <ruby>点<rt>てん</rt></ruby>が <ruby>太<rt>ふと</rt></ruby>い <ruby>線<rt>せん</rt></ruby>で むすばれて います。この 3つを ちょう<ruby>点<rt>てん</rt></ruby>と する <ruby>長方形<rt>ちょうほうけい</rt></ruby>を つくる とき、のこりの ちょう<ruby>点<rt>てん</rt></ruby>に なるのは ア〜エの どれ ですか。",
"choices": [
"ア",
"イ",
"ウ",
"エ"
],
"answer": 2,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 240\"><g stroke=\"#333\" stroke-width=\"2\" opacity=\"0.3\"><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"184\"/><line x1=\"148\" y1=\"40\" x2=\"148\" y2=\"184\"/><line x1=\"196\" y1=\"40\" x2=\"196\" y2=\"184\"/><line x1=\"244\" y1=\"40\" x2=\"244\" y2=\"184\"/><line x1=\"292\" y1=\"40\" x2=\"292\" y2=\"184\"/><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"184\"/><line x1=\"388\" y1=\"40\" x2=\"388\" y2=\"184\"/><line x1=\"436\" y1=\"40\" x2=\"436\" y2=\"184\"/><line x1=\"100\" y1=\"40\" x2=\"436\" y2=\"40\"/><line x1=\"100\" y1=\"88\" x2=\"436\" y2=\"88\"/><line x1=\"100\" y1=\"136\" x2=\"436\" y2=\"136\"/><line x1=\"100\" y1=\"184\" x2=\"436\" y2=\"184\"/></g><polyline points=\"292,88 148,88 148,184\" fill=\"none\" stroke=\"#00897b\" stroke-width=\"4\"/><circle cx=\"148\" cy=\"88\" r=\"7\" fill=\"#00897b\"/><circle cx=\"292\" cy=\"88\" r=\"7\" fill=\"#00897b\"/><circle cx=\"148\" cy=\"184\" r=\"7\" fill=\"#00897b\"/><circle cx=\"244\" cy=\"184\" r=\"6\" fill=\"#f2a73b\"/><circle cx=\"292\" cy=\"184\" r=\"6\" fill=\"#f2a73b\"/><circle cx=\"340\" cy=\"184\" r=\"6\" fill=\"#f2a73b\"/><circle cx=\"292\" cy=\"136\" r=\"6\" fill=\"#f2a73b\"/><text x=\"244\" y=\"214\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">ア</text><text x=\"292\" y=\"214\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">イ</text><text x=\"340\" y=\"214\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">ウ</text><text x=\"320\" y=\"130\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">エ</text></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは イ です。<ruby>長方形<rt>ちょうほうけい</rt></ruby>は かどが 4つ とも <ruby>直角<rt>ちょっかく</rt></ruby>で、<ruby>向<rt>む</rt></ruby>かい<ruby>合<rt>あ</rt></ruby>う へんの <ruby>長<rt>なが</rt></ruby>さが <ruby>同<rt>おな</rt></ruby>じに なる <ruby>四角形<rt>しかくけい</rt></ruby>です。<ruby>図<rt>ず</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>の へんは よこに 3 ます<ruby>分<rt>ぶん</rt></ruby>、<ruby>左<rt>ひだり</rt></ruby>の へんは たてに 2 ます<ruby>分<rt>ぶん</rt></ruby> あるので、のこりの ちょう<ruby>点<rt>てん</rt></ruby>も <ruby>同<rt>おな</rt></ruby>じ ます<ruby>数<rt>かず</rt></ruby>だけ すすんだ ところに あります。1 ます <ruby>多<rt>おお</rt></ruby>かったり <ruby>少<rt>すく</rt></ruby>なかったり すると、<ruby>向<rt>む</rt></ruby>かい<ruby>合<rt>あ</rt></ruby>う へんの <ruby>長<rt>なが</rt></ruby>さが そろいません。ポイント: <ruby>方眼<rt>ほうがん</rt></ruby>の ます<ruby>数<rt>かず</rt></ruby>を かぞえると <ruby>長<rt>なが</rt></ruby>さが そろえられます。"
},
{
"q": 64,
"unit": "e2_u06",
"topic": "正方形の性質",
"level": 3,
"question": "まわりの <ruby>長<rt>なが</rt></ruby>さが 20cm の <ruby>正方形<rt>せいほうけい</rt></ruby>が あります。1<ruby>本<rt>ぽん</rt></ruby>の へんの <ruby>長<rt>なが</rt></ruby>さは <ruby>何<rt>なん</rt></ruby>cm ですか。",
"choices": [
"5cm",
"4cm",
"10cm",
"16cm"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 5cm です。<ruby>正方形<rt>せいほうけい</rt></ruby>は 4<ruby>本<rt>ほん</rt></ruby>の へんの <ruby>長<rt>なが</rt></ruby>さが すべて <ruby>同<rt>おな</rt></ruby>じ なので、<ruby>同<rt>おな</rt></ruby>じ <ruby>長<rt>なが</rt></ruby>さが 4つ<ruby>分<rt>ぶん</rt></ruby> あつまって 20cm に なって います。□×4=20 に なる □ を さがすと、4 の<ruby>段<rt>だん</rt></ruby>の <ruby>九九<rt>くく</rt></ruby>で 4×5=20 なので 5cm です。20 を 2つに <ruby>分<rt>わ</rt></ruby>けて 10cm と したり、へんを 5<ruby>本<rt>ほん</rt></ruby>と かんちがいして 4cm と したり しやすいので<ruby>気<rt>き</rt></ruby>を つけます。ポイント: <ruby>正方形<rt>せいほうけい</rt></ruby>の まわりの <ruby>長<rt>なが</rt></ruby>さは、1<ruby>本<rt>ぽん</rt></ruby>の へんの 4つ<ruby>分<rt>ぶん</rt></ruby> です。"
},
{
"q": 65,
"unit": "e2_u06",
"topic": "正方形の分け方",
"level": 3,
"question": "<ruby>下<rt>した</rt></ruby>の <ruby>図<rt>ず</rt></ruby>の ように、1つの へんが 6cm の <ruby>大<rt>おお</rt></ruby>きな <ruby>正方形<rt>せいほうけい</rt></ruby>を、1つの へんが 2cm の <ruby>小<rt>ちい</rt></ruby>さな <ruby>正方形<rt>せいほうけい</rt></ruby>に すきまなく <ruby>分<rt>わ</rt></ruby>けます。<ruby>小<rt>ちい</rt></ruby>さな <ruby>正方形<rt>せいほうけい</rt></ruby>は <ruby>何<rt>なん</rt></ruby><ruby>個<rt>こ</rt></ruby> できますか。",
"choices": [
"3<ruby>個<rt>こ</rt></ruby>",
"6<ruby>個<rt>こ</rt></ruby>",
"9<ruby>個<rt>こ</rt></ruby>",
"12<ruby>個<rt>こ</rt></ruby>"
],
"answer": 3,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 250\"><text x=\"150\" y=\"30\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">6cm</text><rect x=\"60\" y=\"42\" width=\"180\" height=\"180\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><text x=\"410\" y=\"92\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">2cm</text><rect x=\"380\" y=\"104\" width=\"60\" height=\"60\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"2\"/><text x=\"150\" y=\"244\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">おおきい せいほうけい</text><text x=\"410\" y=\"244\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\">ちいさい せいほうけい</text></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 9<ruby>個<rt>こ</rt></ruby> です。2cm が 3つ<ruby>分<rt>ぶん</rt></ruby> あつまると 6cm に なるので、<ruby>大<rt>おお</rt></ruby>きな <ruby>正方形<rt>せいほうけい</rt></ruby>の たてにも よこにも <ruby>小<rt>ちい</rt></ruby>さな <ruby>正方形<rt>せいほうけい</rt></ruby>が 3<ruby>個<rt>こ</rt></ruby>ずつ ならびます。3<ruby>個<rt>こ</rt></ruby>の れつが 3 だん<ruby>分<rt>ぶん</rt></ruby> あるので 3×3=9<ruby>個<rt>こ</rt></ruby> です。たてか よこの どちらか だけを かぞえて 3<ruby>個<rt>こ</rt></ruby>と したり、たてと よこを たして 6<ruby>個<rt>こ</rt></ruby>と したり しやすいので<ruby>気<rt>き</rt></ruby>を つけます。ポイント: たての<ruby>数<rt>かず</rt></ruby>と よこの<ruby>数<rt>かず</rt></ruby>を かけると <ruby>全体<rt>ぜんたい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が もとまります。"
},
{
"q": 66,
"unit": "e2_u07",
"topic": "長さの測定",
"level": 1,
"question": "<ruby>図<rt>ず</rt></ruby>のように、ものさしでテープの<ruby>長<rt>なが</rt></ruby>さを<ruby>測<rt>はか</rt></ruby>りました。このテープの<ruby>長<rt>なが</rt></ruby>さはどれですか。",
"choices": [
"6cm5mm",
"5cm6mm",
"6cm7mm",
"7cm5mm"
],
"answer": 1,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 190\"><text x=\"50\" y=\"30\" font-size=\"18\" fill=\"#333\">テープ</text><rect x=\"50\" y=\"45\" width=\"390\" height=\"32\" fill=\"#e0f2f1\" stroke=\"#00897b\" stroke-width=\"2\"/><line x1=\"440\" y1=\"77\" x2=\"440\" y2=\"95\" stroke=\"#f2a73b\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><rect x=\"50\" y=\"95\" width=\"480\" height=\"58\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"50\" y1=\"95\" x2=\"50\" y2=\"121\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"110\" y1=\"95\" x2=\"110\" y2=\"121\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"170\" y1=\"95\" x2=\"170\" y2=\"121\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"230\" y1=\"95\" x2=\"230\" y2=\"121\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"290\" y1=\"95\" x2=\"290\" y2=\"121\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"350\" y1=\"95\" x2=\"350\" y2=\"121\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"410\" y1=\"95\" x2=\"410\" y2=\"121\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"470\" y1=\"95\" x2=\"470\" y2=\"121\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"530\" y1=\"95\" x2=\"530\" y2=\"121\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"80\" y1=\"95\" x2=\"80\" y2=\"111\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"140\" y1=\"95\" x2=\"140\" y2=\"111\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"200\" y1=\"95\" x2=\"200\" y2=\"111\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"260\" y1=\"95\" x2=\"260\" y2=\"111\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"320\" y1=\"95\" x2=\"320\" y2=\"111\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"380\" y1=\"95\" x2=\"380\" y2=\"111\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"440\" y1=\"95\" x2=\"440\" y2=\"111\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"500\" y1=\"95\" x2=\"500\" y2=\"111\" stroke=\"#333\" stroke-width=\"2\"/><text x=\"50\" y=\"145\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">0</text><text x=\"110\" y=\"145\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">1</text><text x=\"170\" y=\"145\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">2</text><text x=\"230\" y=\"145\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">3</text><text x=\"290\" y=\"145\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">4</text><text x=\"350\" y=\"145\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">5</text><text x=\"410\" y=\"145\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">6</text><text x=\"470\" y=\"145\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">7</text><text x=\"530\" y=\"145\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">8</text><text x=\"300\" y=\"175\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">cm</text></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 6cm5mm です。テープの<ruby>左<rt>ひだり</rt></ruby>はしがものさしの 0 に<ruby>合<rt>あ</rt></ruby>っているので、<ruby>右<rt>みぎ</rt></ruby>はしの<ruby>目<rt>め</rt></ruby>もりをそのまま<ruby>読<rt>よ</rt></ruby>みます。<ruby>右<rt>みぎ</rt></ruby>はしは 6 と 7 のちょうど<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>にあり、6cm から<ruby>半分<rt>はんぶん</rt></ruby>だけ<ruby>進<rt>すす</rt></ruby>んだところです。1cm は 10mm なので、その<ruby>半分<rt>はんぶん</rt></ruby>は 5mm となり 6cm5mm です。cm と mm を<ruby>入<rt>い</rt></ruby>れかえて<ruby>読<rt>よ</rt></ruby>むと 5cm6mm のような<ruby>答<rt>こた</rt></ruby>えになってしまいます。ポイント: <ruby>測<rt>はか</rt></ruby>りはじめを 0 に<ruby>合<rt>あ</rt></ruby>わせ、<ruby>目<rt>め</rt></ruby>もり1つ<ruby>分<rt>ぶん</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさを<ruby>確<rt>たし</rt></ruby>かめてから<ruby>読<rt>よ</rt></ruby>みます。"
},
{
"q": 67,
"unit": "e2_u07",
"topic": "長さの単位",
"level": 1,
"question": "<ruby>棚<rt>たな</rt></ruby>の<ruby>幅<rt>はば</rt></ruby>をはかったら、ちょうど 2m でした。この<ruby>幅<rt>はば</rt></ruby>は<ruby>何<rt>なん</rt></ruby> cm ですか。",
"choices": [
"200cm",
"20cm",
"2000cm",
"120cm"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 200cm です。<ruby>長<rt>なが</rt></ruby>さの<ruby>単位<rt>たんい</rt></ruby>は 1m = 100cm と<ruby>決<rt>き</rt></ruby>まっています。2m は 100cm が2つ<ruby>分<rt>ぶん</rt></ruby>なので、100 + 100 = 200 となり 200cm です。1m を 10cm と<ruby>勘違<rt>かんちが</rt></ruby>いすると 20cm、1m を 1000cm と<ruby>数<rt>かぞ</rt></ruby>えすぎると 2000cm になってしまいます。<ruby>両手<rt>りょうて</rt></ruby>を<ruby>広<rt>ひろ</rt></ruby>げた<ruby>長<rt>なが</rt></ruby>さがだいたい 1m だと<ruby>覚<rt>おぼ</rt></ruby>えておくと、<ruby>大<rt>おお</rt></ruby>きさを<ruby>想像<rt>そうぞう</rt></ruby>しやすくなります。ポイント: m を cm に<ruby>直<rt>なお</rt></ruby>すときは、100cm のまとまりが<ruby>何<rt>なん</rt></ruby>こ<ruby>分<rt>ぶん</rt></ruby>かで<ruby>考<rt>かんが</rt></ruby>えます。"
},
{
"q": 68,
"unit": "e2_u07",
"topic": "長さの計算",
"level": 1,
"question": "<ruby>荷造<rt>にづく</rt></ruby>りで、30cm のリボンと 45cm のリボンをつなぎました。<ruby>結<rt>むす</rt></ruby>び<ruby>目<rt>め</rt></ruby>の<ruby>分<rt>ぶん</rt></ruby>は<ruby>考<rt>かんが</rt></ruby>えないものとすると、つないだリボンの<ruby>長<rt>なが</rt></ruby>さは<ruby>何<rt>なん</rt></ruby> cm ですか。",
"choices": [
"75cm",
"15cm",
"65cm",
"85cm"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 75cm です。2<ruby>本<rt>ほん</rt></ruby>を1<ruby>本<rt>ぽん</rt></ruby>につなぐので、<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>で<ruby>求<rt>もと</rt></ruby>めます。<ruby>単位<rt>たんい</rt></ruby>はどちらも cm でそろっているので、30 + 45 = 75 となり 75cm です。どちらが<ruby>長<rt>なが</rt></ruby>いかを<ruby>聞<rt>き</rt></ruby>かれていると<ruby>思<rt>おも</rt></ruby>って 45 − 30 = 15 と<ruby>引<rt>ひ</rt></ruby>いてしまうことがあります。<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>を<ruby>間違<rt>まちが</rt></ruby>えて 65cm や 85cm としないよう、<ruby>位<rt>くらい</rt></ruby>をそろえて<ruby>計算<rt>けいさん</rt></ruby>します。ポイント: 「つなぐ」「あわせる」は<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>、「<ruby>残<rt>のこ</rt></ruby>り」「ちがい」は<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>です。"
},
{
"q": 69,
"unit": "e2_u07",
"topic": "長さの見積り",
"level": 1,
"question": "<ruby>家<rt>いえ</rt></ruby>の<ruby>玄関<rt>げんかん</rt></ruby>のドアの<ruby>高<rt>たか</rt></ruby>さとして、いちばん<ruby>近<rt>ちか</rt></ruby>いものはどれですか。",
"choices": [
"2m",
"2mm",
"20cm",
"20m"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 2m です。ドアは<ruby>大人<rt>おとな</rt></ruby>が<ruby>立<rt>た</rt></ruby>ったまま<ruby>通<rt>とお</rt></ruby>れる<ruby>高<rt>たか</rt></ruby>さなので、<ruby>身長<rt>しんちょう</rt></ruby>より<ruby>少<rt>すこ</rt></ruby>し<ruby>高<rt>たか</rt></ruby>いくらいだと<ruby>考<rt>かんが</rt></ruby>えます。2mm はつめの<ruby>厚<rt>あつ</rt></ruby>さくらい、20cm は<ruby>手<rt>て</rt></ruby>のひらくらいの<ruby>長<rt>なが</rt></ruby>さです。20m は<ruby>建物<rt>たてもの</rt></ruby>の<ruby>何<rt>なん</rt></ruby>かい<ruby>分<rt>ぶん</rt></ruby>もの<ruby>高<rt>たか</rt></ruby>さになり、どれもドアには<ruby>合<rt>あ</rt></ruby>いません。<ruby>数<rt>かず</rt></ruby>だけを<ruby>見<rt>み</rt></ruby>て<ruby>選<rt>えら</rt></ruby>ばず、<ruby>単位<rt>たんい</rt></ruby>まで<ruby>見<rt>み</rt></ruby>て<ruby>大<rt>おお</rt></ruby>きさを<ruby>想像<rt>そうぞう</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>です。ポイント: <ruby>自分<rt>じぶん</rt></ruby>の<ruby>身長<rt>しんちょう</rt></ruby>を<ruby>目安<rt>めやす</rt></ruby>にすると<ruby>見当<rt>けんとう</rt></ruby>をつけられます。"
},
{
"q": 70,
"unit": "e2_u07",
"topic": "長さのひき算",
"level": 2,
"question": "<ruby>荷物<rt>にもつ</rt></ruby>をしばるために 1m50cm のひもを<ruby>用意<rt>ようい</rt></ruby>し、そのうち 80cm を<ruby>使<rt>つか</rt></ruby>いました。<ruby>残<rt>のこ</rt></ruby>りのひもは<ruby>何<rt>なん</rt></ruby> cm ですか。",
"choices": [
"70cm",
"30cm",
"130cm",
"230cm"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 70cm です。まず<ruby>単位<rt>たんい</rt></ruby>をそろえます。1m は 100cm なので、1m50cm は 100cm と 50cm を<ruby>合<rt>あ</rt></ruby>わせた 150cm です。<ruby>使<rt>つか</rt></ruby>った<ruby>分<rt>ぶん</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>くので 150 − 80 = 70 となり、<ruby>残<rt>のこ</rt></ruby>りは 70cm です。50 から 80 は<ruby>引<rt>ひ</rt></ruby>けないからと<ruby>上<rt>うえ</rt></ruby>と<ruby>下<rt>した</rt></ruby>を<ruby>逆<rt>ぎゃく</rt></ruby>にして 30cm としたり、<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>のところを<ruby>足<rt>た</rt></ruby>して 230cm としたりする<ruby>間違<rt>まちが</rt></ruby>いが<ruby>多<rt>おお</rt></ruby>いところです。ポイント: m と cm がまざったら、まず cm にそろえてから<ruby>計算<rt>けいさん</rt></ruby>します。"
},
{
"q": 71,
"unit": "e2_u07",
"topic": "単位の換算",
"level": 2,
"question": "<ruby>図面<rt>ずめん</rt></ruby>に<ruby>部品<rt>ぶひん</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さが 128mm と<ruby>書<rt>か</rt></ruby>かれています。この<ruby>長<rt>なが</rt></ruby>さは<ruby>何<rt>なん</rt></ruby> cm <ruby>何<rt>なん</rt></ruby> mm ですか。",
"choices": [
"12cm8mm",
"1cm28mm",
"12cm80mm",
"21cm8mm"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 12cm8mm です。10mm で 1cm になるので、128mm の<ruby>中<rt>なか</rt></ruby>に 10mm のまとまりがいくつあるかを<ruby>考<rt>かんが</rt></ruby>えます。128 は 10 のまとまりが 12 こと、あまりが 8 なので、まとまりの<ruby>数<rt>かず</rt></ruby>が cm、あまりが mm になり 12cm8mm と<ruby>表<rt>あらわ</rt></ruby>せます。mm の<ruby>部分<rt>ぶぶん</rt></ruby>は 10 より<ruby>小<rt>ちい</rt></ruby>さい<ruby>数<rt>かず</rt></ruby>になるので、1cm28mm や 12cm80mm という<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>はしません。ポイント: mm を cm に<ruby>直<rt>なお</rt></ruby>すときは、10 ずつのまとまりで<ruby>分<rt>わ</rt></ruby>けます。"
},
{
"q": 72,
"unit": "e2_u07",
"topic": "長さの比較",
"level": 2,
"question": "<ruby>棚<rt>たな</rt></ruby>に<ruby>入<rt>い</rt></ruby>れたい<ruby>箱<rt>はこ</rt></ruby>アの<ruby>横<rt>よこ</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さは 1m5cm、<ruby>箱<rt>はこ</rt></ruby>イの<ruby>横<rt>よこ</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さは 98cm です。どちらが<ruby>何<rt>なん</rt></ruby> cm <ruby>長<rt>なが</rt></ruby>いですか。",
"choices": [
"アが7cm<ruby>長<rt>なが</rt></ruby>い",
"イが7cm<ruby>長<rt>なが</rt></ruby>い",
"アが13cm<ruby>長<rt>なが</rt></ruby>い",
"アが3cm<ruby>長<rt>なが</rt></ruby>い"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは アが7cm<ruby>長<rt>なが</rt></ruby>い です。<ruby>単位<rt>たんい</rt></ruby>をそろえて<ruby>比<rt>くら</rt></ruby>べます。1m は 100cm なので、1m5cm は 100cm と 5cm で 105cm です。105 と 98 を<ruby>比<rt>くら</rt></ruby>べるとアの<ruby>方<rt>ほう</rt></ruby>が<ruby>長<rt>なが</rt></ruby>く、ちがいは 105 − 98 = 7 で 7cm です。1m5cm を 15cm と<ruby>読<rt>よ</rt></ruby>み<ruby>間違<rt>まちが</rt></ruby>えるとイの<ruby>方<rt>ほう</rt></ruby>が<ruby>長<rt>なが</rt></ruby>いという<ruby>答<rt>こた</rt></ruby>えになり、くり<ruby>下<rt>さ</rt></ruby>がりを<ruby>間違<rt>まちが</rt></ruby>えると 13cm になってしまいます。ポイント: <ruby>単位<rt>たんい</rt></ruby>のちがう<ruby>長<rt>なが</rt></ruby>さは、<ruby>同<rt>おな</rt></ruby>じ<ruby>単位<rt>たんい</rt></ruby>にそろえてから<ruby>比<rt>くら</rt></ruby>べます。"
},
{
"q": 73,
"unit": "e2_u07",
"topic": "数直線",
"level": 2,
"question": "<ruby>図<rt>ず</rt></ruby>の<ruby>数直線<rt>すうちょくせん</rt></ruby>は、0m から 1m までを<ruby>同<rt>おな</rt></ruby>じ<ruby>長<rt>なが</rt></ruby>さで 10 に<ruby>分<rt>わ</rt></ruby>けたものです。ア が<ruby>指<rt>さ</rt></ruby>している<ruby>長<rt>なが</rt></ruby>さは<ruby>何<rt>なん</rt></ruby> cm ですか。",
"choices": [
"70cm",
"7cm",
"60cm",
"7mm"
],
"answer": 1,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 170\"><line x1=\"40\" y1=\"100\" x2=\"520\" y2=\"100\" stroke=\"#333\" stroke-width=\"3\"/><line x1=\"40\" y1=\"88\" x2=\"40\" y2=\"112\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"88\" y1=\"88\" x2=\"88\" y2=\"112\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"136\" y1=\"88\" x2=\"136\" y2=\"112\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"184\" y1=\"88\" x2=\"184\" y2=\"112\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"232\" y1=\"88\" x2=\"232\" y2=\"112\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"280\" y1=\"88\" x2=\"280\" y2=\"112\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"328\" y1=\"88\" x2=\"328\" y2=\"112\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"376\" y1=\"88\" x2=\"376\" y2=\"112\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"424\" y1=\"88\" x2=\"424\" y2=\"112\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"472\" y1=\"88\" x2=\"472\" y2=\"112\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"520\" y1=\"88\" x2=\"520\" y2=\"112\" stroke=\"#333\" stroke-width=\"2\"/><text x=\"40\" y=\"140\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">0m</text><text x=\"520\" y=\"140\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">1m</text><line x1=\"376\" y1=\"42\" x2=\"376\" y2=\"68\" stroke=\"#f2a73b\" stroke-width=\"3\"/><polygon points=\"376,90 367,68 385,68\" fill=\"#f2a73b\"/><text x=\"376\" y=\"32\" font-size=\"20\" fill=\"#f2a73b\" text-anchor=\"middle\">ア</text></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 70cm です。1m は 100cm で、それを<ruby>同<rt>おな</rt></ruby>じ<ruby>長<rt>なが</rt></ruby>さに 10 に<ruby>分<rt>わ</rt></ruby>けているので、<ruby>目<rt>め</rt></ruby>もり1つ<ruby>分<rt>ぶん</rt></ruby>は 10cm です。ア は 0m から<ruby>数<rt>かぞ</rt></ruby>えて7つ<ruby>目<rt>め</rt></ruby>の<ruby>目<rt>め</rt></ruby>もりなので、10cm が7つ<ruby>分<rt>ぶん</rt></ruby>で 70cm になります。<ruby>目<rt>め</rt></ruby>もりの<ruby>数<rt>かず</rt></ruby>をそのまま<ruby>読<rt>よ</rt></ruby>んで 7cm としたり、<ruby>単位<rt>たんい</rt></ruby>を mm と<ruby>取<rt>と</rt></ruby>りちがえたりしやすいところです。ポイント: <ruby>数直線<rt>すうちょくせん</rt></ruby>は、まず<ruby>目<rt>め</rt></ruby>もり1つ<ruby>分<rt>ぶん</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさを<ruby>確<rt>たし</rt></ruby>かめてから<ruby>読<rt>よ</rt></ruby>みます。"
},
{
"q": 74,
"unit": "e2_u07",
"topic": "単位の比較",
"level": 3,
"question": "<ruby>表<rt>ひょう</rt></ruby>は、<ruby>手元<rt>てもと</rt></ruby>にある3<ruby>本<rt>ぼん</rt></ruby>のひもの<ruby>長<rt>なが</rt></ruby>さです。<ruby>長<rt>なが</rt></ruby>い<ruby>順<rt>じゅん</rt></ruby>に<ruby>並<rt>なら</rt></ruby>べたものはどれですか。",
"choices": [
"イ、ア、ウ",
"ア、イ、ウ",
"ウ、ア、イ",
"イ、ウ、ア"
],
"answer": 1,
"figure": null,
"table": [
[
"ひも",
"<ruby>長<rt>なが</rt></ruby>さ"
],
[
"ア",
"8cm5mm"
],
[
"イ",
"90mm"
],
[
"ウ",
"8cm"
]
],
"explanation": "<ruby>答<rt>こた</rt></ruby>えは イ、ア、ウ です。<ruby>単位<rt>たんい</rt></ruby>を mm にそろえて<ruby>比<rt>くら</rt></ruby>べます。1cm は 10mm なので、ア の 8cm5mm は 80mm と 5mm で 85mm、ウ の 8cm は 80mm です。イ は 90mm のままです。85、90、80 を<ruby>大<rt>おお</rt></ruby>きい<ruby>順<rt>じゅん</rt></ruby>に<ruby>並<rt>なら</rt></ruby>べると 90、85、80 なので、イ、ア、ウ の<ruby>順<rt>じゅん</rt></ruby>になります。<ruby>数<rt>かず</rt></ruby>の<ruby>見<rt>み</rt></ruby>た<ruby>目<rt>め</rt></ruby>だけで<ruby>比<rt>くら</rt></ruby>べると 90 より 8cm5mm の<ruby>方<rt>ほう</rt></ruby>が<ruby>小<rt>ちい</rt></ruby>さいと<ruby>気<rt>き</rt></ruby>づけません。ポイント: <ruby>単位<rt>たんい</rt></ruby>がまざったときは、いちばん<ruby>小<rt>ちい</rt></ruby>さい<ruby>単位<rt>たんい</rt></ruby>にそろえます。"
},
{
"q": 75,
"unit": "e2_u07",
"topic": "長さの合計",
"level": 3,
"question": "<ruby>高<rt>たか</rt></ruby>さ 70cm の<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に、<ruby>高<rt>たか</rt></ruby>さ 25cm の<ruby>本立<rt>ほんた</rt></ruby>てを<ruby>置<rt>お</rt></ruby>き、その<ruby>上<rt>うえ</rt></ruby>に<ruby>高<rt>たか</rt></ruby>さ 8cm の<ruby>置<rt>お</rt></ruby>き<ruby>時計<rt>どけい</rt></ruby>をのせました。<ruby>床<rt>ゆか</rt></ruby>から<ruby>置<rt>お</rt></ruby>き<ruby>時計<rt>どけい</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>までの<ruby>高<rt>たか</rt></ruby>さは<ruby>何<rt>なん</rt></ruby> m <ruby>何<rt>なん</rt></ruby> cm ですか。",
"choices": [
"1m3cm",
"1m30cm",
"10m3cm",
"1m13cm"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 1m3cm です。<ruby>重<rt>かさ</rt></ruby>なっている<ruby>高<rt>たか</rt></ruby>さを<ruby>順<rt>じゅん</rt></ruby>に<ruby>足<rt>た</rt></ruby>していきます。70 + 25 = 95、95 + 8 = 103 なので、ぜんぶで 103cm です。100cm が 1m なので、103cm は 100cm と 3cm に<ruby>分<rt>わ</rt></ruby>けられ 1m3cm と<ruby>表<rt>あらわ</rt></ruby>せます。あまりの 3 を 30 と<ruby>読<rt>よ</rt></ruby>んで 1m30cm としたり、100cm を 10m と<ruby>勘違<rt>かんちが</rt></ruby>いしたりしやすいところです。ポイント: cm を m と cm に<ruby>直<rt>なお</rt></ruby>すときは、100 のまとまりが m、あまりが cm になります。"
},
{
"q": 76,
"unit": "e2_u08",
"topic": "かさの単位",
"level": 1,
"question": "<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>のパック1<ruby>本<rt>ぽん</rt></ruby>には、<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>が 1L <ruby>入<rt>はい</rt></ruby>っています。このかさは<ruby>何<rt>なん</rt></ruby> dL ですか。",
"choices": [
"10dL",
"5dL",
"100dL",
"1000dL"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 10dL です。かさの<ruby>単位<rt>たんい</rt></ruby>は 1L = 10dL と<ruby>決<rt>き</rt></ruby>まっています。1dL は<ruby>小<rt>ちい</rt></ruby>さめのコップ1ぱいくらいの かさ で、それが 10ぱい<ruby>分<rt>ぶん</rt></ruby>で 1L になります。1L = 1000mL とまざってしまい 1000dL としたり、100dL としたりしやすいので、<ruby>三<rt>みっ</rt></ruby>つの<ruby>単位<rt>たんい</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>をまとめて<ruby>覚<rt>おぼ</rt></ruby>えておきましょう。ポイント: 1L = 10dL = 1000mL、そして 1dL = 100mL です。"
},
{
"q": 77,
"unit": "e2_u08",
"topic": "かさの換算",
"level": 1,
"question": "500mL のペットボトル2<ruby>本<rt>ほん</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>水<rt>みず</rt></ruby>を、<ruby>空<rt>から</rt></ruby>のなべにぜんぶ<ruby>入<rt>い</rt></ruby>れました。なべに<ruby>入<rt>はい</rt></ruby>った<ruby>水<rt>みず</rt></ruby>は<ruby>何<rt>なん</rt></ruby> L ですか。",
"choices": [
"1L",
"2L",
"5L",
"10L"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 1L です。まず mL のまま<ruby>足<rt>た</rt></ruby>すと 500 + 500 = 1000 なので、2<ruby>本<rt>ほん</rt></ruby><ruby>分<rt>ぶん</rt></ruby>で 1000mL になります。1L = 1000mL なので、1000mL は 1L です。ペットボトルの<ruby>本数<rt>ほんすう</rt></ruby>をそのまま<ruby>答<rt>こた</rt></ruby>えて 2L としたり、<ruby>単位<rt>たんい</rt></ruby>を<ruby>取<rt>と</rt></ruby>りちがえて 10L としたりしないようにします。500mL のペットボトル2<ruby>本<rt>ほん</rt></ruby>でちょうど 1L と<ruby>覚<rt>おぼ</rt></ruby>えておくと<ruby>便利<rt>べんり</rt></ruby>です。ポイント: 1000mL = 1L、mL から L に<ruby>直<rt>なお</rt></ruby>すときは 1000 のまとまりで<ruby>考<rt>かんが</rt></ruby>えます。"
},
{
"q": 78,
"unit": "e2_u08",
"topic": "かさの見積り",
"level": 1,
"question": "<ruby>湯<rt>ゆ</rt></ruby>のみ<ruby>茶<rt>ちゃ</rt></ruby>わん1ぱいに<ruby>入<rt>はい</rt></ruby>るお<ruby>茶<rt>ちゃ</rt></ruby>のかさとして、いちばん<ruby>近<rt>ちか</rt></ruby>いものはどれですか。",
"choices": [
"2dL",
"2mL",
"2L",
"20L"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 2dL です。1dL は 100mL なので、2dL は 200mL くらいになり、<ruby>湯<rt>ゆ</rt></ruby>のみ<ruby>茶<rt>ちゃ</rt></ruby>わん1ぱい<ruby>分<rt>ぶん</rt></ruby>にちょうど<ruby>合<rt>あ</rt></ruby>います。2mL はスプーン<ruby>半分<rt>はんぶん</rt></ruby>にもならない<ruby>量<rt>りょう</rt></ruby>、2L は<ruby>大<rt>おお</rt></ruby>きめのペットボトル1<ruby>本<rt>ぽん</rt></ruby><ruby>分<rt>ぶん</rt></ruby>、20L は<ruby>灯油<rt>とうゆ</rt></ruby>のタンクくらいの かさ で、どれも<ruby>茶<rt>ちゃ</rt></ruby>わんには<ruby>入<rt>はい</rt></ruby>りません。ポイント: <ruby>身近<rt>みぢか</rt></ruby>な<ruby>入<rt>い</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>の かさ を<ruby>覚<rt>おぼ</rt></ruby>えておくと<ruby>見当<rt>けんとう</rt></ruby>をつけられます。"
},
{
"q": 79,
"unit": "e2_u08",
"topic": "かさのたし算",
"level": 1,
"question": "<ruby>水筒<rt>すいとう</rt></ruby>アには<ruby>麦茶<rt>むぎちゃ</rt></ruby>が 6dL、<ruby>水筒<rt>すいとう</rt></ruby>イには 3dL <ruby>入<rt>はい</rt></ruby>っています。2つを<ruby>合<rt>あ</rt></ruby>わせると<ruby>何<rt>なん</rt></ruby> dL ですか。",
"choices": [
"9dL",
"3dL",
"18dL",
"63dL"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 9dL です。<ruby>合<rt>あ</rt></ruby>わせた かさ を<ruby>求<rt>もと</rt></ruby>めるので<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>います。<ruby>単位<rt>たんい</rt></ruby>がどちらも dL でそろっているので、<ruby>数<rt>かず</rt></ruby>だけを<ruby>足<rt>た</rt></ruby>して 6 + 3 = 9 となり 9dL です。「<ruby>合<rt>あ</rt></ruby>わせて」を「ちがい」と<ruby>取<rt>と</rt></ruby>りちがえて 6 − 3 = 3 としたり、<ruby>数字<rt>すうじ</rt></ruby>を<ruby>並<rt>なら</rt></ruby>べて 63dL と<ruby>書<rt>か</rt></ruby>いたりしないようにします。ポイント: <ruby>単位<rt>たんい</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じときは、<ruby>数<rt>かず</rt></ruby>どうしをそのまま<ruby>計算<rt>けいさん</rt></ruby>できます。"
},
{
"q": 80,
"unit": "e2_u08",
"topic": "かさの比較",
"level": 2,
"question": "<ruby>表<rt>ひょう</rt></ruby>は、4つの<ruby>入<rt>い</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っている<ruby>水<rt>みず</rt></ruby>のかさです。かさがいちばん<ruby>多<rt>おお</rt></ruby>いのはどれですか。",
"choices": [
"ア やかん",
"イ ボトル",
"ウ ポット",
"エ コップ"
],
"answer": 1,
"figure": null,
"table": [
[
"<ruby>入<rt>い</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>",
"かさ"
],
[
"ア やかん",
"15dL"
],
[
"イ ボトル",
"1300mL"
],
[
"ウ ポット",
"1L2dL"
],
[
"エ コップ",
"800mL"
]
],
"explanation": "<ruby>答<rt>こた</rt></ruby>えは ア やかん です。<ruby>単位<rt>たんい</rt></ruby>を mL にそろえて<ruby>比<rt>くら</rt></ruby>べます。1dL = 100mL なので、ア の 15dL は 1500mL です。ウ の 1L2dL は 1000mL と 200mL で 1200mL になります。イ は 1300mL、エ は 800mL です。1500、1300、1200、800 を<ruby>比<rt>くら</rt></ruby>べると、いちばん<ruby>多<rt>おお</rt></ruby>いのは ア です。<ruby>数<rt>かず</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさだけを<ruby>見<rt>み</rt></ruby>て 1300 の イ を<ruby>選<rt>えら</rt></ruby>んでしまいやすいので<ruby>気<rt>き</rt></ruby>をつけます。ポイント: <ruby>単位<rt>たんい</rt></ruby>がちがうときは、そろえてから<ruby>比<rt>くら</rt></ruby>べます。"
},
{
"q": 81,
"unit": "e2_u08",
"topic": "単位の換算",
"level": 2,
"question": "<ruby>料理<rt>りょうり</rt></ruby>の<ruby>作<rt>つく</rt></ruby>り<ruby>方<rt>かた</rt></ruby>に「だしを 8dL <ruby>用意<rt>ようい</rt></ruby>する」と<ruby>書<rt>か</rt></ruby>かれていました。<ruby>手元<rt>てもと</rt></ruby>の<ruby>計量<rt>けいりょう</rt></ruby>カップは mL でしか<ruby>測<rt>はか</rt></ruby>れません。8dL は<ruby>何<rt>なん</rt></ruby> mL ですか。",
"choices": [
"800mL",
"80mL",
"8000mL",
"108mL"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 800mL です。1dL = 100mL なので、8dL は 100mL が8つ<ruby>分<rt>ぶん</rt></ruby>です。100 が8つで 800 になるので 800mL となります。1dL を 10mL と<ruby>勘違<rt>かんちが</rt></ruby>いすると 80mL、1000mL と<ruby>勘違<rt>かんちが</rt></ruby>いすると 8000mL になってしまいます。1L = 10dL = 1000mL であることから、1dL = 100mL を<ruby>確<rt>たし</rt></ruby>かめておくと<ruby>間違<rt>まちが</rt></ruby>えません。ポイント: dL を mL に<ruby>直<rt>なお</rt></ruby>すときは、100mL のまとまりが<ruby>何<rt>なん</rt></ruby>こ<ruby>分<rt>ぶん</rt></ruby>かを<ruby>考<rt>かんが</rt></ruby>えます。"
},
{
"q": 82,
"unit": "e2_u08",
"topic": "かさのひき算",
"level": 2,
"question": "<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っていたジュース 1L2dL のうち、5dL を<ruby>飲<rt>の</rt></ruby>みました。<ruby>残<rt>のこ</rt></ruby>りは<ruby>何<rt>なん</rt></ruby> dL ですか。",
"choices": [
"7dL",
"3dL",
"8dL",
"17dL"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 7dL です。<ruby>単位<rt>たんい</rt></ruby>を dL にそろえます。1L = 10dL なので、1L2dL は 10dL と 2dL で 12dL です。<ruby>飲<rt>の</rt></ruby>んだ<ruby>分<rt>ぶん</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>くので 12 − 5 = 7 となり、<ruby>残<rt>のこ</rt></ruby>りは 7dL です。1L2dL を 12dL に<ruby>直<rt>なお</rt></ruby>さずに 2 − 5 を<ruby>計算<rt>けいさん</rt></ruby>しようとしたり、<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>のところを<ruby>足<rt>た</rt></ruby>して 17dL としたりする<ruby>間違<rt>まちが</rt></ruby>いに<ruby>注意<rt>ちゅうい</rt></ruby>します。ポイント: L と dL がまざったときは、まず dL にそろえてから<ruby>計算<rt>けいさん</rt></ruby>します。"
},
{
"q": 83,
"unit": "e2_u08",
"topic": "目もりの読み",
"level": 2,
"question": "<ruby>図<rt>ず</rt></ruby>のますは、1L まで<ruby>同<rt>おな</rt></ruby>じ<ruby>大<rt>おお</rt></ruby>きさの<ruby>目<rt>め</rt></ruby>もりで 10 に<ruby>分<rt>わ</rt></ruby>かれています。<ruby>今<rt>いま</rt></ruby><ruby>入<rt>はい</rt></ruby>っている<ruby>水<rt>みず</rt></ruby>のかさは<ruby>何<rt>なん</rt></ruby> mL ですか。",
"choices": [
"700mL",
"70mL",
"300mL",
"7mL"
],
"answer": 1,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 240\"><rect x=\"202\" y=\"78\" width=\"156\" height=\"112\" fill=\"#e0f2f1\"/><path d=\"M200 30 L200 190 L360 190 L360 30\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\"/><line x1=\"200\" y1=\"174\" x2=\"222\" y2=\"174\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"200\" y1=\"158\" x2=\"222\" y2=\"158\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"200\" y1=\"142\" x2=\"222\" y2=\"142\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"200\" y1=\"126\" x2=\"222\" y2=\"126\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"200\" y1=\"110\" x2=\"222\" y2=\"110\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"200\" y1=\"94\" x2=\"222\" y2=\"94\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"200\" y1=\"78\" x2=\"222\" y2=\"78\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"200\" y1=\"62\" x2=\"222\" y2=\"62\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"200\" y1=\"46\" x2=\"222\" y2=\"46\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"200\" y1=\"30\" x2=\"222\" y2=\"30\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"202\" y1=\"78\" x2=\"358\" y2=\"78\" stroke=\"#00897b\" stroke-width=\"3\"/><text x=\"190\" y=\"36\" font-size=\"18\" fill=\"#333\" text-anchor=\"end\">1L</text><text x=\"280\" y=\"220\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\">1L のます</text></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 700mL です。1L を<ruby>同<rt>おな</rt></ruby>じ<ruby>大<rt>おお</rt></ruby>きさで 10 に<ruby>分<rt>わ</rt></ruby>けているので、<ruby>目<rt>め</rt></ruby>もり1つ<ruby>分<rt>ぶん</rt></ruby>は 1dL、つまり 100mL です。<ruby>水面<rt>すいめん</rt></ruby>は<ruby>下<rt>した</rt></ruby>から7つ<ruby>目<rt>め</rt></ruby>の<ruby>目<rt>め</rt></ruby>もりのところなので、100mL が7つ<ruby>分<rt>ぶん</rt></ruby>で 700mL になります。<ruby>目<rt>め</rt></ruby>もりの<ruby>数<rt>かず</rt></ruby>をそのまま 7mL としたり、<ruby>上<rt>うえ</rt></ruby>の<ruby>空<rt>あ</rt></ruby>いている<ruby>部分<rt>ぶぶん</rt></ruby>を<ruby>数<rt>かぞ</rt></ruby>えて 300mL としたりしないようにします。ポイント: <ruby>目<rt>め</rt></ruby>もりは1つ<ruby>分<rt>ぶん</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさを<ruby>先<rt>さき</rt></ruby>に<ruby>確<rt>たし</rt></ruby>かめてから<ruby>読<rt>よ</rt></ruby>みます。"
},
{
"q": 84,
"unit": "e2_u08",
"topic": "かさの計算",
"level": 3,
"question": "<ruby>麦茶<rt>むぎちゃ</rt></ruby>を 2L <ruby>作<rt>つく</rt></ruby>り、<ruby>水筒<rt>すいとう</rt></ruby>に 6dL、コップに 300mL <ruby>入<rt>い</rt></ruby>れました。<ruby>残<rt>のこ</rt></ruby>っている<ruby>麦茶<rt>むぎちゃ</rt></ruby>は<ruby>何<rt>なん</rt></ruby> dL ですか。",
"choices": [
"11dL",
"14dL",
"17dL",
"9dL"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 11dL です。<ruby>単位<rt>たんい</rt></ruby>を dL にそろえます。1L = 10dL なので 2L は 20dL、1dL = 100mL なので 300mL は 3dL です。<ruby>入<rt>い</rt></ruby>れた<ruby>分<rt>ぶん</rt></ruby>は<ruby>合<rt>あ</rt></ruby>わせて 6 + 3 = 9 で 9dL、<ruby>残<rt>のこ</rt></ruby>りは 20 − 9 = 11 となり 11dL です。300mL を dL に<ruby>直<rt>なお</rt></ruby>し<ruby>忘<rt>わす</rt></ruby>れて 14dL としたり、<ruby>入<rt>い</rt></ruby>れた<ruby>分<rt>ぶん</rt></ruby>の 9dL をそのまま<ruby>答<rt>こた</rt></ruby>えにしたりしやすい<ruby>問題<rt>もんだい</rt></ruby>です。ポイント: <ruby>単位<rt>たんい</rt></ruby>をそろえてから、<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>と<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>を<ruby>順<rt>じゅん</rt></ruby>に<ruby>進<rt>すす</rt></ruby>めます。"
},
{
"q": 85,
"unit": "e2_u08",
"topic": "かさの合計",
"level": 3,
"question": "1<ruby>日<rt>にち</rt></ruby>に<ruby>飲<rt>の</rt></ruby>んだ<ruby>水<rt>みず</rt></ruby>のかさを<ruby>記録<rt>きろく</rt></ruby>したら、<ruby>朝<rt>あさ</rt></ruby>は 3dL、<ruby>昼<rt>ひる</rt></ruby>は 250mL、<ruby>夜<rt>よる</rt></ruby>は 4dL でした。1<ruby>日<rt>にち</rt></ruby><ruby>分<rt>ぶん</rt></ruby>を<ruby>合<rt>あ</rt></ruby>わせると<ruby>何<rt>なん</rt></ruby> mL ですか。",
"choices": [
"950mL",
"257mL",
"650mL",
"550mL"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 950mL です。<ruby>単位<rt>たんい</rt></ruby>を mL にそろえてから<ruby>足<rt>た</rt></ruby>します。1dL = 100mL なので、<ruby>朝<rt>あさ</rt></ruby>の 3dL は 300mL、<ruby>夜<rt>よる</rt></ruby>の 4dL は 400mL です。300 + 250 = 550、550 + 400 = 950 となり、1<ruby>日<rt>にち</rt></ruby><ruby>分<rt>ぶん</rt></ruby>は 950mL になります。dL の<ruby>数<rt>かず</rt></ruby>をそのまま<ruby>足<rt>た</rt></ruby>して 257mL としたり、3つのうち1つを<ruby>数<rt>かぞ</rt></ruby>え<ruby>忘<rt>わす</rt></ruby>れて 550mL や 650mL としたりしやすいので、<ruby>記録<rt>きろく</rt></ruby>を<ruby>順<rt>じゅん</rt></ruby>に<ruby>確<rt>たし</rt></ruby>かめながら<ruby>計算<rt>けいさん</rt></ruby>します。ポイント: <ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に、まず<ruby>単位<rt>たんい</rt></ruby>をそろえます。"
},
{
"q": 86,
"unit": "e2_u09",
"topic": "時間の単位",
"level": 1,
"question": "<ruby>駅<rt>えき</rt></ruby>まで<ruby>歩<rt>ある</rt></ruby>くのに 1<ruby>時間<rt>じかん</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby> かかりました。この<ruby>時間<rt>じかん</rt></ruby>を<ruby>分<rt>ふん</rt></ruby>だけで<ruby>表<rt>あらわ</rt></ruby>すと<ruby>何分<rt>なんぷん</rt></ruby>ですか。",
"choices": [
"70<ruby>分<rt>ぷん</rt></ruby>",
"90<ruby>分<rt>ぷん</rt></ruby>",
"130<ruby>分<rt>ぷん</rt></ruby>",
"150<ruby>分<rt>ぷん</rt></ruby>"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 90<ruby>分<rt>ぷん</rt></ruby> です。\n1<ruby>時間<rt>じかん</rt></ruby>は 60<ruby>分<rt>ぷん</rt></ruby>です。\n1<ruby>時間<rt>じかん</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>は、60<ruby>分<rt>ぷん</rt></ruby>と 30<ruby>分<rt>ぷん</rt></ruby>を<ruby>合<rt>あ</rt></ruby>わせた<ruby>長<rt>なが</rt></ruby>さなので、60+30=90 となります。\n1<ruby>時間<rt>じかん</rt></ruby>を 100<ruby>分<rt>ぷん</rt></ruby>と<ruby>考<rt>かんが</rt></ruby>えて 130<ruby>分<rt>ぷん</rt></ruby>としてしまうまちがいが<ruby>多<rt>おお</rt></ruby>いので<ruby>気<rt>き</rt></ruby>をつけます。\nはんたいに、90<ruby>分<rt>ぷん</rt></ruby>を<ruby>時間<rt>じかん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>表<rt>あらわ</rt></ruby>すと 1<ruby>時間<rt>じかん</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>になります。\nポイント: 1<ruby>時間<rt>じかん</rt></ruby>=60<ruby>分<rt>ぷん</rt></ruby>に<ruby>直<rt>なお</rt></ruby>してから<ruby>計算<rt>けいさん</rt></ruby>します。"
},
{
"q": 87,
"unit": "e2_u09",
"topic": "1日の時間",
"level": 1,
"question": "ある<ruby>店<rt>みせ</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>も<ruby>夜<rt>よる</rt></ruby>も <ruby>休<rt>やす</rt></ruby>まずに<ruby>開<rt>あ</rt></ruby>いています。1<ruby>日<rt>にち</rt></ruby>は<ruby>何時間<rt>なんじかん</rt></ruby>ですか。",
"choices": [
"12<ruby>時間<rt>じかん</rt></ruby>",
"18<ruby>時間<rt>じかん</rt></ruby>",
"24<ruby>時間<rt>じかん</rt></ruby>",
"60<ruby>時間<rt>じかん</rt></ruby>"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 24<ruby>時間<rt>じかん</rt></ruby> です。\n1<ruby>日<rt>にち</rt></ruby>は、<ruby>午前<rt>ごぜん</rt></ruby>が 12<ruby>時間<rt>じかん</rt></ruby>、<ruby>午後<rt>ごご</rt></ruby>が 12<ruby>時間<rt>じかん</rt></ruby>に<ruby>分<rt>わ</rt></ruby>かれています。\n12+12=24 なので、1<ruby>日<rt>にち</rt></ruby>は 24<ruby>時間<rt>じかん</rt></ruby>になります。\n1<ruby>時間<rt>じかん</rt></ruby>=60<ruby>分<rt>ぷん</rt></ruby>の 60 とまぜてしまい、60<ruby>時間<rt>じかん</rt></ruby>と<ruby>答<rt>こた</rt></ruby>えるまちがいがあります。<ruby>分<rt>ふん</rt></ruby>のまとまりと<ruby>時間<rt>じかん</rt></ruby>のまとまりは<ruby>別<rt>べつ</rt></ruby>のものです。\nポイント: 1<ruby>日<rt>にち</rt></ruby>=24<ruby>時間<rt>じかん</rt></ruby>、1<ruby>時間<rt>じかん</rt></ruby>=60<ruby>分<rt>ぷん</rt></ruby>をセットでおぼえます。"
},
{
"q": 88,
"unit": "e2_u09",
"topic": "時計を読む",
"level": 1,
"question": "<ruby>図<rt>ず</rt></ruby>の<ruby>時計<rt>とけい</rt></ruby>は、<ruby>夕方<rt>ゆうがた</rt></ruby>に<ruby>見<rt>み</rt></ruby>た<ruby>時刻<rt>じこく</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>しています。この<ruby>時刻<rt>じこく</rt></ruby>はいつですか。",
"choices": [
"<ruby>午後<rt>ごご</rt></ruby>2<ruby>時<rt>じ</rt></ruby>20<ruby>分<rt>ぷん</rt></ruby>",
"<ruby>午後<rt>ごご</rt></ruby>4<ruby>時<rt>じ</rt></ruby>2<ruby>分<rt>ふん</rt></ruby>",
"<ruby>午後<rt>ごご</rt></ruby>4<ruby>時<rt>じ</rt></ruby>10<ruby>分<rt>ぷん</rt></ruby>",
"<ruby>午後<rt>ごご</rt></ruby>4<ruby>時<rt>じ</rt></ruby>50<ruby>分<rt>ぷん</rt></ruby>"
],
"answer": 3,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 340\"><circle cx=\"280\" cy=\"180\" r=\"130\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"3\"/><g stroke=\"#333\" stroke-width=\"3\" stroke-linecap=\"round\"><line x1=\"280\" y1=\"62\" x2=\"280\" y2=\"52\"/><line x1=\"339\" y1=\"78\" x2=\"344\" y2=\"69\"/><line x1=\"382\" y1=\"121\" x2=\"391\" y2=\"116\"/><line x1=\"398\" y1=\"180\" x2=\"408\" y2=\"180\"/><line x1=\"382\" y1=\"239\" x2=\"391\" y2=\"244\"/><line x1=\"339\" y1=\"282\" x2=\"344\" y2=\"291\"/><line x1=\"280\" y1=\"298\" x2=\"280\" y2=\"308\"/><line x1=\"221\" y1=\"282\" x2=\"216\" y2=\"291\"/><line x1=\"178\" y1=\"239\" x2=\"169\" y2=\"244\"/><line x1=\"162\" y1=\"180\" x2=\"152\" y2=\"180\"/><line x1=\"178\" y1=\"121\" x2=\"169\" y2=\"116\"/><line x1=\"221\" y1=\"78\" x2=\"216\" y2=\"69\"/></g><g font-family=\"sans-serif\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\"><text x=\"280\" y=\"87\">12</text><text x=\"330\" y=\"100\">1</text><text x=\"367\" y=\"137\">2</text><text x=\"380\" y=\"187\">3</text><text x=\"367\" y=\"237\">4</text><text x=\"330\" y=\"274\">5</text><text x=\"280\" y=\"287\">6</text><text x=\"230\" y=\"274\">7</text><text x=\"193\" y=\"237\">8</text><text x=\"180\" y=\"187\">9</text><text x=\"193\" y=\"137\">10</text><text x=\"230\" y=\"100\">11</text></g><line x1=\"280\" y1=\"180\" x2=\"328\" y2=\"213\" stroke=\"#333\" stroke-width=\"7\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"180\" x2=\"349\" y2=\"140\" stroke=\"#00897b\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"280\" cy=\"180\" r=\"6\" fill=\"#333\"/></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは <ruby>午後<rt>ごご</rt></ruby>4<ruby>時<rt>じ</rt></ruby>10<ruby>分<rt>ぷん</rt></ruby> です。\n<ruby>短<rt>みじか</rt></ruby>いはりは 4と5の<ruby>間<rt>あいだ</rt></ruby>にあるので、「4<ruby>時<rt>じ</rt></ruby>」と<ruby>読<rt>よ</rt></ruby>みます。\n<ruby>長<rt>なが</rt></ruby>いはりは 2をさしています。<ruby>時計<rt>とけい</rt></ruby>の<ruby>数字<rt>すうじ</rt></ruby>1つ<ruby>分<rt>ぶん</rt></ruby>は 5<ruby>分<rt>ふん</rt></ruby>なので、5×2=10 で 10<ruby>分<rt>ぷん</rt></ruby>です。\n<ruby>長<rt>なが</rt></ruby>いはりがさす<ruby>数字<rt>すうじ</rt></ruby>をそのまま「2<ruby>分<rt>ふん</rt></ruby>」と<ruby>読<rt>よ</rt></ruby>んでしまうまちがいに<ruby>気<rt>き</rt></ruby>をつけます。\n<ruby>夕方<rt>ゆうがた</rt></ruby>の<ruby>時刻<rt>じこく</rt></ruby>なので<ruby>午後<rt>ごご</rt></ruby>をつけて<ruby>表<rt>あらわ</rt></ruby>します。\nポイント: <ruby>長<rt>なが</rt></ruby>いはりは 5とびで<ruby>数<rt>かぞ</rt></ruby>えて<ruby>分<rt>ふん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。"
},
{
"q": 89,
"unit": "e2_u09",
"topic": "時刻と時間",
"level": 1,
"question": "「<ruby>時刻<rt>じこく</rt></ruby>」はある1つの<ruby>時<rt>とき</rt></ruby>を、「<ruby>時間<rt>じかん</rt></ruby>」はその<ruby>間<rt>あいだ</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さを<ruby>表<rt>あらわ</rt></ruby>します。<ruby>次<rt>つぎ</rt></ruby>のうち「<ruby>時間<rt>じかん</rt></ruby>」を<ruby>表<rt>あらわ</rt></ruby>しているのはどれですか。",
"choices": [
"40<ruby>分間<rt>ぷんかん</rt></ruby>",
"<ruby>午前<rt>ごぜん</rt></ruby>7<ruby>時<rt>じ</rt></ruby>",
"<ruby>正午<rt>しょうご</rt></ruby>",
"<ruby>午後<rt>ごご</rt></ruby>3<ruby>時<rt>じ</rt></ruby>20<ruby>分<rt>ぷん</rt></ruby>"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 40<ruby>分間<rt>ぷんかん</rt></ruby> です。\n「<ruby>時刻<rt>じこく</rt></ruby>」は、<ruby>時計<rt>とけい</rt></ruby>がさしている ある1つの<ruby>時<rt>とき</rt></ruby>のことです。<ruby>午前<rt>ごぜん</rt></ruby>7<ruby>時<rt>じ</rt></ruby>や<ruby>午後<rt>ごご</rt></ruby>3<ruby>時<rt>じ</rt></ruby>20<ruby>分<rt>ぷん</rt></ruby>、ひるの 12<ruby>時<rt>じ</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す<ruby>正午<rt>しょうご</rt></ruby>は、どれも<ruby>時刻<rt>じこく</rt></ruby>です。\n「<ruby>時間<rt>じかん</rt></ruby>」は、ある<ruby>時刻<rt>じこく</rt></ruby>からある<ruby>時刻<rt>じこく</rt></ruby>までの<ruby>長<rt>なが</rt></ruby>さのことです。40<ruby>分間<rt>ぷんかん</rt></ruby>は<ruby>長<rt>なが</rt></ruby>さを<ruby>表<rt>あらわ</rt></ruby>しているので<ruby>時間<rt>じかん</rt></ruby>になります。\n「7<ruby>時<rt>じ</rt></ruby>」と「7<ruby>時間<rt>じかん</rt></ruby>」を<ruby>同<rt>おな</rt></ruby>じものと<ruby>考<rt>かんが</rt></ruby>えないように<ruby>気<rt>き</rt></ruby>をつけます。\nポイント: 「いつ」が<ruby>時刻<rt>じこく</rt></ruby>、「どれだけ」が<ruby>時間<rt>じかん</rt></ruby>です。"
},
{
"q": 90,
"unit": "e2_u09",
"topic": "何分後の時刻",
"level": 2,
"question": "<ruby>午前<rt>ごぜん</rt></ruby>9<ruby>時<rt>じ</rt></ruby>50<ruby>分<rt>ぷん</rt></ruby>に せんたく<ruby>機<rt>き</rt></ruby>のスイッチを<ruby>入<rt>い</rt></ruby>れました。<ruby>終<rt>お</rt></ruby>わるまでに 45<ruby>分<rt>ふん</rt></ruby>かかります。<ruby>終<rt>お</rt></ruby>わる<ruby>時刻<rt>じこく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby><ruby>何分<rt>なんぷん</rt></ruby>ですか。",
"choices": [
"<ruby>午前<rt>ごぜん</rt></ruby>9<ruby>時<rt>じ</rt></ruby>95<ruby>分<rt>ふん</rt></ruby>",
"<ruby>午前<rt>ごぜん</rt></ruby>10<ruby>時<rt>じ</rt></ruby>5<ruby>分<rt>ふん</rt></ruby>",
"<ruby>午前<rt>ごぜん</rt></ruby>10<ruby>時<rt>じ</rt></ruby>35<ruby>分<rt>ふん</rt></ruby>",
"<ruby>午前<rt>ごぜん</rt></ruby>11<ruby>時<rt>じ</rt></ruby>35<ruby>分<rt>ふん</rt></ruby>"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは <ruby>午前<rt>ごぜん</rt></ruby>10<ruby>時<rt>じ</rt></ruby>35<ruby>分<rt>ふん</rt></ruby> です。\n9<ruby>時<rt>じ</rt></ruby>50<ruby>分<rt>ぷん</rt></ruby>から あと 10<ruby>分<rt>ぷん</rt></ruby><ruby>進<rt>すす</rt></ruby>めると 10<ruby>時<rt>じ</rt></ruby>ちょうどになります。\n45<ruby>分<rt>ふん</rt></ruby>のうち 10<ruby>分<rt>ぷん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>ったので、のこりは 45−10=35 で 35<ruby>分<rt>ふん</rt></ruby>です。\n10<ruby>時<rt>じ</rt></ruby>からさらに 35<ruby>分<rt>ふん</rt></ruby><ruby>進<rt>すす</rt></ruby>めて、<ruby>午前<rt>ごぜん</rt></ruby>10<ruby>時<rt>じ</rt></ruby>35<ruby>分<rt>ふん</rt></ruby>になります。\n50+45=95 として 9<ruby>時<rt>じ</rt></ruby>95<ruby>分<rt>ふん</rt></ruby>と<ruby>書<rt>か</rt></ruby>くまちがいがあります。<ruby>分<rt>ふん</rt></ruby>は 60 になったら 1<ruby>時間<rt>じかん</rt></ruby>にくり<ruby>上<rt>あ</rt></ruby>がることをわすれないようにします。\nポイント: いったん「ちょうどの<ruby>時刻<rt>じこく</rt></ruby>」まで<ruby>進<rt>すす</rt></ruby>めると<ruby>考<rt>かんが</rt></ruby>えやすくなります。"
},
{
"q": 91,
"unit": "e2_u09",
"topic": "かかった時間",
"level": 2,
"question": "<ruby>図<rt>ず</rt></ruby>は、<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>に<ruby>出<rt>で</rt></ruby>かけた<ruby>時刻<rt>じこく</rt></ruby>と<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>った<ruby>時刻<rt>じこく</rt></ruby>です。どちらも<ruby>午前<rt>ごぜん</rt></ruby>です。<ruby>出<rt>で</rt></ruby>かけてから<ruby>帰<rt>かえ</rt></ruby>るまでにかかった<ruby>時間<rt>じかん</rt></ruby>はどれだけですか。",
"choices": [
"1<ruby>時間<rt>じかん</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>",
"1<ruby>時間<rt>じかん</rt></ruby>50<ruby>分<rt>ぷん</rt></ruby>",
"2<ruby>時間<rt>じかん</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>",
"2<ruby>時間<rt>じかん</rt></ruby>50<ruby>分<rt>ぷん</rt></ruby>"
],
"answer": 1,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 320\"><circle cx=\"150\" cy=\"155\" r=\"100\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"3\"/><g font-family=\"sans-serif\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\"><text x=\"150\" y=\"85\">12</text><text x=\"188\" y=\"95\">1</text><text x=\"216\" y=\"123\">2</text><text x=\"226\" y=\"161\">3</text><text x=\"216\" y=\"199\">4</text><text x=\"188\" y=\"227\">5</text><text x=\"150\" y=\"237\">6</text><text x=\"112\" y=\"227\">7</text><text x=\"84\" y=\"199\">8</text><text x=\"74\" y=\"161\">9</text><text x=\"84\" y=\"123\">10</text><text x=\"112\" y=\"95\">11</text></g><line x1=\"150\" y1=\"155\" x2=\"111\" y2=\"141\" stroke=\"#333\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"155\" x2=\"102\" y2=\"183\" stroke=\"#00897b\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"150\" cy=\"155\" r=\"5\" fill=\"#333\"/><circle cx=\"410\" cy=\"155\" r=\"100\" fill=\"#e0f2f1\" stroke=\"#333\" stroke-width=\"3\"/><g font-family=\"sans-serif\" font-size=\"18\" fill=\"#333\" text-anchor=\"middle\"><text x=\"410\" y=\"85\">12</text><text x=\"448\" y=\"95\">1</text><text x=\"476\" y=\"123\">2</text><text x=\"486\" y=\"161\">3</text><text x=\"476\" y=\"199\">4</text><text x=\"448\" y=\"227\">5</text><text x=\"410\" y=\"237\">6</text><text x=\"372\" y=\"227\">7</text><text x=\"344\" y=\"199\">8</text><text x=\"334\" y=\"161\">9</text><text x=\"344\" y=\"123\">10</text><text x=\"372\" y=\"95\">11</text></g><line x1=\"410\" y1=\"155\" x2=\"392\" y2=\"117\" stroke=\"#333\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"155\" x2=\"458\" y2=\"127\" stroke=\"#00897b\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"410\" cy=\"155\" r=\"5\" fill=\"#333\"/><g font-family=\"sans-serif\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\"><text x=\"150\" y=\"298\">出かけた時刻</text><text x=\"410\" y=\"298\">帰った時刻</text></g></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 1<ruby>時間<rt>じかん</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby> です。\n<ruby>出<rt>で</rt></ruby>かけた<ruby>時刻<rt>じこく</rt></ruby>は<ruby>午前<rt>ごぜん</rt></ruby>9<ruby>時<rt>じ</rt></ruby>40<ruby>分<rt>ぷん</rt></ruby>、<ruby>帰<rt>かえ</rt></ruby>った<ruby>時刻<rt>じこく</rt></ruby>は<ruby>午前<rt>ごぜん</rt></ruby>11<ruby>時<rt>じ</rt></ruby>10<ruby>分<rt>ぷん</rt></ruby>です。\n9<ruby>時<rt>じ</rt></ruby>40<ruby>分<rt>ぷん</rt></ruby>から 10<ruby>時<rt>じ</rt></ruby>までが 20<ruby>分<rt>ぷん</rt></ruby>、10<ruby>時<rt>じ</rt></ruby>から 11<ruby>時<rt>じ</rt></ruby>までが 1<ruby>時間<rt>じかん</rt></ruby>、11<ruby>時<rt>じ</rt></ruby>から 11<ruby>時<rt>じ</rt></ruby>10<ruby>分<rt>ぷん</rt></ruby>までが 10<ruby>分<rt>ぷん</rt></ruby>です。\n20<ruby>分<rt>ぷん</rt></ruby>と 10<ruby>分<rt>ぷん</rt></ruby>で 30<ruby>分<rt>ぷん</rt></ruby>なので、<ruby>合<rt>あ</rt></ruby>わせて 1<ruby>時間<rt>じかん</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>になります。\n<ruby>時<rt>じ</rt></ruby>どうし、<ruby>分<rt>ふん</rt></ruby>どうしをそのままひいて 2<ruby>時間<rt>じかん</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>とするまちがいが<ruby>多<rt>おお</rt></ruby>いです。\nポイント: ちょうどの<ruby>時刻<rt>じこく</rt></ruby>で<ruby>区切<rt>くぎ</rt></ruby>ってから<ruby>足<rt>た</rt></ruby>します。"
},
{
"q": 92,
"unit": "e2_u09",
"topic": "日と時間",
"level": 2,
"question": "<ruby>出張<rt>しゅっちょう</rt></ruby>で 2<ruby>日間<rt>かかん</rt></ruby> <ruby>家<rt>いえ</rt></ruby>を<ruby>空<rt>あ</rt></ruby>けました。2<ruby>日間<rt>かかん</rt></ruby>は<ruby>何時間<rt>なんじかん</rt></ruby>ですか。",
"choices": [
"12<ruby>時間<rt>じかん</rt></ruby>",
"24<ruby>時間<rt>じかん</rt></ruby>",
"36<ruby>時間<rt>じかん</rt></ruby>",
"48<ruby>時間<rt>じかん</rt></ruby>"
],
"answer": 4,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 48<ruby>時間<rt>じかん</rt></ruby> です。\n1<ruby>日<rt>にち</rt></ruby>は 24<ruby>時間<rt>じかん</rt></ruby>です。\n2<ruby>日間<rt>かかん</rt></ruby>は 1<ruby>日<rt>にち</rt></ruby>が 2つ<ruby>分<rt>ぶん</rt></ruby>なので、24+24=48 で 48<ruby>時間<rt>じかん</rt></ruby>になります。\nかけ<ruby>算<rt>ざん</rt></ruby>で<ruby>考<rt>かんが</rt></ruby>えて 24×2=48 としても<ruby>同<rt>おな</rt></ruby>じ<ruby>答<rt>こた</rt></ruby>えになります。\n1<ruby>日<rt>にち</rt></ruby>ぶんの 24<ruby>時間<rt>じかん</rt></ruby>のままにしたり、<ruby>昼<rt>ひる</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>だけを<ruby>数<rt>かぞ</rt></ruby>えて 12<ruby>時間<rt>じかん</rt></ruby>や 36<ruby>時間<rt>じかん</rt></ruby>としたりしないように<ruby>気<rt>き</rt></ruby>をつけます。\nポイント: <ruby>日<rt>にち</rt></ruby>を<ruby>時間<rt>じかん</rt></ruby>に<ruby>直<rt>なお</rt></ruby>すときは、24 のまとまりがいくつあるかで<ruby>考<rt>かんが</rt></ruby>えます。"
},
{
"q": 93,
"unit": "e2_u09",
"topic": "午前と午後",
"level": 2,
"question": "<ruby>午前<rt>ごぜん</rt></ruby>11<ruby>時<rt>じ</rt></ruby>から <ruby>午後<rt>ごご</rt></ruby>2<ruby>時<rt>じ</rt></ruby>まで<ruby>会<rt>かい</rt></ruby>ぎがありました。<ruby>会<rt>かい</rt></ruby>ぎは<ruby>何時間<rt>なんじかん</rt></ruby><ruby>続<rt>つづ</rt></ruby>きましたか。",
"choices": [
"2<ruby>時間<rt>じかん</rt></ruby>",
"3<ruby>時間<rt>じかん</rt></ruby>",
"9<ruby>時間<rt>じかん</rt></ruby>",
"13<ruby>時間<rt>じかん</rt></ruby>"
],
"answer": 2,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 3<ruby>時間<rt>じかん</rt></ruby> です。\nひるの 12<ruby>時<rt>じ</rt></ruby>を<ruby>正午<rt>しょうご</rt></ruby>といい、ここで<ruby>午前<rt>ごぜん</rt></ruby>から<ruby>午後<rt>ごご</rt></ruby>に<ruby>変<rt>か</rt></ruby>わります。\n<ruby>午前<rt>ごぜん</rt></ruby>11<ruby>時<rt>じ</rt></ruby>から<ruby>正午<rt>しょうご</rt></ruby>までが 1<ruby>時間<rt>じかん</rt></ruby>です。\n<ruby>正午<rt>しょうご</rt></ruby>から<ruby>午後<rt>ごご</rt></ruby>2<ruby>時<rt>じ</rt></ruby>までが 2<ruby>時間<rt>じかん</rt></ruby>です。\n1+2=3 なので、<ruby>会<rt>かい</rt></ruby>ぎは 3<ruby>時間<rt>じかん</rt></ruby><ruby>続<rt>つづ</rt></ruby>きました。\n11 と 2 をそのままひいて 9<ruby>時間<rt>じかん</rt></ruby>としたり、<ruby>足<rt>た</rt></ruby>して 13<ruby>時間<rt>じかん</rt></ruby>としたりするまちがいに<ruby>気<rt>き</rt></ruby>をつけます。\nポイント: <ruby>午前<rt>ごぜん</rt></ruby>と<ruby>午後<rt>ごご</rt></ruby>をまたぐときは、<ruby>正午<rt>しょうご</rt></ruby>で 2つに<ruby>分<rt>わ</rt></ruby>けて<ruby>数<rt>かぞ</rt></ruby>えます。"
},
{
"q": 94,
"unit": "e2_u09",
"topic": "はじめの時刻",
"level": 3,
"question": "<ruby>午後<rt>ごご</rt></ruby>6<ruby>時<rt>じ</rt></ruby>20<ruby>分<rt>ぷん</rt></ruby>に<ruby>夕<rt>ゆう</rt></ruby>ごはんができ<ruby>上<rt>あ</rt></ruby>がりました。<ruby>作<rt>つく</rt></ruby>り<ruby>始<rt>はじ</rt></ruby>めてから 50<ruby>分<rt>ぷん</rt></ruby>かかったそうです。<ruby>作<rt>つく</rt></ruby>り<ruby>始<rt>はじ</rt></ruby>めた<ruby>時刻<rt>じこく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby><ruby>何分<rt>なんぷん</rt></ruby>ですか。",
"choices": [
"<ruby>午後<rt>ごご</rt></ruby>5<ruby>時<rt>じ</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>",
"<ruby>午後<rt>ごご</rt></ruby>5<ruby>時<rt>じ</rt></ruby>40<ruby>分<rt>ぷん</rt></ruby>",
"<ruby>午後<rt>ごご</rt></ruby>6<ruby>時<rt>じ</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>",
"<ruby>午後<rt>ごご</rt></ruby>7<ruby>時<rt>じ</rt></ruby>10<ruby>分<rt>ぷん</rt></ruby>"
],
"answer": 1,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは <ruby>午後<rt>ごご</rt></ruby>5<ruby>時<rt>じ</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby> です。\nでき<ruby>上<rt>あ</rt></ruby>がった<ruby>時刻<rt>じこく</rt></ruby>から、かかった<ruby>時間<rt>じかん</rt></ruby>をもどして<ruby>考<rt>かんが</rt></ruby>えます。\n6<ruby>時<rt>じ</rt></ruby>20<ruby>分<rt>ぷん</rt></ruby>から 20<ruby>分<rt>ぷん</rt></ruby>もどすと 6<ruby>時<rt>じ</rt></ruby>ちょうどです。\n50<ruby>分<rt>ぷん</rt></ruby>のうち 20<ruby>分<rt>ぷん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>ったので、のこりは 50−20=30 で 30<ruby>分<rt>ぷん</rt></ruby>です。\n6<ruby>時<rt>じ</rt></ruby>からさらに 30<ruby>分<rt>ぷん</rt></ruby>もどして、<ruby>午後<rt>ごご</rt></ruby>5<ruby>時<rt>じ</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>になります。\nもどすところを<ruby>進<rt>すす</rt></ruby>めてしまい、<ruby>午後<rt>ごご</rt></ruby>7<ruby>時<rt>じ</rt></ruby>10<ruby>分<rt>ぷん</rt></ruby>と<ruby>答<rt>こた</rt></ruby>えるまちがいが<ruby>多<rt>おお</rt></ruby>いので、<ruby>文<rt>ぶん</rt></ruby>をよく<ruby>読<rt>よ</rt></ruby>みます。\nポイント: 「<ruby>始<rt>はじ</rt></ruby>めの<ruby>時刻<rt>じこく</rt></ruby>」をきかれたら<ruby>時間<rt>じかん</rt></ruby>をもどします。"
},
{
"q": 95,
"unit": "e2_u09",
"topic": "正午をまたぐ",
"level": 3,
"question": "<ruby>午前<rt>ごぜん</rt></ruby>11<ruby>時<rt>じ</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>に<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>て、2<ruby>時間<rt>じかん</rt></ruby>15<ruby>分<rt>ふん</rt></ruby>かけて <ruby>親<rt>しん</rt></ruby>せきの<ruby>家<rt>いえ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>きました。<ruby>着<rt>つ</rt></ruby>いた<ruby>時刻<rt>じこく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby><ruby>何分<rt>なんぷん</rt></ruby>ですか。",
"choices": [
"<ruby>午前<rt>ごぜん</rt></ruby>1<ruby>時<rt>じ</rt></ruby>45<ruby>分<rt>ふん</rt></ruby>",
"<ruby>午後<rt>ごご</rt></ruby>0<ruby>時<rt>じ</rt></ruby>45<ruby>分<rt>ふん</rt></ruby>",
"<ruby>午後<rt>ごご</rt></ruby>1<ruby>時<rt>じ</rt></ruby>45<ruby>分<rt>ふん</rt></ruby>",
"<ruby>午後<rt>ごご</rt></ruby>2<ruby>時<rt>じ</rt></ruby>45<ruby>分<rt>ふん</rt></ruby>"
],
"answer": 3,
"figure": null,
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは <ruby>午後<rt>ごご</rt></ruby>1<ruby>時<rt>じ</rt></ruby>45<ruby>分<rt>ふん</rt></ruby> です。\n<ruby>午前<rt>ごぜん</rt></ruby>11<ruby>時<rt>じ</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>から<ruby>正午<rt>しょうご</rt></ruby>までは 30<ruby>分<rt>ぷん</rt></ruby>です。\nかかった<ruby>時間<rt>じかん</rt></ruby>は 2<ruby>時間<rt>じかん</rt></ruby>15<ruby>分<rt>ふん</rt></ruby>なので、そこから 30<ruby>分<rt>ぷん</rt></ruby>をとると のこりは 1<ruby>時間<rt>じかん</rt></ruby>45<ruby>分<rt>ふん</rt></ruby>になります。\n<ruby>正午<rt>しょうご</rt></ruby>から 1<ruby>時間<rt>じかん</rt></ruby>45<ruby>分<rt>ふん</rt></ruby><ruby>進<rt>すす</rt></ruby>めるので、<ruby>着<rt>つ</rt></ruby>いた<ruby>時刻<rt>じこく</rt></ruby>は<ruby>午後<rt>ごご</rt></ruby>1<ruby>時<rt>じ</rt></ruby>45<ruby>分<rt>ふん</rt></ruby>です。\nひるの 12<ruby>時<rt>じ</rt></ruby>をこえると<ruby>午前<rt>ごぜん</rt></ruby>から<ruby>午後<rt>ごご</rt></ruby>に<ruby>変<rt>か</rt></ruby>わります。<ruby>午前<rt>ごぜん</rt></ruby>のままにして<ruby>答<rt>こた</rt></ruby>えないように<ruby>気<rt>き</rt></ruby>をつけます。\nポイント: <ruby>正午<rt>しょうご</rt></ruby>で<ruby>区切<rt>くぎ</rt></ruby>って、<ruby>前<rt>まえ</rt></ruby>と<ruby>後<rt>あと</rt></ruby>に<ruby>分<rt>わ</rt></ruby>けて<ruby>考<rt>かんが</rt></ruby>えます。"
},
{
"q": 96,
"unit": "e2_u10",
"topic": "表を読む",
"level": 1,
"question": "<ruby>下<rt>した</rt></ruby>の<ruby>表<rt>ひょう</rt></ruby>は、ある<ruby>店<rt>みせ</rt></ruby>で 1<ruby>日<rt>にち</rt></ruby>に<ruby>売<rt>う</rt></ruby>れた<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>の<ruby>数<rt>かず</rt></ruby>です。<ruby>売<rt>う</rt></ruby>れた<ruby>数<rt>かず</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>少<rt>すく</rt></ruby>ないのはどれですか。",
"choices": [
"おちゃ",
"コーヒー",
"ジュース",
"ミルク"
],
"answer": 4,
"figure": null,
"table": [
[
"<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>",
"<ruby>売<rt>う</rt></ruby>れた<ruby>本数<rt>ほんすう</rt></ruby>"
],
[
"おちゃ",
"14"
],
[
"コーヒー",
"23"
],
[
"ジュース",
"18"
],
[
"ミルク",
"9"
]
],
"explanation": "<ruby>答<rt>こた</rt></ruby>えは ミルク です。\n<ruby>表<rt>ひょう</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を<ruby>上<rt>うえ</rt></ruby>から<ruby>順<rt>じゅん</rt></ruby>に<ruby>見<rt>み</rt></ruby>ていきます。おちゃが 14<ruby>本<rt>ほん</rt></ruby>、コーヒーが 23<ruby>本<rt>ぼん</rt></ruby>、ジュースが 18<ruby>本<rt>ぽん</rt></ruby>、ミルクが 9<ruby>本<rt>ほん</rt></ruby>です。\n14 と 18 と 23 はどれも2けたの<ruby>数<rt>かず</rt></ruby>で、9 だけが1けたの<ruby>数<rt>かず</rt></ruby>なので、ミルクが<ruby>一番<rt>いちばん</rt></ruby><ruby>少<rt>すく</rt></ruby>ないと<ruby>分<rt>わ</rt></ruby>かります。\n<ruby>一番<rt>いちばん</rt></ruby><ruby>多<rt>おお</rt></ruby>いものと<ruby>一番<rt>いちばん</rt></ruby><ruby>少<rt>すく</rt></ruby>ないものを<ruby>読<rt>よ</rt></ruby>みちがえやすいので、きかれていることをたしかめてから<ruby>選<rt>えら</rt></ruby>びます。\nポイント: <ruby>表<rt>ひょう</rt></ruby>は、けた<ruby>数<rt>すう</rt></ruby>にも<ruby>目<rt>め</rt></ruby>を<ruby>向<rt>む</rt></ruby>けてくらべると<ruby>分<rt>わ</rt></ruby>かりやすくなります。"
},
{
"q": 97,
"unit": "e2_u10",
"topic": "○のグラフ",
"level": 1,
"question": "<ruby>図<rt>ず</rt></ruby>は、<ruby>天気<rt>てんき</rt></ruby>をしらべた<ruby>日<rt>ひ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を○で<ruby>表<rt>あらわ</rt></ruby>したグラフです。「くもり」の<ruby>日<rt>ひ</rt></ruby>は<ruby>何日<rt>なんにち</rt></ruby>ありましたか。",
"choices": [
"2<ruby>日<rt>か</rt></ruby>",
"5<ruby>日<rt>か</rt></ruby>",
"6<ruby>日<rt>か</rt></ruby>",
"7<ruby>日<rt>か</rt></ruby>"
],
"answer": 4,
"figure": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 380\"><line x1=\"50\" y1=\"330\" x2=\"520\" y2=\"330\" stroke=\"#333\" stroke-width=\"2\"/><g fill=\"#e0f2f1\" stroke=\"#00897b\" stroke-width=\"2\"><circle cx=\"110\" cy=\"310\" r=\"12\"/><circle cx=\"110\" cy=\"280\" r=\"12\"/><circle cx=\"110\" cy=\"250\" r=\"12\"/><circle cx=\"110\" cy=\"220\" r=\"12\"/><circle cx=\"110\" cy=\"190\" r=\"12\"/><circle cx=\"110\" cy=\"160\" r=\"12\"/><circle cx=\"110\" cy=\"130\" r=\"12\"/><circle cx=\"110\" cy=\"100\" r=\"12\"/><circle cx=\"110\" cy=\"70\" r=\"12\"/><circle cx=\"230\" cy=\"310\" r=\"12\"/><circle cx=\"230\" cy=\"280\" r=\"12\"/><circle cx=\"230\" cy=\"250\" r=\"12\"/><circle cx=\"230\" cy=\"220\" r=\"12\"/><circle cx=\"230\" cy=\"190\" r=\"12\"/><circle cx=\"230\" cy=\"160\" r=\"12\"/><circle cx=\"230\" cy=\"130\" r=\"12\"/><circle cx=\"350\" cy=\"310\" r=\"12\"/><circle cx=\"350\" cy=\"280\" r=\"12\"/><circle cx=\"350\" cy=\"250\" r=\"12\"/><circle cx=\"350\" cy=\"220\" r=\"12\"/><circle cx=\"350\" cy=\"190\" r=\"12\"/><circle cx=\"470\" cy=\"310\" r=\"12\"/><circle cx=\"470\" cy=\"280\" r=\"12\"/></g><g font-family=\"sans-serif\" font-size=\"20\" fill=\"#333\" text-anchor=\"middle\"><text x=\"110\" y=\"362\">はれ</text><text x=\"230\" y=\"362\">くもり</text><text x=\"350\" y=\"362\">あめ</text><text x=\"470\" y=\"362\">ゆき</text></g></svg>",
"table": null,
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 7<ruby>日<rt>か</rt></ruby> です。\n○のグラフは、1つの○が 1<ruby>日<rt>にち</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>しています。\n「くもり」の<ruby>列<rt>れつ</rt></ruby>の○を<ruby>下<rt>した</rt></ruby>から<ruby>順<rt>じゅん</rt></ruby>に<ruby>数<rt>かぞ</rt></ruby>えると 7つあります。だから「くもり」は 7<ruby>日<rt>か</rt></ruby>です。\nとなりの「はれ」や「あめ」の<ruby>列<rt>れつ</rt></ruby>を<ruby>数<rt>かぞ</rt></ruby>えてしまうまちがいが<ruby>多<rt>おお</rt></ruby>いので、<ruby>下<rt>した</rt></ruby>に<ruby>書<rt>か</rt></ruby>かれた<ruby>名前<rt>なまえ</rt></ruby>をたしかめてから<ruby>数<rt>かぞ</rt></ruby>えます。\n○は、ゆびでおさえながら 1つずつ<ruby>数<rt>かぞ</rt></ruby>えると<ruby>数<rt>かぞ</rt></ruby>えもれをふせげます。\nポイント: グラフは、たてにならぶ○の<ruby>数<rt>かず</rt></ruby>で<ruby>多<rt>おお</rt></ruby>い<ruby>少<rt>すく</rt></ruby>ないをくらべられます。"
},
{
"q": 98,
"unit": "e2_u10",
"topic": "数のちがい",
"level": 2,
"question": "<ruby>下<rt>した</rt></ruby>の<ruby>表<rt>ひょう</rt></ruby>は、ある<ruby>店<rt>みせ</rt></ruby>で 4<ruby>日間<rt>かかん</rt></ruby>に<ruby>売<rt>う</rt></ruby>れたパンの<ruby>数<rt>かず</rt></ruby>です。<ruby>一番<rt>いちばん</rt></ruby><ruby>多<rt>おお</rt></ruby>く<ruby>売<rt>う</rt></ruby>れた<ruby>日<rt>ひ</rt></ruby>と<ruby>一番<rt>いちばん</rt></ruby><ruby>少<rt>すく</rt></ruby>なかった<ruby>日<rt>ひ</rt></ruby>では、<ruby>何<rt>なん</rt></ruby>こちがいますか。",
"choices": [
"12こ",
"28こ",
"31こ",
"50こ"
],
"answer": 1,
"figure": null,
"table": [
[
"<ruby>曜日<rt>ようび</rt></ruby>",
"<ruby>売<rt>う</rt></ruby>れた<ruby>数<rt>かず</rt></ruby>"
],
[
"<ruby>月<rt>げつ</rt></ruby><ruby>曜日<rt>ようび</rt></ruby>",
"24"
],
[
"<ruby>火<rt>か</rt></ruby><ruby>曜日<rt>ようび</rt></ruby>",
"31"
],
[
"<ruby>水<rt>すい</rt></ruby><ruby>曜日<rt>ようび</rt></ruby>",
"19"
],
[
"<ruby>木<rt>もく</rt></ruby><ruby>曜日<rt>ようび</rt></ruby>",
"27"
]
],
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 12こ です。\n<ruby>表<rt>ひょう</rt></ruby>の<ruby>数<rt>かず</rt></ruby>をくらべると、<ruby>一番<rt>いちばん</rt></ruby><ruby>多<rt>おお</rt></ruby>いのは<ruby>火<rt>か</rt></ruby><ruby>曜日<rt>ようび</rt></ruby>の 31こ、<ruby>一番<rt>いちばん</rt></ruby><ruby>少<rt>すく</rt></ruby>ないのは<ruby>水<rt>すい</rt></ruby><ruby>曜日<rt>ようび</rt></ruby>の 19こです。\nちがいをもとめるので 31−19 を<ruby>計算<rt>けいさん</rt></ruby>します。1のくらいは 1 から 9 がひけないので、10のくらいから 1くり<ruby>下<rt>さ</rt></ruby>げて 11−9=2、10のくらいは 2−1=1 となり、12こになります。\nくり<ruby>下<rt>さ</rt></ruby>げずに くらいごとに<ruby>大<rt>おお</rt></ruby>きい<ruby>数<rt>かず</rt></ruby>から<ruby>小<rt>ちい</rt></ruby>さい<ruby>数<rt>かず</rt></ruby>をひいて 28こ としたり、<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>をして 50こ としたりしないように<ruby>気<rt>き</rt></ruby>をつけます。\nポイント: ちがいをきかれたら、<ruby>大<rt>おお</rt></ruby>きい<ruby>数<rt>かず</rt></ruby>から<ruby>小<rt>ちい</rt></ruby>さい<ruby>数<rt>かず</rt></ruby>をひきます。"
},
{
"q": 99,
"unit": "e2_u10",
"topic": "分けて数える",
"level": 2,
"question": "<ruby>下<rt>した</rt></ruby>の<ruby>表<rt>ひょう</rt></ruby>は、ある<ruby>日<rt>ひ</rt></ruby>の<ruby>昼<rt>ひる</rt></ruby>ごはんの<ruby>注文<rt>ちゅうもん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>です。めん<ruby>類<rt>るい</rt></ruby>であるうどん・そば・ラーメンの<ruby>注文<rt>ちゅうもん</rt></ruby>は、<ruby>合<rt>あ</rt></ruby>わせて<ruby>何<rt>なん</rt></ruby><ruby>人分<rt>にんぶん</rt></ruby>ですか。",
"choices": [
"13<ruby>人分<rt>にんぶん</rt></ruby>",
"17<ruby>人分<rt>にんぶん</rt></ruby>",
"19<ruby>人分<rt>にんぶん</rt></ruby>",
"26<ruby>人分<rt>にんぶん</rt></ruby>"
],
"answer": 2,
"figure": null,
"table": [
[
"メニュー",
"<ruby>注文<rt>ちゅうもん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>"
],
[
"うどん",
"6"
],
[
"そば",
"4"
],
[
"ラーメン",
"7"
],
[
"カレー",
"9"
]
],
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 17<ruby>人分<rt>にんぶん</rt></ruby> です。\nきかれているのはめん<ruby>類<rt>るい</rt></ruby>だけなので、まず うどん・そば・ラーメンの 3つを<ruby>選<rt>えら</rt></ruby>び<ruby>出<rt>だ</rt></ruby>します。カレーはめん<ruby>類<rt>るい</rt></ruby>ではないので<ruby>数<rt>かぞ</rt></ruby>えません。\n6+4=10、10+7=17 なので、<ruby>合<rt>あ</rt></ruby>わせて 17<ruby>人分<rt>にんぶん</rt></ruby>です。\n<ruby>表<rt>ひょう</rt></ruby>の<ruby>数<rt>かず</rt></ruby>をぜんぶ<ruby>足<rt>た</rt></ruby>して 26<ruby>人分<rt>にんぶん</rt></ruby>としてしまうまちがいが<ruby>多<rt>おお</rt></ruby>いです。\nポイント: <ruby>分<rt>わ</rt></ruby>けて<ruby>数<rt>かぞ</rt></ruby>えるときは、まず「どんな<ruby>仲間<rt>なかま</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めるのか」をはっきりさせてから<ruby>足<rt>た</rt></ruby>します。"
},
{
"q": 100,
"unit": "e2_u10",
"topic": "表と合計",
"level": 3,
"question": "<ruby>下<rt>した</rt></ruby>の<ruby>表<rt>ひょう</rt></ruby>は、4つの<ruby>店<rt>みせ</rt></ruby>で<ruby>売<rt>う</rt></ruby>れたおべんとうの<ruby>数<rt>かず</rt></ruby>です。4つの<ruby>店<rt>みせ</rt></ruby>を<ruby>合<rt>あ</rt></ruby>わせると 50こ<ruby>売<rt>う</rt></ruby>れました。C<ruby>店<rt>てん</rt></ruby>で<ruby>売<rt>う</rt></ruby>れたのは<ruby>何<rt>なん</rt></ruby>こですか。",
"choices": [
"14こ",
"23こ",
"36こ",
"41こ"
],
"answer": 1,
"figure": null,
"table": [
[
"<ruby>店<rt>みせ</rt></ruby>",
"<ruby>売<rt>う</rt></ruby>れた<ruby>数<rt>かず</rt></ruby>"
],
[
"A<ruby>店<rt>てん</rt></ruby>",
"12"
],
[
"B<ruby>店<rt>てん</rt></ruby>",
"15"
],
[
"C<ruby>店<rt>てん</rt></ruby>",
"?"
],
[
"D<ruby>店<rt>てん</rt></ruby>",
"9"
]
],
"explanation": "<ruby>答<rt>こた</rt></ruby>えは 14こ です。\nまず、<ruby>数<rt>かず</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かっている 3つの<ruby>店<rt>みせ</rt></ruby>を<ruby>足<rt>た</rt></ruby>します。12+15=27、27+9=36 なので 36こです。\n4つの<ruby>店<rt>みせ</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>は 50こなので、C<ruby>店<rt>てん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>は 50−36=14 でもとめられます。\nたしかめに 12+15+14+9 を<ruby>計算<rt>けいさん</rt></ruby>すると 50 になり、<ruby>合<rt>あ</rt></ruby>っていることが<ruby>分<rt>わ</rt></ruby>かります。\n3つを<ruby>足<rt>た</rt></ruby>した 36こ をそのまま<ruby>答<rt>こた</rt></ruby>えたり、D<ruby>店<rt>てん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>をわすれて 50−12−15=23 としたりしないように<ruby>気<rt>き</rt></ruby>をつけます。\nポイント: <ruby>分<rt>わ</rt></ruby>からない<ruby>数<rt>かず</rt></ruby>は、<ruby>合計<rt>ごうけい</rt></ruby>から<ruby>分<rt>わ</rt></ruby>かっている<ruby>数<rt>かず</rt></ruby>をひいてもとめます。"
}
]
};
