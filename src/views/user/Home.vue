<template>
  <div id="home" class>
    <div id="banner">
      <router-link to="shop/protective">
        <img :src="banner" alt="健人嚴選" />
      </router-link>
      <span class="nextStep" @click.prevent="nextStepFn">
        <i class="fa fa-angle-double-down" aria-hidden="true"></i>
      </span>
    </div>
    <div class="row event01">
      <div class="box1 col-12 col-md-6">
        <div class="fadein">
          <p class="h3">Kaiz Quality</p>
          <p class="font-weight-bold py-4 my-md-4">凱力品管保證</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae in magnam officiis esse natus porro voluptate accusantium! Aliquid omnis ratione assumenda voluptas praesentium suscipit ad deleniti magni. Tempora voluptas optio, numquam natus itaque similique vitae architecto repellendus doloremque, saepe consequuntur ipsum! Laudantium amet illum sequi adipisci aspernatur? Ducimus a aliquam repellendus accusantium quidem cumque reprehenderit optio minus sapiente magnam. Harum magni iste quos, dolorum reprehenderit repudiandae perspiciatis a laborum veritatis deleniti numquam ducimus sed iure consequuntur. Repellendus perferendis possimus, ipsa deleniti suscipit culpa, rem cumque totam soluta nulla vitae, quibusdam quisquam aspernatur itaque delectus. Voluptatem nobis quod expedita fugit cum tempore. Molestias error placeat illum minima libero ducimus, incidunt omnis maxime natus quaerat deserunt! Non nobis minima voluptate omnis veritatis culpa dolor, eligendi rem soluta recusandae dolorem aspernatur animi possimus error reprehenderit provident. Ut quam dolorum deserunt. Labore vero beatae, ipsam et, rem sed architecto quas sit dignissimos reiciendis natus molestiae nam maiores accusamus pariatur deleniti aliquam blanditiis hic impedit animi dolore. Libero distinctio at, nisi labore accusamus repudiandae dignissimos dolor consequuntur, repellat error exercitationem cupiditate ad dolorum recusandae. Labore veniam nobis porro odit nulla cumque eligendi alias quidem. Aperiam quidem expedita perferendis eum sed, a possimus officiis cumque accusantium. Pariatur sunt, possimus libero delectus earum odit distinctio tempore voluptates beatae veritatis voluptas. Suscipit blanditiis hic eius voluptas aspernatur fugit voluptate earum minima, deleniti necessitatibus quo ut odit exercitationem corrupti iure, nesciunt maiores, in ea! Ratione consectetur provident harum quo fugit voluptate saepe veniam modi asperiores porro non reiciendis accusamus hic, nostrum voluptatum vel sint assumenda esse autem blanditiis, fuga, natus enim atque. Expedita distinctio voluptas eligendi ex hic, itaque animi omnis, repudiandae, velit earum odit beatae similique consequuntur ab. Error iste in placeat eos numquam quibusdam impedit laborum necessitatibus iusto mollitia magnam natus, odio magni quidem autem debitis porro assumenda. Laudantium voluptate dolor odio, tempore inventore, dolores debitis voluptas officia quae rerum vero tenetur ullam consequuntur, facilis nobis distinctio. Alias nulla fuga excepturi nesciunt. Architecto temporibus possimus excepturi velit amet accusamus deleniti natus optio distinctio ullam, provident et aliquam necessitatibus saepe laborum! Accusantium earum voluptatem alias accusamus inventore! Tempore, ut? Modi facere incidunt magnam necessitatibus corrupti temporibus mollitia perferendis sapiente molestias, excepturi accusamus reiciendis culpa, eligendi tempora ipsa placeat debitis non explicabo. Nesciunt, delectus! Laudantium, fuga? Obcaecati mollitia suscipit facilis sit, aliquid repellat quia voluptatibus dolores exercitationem maiores doloremque ad voluptas optio veritatis. Doloremque placeat eum veniam distinctio a aliquam reiciendis dolore architecto corrupti fuga neque cum rem nesciunt quia eius molestiae magnam id aperiam facilis quidem, error ea natus at? Aut accusantium alias quisquam odit aliquam praesentium neque quia porro nisi, nemo dolorum, eius, sed minus suscipit doloribus laboriosam accusamus in ab est dignissimos modi totam reiciendis amet. Eius odit iste ipsam mollitia, hic impedit, perspiciatis eaque molestias dolores, obcaecati delectus assumenda reiciendis placeat? Repudiandae et vitae ratione reprehenderit fugit? Temporibus qui veniam nostrum quod voluptatem placeat labore itaque sequi vitae consectetur aspernatur numquam, eius praesentium doloribus sit quos, possimus cupiditate maxime a modi? Excepturi, a atque?</p>
        </div>
      </div>
      <div class="box2 col-12 col-md-6 p-0">
        <div class="grid1">
          <router-link to="/shop/protective">
            <img class="p-0" :src="e1_1" alt />
          </router-link>
        </div>
        <div class="grid2">
          <router-link to="/shop/protective">
            <img class="p-0" :src="e1_2" alt />
          </router-link>
        </div>
        <div class="grid3">
          <router-link to="/shop/whey">
            <img class="p-0" :src="e1_3" alt />
          </router-link>
        </div>
        <div class="grid4">
          <router-link to="/shop/whey">
            <img class="p-0" :src="e1_4" alt />
          </router-link>
        </div>
      </div>
    </div>
    <div class="row event02 m-0">
      <div class="box1 col-12 col-md-6 p-0">
        <router-link to="/shop/whey">
          <img class="p-0" :src="e2" alt />
        </router-link>
      </div>
      <div class="box2 col-12 col-md-6">
        <div class="fadein">
          <p class="h3">Kaiz Protein</p>
          <p class="font-weight-bold py-4 my-md-4">凱力高蛋白</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae in magnam officiis esse natus porro voluptate accusantium! Aliquid omnis ratione assumenda voluptas praesentium suscipit ad deleniti magni. Tempora voluptas optio, numquam natus itaque similique vitae architecto repellendus doloremque, saepe consequuntur ipsum! Laudantium amet illum sequi adipisci aspernatur? Ducimus a aliquam repellendus accusantium quidem cumque reprehenderit optio minus sapiente magnam. Harum magni iste quos, dolorum reprehenderit repudiandae perspiciatis a laborum veritatis deleniti numquam ducimus sed iure consequuntur. Repellendus perferendis possimus, ipsa deleniti suscipit culpa, rem cumque totam soluta nulla vitae, quibusdam quisquam aspernatur itaque delectus. Voluptatem nobis quod expedita fugit cum tempore. Molestias error placeat illum minima libero ducimus, incidunt omnis maxime natus quaerat deserunt! Non nobis minima voluptate omnis veritatis culpa dolor, eligendi rem soluta recusandae dolorem aspernatur animi possimus error reprehenderit provident. Ut quam dolorum deserunt. Labore vero beatae, ipsam et, rem sed architecto quas sit dignissimos reiciendis natus molestiae nam maiores accusamus pariatur deleniti aliquam blanditiis hic impedit animi dolore. Libero distinctio at, nisi labore accusamus repudiandae dignissimos dolor consequuntur, repellat error exercitationem cupiditate ad dolorum recusandae. Labore veniam nobis porro odit nulla cumque eligendi alias quidem. Aperiam quidem expedita perferendis eum sed, a possimus officiis cumque accusantium. Pariatur sunt, possimus libero delectus earum odit distinctio tempore voluptates beatae veritatis voluptas. Suscipit blanditiis hic eius voluptas aspernatur fugit voluptate earum minima, deleniti necessitatibus quo ut odit exercitationem corrupti iure, nesciunt maiores, in ea! Ratione consectetur provident harum quo fugit voluptate saepe veniam modi asperiores porro non reiciendis accusamus hic, nostrum voluptatum vel sint assumenda esse autem blanditiis, fuga, natus enim atque. Expedita distinctio voluptas eligendi ex hic, itaque animi omnis, repudiandae, velit earum odit beatae similique consequuntur ab. Error iste in placeat eos numquam quibusdam impedit laborum necessitatibus iusto mollitia magnam natus, odio magni quidem autem debitis porro assumenda. Laudantium voluptate dolor odio, tempore inventore, dolores debitis voluptas officia quae rerum vero tenetur ullam consequuntur, facilis nobis distinctio. Alias nulla fuga excepturi nesciunt. Architecto temporibus possimus excepturi velit amet accusamus deleniti natus optio distinctio ullam, provident et aliquam necessitatibus saepe laborum! Accusantium earum voluptatem alias accusamus inventore! Tempore, ut? Modi facere incidunt magnam necessitatibus corrupti temporibus mollitia perferendis sapiente molestias, excepturi accusamus reiciendis culpa, eligendi tempora ipsa placeat debitis non explicabo. Nesciunt, delectus! Laudantium, fuga? Obcaecati mollitia suscipit facilis sit, aliquid repellat quia voluptatibus dolores exercitationem maiores doloremque ad voluptas optio veritatis. Doloremque placeat eum veniam distinctio a aliquam reiciendis dolore architecto corrupti fuga neque cum rem nesciunt quia eius molestiae magnam id aperiam facilis quidem, error ea natus at? Aut accusantium alias quisquam odit aliquam praesentium neque quia porro nisi, nemo dolorum, eius, sed minus suscipit doloribus laboriosam accusamus in ab est dignissimos modi totam reiciendis amet. Eius odit iste ipsam mollitia, hic impedit, perspiciatis eaque molestias dolores, obcaecati delectus assumenda reiciendis placeat? Repudiandae et vitae ratione reprehenderit fugit? Temporibus qui veniam nostrum quod voluptatem placeat labore itaque sequi vitae consectetur aspernatur numquam, eius praesentium doloribus sit quos, possimus cupiditate maxime a modi? Excepturi, a atque?</p>
        </div>
      </div>
    </div>
    <div class="row event03 p-0 m-0">
      <div class="scroll col-12 p-0">
        <div class="col-12 col-md-6 info fadein right">
          <p class="h3 font-weight-bold">Kaiz Words</p>
          <p class="py-4 my-md-4 font-weight-bold">凱力理念</p>
          <p
            class="my-md-4"
          >隨著健身產業的新興,全民的健身意識抬頭,到健身房報到已經成了不少健人每天的必須行程,凱力健人嚴選致力於打造運動夥伴們最優質的健身護具,及品質最高的乳清蛋白,讓運動夥伴們可以專心訓練,由凱力做最強大的後盾與你們一同成長.</p>
          <p>KaizBB</p>
        </div>
      </div>
    </div>
    <div class="event04">
      <p align="center" class="h3 pb-4">LATEST ARTICLES</p>
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide class="box" v-for="(slide,index) in swiperNum" :key="index">
          <router-link to="/news">
            <div
              class="bgImg"
              :class="{'opacityActive': isOpacityActive}"
              :style="{backgroundImage:`url(${slide.img})`}"
              @mouseover.prevent="isOpacityActive = true"
              @mouseout="isOpacityActive = false"
            ></div>
            <div class="info">
              <p class="font-weight-bold h5">{{slide.title}}</p>
              <p>{{slide.main}}</p>
            </div>
          </router-link>
        </swiper-slide>
        <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import banner from "@/assets/images/index/banner.jpg";
