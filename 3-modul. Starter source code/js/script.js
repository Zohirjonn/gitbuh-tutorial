window.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    loader = document.querySelector(".loader");
  // Loader
  setTimeout(() => {
    loader.style.opacity = "0 ";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
  // setTimeout(() => {
  //   loader.style.opacity = "0";
  //   setTimeout(() => {
  //     loader.style.opacity = "none";
  //   }, 500);
  // }, 2000);
  // Tabs
  function hideTabcontent() {
    tabsContent.forEach((Item) => {
      Item.classList.add("hide");
      Item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function showTabcontent(i) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, idx) => {
        if (target == item) {
          hideTabcontent();
          showTabcontent(idx);
        }
      });
    }
  });

  // Timer
  // const deadLine = "2022-12-31";
  // function getTimeRemaining(endTime) {
  //   const timer = Date.parse(endTime) - Date.parse(new Date()),
  //     days = Math.floor(timer / (1000 * 60 * 60 * 24)),
  //     hours = Math.floor((timer / (1000 * 60 * 60)) % 24),
  //     minutes = Math.floor((timer / (1000 * 60)) % 60),
  //     seconds = Math.floor((timer / 1000) % 60);
  //   return {
  //     timer,
  //     days,
  //     hours,
  //     minutes,
  //     seconds,
  //   };
  // }
  // function getZero(num) {
  //   if (num >= 0 && num < 10) {
  //     return `0${num}`;
  //   } else {
  //     return num;
  //   }
  // }

  // function setClock(selector, endtime) {
  //   const timer = document.querySelector(selector),
  //     days = timer.querySelector("#days"),
  //     hours = timer.querySelector("#hours"),
  //     minutes = timer.querySelector("#minutes"),
  //     seconds = timer.querySelector("#seconds"),
  //     timeInterval = setInterval(updateClock, 1000);
  //   updateClock();
  //   function updateClock() {
  //     const t = getTimeRemaining(endtime);
  //     days.innerHTML = getZero(t.days);
  //     hours.innerHTML = getZero(t.hours);
  //     minutes.innerHTML = getZero(t.minutes);
  //     seconds.innerHTML = getZero(t.seconds);
  //     if (t.timer <= 0) {
  //       clearInterval(timeInterval);
  //     }
  //   }
  // }
  // setClock(".timer", deadLine);
  const deadLine = "2022-12-31";
  function getremaining(endTime) {
    let days, hours, minutes, seconds;
    let timer = Date.parse(endTime) - Date.parse(new Date());
    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
      return {
        timer,
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      let days = Math.floor(timer / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((timer / (1000 * 60)) % 60);
      let seconds = Math.floor((timer / 1000) % 60);
      return {
        timer,
        days,
        hours,
        minutes,
        seconds,
      };
    }
  }
  function getzero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timerinterval = setInterval(updateClock, 1000);
    function updateClock() {
      const t = getremaining(endTime);
      days.innerHTML = getzero(t.days);
      hours.innerHTML = getzero(t.hours);
      minutes.innerHTML = getzero(t.minutes);
      seconds.innerHTML = getzero(t.seconds);
      if (t.timer <= 0) {
        clearInterval(timerinterval);
      }
    }
  }
  setClock(".timer", deadLine);

  // Modal
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  function openModal() {
    modal.classList.add("show");
    modal.style.display = "block";
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimeout);
  }
  modalTrigger.forEach((item) => {
    item.addEventListener("click", openModal);
  });
  // modalTrigger.addEventListener("click", openModal);

  function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
  modalCloseBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      closeModal();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
      console.log("hammasi ishladi");
    }
  });
  let modalTimeout = setTimeout(openModal, 3000);
  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 30
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    } else {
      console.log("bu mavjud emas");
    }
  }
  window.addEventListener("scroll", showModalByScroll);
  console.log(window.pageYOffset);
  console.log(document.documentElement.clientHeight);
  console.log(document.documentElement.scrollHeight);
  // showModalByScroll();
  function Car(name, color, mph) {
    this.name = name;
    this.color = color;
    this.mph = mph;
    this.isAirbag = true;
    this.speed = function () {
      console.log(
        `This car name ${this.name} is color ${this.color} is mph ${this.mph}`
      );
    };
  }
  const bmw = new Car("bmw", "red", 300);
  bmw.speed();
  console.log(bmw);
  Car.prototype.sayHello = function () {
    console.log(`This car name is ${this.name} sayHello`);
  };
  function logger() {
    console.log(this);
  }
  const car = {
    name: "BMW",
    color: "Yellow",
  };
  logger.call(car);
  logger();
  // strelkali funksiya hech qanday kontakstga ega emas u har doim o'zining tepasidagi contextga qaram bo'ladi
  class Nameee {
    constructor(name, color, speed) {
      this.name = name;
      this.color = color;
      this.speed = speed;
    }
    calcSpeed() {
      return this.speed * 100;
    }
  }
  const GM = new Nameee("Gentra", "Black", 200);
  const Toyota = new Nameee("Land Cruiser", "Black", 200);
  console.log(GM.calcSpeed());
  console.log(Toyota);
  class menuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 11280;
      this.changeToUzs();
    }
    changeToUzs() {
      this.price = this.price * this.transfer;
    }
    render() {
      const element = document.createElement("div");
      element.innerHTML = `
      <div class="menu__item">
       <img src=${this.src} alt=${this.alt} />
       <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">
          ${this.descr}
        </div>
       <div class="menu__item-divider"></div>
       <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span> UZS month</div>
      </div>
     </div>`;
      this.parent.append(element);
    }
  }
  menuCard(
    "img/tabs/1.png",
    "vegy",
    'Plan "Usual"',
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in",
    10,
    ".menu.container"
  ).render();
});
