const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!"),
  client.user.setGame('type !lewdt') ;
});
 const rando_imgs = [
			
			'https://i.imgur.com/8NOkiof.png',
			'https://i.imgur.com/4dlAQ7b.png',
			'https://i.imgur.com/A7JMdxt.png',
			'https://imgur.com/KzHS67T.png',
			'https://imgur.com/AZRH6uw.png',
			'https://imgur.com/dNNXCsy.png',
			'https://imgur.com/eW45zxu.png',
			'https://imgur.com/ooXYQVq.png',
			'https://imgur.com/G3kTsFn.png',
			'https://imgur.com/Y5TI4PA.png',
			'https://imgur.com/RhyPw61.png',
			'https://imgur.com/C4N4UXm.png',
			'https://imgur.com/ViBkaFz.png',
			'https://imgur.com/wSnCZG2.png',
			'https://imgur.com/58IhYsU.png',
			'https://imgur.com/OzOcSuD.png',
			'https://imgur.com/6ENEFKp.png',
			'https://imgur.com/VPWv2VV.png',
			'https://imgur.com/NB2Za9i.png',
			'https://imgur.com/mpIt4Aq.png',
			'https://imgur.com/SiLJDbN.png',
			'https://imgur.com/tsmTmVo.png',
			'https://imgur.com/rfhmurg.png',
			'https://imgur.com/MGLp1dR.png',
			'https://imgur.com/sgEkEmL.png',
			'https://imgur.com/APh3aBQ.png',
			'https://imgur.com/4uws23F.png',
			'https://imgur.com/7hJzMTy.png',
			'https://imgur.com/HNtnVA7.png',
			'https://imgur.com/WSp5d9D.png',
			'https://imgur.com/MqjO7o2.png',
			'https://imgur.com/fmKEbYD.png',
			'https://imgur.com/rvqmBGN.png',
			'https://imgur.com/5SkDtoo.png',
			'https://imgur.com/kcUaDMN.png',
			'https://imgur.com/OBpigEK.png',
			'https://imgur.com/Hnh2bRS.png',
			'https://imgur.com/yEAiDYR.png',
			'https://imgur.com/5rA4GFk.png',
			'https://imgur.com/6wL3QA1.png',
			'https://imgur.com/s1K0xuH.png',
			'https://imgur.com/hDr4TJu.png',
			'https://imgur.com/b6NTsHG.png',
			'https://imgur.com/PzhbbHL.png',
			'https://imgur.com/CCohS7A.png',
			'https://imgur.com/Cd1sc8f.png',
			'https://imgur.com/MjXiZNg.png',
			'https://imgur.com/Zpu5LUG.png',
			'https://imgur.com/j7ACRFE.png',
			'https://imgur.com/q1BT3UH.png',
			'https://imgur.com/w7DJOl4.png',
			'https://imgur.com/K68TEpp.png',
			'https://imgur.com/9hDKGtq.png',
			'https://imgur.com/ggFwZeb.png',
			'https://imgur.com/3qkHnwH.png',
			'https://imgur.com/Pj68yQk.png',
			'https://imgur.com/ut47bBV.png',
			'https://imgur.com/TFgNAD4.png',
			'https://imgur.com/MxeuTG4.png',
			'https://imgur.com/JWxpq0C.png',
			'https://imgur.com/2KWoiZ5.png',
			'https://imgur.com/3vUT5Ro.png',
			'https://imgur.com/L1hW6zy.png',
			'https://imgur.com/U6X32s1.png',
			'https://imgur.com/3fzjZEq.png',
			'https://imgur.com/qQ7PhHK.png',
			'https://imgur.com/Bp7I8Kn.png',
			'https://imgur.com/ZhUYEki.png',
			'https://imgur.com/pqc1xtk.png',
			'https://imgur.com/PWD2AHc.png',
			'https://imgur.com/dwQ1pPI.png',
			'https://imgur.com/xxS2SQZ.png',
			'https://imgur.com/FhlPWV5.png',
			'https://imgur.com/Ex3G0gL.png',
			'https://imgur.com/SiK7zWi.png',
			'https://imgur.com/DXMbTkV.png',
			'https://imgur.com/S6vIMYp.png',
			'https://imgur.com/GuP0it3.png',
			'https://imgur.com/NmOpe7m.png',
			'https://imgur.com/J6x4vQs.png',
			'https://imgur.com/jN09GGk.png',
			'https://imgur.com/IHQGFj4.png',
			'https://imgur.com/46tbovl.png',
			'https://imgur.com/LR1VAin.png',
			'https://imgur.com/d8aRkJU.png',
			'https://imgur.com/OjTegLq.png',
			'https://imgur.com/K799r4M.png',
			'https://imgur.com/lpwhmHV.png',
			'https://imgur.com/LdDEBj4.png',
			'https://imgur.com/IP3e0jU.png',
			'https://imgur.com/Ygw7LfW.png',
			'https://imgur.com/lR4WuaL.png',
			'https://imgur.com/iHAqF3k.png',
			'https://imgur.com/qxPfQiy.png',
			'https://imgur.com/fqZDx92.png',
			'https://imgur.com/OffXaHr.png',
			'https://imgur.com/KMlFIw1.png',
			'https://imgur.com/oDoWctj.png',
			'https://imgur.com/3SjZvxy.png',
			'https://imgur.com/l3uprto.png',
			'https://imgur.com/J5nfi7s.png',
			'https://imgur.com/GumL5pa.png',
			'https://imgur.com/Q3PJ5XF.png',
			'https://imgur.com/TFJc5pK.png',
			'https://imgur.com/tNhC0ld.png',
			'https://imgur.com/HeIfojM.png',
			'https://imgur.com/Ox0Eefb.png',
			'https://imgur.com/c49GfKT.png',
			'https://imgur.com/evgEPti.png',
			'https://imgur.com/4ZYidN8.png',
			'https://imgur.com/lzlQsop.png',
			'https://imgur.com/13S7dtw.png',
			'https://imgur.com/9AJVYUv.png',
			'https://imgur.com/acbESnl.png',
			'https://imgur.com/mzYejmJ.png',
			'https://imgur.com/zEjiij8.png',
			'https://imgur.com/iXqqe5B.png',
			'https://imgur.com/HoLSy7X.png',
			'https://imgur.com/lpBTCGq.png',
			'https://imgur.com/F73wFut.png',
			'https://imgur.com/gbGcXCJ.png',
			'https://imgur.com/4TzY7JL.png',
			'https://imgur.com/JUJBsuU.png',
			'https://imgur.com/HmeXvBk.png',
			'https://imgur.com/BEyCk1g.png',
			'https://imgur.com/vJdR2YR.png',
			'https://imgur.com/2Pyt8pY.png',
			'https://imgur.com/OIx09nV.png',
			'https://imgur.com/vwjOWUq.png',
			'https://imgur.com/4k4oWcz.png',
			'https://imgur.com/eMoeld3.png',
			'https://imgur.com/QkxkkTv.png',
			'https://imgur.com/xyUb1yu.png',
			'https://imgur.com/aDBHwYa.png',
			'https://imgur.com/ml0CYbL.png',
			'https://imgur.com/T6TRfv2.png',
			'https://imgur.com/Tnhss79.png',
			'https://imgur.com/m1Z7lxT.png',
			'https://imgur.com/g2TlP2F.png',
			'https://imgur.com/6Bf9Yhn.png',
			'https://imgur.com/3hy7Gac.png',
			'https://imgur.com/QJ3HiW7.png',
			'https://imgur.com/yVgresV.png',
			'https://imgur.com/qvQf5uf.png',
			'https://imgur.com/72ZPmgf.png',
			'https://imgur.com/uM0bl7r.png',
			'https://imgur.com/w7unvca.png',
			'https://imgur.com/Lh1JKoC.png',
			'https://imgur.com/jP0kH0f.png',
			'https://imgur.com/0l5EV8K.png',
			'https://imgur.com/jy2uLjD.png',
			'https://imgur.com/f51t1i8.png',
			'https://imgur.com/e0tIUUP.png',
			'https://imgur.com/ueBXKzN.png',
			'https://imgur.com/k6gROdq.png',
			'https://imgur.com/2oiQn1l.png',
			'https://imgur.com/FqOsPPA.png',
			'https://imgur.com/w8RryQa.png',
			'https://imgur.com/VR2ZBzM.png',
			'https://imgur.com/5fvz0B6.png',
			'https://imgur.com/eu8QjoW.png',
			'https://imgur.com/6S1RMqF.png',
			'https://imgur.com/mzEpoct.png',
			'https://imgur.com/ieKTgtr.png',
			'https://imgur.com/yGf3pb5.png',
			'https://imgur.com/QO0WeaW.png',
			'https://imgur.com/LhNWHHu.png',
			'https://imgur.com/bY3lmAU.png',
			'https://imgur.com/cgeMpvP.png',
			'https://imgur.com/4dl2dZQ.png',
			'https://imgur.com/OiJX8Cg.png',
			'https://imgur.com/BRKcybL.png',
			'https://imgur.com/fPM6kW8.png',
			'https://imgur.com/7dY5U6G.png',
			'https://imgur.com/jHHUeaH.png',
			'https://imgur.com/V5vInUt.png',
			'https://imgur.com/p9SdMSb.png',
			'https://imgur.com/zJS2XeU.png',
			'https://imgur.com/KHnwxYL.png',
			'https://imgur.com/tWncUKa.png',
			'https://imgur.com/e2Je7EG.png',
			'https://imgur.com/ZcXKi51.png',
			'https://imgur.com/TVBZXNT.png',
			'https://imgur.com/d72NLY1.png',
			'https://imgur.com/F31K5Wl.png',
			'https://imgur.com/1PfMhK5.png',
			'https://imgur.com/6VBqZtM.png',
			'https://imgur.com/Zu0d1he.png',
			'https://imgur.com/57IqGoJ.png',
			'https://imgur.com/tReUQLX.png',
			'https://imgur.com/D6tU9hP.png',
			'https://imgur.com/XCYcBl3.png',
			'https://imgur.com/D29VBxq.png',
			'https://imgur.com/7W258Bc.png',
			'https://imgur.com/WxS6GC5.png',
			'https://imgur.com/W3CXMSh.png',
			'https://imgur.com/w8dduYa.png',
			'https://imgur.com/b4upDY8.png',
			'https://imgur.com/iemFwvO.png',
			'https://imgur.com/uFkG9Np.png',
			'https://imgur.com/BSiHmtT.png',
			'https://imgur.com/yBXD3iE.png',
			'https://imgur.com/oFXztCb.png',
			'https://imgur.com/r3u9NzE.png',
			'https://imgur.com/AeRSWwa.png',
			'https://imgur.com/QYLNh6e.png',
			'https://imgur.com/oYKv8jX.png',
			'https://imgur.com/MP3Yd65.png',
			'https://imgur.com/Y88BVSY.png',
			'https://imgur.com/CPBwYYe.png',
			'https://imgur.com/bBIMbcI.png',
			'https://imgur.com/CgLmP25.png',
			'https://imgur.com/KLoXJH2.png',
			'https://imgur.com/TEAtNB5.png',
			'https://imgur.com/BQ6dxfM.png',
			'https://imgur.com/AO9fff0.png',
			'https://imgur.com/FMOy8LV.png',
			'https://imgur.com/B0TIcBt.png',
			'https://imgur.com/s2AJ7pJ.png',
			'https://imgur.com/f1qaT85.png',
			'https://imgur.com/BYbjXwi.png',
			'https://imgur.com/ir9jO7W.png',
			'https://imgur.com/qS2CML9.png',
			'https://imgur.com/wIDt3w3.png',
			'https://imgur.com/FkJ4akC.png',
			'https://imgur.com/eCR9qrG.png',
			'https://imgur.com/hFr7MKs.png',
			'https://imgur.com/7HhjXCh.png',
			'https://imgur.com/zJVwBL0.png',
			'https://imgur.com/2Xo72dn.png',
			'https://imgur.com/32oOWtS.png',
			'https://imgur.com/VvbFVaF.png',
			'https://imgur.com/ofg1T9G.png',
			'https://imgur.com/y1TT3zK.png',
			'https://imgur.com/TAPeb5L.png',
			'https://imgur.com/Go2F6Od.png',
			'https://imgur.com/dGUW4GK.png',
			'https://imgur.com/jvUIu04.png',
			'https://imgur.com/zyPv14G.png',
			'https://imgur.com/PArE5QF.png',
			'https://imgur.com/NjHyjWl.png',
			'https://imgur.com/FARokFC.png',
			'https://imgur.com/o2aGthG.png',
			'https://imgur.com/7y0iIe1.png',
			'https://imgur.com/QapoE76.png',
			'https://imgur.com/L6736Nz.png',
			'https://imgur.com/t92mast.png',
			'https://imgur.com/3zukYcB.png',
			'https://imgur.com/5ohrofr.png',
			'https://imgur.com/NXnng5A.png',
			'https://imgur.com/HvSaDHS.png',
			'https://imgur.com/npyoK2K.png',
			'https://imgur.com/pXtbeiu.png',
			'https://imgur.com/0xaNXA2.png',
			'https://imgur.com/DlnYDGG.png',
			'https://imgur.com/HX5cmJI.png',
			'https://imgur.com/fTxBBXn.png',
			'https://imgur.com/Pal9gty.png',
			'https://imgur.com/BPYBB6g.png',
			'https://imgur.com/qKjFbmX.png',
			'https://imgur.com/kCJOdVy.png',
			'https://imgur.com/eBvgsfy.png',
			'https://imgur.com/U5TzlxL.png',
			'https://imgur.com/uKCjuZm.png',
			'https://imgur.com/cwSJIRx.png',
			'https://imgur.com/3brgNMb.png',
			'https://imgur.com/MjH72Hm.png',
			'https://imgur.com/ySYbnm5.png',
			'https://imgur.com/ckSr3PL.png',
			'https://imgur.com/l4ZrJWI.png',
			'https://imgur.com/HKYbGmp.png',
			'https://imgur.com/FbHfDcg.png',
			'https://imgur.com/Z6XeGBg.png',
			'https://imgur.com/nder7pP.png',
			'https://imgur.com/SgSj96k.png',
			'https://imgur.com/8aW4y3q.png',
			'https://imgur.com/XKzZtsK.png',
			'https://imgur.com/Ib4Lwzz.png',
			'https://imgur.com/4iKrX0U.png',
			'https://imgur.com/QFZZ6Ni.png',
			'https://imgur.com/M0PcaWw.png',
	
			]
client.on("message", (message) => {
  if (message.content.startsWith("!lewdt")) {
    message.channel.send({
    file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
});
  }
});
 
client.login("NDk1NjQ3NDA5MDI4OTg4OTI5.DpGSwQ.MTYmWC85ydet7HMxlKVYFuQEheA");