import e1_1 from "@/assets/images/index/e1-1.jpg";
import e1_2 from "@/assets/images/index/e1-2.jpg";
import e1_3 from "@/assets/images/index/e1-3.jpg";
import e1_4 from "@/assets/images/index/e1-4.jpg";
import e2 from "@/assets/images/index/e2.jpg";
import e4_1 from "@/assets/images/news/01.jpg";
import e4_2 from "@/assets/images/news/02.jpg";
import e4_3 from "@/assets/images/news/03.jpg";
import e4_4 from "@/assets/images/news/04.jpg";
import e4_5 from "@/assets/images/news/05.jpg";

export default {
  data() {
    return {
      banner: banner,
      e1_1: e1_1,
      e1_2: e1_2,
      e1_3: e1_3,
      e1_4: e1_4,
      e2: e2,
      swiperNum: [
        {
          img: e4_1,
          title: "健身飲食篇",
          main:
            "不管你是要減重、增肌或是為了健康，運動後的30分鐘到1小時內，聰明攝取一份,運動後補充一份均衡營養的輕食很重要，內容以碳水化合物與蛋白質的"
        },
        {
          img: e4_2,
          title: "有氧運動迷失",
          main:
            "提到有氧運動，相信許多人都會想到減肥（減重），因為有氧運動的確是可以，健身之前要先了解什麼是核心肌"
        },
        {
          img: e4_3,
          title: "適合老人的運動有哪些？",
          main:
            "所謂要活就要動，老了也別忘記運動。適合老人的運動類型有3種，包含可提升心肺功能的有氧運動、可強化骨頭和肌肉的肌力訓練，及幫助保"
        },
        {
          img: e4_4,
          title: "吃蛋白棒前要搞清楚的5件事情",
          main:
            "隨著食品加工業的發展，以及人們對營養食品需求的增進，熱愛健康的人群已經不再滿足於簡單的多種維生素以及乳清蛋白粉產品。各類蛋白"
        },
        {
          img: e4_5,
          title: "第一次健身就上手",
          main:
            "下一站，我們即將帶領大家走入健身房，提供獨家的「攻略要點」，協助「健身房新手」不再像無頭蒼蠅於健身房裡亂竄"
        }
      ],
      screenWidth: document.documentElement.clientWidth, //螢幕寬度
      swiperOption: {
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: true,
        on: {
          init: function() {
            const vm = this;
            let screenWidth = document.documentElement.clientWidth;
            if (screenWidth < 769) {
              vm.params.slidesPerView = 1;
            } else {
              vm.params.slidesPerView = 3;
            }
          },
          resize: function() {
            const vm = this;
            let screenWidth = document.documentElement.clientWidth;
            if (screenWidth < 769) {
              vm.params.slidesPerView = 1;
            } else {
              vm.params.slidesPerView = 3;
            }
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true
      },
      isOpacityActive: false
    };
  },
  methods: {
    nextStepFn() {
      let bannerHeight = document.querySelector("#banner").clientHeight;
      $("html, body").animate(
        {
          scrollTop: $(".event01").offset().top
        },
        1000
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/helpers/breakpoint.scss";

#home {
  img {
    vertical-align: bottom;
  }
  #banner {
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .nextStep {
      cursor: pointer;
      display: inline-block;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translatex(-50%);
      color: #fff;
      font-size: 2.5rem;
      animation-name: nextStep;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.5, 0.5, 0.5, 0.5);
    }
  }
  @keyframes nextStep {
    0% {
      bottom: 10px;
    }
    25% {
      bottom: 5px;
    }
    50% {
      bottom: 10px;
    }
    75% {
      bottom: 15px;
    }
    100% {
      bottom: 10px;
    }
  }
  .event01 {
    padding: 0;
    margin: 0;
    vertical-align: top;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
    .box1 {
      width: 100%;
      height: 100%;
      text-align: center;
      padding: 100px;
      @include desktop() {
        padding: 50px;
      }
      @include pad() {
        height: 375px;
      }
      @include md() {
        padding: 20px;
      }
      & > div:nth-child(1) {
        @include pad {
          transform: translateY(25%);
        }
        .h3 {
          font-family: "Dancing Script";
          font-weight: bold;
          transform: skewY(-10deg);
        }
        & > p:nth-child(3) {
          line-height: 1.5rem;
          text-align: justify;
          overflow: hidden;
          width: 100%;
          display: -webkit-box;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
          @include pad {
            -webkit-line-clamp: 5;
          }
        }
      }
    }
    .box2 {
      display: grid;
      .grid1 {
        filter: brightness(0.7);
        grid-column: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      .grid2 {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      .grid3 {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      .grid4 {
        filter: brightness(0.7);
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      & > div[class^="grid"] {
        overflow: hidden;
        & > a {
          & > img {
            transition: 1s ease;
            &:hover {
              transform: scale(1.05);
            }
          }
        }
      }
    }
  }
}
.event02 {
  align-items: center;
  .box1 {
    width: 100%;
    height: 100%;
    @include md() {
      order: 2;
    }
    img {
      width: 100%;
    }
  }
  .box2 {
    align-items: center;
    text-align: center;
    padding: 100px;
    @include desktop() {
      padding: 50px;
    }
    @include pad() {
      height: 375px;
    }
    @include md() {
      padding: 20px;
    }
    & > div {
      @include pad {
        transform: translateY(25%);
      }
      & > p:nth-child(1) {
        font-family: "Dancing Script";
        font-weight: bold;
        transform: skewY(-10deg);
      }
      & > p:nth-child(2) {
        margin: 0 auto;
      }
      & > p:nth-child(3) {
        line-height: 1.5rem;
        text-align: justify;
        overflow: hidden;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        @include pad {
          -webkit-line-clamp: 5;
        }
      }
      @include md() {
        order: 1;
      }
      @include pad {
      }
    }
  }
}
.event03 {
  width: 100%;
  height: 700px;
  max-height: 100%;
  @include desktop {
    height: 500px;
  }
  @include md {
    height: 1000px;
  }
  @include mobile {
    height: 700px;
  }
  @include iphoneX {
    height: 640px;
  }
  .scroll {
    background-attachment: fixed;
    background-image: url("../../assets/images/index/e3.jpg");
    background-color: #929c9a;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 80% 50%;
    @include pad {
      background-attachment: unset;
      background-position: 80% 50%;
    }
    .info {
      order: 1;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      text-align: center;
      align-items: center;
      overflow: hidden;
      padding: 100px;
      @include desktop() {
        padding: 50px;
      }
      @include md() {
        height: 50%;
        padding: 20px;
      }
      & > p:nth-child(1) {
        font-family: "Dancing Script";
        font-weight: bold;
        transform: skewY(-10deg);
      }
      & > p:nth-child(3) {
        line-height: 2rem;
        text-align: justify;
        overflow: hidden;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        @include pad() {
          line-height: 1.2rem;
        }
      }
      & > p:nth-child(4) {
        font-family: "Dancing Script";
        font-weight: bold;
        font-size: 2rem;
        padding-top: 2rem;
        @include iphoneX {
          padding-top: 1rem;
        }
      }
    }
  }
}
.event04 {
  margin: 100px 0;

  & > p {
    font-family: impact;
    letter-spacing: 0.2rem;
    &::after {
      content: "";
      margin-top: 20px;
      display: block;
      width: 10%;
      height: 3px;
      background: #000;
      @include pad() {
        width: 20%;
      }
    }
  }
  .swiper {
    margin: 0 50px;
    cursor: pointer;
    @include mobile() {
      margin: 0 10px;
    }
    .box {
      height: 100%;
      width: 100%;
      background: $color-bg;
      .bgImg {
        background-repeat: no-repeat;
        height: 400px;
        background-size: cover;
        background-position: 50% 50%;
      }
      .info {
        position: absolute;
        bottom: 0;
        padding: 15px;
        width: 100%;
        color: #fff;
        background: rgba(0, 0, 0, 0.7);
        text-align: center;
        & > .h5 {
          margin: 10px 0;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        & > p:nth-child(2) {
          margin: 20px 0 10px 0;
          text-align: justify;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .opacityActive {
    opacity: 0.5;
  }
  .swiper-button-prev,
  .swiper-button-next {
    @include mobile() {
      background-size: 15px 25px;
    }
  }
}
</style>
