class MobileNavbar{
    constructor(checkBtn,navList,navLinks) {
      this.checkBtn = document.querySelector(checkBtn);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
    }
    addClickEvent(){
      this.checkBtn.addEventListener("click", () => console.log("Hey"));
    }
    init(){
      if (this.checkBtn) {
        this.addClickEvent();
       }
       return this;
    }
  }
  const checkBtn = new MobileNavbar(
    ".chekbtn",
    ".nav-list",
    ".nav-list li",
  );
  checkBtn.init();

  
    