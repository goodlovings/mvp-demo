<!--
 * @Author: haolian
 * @Date: 2024-05-07 14:07:40
 * @LastEditors: haolian
 * @LastEditTime: 2024-05-08 12:45:28
 * @Description: Do not edit
 * @FilePath: /mvp-demo/src/views/blur/iphone.vue
-->
<template>
  <div class="main">
    <div class="blur">
      <div class="ib-area"></div>
      <img class="iphone" src="./images/iphone-frame.png" />
      <div class="time">
        <div>13:14</div>
        <div class="day">5月20日 星期六</div>
      </div>
      <div class="dilever">
        <div>向上轻扫以解锁</div>
        <div class="gap"></div>
      </div>
      <div class="if-info">1179 x 2556(iphone 15 Pro 分辨率 )</div>
      <div class="owner">
        <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path></svg>
        <img class="android" src="./images/android.png"/>
        <img class="huawei" src="./images/huawei.png"/>
      </div>
      <div class="if-name">
        <span>Pixel:</span>
        <span>30M~50M【此图大小】</span>
        <span>3264 x 5824【此图分辨率】</span>
        <span style="text-shadow: 2px 3px 5px #000000;">不同手机型号需自行调整适配</span>
      </div>
      <div class="if-copy">copyright 2024 罗伯特的画</div>
      <div class="user-info">
        <img class="avatar" src="./images/avatar.jpg" />
        <div class="txt">罗伯特的画</div>
      </div> 
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="less" scoped>
.main{
  height: 720px;
  width: 545px;
  background-image: url("./res/bg.png");
  background-size: 100%;
  margin: auto;
  
  .blur {
    height: 720px;
    width: 545px;
    backdrop-filter: blur(7px);
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    .iphone {
      position: absolute;
      top:30px;
      left: 30px;
      width: 310px;
    }
    .ib-area {
      position: absolute;
      top:40px;
      left: 40px;
      height: 612px;
      width: 290px;
      border-radius: 40px;
      overflow: hidden;
      background-image: url("./res/bg-iphone.png");
      background-size: auto 100%;
    }
    .time {
      position: absolute;
      top:200px;
      left: 40px;
      height: 612px;
      width: 290px;
      color: #fff;
      font-size: 68px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-shadow: 2px 2px 5px #000000;
      .day {
        font-size: 18px;
        font-weight: 600;
        margin-top: -20px;
        text-align: center;
      }
    }
    .dilever {
      position: absolute;
      bottom:80px;
      left: 30px;
      font-size: 12px;
      color: #fff;
      font-weight: 600;
      width: 310px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-shadow: 1px 1px 5px #000000;
      .gap {
        height: 5px;
        width: 40%;
        border-radius: 10px;
        background-color: #fff;
        margin-top: 10px;
      }
    }
    .if-info {
      position: absolute;
      bottom:35px;
      left: 30px;
      font-size: 14px;
      color: #fff;
      font-weight: 900;
      width: 310px;
      text-align: center;
      text-shadow: 1px 1px 5px #000000;
    }
    .owner {
      position: absolute;
      bottom:225px;
      right: 110px;
      display: flex;
      align-items: center;
      .android {
        height: 21px;
        margin-left:10px;
      }
      .huawei {
        height: 17px;
        margin-left:10px;
      }
    }
    .if-name {
      position: absolute;
      bottom:150px;
      right: 20px;
      display: flex;
      flex-direction: column;
      color: #fff;
      font-size: 12px;
      font-weight: 800;
      text-shadow: 1px 1px 3px #000000;
    }
    .if-copy {
      position: absolute;
      bottom:5px;
      right: 0px;
      display: flex;
      flex-direction: column;
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      text-shadow: 1px 1px 1px #000000;
      width: 545px;
      text-align: center;
    }
    .user-info {
      .avatar {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-bottom: 6px;
      }
      position: absolute;
      top: 130px;
      right: 80px;
      display: flex;
      flex-direction: column;
      color: #fff;
      font-size: 30px;
      font-weight: 500;
      text-shadow: 2px 2px 6px #000000;
      font-family: 'bd';
      .txt {
         writing-mode: vertical-rl;
         text-shadow: 2px 2px 2px #000000;
         letter-spacing: -5px;
      }
    }
  }
}
</style>
