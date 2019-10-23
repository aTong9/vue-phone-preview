<template>
  <div class="content">
    <div
      class="close-open"
      :style="{background:bgcolor}"
      @click="isShow=!isShow"
    >{{isShow?'关闭预览':'打开预览'}}</div>
    <div :class="phoneClass" v-if="isShow">
      <div>
        <iframe
          v-if="url"
          :src="url"
          width="314"
          height="556"
          marginwidth="0"
          marginheight="0"
          hspace="0"
          vspace="0"
          scrolling="auto"
          allowtransparency="no"
          frameborder="0"
          style="background: #fff;padding-top:20px;"
        ></iframe>
        <div v-else v-html="content" class="phone-con"></div>
        <div class="content"></div>
        <div class="statusbar"></div>
        <div class="theme-switch">
          <a
            :class="{active:index == num}"
            v-for="(item,index) in dataInfo"
            :key="index"
            @click="change(item,index)"
          >
            <div class="theme-icon">
              <div class="logo-apple">
                <img :src="item.url" alt />
              </div>
              <span>{{item.text}}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'

@Component({
  name: 'VuePhonePreview'
})
export default class VuePhonePreview extends Vue {
  public static install () { Vue.component(VuePhonePreview.name, VuePhonePreview) }
  private phoneClass = 'phone'
  private num = 0
  private isShow = true
  private dataInfo: any = [
    {
      url: require('../assets/logo-apple.png'),
      text: 'IOS'
    },
    {
      url: require('../assets/logo-android.png'),
      text: 'Android'
    }
  ]
  /** 预览内容内容 */
  @Prop()
  private content!: string
  @Prop({ default: '' })
  private url!: string
  @Prop({ default: '' })
  private bgcolor!: string
  private change (item: any, index: number) {
    this.num = index
    if (index === 0) {
      this.phoneClass = 'phone'
    } else {
      this.phoneClass = 'phone android'
    }
  }
}
</script>
<style scoped lang="scss">
.content {
  height: 100%;
  overflow-y: scroll;
}
.close-open {
  position: fixed;
  right: calc(5% + 370px);
  top: 40%;
  background: #000;
  color: #fff;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 5px 0px 0px 5px;
  cursor: pointer;
  z-index: 9999;
}
.active {
  opacity: 1 !important;
}
.phone {
  position: fixed;
  background: #111;
  border-radius: 55px;
  box-shadow: 0px 0px 0px 2px #aaa;
  top: 8%;
  right: 5%;
  width: 320px;
  padding: 80px 25px;
  text-align: justify;
  z-index: 9999;
  .phone-con {
    overflow: hidden;
    height: 568px;
    background: #fff;
    word-wrap: break-word;
    word-break: break-all;
    overflow-y: scroll;
    padding: 25px 15px;
    img {
      display: block;
      height: 100%;
      width: calc(320px - 40px);
      margin: 6px;
    }
  }
  .statusbar {
    position: absolute;
    width: 320px;
    height: 20px;
    background-image: url('../assets/status-bar.png');
    left: 50%;
    margin-left: -160px;
    top: 80px;
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
  }
  .theme-switch {
    position: absolute;
    right: 100%;
    margin-right: 2px;
    top: 70px;
    white-space: nowrap;
    a {
      text-align: center;
      text-decoration: none;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px 0 0 5px;
      display: block;
      font-size: 12px;
      transition: 200ms;
      opacity: 0.5;
      background: rgba(0, 0, 0, 1);
      position: relative;
      margin-bottom: 20px;
      .theme-icon {
        transition: 100ms;
        .logo-apple {
          width: 30px;
          height: 30px;
          margin: 5px auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          display: block;
        }
      }
    }
  }
}
header .phone:before {
  content: '';
  width: 60px;
  height: 10px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  background: #333;
  top: 50px;
}
.phone:after {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  left: 50%;
  margin-left: -30px;
  bottom: 10px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 5px solid #333;
}

// android
.android {
  border-radius: 20px;
  width: 330px;
  padding: 60px 20px;
  height: 600px;
  margin-top: 9px;
  .phone-con {
    height: 520px;
    img {
      width: calc(320px - 30px) !important;
    }
  }
  .statusbar {
    background-image: url('../assets/status-bar-android.png');
    width: 330px;
    height: 25px;
    margin-left: -165px;
    top: 60px;
  }
}
.android:after {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  left: 50px;
  background: #444;
  top: 30px;
  margin-left: 0;
}
</style>
