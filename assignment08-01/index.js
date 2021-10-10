const data = {
    korea: {
      capital: "서울특별시",
      area: "223,516km²",
      population: "51,667,688명",
      political_system:
        "Democratic Republic (People's sovereignty), Liberal Democracy",
      economic_system: "capitalist market economy",
      language: "한국어",
      president: "문재인",
      money: "대한민국 원(￦, won)",
    },
    japan: {
      capital: "도쿄",
      area: "377,975km²",
      population: "125,360,000명",
      political_system: "Constitutional Monarchy, Liberal Democracy",
      economic_system: "capitalist market economy",
      language: "일본어",
      president: "나루히토",
      money: "일본 엔(￥, 円)",
    },
    usa: {
      capital: "워싱턴 D.C.",
      area: "9,833,517km²",
      population: "332,915,074명",
      political_system: "liberal democracy, federal system, republican system",
      economic_system: "capitalist market economy",
      language: "영어",
      president: "조 바이든",
      money: "미국 달러(＄, Dollar)",
    },
    france: {
      capital: "파리",
      area: "663,336km²",
      population: "65,426,177명",
      political_system:
        "republican system, dual government system, bicameral system",
      economic_system: "capitalist market economy",
      language: "프랑스어",
      president: "에마뉘엘 마크롱",
      money: "유로(€)",
    },
    uk: {
      capital: "런던",
      area: "243,891km²",
      population: "68,207,114명",
      political_system:
        "Commonwealth kingdom, constitutional monarchy, parliamentary system",
      economic_system: "capitalist market economy",
      language: "영어",
      president: "엘리자베스 2세",
      money: "파운드 스털링(£)",
    },
    colombia: {
      capital: "보고타",
      area: "1,141,748km²",
      population: "51,265,841명",
      political_system: "presidential system, republic, unitary state",
      economic_system: "capitalist market economy",
      language: "스페인어",
      president: "이반 두케",
      money: "콜롬비아 페소($)",
    },
  };
  
  const selectItems = document.querySelectorAll(".select__item");
  const mainContents = document.querySelectorAll(".info-box__main__content");
  
  selectItems.forEach((item) => {
    const country = item.classList[1];
    item.addEventListener("mouseover", () => {
      let idx = 0;
      for (key in data[country]) {
        const title = mainContents[idx].querySelector(".main__content__title");
        const text = mainContents[idx].querySelector(".main__content__text");
        title.innerText = key;
        text.innerText = data[country][key];
        idx += 1;
      }
      item.querySelector(".select_item__button").classList.add("mouseover");
    });
    item.addEventListener("mouseleave", () => {
      item.querySelector(".select_item__button").classList.remove("mouseover");
    });
  });
  